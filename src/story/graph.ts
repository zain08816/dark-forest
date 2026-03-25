import type { StoryGraph, StoryNode } from './types';
import { allStoryNodes } from './nodes';
import { validateGraph } from './validate';

export const START_ID = 'start';

export function buildGraph(nodes: StoryNode[]): StoryGraph {
  const g: StoryGraph = {};
  for (const n of nodes) {
    g[n.id] = n;
  }
  return g;
}

export const storyGraph = buildGraph(allStoryNodes);

export const graphValidation = validateGraph(storyGraph, START_ID);
