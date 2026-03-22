import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  actorCount: number;
  edgeDensity: number;
};

export function NetworkMini({ actorCount, edgeDensity }: Props) {
  const reduce = useReducedMotion();
  const n = Math.min(8, Math.max(3, actorCount));
  const nodes = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + Math.cos(a) * 32, y: 50 + Math.sin(a) * 28 };
  });

  const edges: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const h = Math.sin(i * 12.9898 + j * 78.233 + n) * 43758.5453;
      const frac = h - Math.floor(h);
      if (frac < edgeDensity) edges.push([i, j]);
    }
  }

  return (
    <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden>
      <defs>
        <radialGradient id="netbg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#12161f" />
          <stop offset="100%" stopColor="#07090d" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#netbg)" />
      {edges.map(([a, b], i) => (
        <motion.line
          key={`e-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#4a6fa5"
          strokeWidth="0.2"
          initial={reduce ? { opacity: 0.35 } : { opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
      {nodes.map((p, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={p.x}
          cy={p.y}
          r="2.2"
          fill="#8ab4d8"
          initial={reduce ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 + i * 0.06 }}
        />
      ))}
    </svg>
  );
}
