import type { StoryGraph, TimelineEntry } from './types';

export function buildTimelineEntries(
  graph: StoryGraph,
  timelineIds: string[]
): TimelineEntry[] {
  return timelineIds.map((id) => {
    const n = graph[id];
    if (!n) {
      return { id, title: id, summary: '' };
    }
    return {
      id,
      title: n.timelineSegment.title,
      summary: n.timelineSegment.summary,
      t: n.timelineSegment.t,
    };
  });
}
