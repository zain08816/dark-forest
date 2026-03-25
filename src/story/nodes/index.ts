import type { StoryNode } from '../types';
import { classicExposureNodes } from './classicExposure';
import { coreNodes } from './core';
import { expansionTrackNodes } from './expansion';
import { longWaitTrackNodes } from './longWait';
import { probeTrackNodes } from './probes';
import { zooTrackNodes } from './zoo';

/** Full narrative graph: shared intro, router, classic exposure, and scenario tracks. */
export const allStoryNodes: StoryNode[] = [
  ...coreNodes,
  ...classicExposureNodes,
  ...probeTrackNodes,
  ...zooTrackNodes,
  ...expansionTrackNodes,
  ...longWaitTrackNodes,
];
