import { describe, expect, it } from 'vitest';
import { START_ID, storyGraph } from './graph';
import { buildStoryMapLayout } from './storyGraphLayout';

describe('storyGraphLayout', () => {
  it('places every reachable node and edge', () => {
    const { nodes, edges, width, height } = buildStoryMapLayout(
      storyGraph,
      START_ID
    );
    expect(nodes.length).toBeGreaterThan(5);
    expect(edges.length).toBeGreaterThan(5);
    expect(width).toBeGreaterThan(100);
    expect(height).toBeGreaterThan(100);
    const endCount = nodes.filter((n) => n.terminal).length;
    expect(endCount).toBeGreaterThan(0);
  });
});
