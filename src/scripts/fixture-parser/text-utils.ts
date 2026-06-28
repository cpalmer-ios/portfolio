const MONTHS: Readonly<Record<string, number>> = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
};

const DATE_NUMERIC_PATTERN =
  /\b(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})\b/;

const DATE_TEXT_PATTERN =
  /\b(?:mon(?:day)?|tue(?:s(?:day)?)?|wed(?:nesday)?|thu(?:rs(?:day)?)?|fri(?:day)?|sat(?:urday)?|sun(?:day)?)?\s*(\d{1,2})(?:st|nd|rd|th)?\s+(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\s+(\d{4})\b/i;

const TIME_PATTERN =
  /\b(\d{1,2})[:.](\d{2})\s*(am|pm)?\b|\b(\d{1,2})\s*(am|pm)\b/i;

const VERSUS_PATTERN =
  /\b(.+?)\s+(?:vs\.?|v\.?)\s+(.+?)(?:\s*(?:[-|@]|at)\s*(.+))?$/i;

const CAPTAIN_INLINE_PATTERN =
  /^(.*?)(?:\s*[-|(]\s*)?(?:captain|capt\.?)\s*:\s*(.+?)(?:\)|$)/i;

const CAPTAIN_SUFFIX_PATTERN =
  /^(.*?)\s*\(\s*(?:captain|capt\.?)\s*:\s*(.+?)\s*\)\s*$/i;

const ROUND_PATTERN = /\b(?:round|week|wk)\s*(\d+)\b/i;

const COURT_PATTERN = /\bcourt\s*(\d+[a-z]?)\b/i;

const EMAIL_PATTERN = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

const PHONE_PATTERN = /\b(?:\+?\d[\d\s()-]{7,}\d)\b/;

const SECTION_HEADERS = [
  { pattern: /^={2,}\s*teams?\s*={2,}$/i, section: 'teams' as const },
  { pattern: /^={2,}\s*captains?\s*={2,}$/i, section: 'captains' as const },
  { pattern: /^={2,}\s*venues?\s*={2,}$/i, section: 'venues' as const },
  { pattern: /^={2,}\s*fixtures?\s*={2,}$/i, section: 'fixtures' as const },
  { pattern: /^teams?\s*$/i, section: 'teams' as const },
  { pattern: /^captains?\s*$/i, section: 'captains' as const },
  { pattern: /^venues?\s*$/i, section: 'venues' as const },
  { pattern: /^fixtures?\s*$/i, section: 'fixtures' as const },
];

export type RawSection = 'teams' | 'captains' | 'venues' | 'fixtures' | 'general';

export interface ParseContext {
  currentRound?: number;
  currentWeek?: number;
  currentDate?: string;
  currentVenue?: string;
  currentSection: RawSection;
}

export function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function padTwo(value: number): string {
  return value.toString().padStart(2, '0');
}

export function normalizeYear(year: number): number {
  if (year >= 100) {
    return year;
  }

  return year >= 70 ? 1900 + year : 2000 + year;
}

export function toIsoDate(day: number, month: number, year: number): string {
  const normalizedYear = normalizeYear(year);
  return `${normalizedYear}-${padTwo(month)}-${padTwo(day)}`;
}

export function parseDateFromLine(line: string): string | undefined {
  const textMatch = line.match(DATE_TEXT_PATTERN);
  if (textMatch) {
    const day = Number.parseInt(textMatch[1] ?? '', 10);
    const monthKey = (textMatch[2] ?? '').toLowerCase();
    const year = Number.parseInt(textMatch[3] ?? '', 10);
    const month = MONTHS[monthKey];

    if (month && day >= 1 && day <= 31) {
      return toIsoDate(day, month, year);
    }
  }

  const numericMatch = line.match(DATE_NUMERIC_PATTERN);
  if (numericMatch) {
    const first = Number.parseInt(numericMatch[1] ?? '', 10);
    const second = Number.parseInt(numericMatch[2] ?? '', 10);
    const year = Number.parseInt(numericMatch[3] ?? '', 10);

    if (first > 12) {
      return toIsoDate(first, second, year);
    }

    if (second > 12) {
      return toIsoDate(second, first, year);
    }

    return toIsoDate(first, second, year);
  }

  return undefined;
}

export function parseTimeFromLine(line: string): string | undefined {
  const match = line.match(TIME_PATTERN);
  if (!match) {
    return undefined;
  }

  if (match[4] && match[5]) {
    let hours = Number.parseInt(match[4], 10);
    const suffix = match[5].toLowerCase();

    if (suffix === 'pm' && hours < 12) {
      hours += 12;
    }

    if (suffix === 'am' && hours === 12) {
      hours = 0;
    }

    return `${padTwo(hours)}:00`;
  }

  const hours = Number.parseInt(match[1] ?? '', 10);
  const minutes = Number.parseInt(match[2] ?? '', 10);
  const suffix = match[3]?.toLowerCase();

  let normalizedHours = hours;
  if (suffix === 'pm' && hours < 12) {
    normalizedHours += 12;
  }

  if (suffix === 'am' && hours === 12) {
    normalizedHours = 0;
  }

  return `${padTwo(normalizedHours)}:${padTwo(minutes)}`;
}

export function splitDelimitedLine(line: string): string[] {
  if (line.includes('\t')) {
    return line.split('\t').map((part) => normalizeWhitespace(part));
  }

  if (line.includes('|')) {
    return line.split('|').map((part) => normalizeWhitespace(part));
  }

  if (/\s{2,}/.test(line)) {
    return line.split(/\s{2,}/).map((part) => normalizeWhitespace(part));
  }

  return [normalizeWhitespace(line)];
}

export function detectSection(line: string): RawSection | undefined {
  for (const header of SECTION_HEADERS) {
    if (header.pattern.test(line)) {
      return header.section;
    }
  }

  return undefined;
}

export function parseRoundFromLine(line: string): number | undefined {
  const match = line.match(ROUND_PATTERN);
  if (!match?.[1]) {
    return undefined;
  }

  return Number.parseInt(match[1], 10);
}

export function parseCourtFromLine(line: string): string | undefined {
  const match = line.match(COURT_PATTERN);
  if (!match?.[1]) {
    return undefined;
  }

  return `Court ${match[1]}`;
}

export function parseVersusTeams(line: string): {
  homeTeam: string;
  awayTeam: string;
  trailing?: string;
} | undefined {
  const match = line.match(VERSUS_PATTERN);
  if (!match?.[1] || !match[2]) {
    return undefined;
  }

  return {
    homeTeam: normalizeWhitespace(match[1]),
    awayTeam: normalizeWhitespace(match[2]),
    ...(match[3] ? { trailing: normalizeWhitespace(match[3]) } : {}),
  };
}

export function parseCaptainFromTeamLine(line: string): {
  teamName: string;
  captain?: string;
} {
  const suffixMatch = line.match(CAPTAIN_SUFFIX_PATTERN);
  if (suffixMatch?.[1] && suffixMatch[2]) {
    return {
      teamName: normalizeWhitespace(suffixMatch[1]),
      captain: normalizeWhitespace(suffixMatch[2]),
    };
  }

  const inlineMatch = line.match(CAPTAIN_INLINE_PATTERN);
  if (inlineMatch?.[1] && inlineMatch[2]) {
    return {
      teamName: normalizeWhitespace(inlineMatch[1]),
      captain: normalizeWhitespace(inlineMatch[2]),
    };
  }

  return { teamName: normalizeWhitespace(line) };
}

export function parseVenueLine(line: string): {
  name: string;
  address?: string;
  court?: string;
} | undefined {
  const withoutPrefix = line.replace(/^venue\s*:\s*/i, '').trim();
  if (!withoutPrefix) {
    return undefined;
  }

  const court = parseCourtFromLine(withoutPrefix);
  const parts = splitDelimitedLine(withoutPrefix.replace(COURT_PATTERN, '').trim());

  if (parts.length >= 2) {
    return {
      name: parts[0] ?? withoutPrefix,
      address: parts.slice(1).join(', '),
      ...(court ? { court } : {}),
    };
  }

  const commaParts = withoutPrefix.split(',').map((part) => part.trim());
  if (commaParts.length >= 2) {
    return {
      name: commaParts[0] ?? withoutPrefix,
      address: commaParts.slice(1).join(', '),
      ...(court ? { court } : {}),
    };
  }

  return {
    name: normalizeWhitespace(withoutPrefix),
    ...(court ? { court } : {}),
  };
}

export function parseContactFields(line: string): {
  email?: string;
  phone?: string;
} {
  const emailMatch = line.match(EMAIL_PATTERN);
  const phoneMatch = line.match(PHONE_PATTERN);

  return {
    ...(emailMatch?.[0] ? { email: emailMatch[0] } : {}),
    ...(phoneMatch?.[0] ? { phone: phoneMatch[0] } : {}),
  };
}

export function isLikelyHeaderRow(cells: readonly string[]): boolean {
  const joined = cells.join(' ').toLowerCase();
  return (
    joined.includes('home') ||
    joined.includes('away') ||
    joined.includes('team') ||
    joined.includes('captain') ||
    joined.includes('venue') ||
    joined.includes('round') ||
    joined.includes('date') ||
    joined.includes('time')
  );
}

export function findColumnIndex(
  headers: readonly string[],
  candidates: readonly string[],
): number | undefined {
  const normalizedHeaders = headers.map((header) => header.toLowerCase());

  for (const candidate of candidates) {
    const index = normalizedHeaders.findIndex((header) =>
      header.includes(candidate),
    );
    if (index >= 0) {
      return index;
    }
  }

  return undefined;
}

export function createInitialContext(): ParseContext {
  return {
    currentSection: 'general',
  };
}
