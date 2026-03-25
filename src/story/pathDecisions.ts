import type { StoryGraph } from './types';

/** Resolves choice indices for each transition; uses the first matching choice when multiple share `nextId`. */
export function inferDecisionsFromTimeline(
  graph: StoryGraph,
  timelineIds: string[]
): number[] {
  const out: number[] = [];
  for (let i = 0; i < timelineIds.length - 1; i++) {
    const from = timelineIds[i]!;
    const to = timelineIds[i + 1]!;
    const choices = graph[from]?.choices ?? [];
    const idx = choices.findIndex((c) => c.nextId === to);
    out.push(idx >= 0 ? idx : 0);
  }
  return out;
}

export function normalizeRunDecisions(
  graph: StoryGraph,
  run: { timelineIds: string[]; decisions: number[] }
): number[] {
  const need = run.timelineIds.length - 1;
  if (need <= 0) {
    return run.decisions.length === 0 ? run.decisions : [];
  }
  if (run.decisions.length === need) return run.decisions;
  return inferDecisionsFromTimeline(graph, run.timelineIds);
}

export type PathStep = {
  fromId: string;
  choiceLabel: string;
  toId: string;
};

export function buildPathSteps(
  graph: StoryGraph,
  timelineIds: string[],
  decisions: number[]
): PathStep[] {
  const steps: PathStep[] = [];
  for (let i = 0; i < timelineIds.length - 1; i++) {
    const fromId = timelineIds[i]!;
    const toId = timelineIds[i + 1]!;
    const node = graph[fromId];
    const idx = decisions[i] ?? 0;
    const label = node?.choices[idx]?.label ?? '(choice)';
    steps.push({ fromId, choiceLabel: label, toId });
  }
  return steps;
}
