import { storyGraph } from '../story/graph';
import { isTerminalNode } from '../story/validate';
import type { WorldState } from '../story/types';
import { VisualStage } from './VisualStage';
import { NarrativeBeat } from './NarrativeBeat';
import { ChoiceList } from './ChoiceList';
import { StoryPathMap } from './StoryPathMap';
import { buildTimelineEntries } from '../story/timeline';
import { Timeline } from './Timeline';
import { CompactMeters } from './CompactMeters';

type Props = {
  nodeId: string;
  timelineIds: string[];
  decisions: number[];
  world: WorldState;
  onChoose: (
    nextId: string,
    effects: Partial<WorldState> | undefined,
    choiceIndex: number
  ) => void;
  onReset: () => void;
  onExit: () => void;
};

export function PlayLayout({
  nodeId,
  timelineIds,
  decisions,
  world,
  onChoose,
  onReset,
  onExit,
}: Props) {
  const node = storyGraph[nodeId];
  if (!node) {
    return (
      <div className="play-error">
        <p>Unknown story node.</p>
        <button type="button" onClick={onReset}>
          Restart
        </button>
      </div>
    );
  }

  const terminal = isTerminalNode(node);
  const entries = buildTimelineEntries(storyGraph, timelineIds);

  return (
    <div className="play-layout">
      <header className="play-header">
        <button type="button" className="linkish" onClick={onExit}>
          ← Home
        </button>
        <span className="play-tag">Dark Forest scenario</span>
      </header>
      <div className="play-grid">
        <Timeline entries={entries} currentId={nodeId} world={world} />
        <main className="play-main">
          <NarrativeBeat node={node} />
          <CompactMeters world={world} />
          <div className="visual-wrap">
            <VisualStage nodeId={nodeId} world={world} />
          </div>
          <ChoiceList choices={node.choices} onChoose={onChoose} />
          {terminal && (
            <>
              <StoryPathMap
                timelineIds={timelineIds}
                decisions={decisions}
                currentNodeId={nodeId}
              />
              <div className="ending-actions">
                <p className="ending-hint">This branch ends here.</p>
                <button type="button" className="primary-btn" onClick={onReset}>
                  Play again from the start
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
