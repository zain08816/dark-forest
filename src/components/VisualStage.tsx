import { motion, useReducedMotion } from 'framer-motion';
import type { VisualSpec } from '../story/types';
import type { WorldState } from '../story/types';
import { SpaceBackdrop } from '../visuals/SpaceBackdrop';
import { NetworkMini } from '../visuals/NetworkMini';
import { BroadcastCone } from '../visuals/BroadcastCone';
import { StrikeBeam } from '../visuals/StrikeBeam';
import { GaugesPanel } from '../visuals/GaugesPanel';

type Props = {
  visual: VisualSpec;
  world: WorldState;
};

export function VisualStage({ visual, world }: Props) {
  const reduce = useReducedMotion();

  const inner =
    visual.kind === 'starfield' ? (
      <SpaceBackdrop exposure={visual.exposure} crosshair={visual.crosshair} />
    ) : visual.kind === 'network' ? (
      <NetworkMini actorCount={visual.actorCount} edgeDensity={visual.edgeDensity} />
    ) : visual.kind === 'broadcast' ? (
      <BroadcastCone active={visual.active} coneWidth={visual.coneWidth} />
    ) : visual.kind === 'strike' ? (
      <StrikeBeam armed={visual.armed} beamProgress={visual.beamProgress} />
    ) : (
      <GaugesPanel world={world} />
    );

  return (
    <motion.div
      className="visual-stage"
      initial={false}
      animate={
        reduce
          ? {}
          : {
              scale: [1, 1.02, 1],
              x: [0, 1.2, 0],
              y: [0, 0.8, 0],
            }
      }
      transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
    >
      {inner}
    </motion.div>
  );
}
