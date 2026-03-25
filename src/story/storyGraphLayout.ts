import type { StoryGraph } from './types';
import { isTerminalNode } from './validate';

export type StoryMapNode = {
  id: string;
  x: number;
  y: number;
  title: string;
  terminal: boolean;
};

export type StoryMapEdge = {
  from: string;
  to: string;
  label: string;
  choiceIndex: number;
  altIndex: number;
  altCount: number;
};

export function buildStoryMapLayout(
  graph: StoryGraph,
  startId: string
): {
  nodes: StoryMapNode[];
  edges: StoryMapEdge[];
  width: number;
  height: number;
} {
  const reachable = new Set<string>();
  const stack = [startId];
  while (stack.length) {
    const id = stack.pop()!;
    if (reachable.has(id)) continue;
    reachable.add(id);
    const n = graph[id];
    if (!n) continue;
    for (const c of n.choices) stack.push(c.nextId);
  }

  const ranks = new Map<string, number>();
  ranks.set(startId, 0);
  let changed = true;
  while (changed) {
    changed = false;
    for (const id of reachable) {
      const r = ranks.get(id);
      if (r === undefined) continue;
      const node = graph[id];
      if (!node) continue;
      for (const c of node.choices) {
        if (!reachable.has(c.nextId)) continue;
        const nr = r + 1;
        const prev = ranks.get(c.nextId);
        if (prev === undefined || nr > prev) {
          ranks.set(c.nextId, nr);
          changed = true;
        }
      }
    }
  }

  const maxRank = Math.max(0, ...[...ranks.values()]);

  const layers: string[][] = [];
  for (let rk = 0; rk <= maxRank; rk++) {
    const ids = [...reachable]
      .filter((id) => ranks.get(id) === rk)
      .sort((a, b) => a.localeCompare(b));
    layers.push(ids);
  }

  const maxLayerSize = Math.max(1, ...layers.map((l) => l.length));
  const layerGap = 150;
  const nodeGap = 54;
  const pad = 40;

  const positions = new Map<string, { x: number; y: number }>();

  for (let rk = 0; rk <= maxRank; rk++) {
    const ids = layers[rk]!;
    const x = pad + rk * layerGap;
    const offset = ((maxLayerSize - ids.length) * nodeGap) / 2;
    ids.forEach((id, i) => {
      positions.set(id, { x, y: pad + offset + i * nodeGap });
    });
  }

  type RawEdge = { from: string; to: string; label: string; choiceIndex: number };
  const rawEdges: RawEdge[] = [];
  for (const id of reachable) {
    const node = graph[id];
    if (!node) continue;
    node.choices.forEach((c, choiceIndex) => {
      if (!reachable.has(c.nextId)) return;
      rawEdges.push({ from: id, to: c.nextId, label: c.label, choiceIndex });
    });
  }

  const pairKey = (from: string, to: string) => `${from}|${to}`;
  const groupSize = new Map<string, number>();
  for (const e of rawEdges) {
    const k = pairKey(e.from, e.to);
    groupSize.set(k, (groupSize.get(k) ?? 0) + 1);
  }
  const groupSeen = new Map<string, number>();
  const edges: StoryMapEdge[] = rawEdges.map((e) => {
    const k = pairKey(e.from, e.to);
    const altCount = groupSize.get(k) ?? 1;
    const seen = groupSeen.get(k) ?? 0;
    groupSeen.set(k, seen + 1);
    return { ...e, altIndex: seen, altCount };
  });

  const nodes: StoryMapNode[] = [...reachable]
    .sort((a, b) => {
      const ra = ranks.get(a) ?? 0;
      const rb = ranks.get(b) ?? 0;
      if (ra !== rb) return ra - rb;
      return a.localeCompare(b);
    })
    .map((id) => {
      const p = positions.get(id)!;
      const n = graph[id]!;
      return {
        id,
        x: p.x,
        y: p.y,
        title: n.timelineSegment.title,
        terminal: isTerminalNode(n),
      };
    });

  const width = pad * 2 + maxRank * layerGap + 56;
  const height = pad * 2 + maxLayerSize * nodeGap;

  return { nodes, edges, width, height };
}
