import type { StoryGraph, StoryNode, WorldState } from './types';

const MAX_DEPTH = 64;

export type GraphIssue =
  | { type: 'missing_next'; from: string; choiceLabel: string; nextId: string }
  | { type: 'orphan'; id: string }
  | { type: 'dead_end_not_terminal'; id: string }
  | { type: 'cycle_suspected'; from: string };

export function validateGraph(
  graph: StoryGraph,
  startId: string
): { ok: boolean; issues: GraphIssue[] } {
  const issues: GraphIssue[] = [];
  const ids = new Set(Object.keys(graph));

  if (!ids.has(startId)) {
    issues.push({ type: 'orphan', id: startId });
  }

  for (const [from, node] of Object.entries(graph)) {
    for (const c of node.choices) {
      if (!ids.has(c.nextId)) {
        issues.push({
          type: 'missing_next',
          from,
          choiceLabel: c.label,
          nextId: c.nextId,
        });
      }
    }
  }

  const reachable = new Set<string>();
  const stack: { id: string; depth: number }[] = [{ id: startId, depth: 0 }];
  while (stack.length) {
    const { id, depth } = stack.pop()!;
    if (depth > MAX_DEPTH) {
      issues.push({ type: 'cycle_suspected', from: id });
      continue;
    }
    if (reachable.has(id)) continue;
    reachable.add(id);
    const node = graph[id];
    if (!node) continue;
    for (const c of node.choices) {
      stack.push({ id: c.nextId, depth: depth + 1 });
    }
  }

  for (const id of ids) {
    if (!reachable.has(id)) {
      issues.push({ type: 'orphan', id });
    }
  }

  for (const id of reachable) {
    const node = graph[id];
    if (!node) continue;
    if (node.choices.length === 0) continue;
  }

  return { ok: issues.length === 0, issues };
}

export function isTerminalNode(node: StoryNode): boolean {
  return node.choices.length === 0;
}

export function applyEffects(
  state: WorldState,
  effects?: Partial<WorldState>
): WorldState {
  if (!effects) return { ...state };
  return {
    detectability: clamp01(
      state.detectability + (effects.detectability ?? 0)
    ),
    suspicion: clamp01(state.suspicion + (effects.suspicion ?? 0)),
    tech: clamp01(state.tech + (effects.tech ?? 0)),
  };
}

function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}
