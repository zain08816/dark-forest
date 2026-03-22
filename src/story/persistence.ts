import type { WorldState } from './types';
import { defaultWorldState } from './types';

const KEY = 'dark-forest-save';

export type SerializedRun = {
  nodeId: string;
  timelineIds: string[];
  world: WorldState;
};

export function loadRun(): SerializedRun | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as SerializedRun;
    if (typeof p.nodeId !== 'string' || !Array.isArray(p.timelineIds)) return null;
    return p;
  } catch {
    return null;
  }
}

export function saveRun(data: SerializedRun): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* ignore quota */
  }
}

export function clearRun(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

export function initialRun(nodeId: string): SerializedRun {
  return {
    nodeId,
    timelineIds: [nodeId],
    world: defaultWorldState(),
  };
}
