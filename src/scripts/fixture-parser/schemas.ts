import { z } from 'zod';

export const FixtureSourceSchema = z.enum([
  'go-mammoth',
  'play-netball',
  'unknown',
]);

export type FixtureSource = z.infer<typeof FixtureSourceSchema>;

export const CaptainSchema = z.object({
  name: z.string().min(1),
  team: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().min(1).optional(),
});

export type Captain = z.infer<typeof CaptainSchema>;

export const TeamSchema = z.object({
  name: z.string().min(1),
  captain: z.string().min(1).optional(),
  division: z.string().min(1).optional(),
});

export type Team = z.infer<typeof TeamSchema>;

export const VenueSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1).optional(),
  court: z.string().min(1).optional(),
});

export type Venue = z.infer<typeof VenueSchema>;

export const FixtureSchema = z.object({
  round: z.number().int().positive().optional(),
  week: z.number().int().positive().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  homeTeam: z.string().min(1),
  awayTeam: z.string().min(1),
  venue: z.string().min(1).optional(),
  court: z.string().min(1).optional(),
});

export type Fixture = z.infer<typeof FixtureSchema>;

export const ParsedFixturesOutputSchema = z.object({
  source: FixtureSourceSchema,
  league: z.string().min(1).optional(),
  division: z.string().min(1).optional(),
  teams: z.array(TeamSchema),
  captains: z.array(CaptainSchema),
  venues: z.array(VenueSchema),
  fixtures: z.array(FixtureSchema),
  warnings: z.array(z.string()),
});

export type ParsedFixturesOutput = z.infer<typeof ParsedFixturesOutputSchema>;
