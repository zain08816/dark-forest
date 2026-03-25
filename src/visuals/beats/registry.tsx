import type { ComponentType } from 'react';
import { classicBeatVisuals } from './classicBeats';
import { coreBeatVisuals } from './coreBeats';
import { expansionBeatVisuals } from './expansionBeats';
import { longWaitBeatVisuals } from './longWaitBeats';
import { probeBeatVisuals } from './probeBeats';
import type { BeatVisualProps } from './types';
import { zooBeatVisuals } from './zooBeats';

/** One distinct stage graphic per narrative node id. */
export const beatVisualComponents: Record<string, ComponentType<BeatVisualProps>> = {
  ...coreBeatVisuals,
  ...classicBeatVisuals,
  ...probeBeatVisuals,
  ...zooBeatVisuals,
  ...expansionBeatVisuals,
  ...longWaitBeatVisuals,
};

export const beatVisualNodeIds = new Set(Object.keys(beatVisualComponents));

export function DefaultBeatFallback({ nodeId }: { nodeId: string }) {
  return (
    <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden>
      <rect width="100" height="100" fill="#1a1020" />
      <text x="50" y="52" textAnchor="middle" fill="#8a7090" fontSize="4" fontFamily="system-ui">
        missing visual: {nodeId}
      </text>
    </svg>
  );
}
