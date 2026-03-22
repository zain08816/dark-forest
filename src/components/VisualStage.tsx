import type { VisualSpec } from '../story/types';
import type { WorldState } from '../story/types';
import { SpaceBackdrop } from '../visuals/SpaceBackdrop';
import { NetworkMini } from '../visuals/NetworkMini';
import { BroadcastCone } from '../visuals/BroadcastCone';
import { StrikeBeam } from '../visuals/StrikeBeam';
import { GaugesPanel } from '../visuals/GaugesPanel';

type Props = {
  visual: VisualSpec;
  world: WorldState;
};

export function VisualStage({ visual, world }: Props) {
  return (
    <div className="visual-stage">
      {visual.kind === 'starfield' && (
        <SpaceBackdrop exposure={visual.exposure} crosshair={visual.crosshair} />
      )}
      {visual.kind === 'network' && (
        <NetworkMini actorCount={visual.actorCount} edgeDensity={visual.edgeDensity} />
      )}
      {visual.kind === 'broadcast' && (
        <BroadcastCone active={visual.active} coneWidth={visual.coneWidth} />
      )}
      {visual.kind === 'strike' && (
        <StrikeBeam armed={visual.armed} beamProgress={visual.beamProgress} />
      )}
      {visual.kind === 'gauges' && <GaugesPanel world={world} />}
    </div>
  );
}
