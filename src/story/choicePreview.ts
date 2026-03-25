import type { Choice } from './types';
import { WORLD_METERS } from './worldMeters';

export type ChoicePreviewLines = {
  hint?: string;
  effectsLine?: string;
};

const METER_KEYS = ['detectability', 'suspicion', 'tech'] as const;

function formatEffects(effects: NonNullable<Choice['effects']>): string | undefined {
  const labelByKey = Object.fromEntries(WORLD_METERS.map((m) => [m.key, m.label])) as Record<
    (typeof METER_KEYS)[number],
    string
  >;
  const parts: string[] = [];
  for (const key of METER_KEYS) {
    const delta = effects[key];
    if (delta === undefined || delta === 0) continue;
    const pct = Math.round(delta * 100);
    const sign = pct > 0 ? '+' : '';
    parts.push(`${labelByKey[key]} ${sign}${pct}%`);
  }
  return parts.length ? parts.join(' · ') : undefined;
}

/** Narrative / mechanical lines shown when the player enables outcome previews. */
export function buildChoicePreview(choice: Choice): ChoicePreviewLines {
  const hint = choice.hint?.trim() || undefined;
  const effectsLine = choice.effects ? formatEffects(choice.effects) : undefined;
  return { hint, effectsLine };
}

export function previewHasAny(p: ChoicePreviewLines): boolean {
  return Boolean(p.hint || p.effectsLine);
}
