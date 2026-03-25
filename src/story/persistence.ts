import type { WorldState } from './types';
import { defaultWorldState } from './types';

const KEY = 'dark-forest-save';

export type SerializedRun = {
  nodeId: string;
  timelineIds: string[];
  /** Choice index at each step: `timelineIds[i] -> timelineIds[i+1]` (length `timelineIds.length - 1`). */
  decisions: number[];
  world: WorldState;
};

export function loadRun(): SerializedRun | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as Partial<SerializedRun>;
    if (typeof p.nodeId !== 'string' || !Array.isArray(p.timelineIds)) return null;
    const decisions = Array.isArray(p.decisions)
      ? p.decisions.filter((x): x is number => typeof x === 'number' && x >= 0)
      : [];
    return {
      nodeId: p.nodeId,
      timelineIds: p.timelineIds,
      decisions,
      world: p.world ?? defaultWorldState(),
    };
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
    decisions: [],
    world: defaultWorldState(),
  };
}
