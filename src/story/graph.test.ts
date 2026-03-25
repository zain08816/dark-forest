import { describe, expect, it } from 'vitest';
import { beatVisualNodeIds } from '../visuals/beats/registry';
import { graphValidation, storyGraph, START_ID } from './graph';
import { validateGraph } from './validate';

describe('story graph', () => {
  it('passes validation', () => {
    const v = validateGraph(storyGraph, START_ID);
    expect(v.ok).toBe(true);
    expect(v.issues).toHaveLength(0);
    expect(graphValidation.ok).toBe(true);
  });

  it('has no dangling choice targets', () => {
    for (const [from, node] of Object.entries(storyGraph)) {
      for (const c of node.choices) {
        expect(storyGraph[c.nextId], `missing ${c.nextId} from ${from}`).toBeDefined();
      }
    }
  });

  it('has a unique beat visual for every node', () => {
    for (const id of Object.keys(storyGraph)) {
      expect(beatVisualNodeIds.has(id), `missing beat visual for "${id}"`).toBe(true);
    }
    expect(beatVisualNodeIds.size).toBe(Object.keys(storyGraph).length);
  });
});
