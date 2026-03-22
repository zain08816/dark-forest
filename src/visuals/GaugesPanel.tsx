import type { WorldState } from '../story/types';

type Props = {
  world: WorldState;
};

export function GaugesPanel({ world }: Props) {
  const rows: { key: keyof WorldState; label: string; color: string }[] = [
    { key: 'detectability', label: 'Exposure', color: '#6eb5ff' },
    { key: 'suspicion', label: 'Chain tension', color: '#c9a227' },
    { key: 'tech', label: 'Tech trajectory', color: '#7fd67f' },
  ];

  return (
    <div className="gauges-panel">
      {rows.map((r) => (
        <div key={r.key} className="gauge-row">
          <span className="gauge-label">{r.label}</span>
          <div className="gauge-track" role="meter" aria-valuenow={Math.round(world[r.key] * 100)} aria-valuemin={0} aria-valuemax={100}>
            <div
              className="gauge-fill"
              style={{
                width: `${world[r.key] * 100}%`,
                background: r.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
