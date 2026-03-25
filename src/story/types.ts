export type WorldState = {
  detectability: number;
  suspicion: number;
  tech: number;
};

export const defaultWorldState = (): WorldState => ({
  detectability: 0.2,
  suspicion: 0.3,
  tech: 0.25,
});

export type Choice = {
  label: string;
  nextId: string;
  /** Optional plain-language preview when outcome hints are enabled (overrides nothing; extras still show). */
  hint?: string;
  effects?: Partial<WorldState>;
};

export type TimelineSegment = {
  title: string;
  summary: string;
  /** Sort key for timeline ordering when years branch nonlinearly */
  t?: number;
  /** Approximate calendar year (CE) for this beat, when it helps the player */
  yearApprox?: number;
  /** Plain-language era when a number is awkward (e.g. huge jumps) */
  yearLabel?: string;
};

export type StoryNode = {
  id: string;
  title: string;
  body: string;
  whyItMatters?: string;
  choices: Choice[];
  timelineSegment: TimelineSegment;
};

export type StoryGraph = Record<string, StoryNode>;

export type TimelineEntry = {
  id: string;
  title: string;
  summary: string;
  t?: number;
  yearApprox?: number;
  yearLabel?: string;
};
