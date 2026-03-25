import type { StoryGraph, TimelineEntry } from './types';

/** Year / era line shared by the sidebar timeline and the main beat header. */
export function formatTimelineEra(e: {
  yearLabel?: string;
  yearApprox?: number;
}): string | null {
  if (e.yearLabel) return e.yearLabel;
  if (e.yearApprox != null) {
    return `c. ${e.yearApprox.toLocaleString('en-US', { useGrouping: false })} CE`;
  }
  return null;
}

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
      yearApprox: n.timelineSegment.yearApprox,
      yearLabel: n.timelineSegment.yearLabel,
    };
  });
}
