import { useCallback, useEffect, useMemo, useState } from 'react';
import { START_ID } from '../story/graph';
import type { WorldState } from '../story/types';
import {
  clearRun,
  initialRun,
  loadRun,
  saveRun,
  type SerializedRun,
} from '../story/persistence';
import { applyEffects } from '../story/validate';

export type Route = { mode: 'landing' } | { mode: 'play'; nodeId: string };

function parseHash(): Route {
  const h = window.location.hash.replace(/^#/, '') || '/';
  if (h === '/' || h === '') return { mode: 'landing' };
  const [path, query] = h.split('?');
  if (path === '/play' || path === 'play') {
    const q = new URLSearchParams(query || '');
    const n = q.get('n') || START_ID;
    return { mode: 'play', nodeId: n };
  }
  return { mode: 'landing' };
}

function setPlayHash(nodeId: string) {
  window.location.hash = `/play?n=${encodeURIComponent(nodeId)}`;
}

function setLandingHash() {
  window.location.hash = '/';
}

export function useGameRoute() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? parseHash() : { mode: 'landing' }
  );
  const [run, setRun] = useState<SerializedRun>(() => {
    if (typeof window === 'undefined') return initialRun(START_ID);
    const saved = loadRun();
    const r = parseHash();
    if (r.mode === 'play') {
      if (saved && saved.nodeId === r.nodeId) return saved;
      return initialRun(r.nodeId);
    }
    return saved ?? initialRun(START_ID);
  });

  useEffect(() => {
    const onHash = () => {
      const r = parseHash();
      setRoute(r);
      if (r.mode === 'play') {
        setRun((prev) => {
          if (prev.nodeId === r.nodeId) return prev;
          const saved = loadRun();
          if (saved && saved.nodeId === r.nodeId) return saved;
          return initialRun(r.nodeId);
        });
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const startPlay = useCallback((resume: boolean) => {
    if (resume) {
      const saved = loadRun();
      if (saved) {
        setRun(saved);
        setPlayHash(saved.nodeId);
        setRoute({ mode: 'play', nodeId: saved.nodeId });
        return;
      }
    }
    const fresh = initialRun(START_ID);
    setRun(fresh);
    clearRun();
    setPlayHash(START_ID);
    setRoute({ mode: 'play', nodeId: START_ID });
  }, []);

  const goLanding = useCallback(() => {
    setLandingHash();
    setRoute({ mode: 'landing' });
  }, []);

  const visitNode = useCallback(
    (nodeId: string, timelineAppend: string[], world: WorldState) => {
      const next: SerializedRun = { nodeId, timelineIds: timelineAppend, world };
      setRun(next);
      saveRun(next);
      setPlayHash(nodeId);
      setRoute({ mode: 'play', nodeId });
    },
    []
  );

  const choose = useCallback(
    (nextId: string, effects: Partial<WorldState> | undefined) => {
      const world = applyEffects(run.world, effects);
      const nextTimeline = [...run.timelineIds, nextId];
      visitNode(nextId, nextTimeline, world);
    },
    [run.world, run.timelineIds, visitNode]
  );

  const resetRun = useCallback(() => {
    clearRun();
    const fresh = initialRun(START_ID);
    setRun(fresh);
    setPlayHash(START_ID);
    setRoute({ mode: 'play', nodeId: START_ID });
  }, []);

  const state = useMemo(
    () => ({ route, run, startPlay, goLanding, choose, resetRun }),
    [route, run, startPlay, goLanding, choose, resetRun]
  );

  return state;
}
