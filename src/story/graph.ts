import type { StoryGraph } from './types';
import { mvpNodes } from './nodes/mvp';
import { validateGraph } from './validate';

export const START_ID = 'start';

export function buildGraph(nodes: typeof mvpNodes): StoryGraph {
  const g: StoryGraph = {};
  for (const n of nodes) {
    g[n.id] = n;
  }
  return g;
}

export const storyGraph = buildGraph(mvpNodes);

export const graphValidation = validateGraph(storyGraph, START_ID);
