import type { WorldState } from '../../story/types';

export type BeatVisualProps = {
  world: WorldState;
  /** Timeline thumbnail: keep motion cheap and layout identical */
  thumb?: boolean;
};
