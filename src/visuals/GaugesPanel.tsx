import { motion } from 'framer-motion';
import type { WorldState } from '../story/types';
import { clampUnit, WORLD_METERS } from '../story/worldMeters';

type Props = {
  world: WorldState;
};

export function GaugesPanel({ world }: Props) {
  return (
    <div className="gauges-panel" aria-label="Strategic state: exposure, suspicion, explosion risk">
      <p className="gauges-legend">
        Rough model: visibility, strategic tension, and perceived growth of capability.{' '}
        <strong>Hover a row</strong> (label or bar) for a short definition.
      </p>
      {WORLD_METERS.map((r) => {
        const c = clampUnit(world[r.key]);
        const pct = Math.round(c * 100);
        const widthPct = c * 100;
        return (
          <div
            key={r.key}
            className="gauge-row meter-hover-target"
            data-tip={r.description}
          >
            <span className="gauge-label">{r.label}</span>
            <div
              className="gauge-track"
              role="meter"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${r.label}: ${pct} percent. ${r.description}`}
            >
              <motion.div
                className="gauge-fill"
                initial={false}
                animate={{ width: `${widthPct}%` }}
                transition={{ type: 'spring', stiffness: 140, damping: 20 }}
                style={{ background: r.color }}
              />
            </div>
            <span className="gauge-value" aria-hidden>
              {pct}%
            </span>
          </div>
        );
      })}
    </div>
  );
}
