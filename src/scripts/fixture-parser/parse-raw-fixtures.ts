import {
  createInitialContext,
  detectSection,
  findColumnIndex,
  isLikelyHeaderRow,
  parseCaptainFromTeamLine,
  parseContactFields,
  parseCourtFromLine,
  parseDateFromLine,
  parseRoundFromLine,
  parseTimeFromLine,
  parseVenueLine,
  parseVersusTeams,
  splitDelimitedLine,
  type ParseContext,
  type RawSection,
} from './text-utils';

import {
  CaptainSchema,
  FixtureSchema,
  FixtureSourceSchema,
  ParsedFixturesOutputSchema,
  TeamSchema,
  VenueSchema,
  type Captain,
  type Fixture,
  type FixtureSource,
  type ParsedFixturesOutput,
  type Team,
  type Venue,
} from './schemas';

const GO_MAMMOTH_HINTS = ['go mammoth', 'gomammoth', 'hello@gomammoth'];
const PLAY_NETBALL_HINTS = [
  'play netball',
  'play-netball',
  'magic league',
  'spawtz',
];

interface MutableCollections {
  teams: Map<string, Team>;
  captains: Map<string, Captain>;
  venues: Map<string, Venue>;
  fixtures: Fixture[];
  warnings: string[];
}

function earliestHintIndex(text: string, hints: readonly string[]): number {
  const lower = text.toLowerCase();
  const indices = hints
    .map((hint) => lower.indexOf(hint))
    .filter((index) => index >= 0);

  return indices.length > 0 ? Math.min(...indices) : Number.POSITIVE_INFINITY;
}

function detectSource(rawText: string): FixtureSource {
  const goMammothIndex = earliestHintIndex(rawText, GO_MAMMOTH_HINTS);
  const playNetballIndex = earliestHintIndex(rawText, PLAY_NETBALL_HINTS);

  if (goMammothIndex < playNetballIndex) {
    return FixtureSourceSchema.parse('go-mammoth');
  }

  if (playNetballIndex < goMammothIndex) {
    return FixtureSourceSchema.parse('play-netball');
  }

  return FixtureSourceSchema.parse('unknown');
}

function extractLeagueMetadata(rawText: string): {
  league?: string;
  division?: string;
} {
  const lines = rawText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines.slice(0, 8)) {
    const divisionMatch = line.match(
      /(?:division|div\.?)\s*(\d+[a-z]?)/i,
    );
    if (divisionMatch) {
      const league = line.replace(/\s*-\s*division.*/i, '').trim();
      return {
        ...(league ? { league } : {}),
        division: `Division ${divisionMatch[1]}`,
      };
    }

    if (/fixtures?/i.test(line) && line.includes('-')) {
      return { league: line.replace(/^fixtures?\s*-\s*/i, '').trim() };
    }
  }

  const firstMeaningfulLine = lines[0];
  if (firstMeaningfulLine && firstMeaningfulLine.length <= 120) {
    return { league: firstMeaningfulLine };
  }

  return {};
}

function upsertTeam(
  collections: MutableCollections,
  teamName: string,
  details: Partial<Team> = {},
): void {
  const normalizedName = teamName.trim();
  if (!normalizedName) {
    return;
  }

  const existing = collections.teams.get(normalizedName.toLowerCase());
  const merged = TeamSchema.parse({
    name: normalizedName,
    captain: details.captain
      ? normalizeCaptainName(details.captain)
      : existing?.captain,
    division: details.division ?? existing?.division,
  });

  collections.teams.set(normalizedName.toLowerCase(), merged);

  if (merged.captain) {
    upsertCaptain(collections, merged.captain, normalizedName, {});
  }
}

function upsertCaptain(
  collections: MutableCollections,
  captainName: string,
  teamName: string,
  details: Partial<Captain>,
): void {
  const normalizedCaptain = captainName.trim();
  const normalizedTeam = teamName.trim();

  if (!normalizedCaptain || !normalizedTeam) {
    return;
  }

  const key = `${normalizedTeam.toLowerCase()}::${normalizedCaptain.toLowerCase()}`;
  const existing = collections.captains.get(key);

  collections.captains.set(
    key,
    CaptainSchema.parse({
      name: normalizeCaptainName(normalizedCaptain),
      team: normalizedTeam,
      email: details.email ?? existing?.email,
      phone: details.phone ?? existing?.phone,
    }),
  );
}

function upsertVenue(
  collections: MutableCollections,
  venueName: string,
  details: Partial<Venue> = {},
): void {
  const normalizedName = venueName.trim();
  if (!normalizedName) {
    return;
  }

  const existing = collections.venues.get(normalizedName.toLowerCase());
  collections.venues.set(
    normalizedName.toLowerCase(),
    VenueSchema.parse({
      name: normalizedName,
      address: mergeVenueAddress(details.address ?? existing?.address, details.court),
      court: details.court ?? existing?.court,
    }),
  );
}

function mergeVenueAddress(
  address: string | undefined,
  _court: string | undefined,
): string | undefined {
  if (!address) {
    return undefined;
  }

  return address.replace(/,\s*$/, '').trim() || undefined;
}

function parseFixtureTableRow(
  headers: readonly string[],
  cells: readonly string[],
  context: ParseContext,
  collections: MutableCollections,
): void {
  const roundIndex = findColumnIndex(headers, ['round', 'wk', 'week']);
  const dateIndex = findColumnIndex(headers, ['date']);
  const timeIndex = findColumnIndex(headers, ['time', 'kick', 'start']);
  const homeIndex = findColumnIndex(headers, ['home', 'team 1', 'team a']);
  const awayIndex = findColumnIndex(headers, ['away', 'team 2', 'team b', 'opponent']);
  const venueIndex = findColumnIndex(headers, ['venue', 'location']);
  const courtIndex = findColumnIndex(headers, ['court', 'pitch']);

  const roundValue = roundIndex !== undefined ? cells[roundIndex] : undefined;
  const parsedRound = roundValue ? parseRoundFromLine(roundValue) : undefined;
  const dateValue = dateIndex !== undefined ? cells[dateIndex] : undefined;
  const timeValue = timeIndex !== undefined ? cells[timeIndex] : undefined;
  const homeTeam = homeIndex !== undefined ? cells[homeIndex] : undefined;
  const awayTeam = awayIndex !== undefined ? cells[awayIndex] : undefined;
  const venueValue = venueIndex !== undefined ? cells[venueIndex] : undefined;
  const courtValue = courtIndex !== undefined ? cells[courtIndex] : undefined;

  if (!homeTeam || !awayTeam) {
    return;
  }

  const date =
    (dateValue ? parseDateFromLine(dateValue) : undefined) ??
    context.currentDate;
  const time =
    (timeValue ? parseTimeFromLine(timeValue) : undefined) ??
    parseTimeFromLine(cells.join(' '));

  if (!date || !time) {
    collections.warnings.push(
      `Skipped fixture row without a valid date/time: ${cells.join(' | ')}`,
    );
    return;
  }

  const fixture = FixtureSchema.parse({
    round: parsedRound ?? context.currentRound,
    week: context.currentWeek,
    date,
    time,
    homeTeam,
    awayTeam,
    venue: venueValue ?? context.currentVenue,
    court: courtValue ?? parseCourtFromLine(cells.join(' ')),
  });

  collections.fixtures.push(fixture);
  upsertTeam(collections, homeTeam);
  upsertTeam(collections, awayTeam);

  if (fixture.venue) {
    upsertVenue(collections, fixture.venue, { court: fixture.court });
  }
}

function parseTeamTableRow(
  headers: readonly string[],
  cells: readonly string[],
  collections: MutableCollections,
): void {
  const teamIndex = findColumnIndex(headers, ['team', 'name', 'squad']);
  const captainIndex = findColumnIndex(headers, ['captain', 'contact']);
  const divisionIndex = findColumnIndex(headers, ['division', 'div', 'grade']);
  const emailIndex = findColumnIndex(headers, ['email', 'e-mail']);
  const phoneIndex = findColumnIndex(headers, ['phone', 'mobile', 'tel']);

  const teamName =
    teamIndex !== undefined ? cells[teamIndex] : cells[0] ?? undefined;
  if (!teamName) {
    return;
  }

  const captain =
    captainIndex !== undefined ? cells[captainIndex] : undefined;
  const division =
    divisionIndex !== undefined ? cells[divisionIndex] : undefined;
  const email = emailIndex !== undefined ? cells[emailIndex] : undefined;
  const phone = phoneIndex !== undefined ? cells[phoneIndex] : undefined;

  upsertTeam(collections, teamName, { captain, division });

  if (captain) {
    upsertCaptain(collections, captain, teamName, { email, phone });
  }
}

function parseVenueTableRow(
  headers: readonly string[],
  cells: readonly string[],
  collections: MutableCollections,
): void {
  const venueIndex = findColumnIndex(headers, ['venue', 'location', 'name']);
  const addressIndex = findColumnIndex(headers, ['address', 'postcode']);
  const courtIndex = findColumnIndex(headers, ['court', 'pitch']);

  const venueName =
    venueIndex !== undefined ? cells[venueIndex] : cells[0] ?? undefined;
  if (!venueName) {
    return;
  }

  upsertVenue(collections, venueName, {
    address: addressIndex !== undefined ? cells[addressIndex] : cells[1],
    court: courtIndex !== undefined ? cells[courtIndex] : undefined,
  });
}

function parseFixtureLine(
  line: string,
  context: ParseContext,
  collections: MutableCollections,
): void {
  if (parsePipeDelimitedFixtureLine(line, context, collections)) {
    return;
  }

  const round = parseRoundFromLine(line);
  if (round) {
    context.currentRound = round;
    context.currentWeek = round;
  }

  const date = parseDateFromLine(line);
  if (date) {
    context.currentDate = date;
  }

  const venueMatch = line.match(/\b(?:at|@)\s+(.+?)(?:\s*[-|]\s*|$)/i);
  if (venueMatch?.[1]) {
    context.currentVenue = venueMatch[1].trim();
    upsertVenue(collections, context.currentVenue);
  }

  const cleanedLine = stripFixturePrefix(line);
  const versus = parseVersusTeams(cleanedLine);
  if (!versus) {
    return;
  }

  const time = parseTimeFromLine(line) ?? '19:00';
  const fixtureDate = context.currentDate;

  if (!fixtureDate) {
    collections.warnings.push(
      `Skipped fixture without a preceding date: ${line}`,
    );
    return;
  }

  const court =
    parseCourtFromLine(line) ??
    (versus.trailing?.match(COURT_LIKE_PATTERN)?.[0] ?? undefined);

  const venue =
    context.currentVenue ??
    (versus.trailing && !court ? versus.trailing : undefined);

  const fixture = FixtureSchema.parse({
    round: context.currentRound,
    week: context.currentWeek,
    date: fixtureDate,
    time,
    homeTeam: versus.homeTeam,
    awayTeam: versus.awayTeam,
    venue,
    court,
  });

  collections.fixtures.push(fixture);
  upsertTeam(collections, versus.homeTeam);
  upsertTeam(collections, versus.awayTeam);

  if (venue) {
    upsertVenue(collections, venue, { court });
  }
}

const COURT_LIKE_PATTERN = /court\s*\d+[a-z]?/i;

function normalizeCaptainName(name: string): string {
  return name.replace(/^(?:captain|capt\.?)\s*:\s*/i, '').trim();
}

function updateContextFromLine(line: string, context: ParseContext): void {
  const round = parseRoundFromLine(line);
  if (round) {
    context.currentRound = round;
    context.currentWeek = round;
  }

  const date = parseDateFromLine(line);
  if (date) {
    context.currentDate = date;
  }
}

function looksLikeFixtureLine(line: string): boolean {
  if (parseVersusTeams(stripFixturePrefix(line))) {
    return true;
  }

  if (!line.includes('|')) {
    return false;
  }

  return Boolean(parseTimeFromLine(line) || parseDateFromLine(line));
}

const ROUND_ONLY_PATTERN = /^(?:round|week|wk)\s*\d+\s*(?:[-–—].*)?$/i;

function stripFixturePrefix(line: string): string {
  let cleaned = line.trim();

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const next = cleaned
      .replace(/^court\s*\d+[a-z]?\s*[-–—|]\s*/i, '')
      .replace(/^\d{1,2}[:.]\d{2}\s*(?:am|pm)?\s*[-–—|]\s*/i, '')
      .trim();

    if (next === cleaned) {
      break;
    }

    cleaned = next;
  }

  return cleaned;
}

function isMetadataLine(line: string): boolean {
  return (
    ROUND_ONLY_PATTERN.test(line) ||
    /^venue\s*:/i.test(line) ||
    /^(?:go mammoth|play netball|magic league)/i.test(line)
  );
}

function parsePipeDelimitedFixtureLine(
  line: string,
  context: ParseContext,
  collections: MutableCollections,
): boolean {
  if (!line.includes('|')) {
    return false;
  }

  const parts = line.split('|').map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) {
    return false;
  }

  let date = context.currentDate;
  let time: string | undefined;
  let teamsSegment = '';
  let court: string | undefined;
  let venue = context.currentVenue;

  for (const part of parts) {
    const partDate = parseDateFromLine(part);
    const partTime = parseTimeFromLine(part);
    const partCourt = parseCourtFromLine(part);
    const partVersus = parseVersusTeams(stripFixturePrefix(part));

    if (partDate) {
      date = partDate;
      continue;
    }

    if (partTime) {
      time = partTime;
      continue;
    }

    if (partCourt) {
      court = partCourt;
      continue;
    }

    if (partVersus) {
      teamsSegment = part;
      continue;
    }

    if (!partDate && !partTime && !partCourt && !partVersus && !venue) {
      venue = part;
    }
  }

  const versus = parseVersusTeams(
    stripFixturePrefix(teamsSegment || (parts[parts.length - 1] ?? '')),
  );
  if (!versus || !date) {
    return false;
  }

  const fixture = FixtureSchema.parse({
    round: context.currentRound,
    week: context.currentWeek,
    date,
    time: time ?? parseTimeFromLine(line) ?? '19:00',
    homeTeam: versus.homeTeam,
    awayTeam: versus.awayTeam,
    venue,
    court,
  });

  collections.fixtures.push(fixture);
  upsertTeam(collections, versus.homeTeam);
  upsertTeam(collections, versus.awayTeam);

  if (venue) {
    upsertVenue(collections, venue, { court });
  }

  return true;
}

function parseTeamLine(line: string, collections: MutableCollections): void {
  if (isMetadataLine(line)) {
    return;
  }

  const cells = splitDelimitedLine(line);
  if (cells.length >= 2 && !parseVersusTeams(line)) {
    const contacts = parseContactFields(line);
    const [teamName, captainName, emailCell] = cells;

    if (teamName && captainName && !/captain/i.test(teamName)) {
      const normalizedCaptain = normalizeCaptainName(captainName);
      upsertTeam(collections, teamName, { captain: normalizedCaptain });
      upsertCaptain(collections, normalizedCaptain, teamName, {
        email: emailCell ?? contacts.email,
        phone: contacts.phone,
      });
      return;
    }
  }

  const { teamName, captain } = parseCaptainFromTeamLine(line);
  if (!teamName || isMetadataLine(teamName)) {
    return;
  }

  const contacts = parseContactFields(line);
  upsertTeam(collections, teamName, { captain });
  if (captain) {
    upsertCaptain(collections, captain, teamName, contacts);
  }
}

function parseCaptainLine(line: string, collections: MutableCollections): void {
  const cells = splitDelimitedLine(line);
  if (cells.length >= 2) {
    const [captainOrTeam, teamOrCaptain, maybeEmail] = cells;
    const contacts = parseContactFields(line);

    if (/captain/i.test(cells.join(' '))) {
      const captainName = captainOrTeam?.replace(/captain\s*:\s*/i, '').trim();
      const teamName = teamOrCaptain?.trim();
      if (captainName && teamName) {
        upsertCaptain(collections, captainName, teamName, {
          email: maybeEmail ?? contacts.email,
          phone: contacts.phone,
        });
        upsertTeam(collections, teamName, { captain: captainName });
      }
      return;
    }

    if (captainOrTeam && teamOrCaptain) {
      upsertCaptain(collections, captainOrTeam, teamOrCaptain, {
        email: maybeEmail ?? contacts.email,
        phone: contacts.phone,
      });
      upsertTeam(collections, teamOrCaptain, { captain: captainOrTeam });
    }
    return;
  }

  const match = line.match(/^(.*?)\s*[-|:]\s*(.+)$/);
  if (match?.[1] && match[2]) {
    upsertCaptain(collections, match[2].trim(), match[1].trim(), parseContactFields(line));
    upsertTeam(collections, match[1].trim(), { captain: match[2].trim() });
  }
}

function parseVenueOnlyLine(line: string, collections: MutableCollections): void {
  const parsed = parseVenueLine(line);
  if (parsed) {
    upsertVenue(collections, parsed.name, {
      address: parsed.address,
      court: parsed.court,
    });
  }
}

function parseStructuredLines(rawText: string): ParsedFixturesOutput {
  const collections: MutableCollections = {
    teams: new Map(),
    captains: new Map(),
    venues: new Map(),
    fixtures: [],
    warnings: [],
  };

  const context = createInitialContext();
  const lines = rawText.split(/\r?\n/);
  let tableHeaders: string[] | undefined;
  let tableSection: RawSection = 'fixtures';

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      tableHeaders = undefined;
      continue;
    }

    const section = detectSection(line);
    if (section) {
      context.currentSection = section;
      tableSection = section;
      tableHeaders = undefined;
      continue;
    }

    const delimited = splitDelimitedLine(line);
    if (delimited.length >= 3 && isLikelyHeaderRow(delimited)) {
      tableHeaders = delimited;
      tableSection = context.currentSection;
      continue;
    }

    if (tableHeaders && delimited.length >= 2) {
      if (tableSection === 'teams') {
        parseTeamTableRow(tableHeaders, delimited, collections);
      } else if (tableSection === 'venues') {
        parseVenueTableRow(tableHeaders, delimited, collections);
      } else {
        parseFixtureTableRow(tableHeaders, delimited, context, collections);
      }
      continue;
    }

    if (/^venue\s*:/i.test(line)) {
      parseVenueOnlyLine(line, collections);
      continue;
    }

    updateContextFromLine(line, context);

    if (looksLikeFixtureLine(line)) {
      parseFixtureLine(line, context, collections);
      continue;
    }

    if (context.currentSection === 'teams') {
      parseTeamLine(line, collections);
      continue;
    }

    if (context.currentSection === 'captains') {
      parseCaptainLine(line, collections);
      continue;
    }

    if (context.currentSection === 'venues') {
      parseVenueOnlyLine(line, collections);
      continue;
    }

    if (isMetadataLine(line)) {
      continue;
    }

    if (/captain/i.test(line)) {
      parseTeamLine(line, collections);
      continue;
    }

    if (parseDateFromLine(line)) {
      const parsedDate = parseDateFromLine(line);
      if (parsedDate) {
        context.currentDate = parsedDate;
      }
      const round = parseRoundFromLine(line);
      if (round) {
        context.currentRound = round;
        context.currentWeek = round;
      }
      continue;
    }

    if (delimited.length >= 2 && context.currentSection === 'general') {
      const [first, second, third] = delimited;
      if (first && second && !parseVersusTeams(line)) {
        if (/^\d+$/.test(first)) {
          parseFixtureTableRow(
            ['Round', 'Date', 'Time', 'Home', 'Away', 'Venue', 'Court'],
            delimited,
            context,
            collections,
          );
          continue;
        }

        if (third) {
          parseTeamTableRow(
            ['Team', 'Captain', 'Email'],
            delimited,
            collections,
          );
          continue;
        }

        parseCaptainLine(`${first} - ${second}`, collections);
      }
    }
  }

  const source = detectSource(rawText);
  const metadata = extractLeagueMetadata(rawText);

  return ParsedFixturesOutputSchema.parse({
    source,
    league: metadata.league,
    division: metadata.division,
    teams: [...collections.teams.values()],
    captains: [...collections.captains.values()],
    venues: [...collections.venues.values()],
    fixtures: collections.fixtures,
    warnings: collections.warnings,
  });
}

export function parseRawFixtures(rawText: string): ParsedFixturesOutput {
  return parseStructuredLines(rawText);
}

export function toJsonl(output: ParsedFixturesOutput): string {
  const records = [
    {
      type: 'metadata',
      source: output.source,
      league: output.league,
      division: output.division,
      warnings: output.warnings,
    },
    ...output.teams.map((team) => ({ type: 'team', ...team })),
    ...output.captains.map((captain) => ({ type: 'captain', ...captain })),
    ...output.venues.map((venue) => ({ type: 'venue', ...venue })),
    ...output.fixtures.map((fixture) => ({ type: 'fixture', ...fixture })),
  ];

  return records.map((record) => JSON.stringify(record)).join('\n');
}
