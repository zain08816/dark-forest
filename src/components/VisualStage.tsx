import { motion, useReducedMotion } from 'framer-motion';
import type { WorldState } from '../story/types';
import { BeatVisual } from '../visuals/BeatVisual';

type Props = {
  nodeId: string;
  world: WorldState;
};

export function VisualStage({ nodeId, world }: Props) {
  const reduce = useReducedMotion();

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
      <BeatVisual nodeId={nodeId} world={world} />
    </motion.div>
  );
}
