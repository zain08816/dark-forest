import type { WorldState } from '../story/types';

type Props = { world: WorldState };

export function CompactMeters({ world }: Props) {
  return (
    <div className="compact-meters" aria-label="Strategic state">
      <Meter label="Exposure" v={world.detectability} color="#6eb5ff" />
      <Meter label="Suspicion" v={world.suspicion} color="#c9a227" />
      <Meter label="Tech" v={world.tech} color="#7fd67f" />
    </div>
  );
}

function Meter({
  label,
  v,
  color,
}: {
  label: string;
  v: number;
  color: string;
}) {
  return (
    <div className="compact-meter">
      <span>{label}</span>
      <div className="compact-meter-bar">
        <span style={{ width: `${v * 100}%`, background: color }} />
      </div>
    </div>
  );
}
