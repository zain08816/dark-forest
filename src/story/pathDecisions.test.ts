import { describe, expect, it } from 'vitest';
import { storyGraph } from './graph';
import {
  buildPathSteps,
  inferDecisionsFromTimeline,
  normalizeRunDecisions,
} from './pathDecisions';

describe('pathDecisions', () => {
  it('infers choice indices along a timeline', () => {
    const ids = ['start', 'signal', 'chain', 'explosion', 'router', 'strategy'];
    const d = inferDecisionsFromTimeline(storyGraph, ids);
    expect(d.length).toBe(ids.length - 1);
    expect(d[0]).toBe(0);
  });

  it('normalize keeps stored indices when length matches', () => {
    const run = {
      timelineIds: ['start', 'signal', 'chain'],
      decisions: [0, 1],
    };
    expect(normalizeRunDecisions(storyGraph, run)).toBe(run.decisions);
  });

  it('buildPathSteps uses decision indices for labels', () => {
    const steps = buildPathSteps(
      storyGraph,
      ['start', 'signal', 'chain'],
      [0, 1]
    );
    expect(steps).toHaveLength(2);
    expect(steps[1]!.choiceLabel).toContain('institutes');
  });
});
