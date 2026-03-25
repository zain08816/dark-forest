import type { WorldState } from '../story/types';
import { clampUnit, WORLD_METERS } from '../story/worldMeters';

type Props = { world: WorldState };

export function CompactMeters({ world }: Props) {
  return (
    <div className="compact-meters-wrap">
      <div className="compact-meters" aria-label="Strategic state: exposure, suspicion, explosion risk">
        {WORLD_METERS.map((m) => (
          <Meter key={m.key} def={m} v={world[m.key]} />
        ))}
      </div>
      <p className="meters-legend">
        Rough model: how <strong>visible</strong> you are, how <strong>tense</strong> the strategic game is, and how
        fast your <strong>capabilities</strong> might ramp in someone else&apos;s eyes.
      </p>
    </div>
  );
}

function Meter({ def, v }: { def: (typeof WORLD_METERS)[number]; v: number }) {
  const c = clampUnit(v);
  const pct = Math.round(c * 100);
  const widthPct = c * 100;
  return (
    <div
      className="compact-meter meter-hover-target"
      data-tip={def.description}
      aria-label={`${def.label}: ${pct} percent. ${def.description}`}
    >
      <div className="compact-meter-head">
        <span className="compact-meter-label">{def.label}</span>
        <span className="compact-meter-value">{pct}%</span>
      </div>
      <div className="compact-meter-bar" aria-hidden>
        <span style={{ width: `${widthPct}%`, background: def.color }} />
      </div>
    </div>
  );
}
