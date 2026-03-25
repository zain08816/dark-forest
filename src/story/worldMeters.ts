import type { WorldState } from './types';

export type WorldMeterKey = keyof WorldState;

/** Clamp meter values for bar width and percentage labels. */
export function clampUnit(n: number): number {
  return Math.min(1, Math.max(0, n));
}

export type WorldMeterDef = {
  key: WorldMeterKey;
  /** Short label shown next to the bar */
  label: string;
  /** One-line explanation for tooltips and screen readers */
  description: string;
  color: string;
};

/** Shared copy for Exposure, Suspicion, Technological explosion risk (Dark Forest toy model). */
export const WORLD_METERS: WorldMeterDef[] = [
  {
    key: 'detectability',
    label: 'Exposure',
    description:
      'How easily others could notice you and map your location and capabilities from signals, heat, and activity.',
    color: '#6eb5ff',
  },
  {
    key: 'suspicion',
    label: 'Suspicion',
    description:
      'How much the strategic game rewards worst-case guessing between civilizations—the chain-of-suspicion tension, not whether anyone likes you.',
    color: '#c9a227',
  },
  {
    key: 'tech',
    label: 'Technological explosion risk',
    description:
      "From an outsider's view, how sharply your power could rise over time—fear of technological explosion even if you are not bright today.",
    color: '#7fd67f',
  },
];
