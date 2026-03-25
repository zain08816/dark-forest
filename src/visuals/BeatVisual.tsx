import type { WorldState } from '../story/types';
import { beatVisualComponents, DefaultBeatFallback } from './beats/registry';

type Props = {
  nodeId: string;
  world: WorldState;
  /** Timeline: same art, scaled via CSS; lighter motion inside leaves */
  thumb?: boolean;
};

export function BeatVisual({ nodeId, world, thumb }: Props) {
  const Cmp = beatVisualComponents[nodeId];
  const inner = Cmp ? <Cmp world={world} thumb={thumb} /> : <DefaultBeatFallback nodeId={nodeId} />;

  if (thumb) {
    return (
      <div className="beat-visual beat-visual--thumb" data-beat={nodeId}>
        {inner}
      </div>
    );
  }

  return (
    <div className="beat-visual" data-beat={nodeId}>
      {inner}
    </div>
  );
}
