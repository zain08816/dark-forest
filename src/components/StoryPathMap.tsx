import { useMemo, useState } from 'react';
import { storyGraph, START_ID } from '../story/graph';
import { buildPathSteps } from '../story/pathDecisions';
import { buildStoryMapLayout, type StoryMapEdge } from '../story/storyGraphLayout';
import { RichParagraph } from './RichParagraph';

const NODE_R = 13;

type Props = {
  timelineIds: string[];
  decisions: number[];
  currentNodeId: string;
};

function edgeCurvePath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  yBump: number
): string {
  const r = NODE_R + 4;
  const dir = x2 >= x1 ? 1 : -1;
  const xa = x1 + dir * r;
  const xb = x2 - dir * r;
  const mid = (xa + xb) / 2;
  return `M ${xa} ${y1 + yBump} C ${mid} ${y1 + yBump} ${mid} ${y2 + yBump} ${xb} ${y2 + yBump}`;
}

function firstBodyParagraph(body: string): string {
  const parts = body.split(/\n\n+/);
  return (parts[0] ?? body).trim();
}

function isEdgeOnPath(
  e: StoryMapEdge,
  timelineIds: string[],
  decisions: number[]
): boolean {
  for (let i = 0; i < timelineIds.length - 1; i++) {
    if (
      timelineIds[i] === e.from &&
      timelineIds[i + 1] === e.to &&
      decisions[i] === e.choiceIndex
    ) {
      return true;
    }
  }
  return false;
}

export function StoryPathMap({ timelineIds, decisions, currentNodeId }: Props) {
  const layout = useMemo(
    () => buildStoryMapLayout(storyGraph, START_ID),
    []
  );

  const steps = useMemo(
    () => buildPathSteps(storyGraph, timelineIds, decisions),
    [timelineIds, decisions]
  );

  const pathNodeSet = useMemo(() => new Set(timelineIds), [timelineIds]);

  const posById = useMemo(() => {
    const m = new Map<string, { x: number; y: number }>();
    for (const n of layout.nodes) m.set(n.id, { x: n.x, y: n.y });
    return m;
  }, [layout.nodes]);

  const [focusId, setFocusId] = useState<string | null>(null);
  const selectedId = focusId ?? currentNodeId;
  const selected = storyGraph[selectedId];

  const endings = useMemo(
    () => layout.nodes.filter((n) => n.terminal).sort((a, b) => a.title.localeCompare(b.title)),
    [layout.nodes]
  );

  return (
    <section className="story-path-map" aria-label="Story path and branch map">
      <h2 className="story-path-map-heading">Your path</h2>
      <ul className="story-path-decisions">
        {steps.map((s, i) => (
          <li key={`${s.fromId}-${i}-${s.toId}`}>
            <span className="story-path-decision-idx">{i + 1}.</span>
            <span className="story-path-decision-label">{s.choiceLabel}</span>
          </li>
        ))}
      </ul>

      <h3 className="story-path-map-sub">Full branch map</h3>
      <p className="story-path-map-hint">
        Hover nodes for titles. Click any beat or ending to read a short excerpt. Your route is highlighted.
      </p>

      <div className="story-path-map-scroll">
        <svg
          className="story-path-svg"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          role="img"
          aria-label="Directed graph of story beats; highlighted segments show your choices."
        >
          <defs>
            <marker
              id="story-arrow"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#8a96ab" />
            </marker>
            <marker
              id="story-arrow-path"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#6eb5ff" />
            </marker>
          </defs>

          <g className="story-path-edges">
            {layout.edges.map((e, i) => {
              const p1 = posById.get(e.from);
              const p2 = posById.get(e.to);
              if (!p1 || !p2) return null;
              const yBump =
                e.altCount > 1 ? (e.altIndex - (e.altCount - 1) / 2) * 11 : 0;
              const onPath = isEdgeOnPath(e, timelineIds, decisions);
              const d = edgeCurvePath(p1.x, p1.y, p2.x, p2.y, yBump);
              return (
                <path
                  key={`${e.from}-${e.to}-${e.choiceIndex}-${i}`}
                  d={d}
                  className={
                    onPath ? 'story-path-edge story-path-edge--active' : 'story-path-edge'
                  }
                  fill="none"
                  markerEnd={onPath ? 'url(#story-arrow-path)' : 'url(#story-arrow)'}
                />
              );
            })}
          </g>

          <g className="story-path-nodes">
            {layout.nodes.map((n) => {
              const onRoute = pathNodeSet.has(n.id);
              const isEnd = n.terminal;
              const isSel = n.id === selectedId;
              let cls = 'story-path-node';
              if (onRoute) cls += ' story-path-node--route';
              if (isEnd) cls += ' story-path-node--end';
              if (isSel) cls += ' story-path-node--selected';

              return (
                <g
                  key={n.id}
                  transform={`translate(${n.x},${n.y})`}
                  className={cls}
                  role="button"
                  tabIndex={0}
                  onClick={() => setFocusId(n.id)}
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter' || ev.key === ' ') {
                      ev.preventDefault();
                      setFocusId(n.id);
                    }
                  }}
                >
                  <title>{n.title}</title>
                  <circle r={NODE_R} className="story-path-node-dot" />
                  <text
                    className="story-path-node-label"
                    y={NODE_R + 14}
                    textAnchor="middle"
                  >
                    {n.id === START_ID ? 'Start' : isEnd ? 'End' : ''}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <div className="story-path-detail">
        {selected ? (
          <>
            <h4 className="story-path-detail-title">{selected.title}</h4>
            <p className="story-path-detail-era">
              {[
                selected.timelineSegment.yearLabel,
                selected.timelineSegment.yearApprox != null &&
                !selected.timelineSegment.yearLabel
                  ? `~${selected.timelineSegment.yearApprox}`
                  : null,
              ]
                .filter(Boolean)
                .join(' ')}
              {selected.timelineSegment.yearLabel ||
              selected.timelineSegment.yearApprox != null
                ? ' — '
                : ''}
              {selected.timelineSegment.title}
            </p>
            <p className="story-path-detail-summary">{selected.timelineSegment.summary}</p>
            <div className="story-path-detail-body">
              <RichParagraph text={firstBodyParagraph(selected.body)} />
            </div>
          </>
        ) : (
          <p className="story-path-detail-empty">Select a node on the map.</p>
        )}
      </div>

      <div className="story-path-endings">
        <span className="story-path-endings-label">Jump to an ending:</span>
        <div className="story-path-endings-btns">
          {endings.map((n) => (
            <button
              key={n.id}
              type="button"
              className="story-path-ending-chip"
              onClick={() => setFocusId(n.id)}
            >
              {storyGraph[n.id]?.title ?? n.id}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
