import { useEffect } from 'react';
import { Landing } from './components/Landing';
import { PlayLayout } from './components/PlayLayout';
import { useGameRoute } from './hooks/useGameRoute';
import { graphValidation } from './story/graph';
import { loadRun } from './story/persistence';

export default function App() {
  const { route, run, startPlay, goLanding, choose, resetRun } = useGameRoute();

  const hasSave = loadRun() !== null;

  useEffect(() => {
    if (import.meta.env.DEV && !graphValidation.ok) {
      console.warn('[dark-forest] Story graph issues:', graphValidation.issues);
    }
  }, []);

  if (route.mode === 'landing') {
    return (
      <div className="app-shell">
        <Landing onStart={startPlay} hasSave={hasSave} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <PlayLayout
        nodeId={run.nodeId}
        timelineIds={run.timelineIds}
        world={run.world}
        onChoose={choose}
        onReset={resetRun}
        onExit={goLanding}
      />
    </div>
  );
}
