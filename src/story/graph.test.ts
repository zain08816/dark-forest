import { describe, expect, it } from 'vitest';
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
});
