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
        <linearGradient id="beamRipple" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="42%" stopColor={active ? 'rgba(220,235,255,0.2)' : 'rgba(0,0,0,0)'} />
          <stop offset="58%" stopColor={active ? 'rgba(220,235,255,0.35)' : 'rgba(0,0,0,0)'} />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#06080c" />
      <motion.circle
        cx="50"
        cy="78"
        r="12"
        fill="url(#planet)"
        animate={reduce ? {} : { opacity: [0.88, 1, 0.88] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.polygon
        points={`50,78 ${50 - w},5 ${50 + w},5`}
        fill="url(#beam)"
        animate={reduce || !active ? {} : { opacity: [0.42, 0.9, 0.42] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {active && !reduce && (
        <motion.g
          animate={{ y: [2, -5, 2] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <polygon points={`50,78 ${50 - w * 0.88},16 ${50 + w * 0.88},16`} fill="url(#beamRipple)" />
        </motion.g>
      )}
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
