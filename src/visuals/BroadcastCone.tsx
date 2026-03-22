import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  active: boolean;
  coneWidth: number;
};

export function BroadcastCone({ active, coneWidth }: Props) {
  const reduce = useReducedMotion();
  const w = 15 + coneWidth * 35;

  return (
    <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden>
      <defs>
        <radialGradient id="planet" cx="50%" cy="75%" r="45%">
          <stop offset="0%" stopColor="#3d5a80" />
          <stop offset="100%" stopColor="#1b263b" />
        </radialGradient>
        <linearGradient id="beam" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={active ? 'rgba(200,220,255,0.45)' : 'rgba(120,140,180,0.08)'} />
          <stop offset="100%" stopColor="rgba(30,40,60,0)" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#06080c" />
      <circle cx="50" cy="78" r="12" fill="url(#planet)" />
      <motion.polygon
        points={`50,78 ${50 - w},5 ${50 + w},5`}
        fill="url(#beam)"
        animate={
          reduce || !active
            ? {}
            : { opacity: [0.4, 0.85, 0.4] }
        }
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {!active && (
        <text
          x="50"
          y="42"
          textAnchor="middle"
          fill="#5a6d8a"
          fontSize="4"
          fontFamily="system-ui"
        >
          silent
        </text>
      )}
    </svg>
  );
}
