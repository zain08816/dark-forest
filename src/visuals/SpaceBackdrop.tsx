import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  exposure: number;
  crosshair?: boolean;
};

export function SpaceBackdrop({ exposure, crosshair }: Props) {
  const reduce = useReducedMotion();

  const stars = Array.from({ length: 48 }, (_, i) => ({
    x: (Math.sin(i * 7.13) * 0.5 + 0.5) * 100,
    y: (Math.cos(i * 5.91) * 0.5 + 0.5) * 100,
    r: 0.4 + (i % 5) * 0.15,
    o: 0.2 + (i % 7) * 0.1,
  }));

  const dim = 1 - exposure * 0.85;

  return (
    <svg
      viewBox="0 0 100 100"
      className="visual-svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#1a1f2e" />
          <stop offset="100%" stopColor="#0a0c10" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#bg)" />
      {stars.map((s, i) => (
        <motion.circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#c8d4e8"
          opacity={s.o * dim}
          animate={
            reduce
              ? {}
              : { opacity: s.o * dim * (0.85 + exposure * 0.15) }
          }
          transition={{ duration: 3 + (i % 5) * 0.4, repeat: Infinity, repeatType: 'reverse' }}
        />
      ))}
      {crosshair && (
        <g opacity={0.35 + exposure * 0.5}>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#e06666" strokeWidth="0.15" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#e06666" strokeWidth="0.15" />
          <circle cx="50" cy="50" r="8" fill="none" stroke="#e06666" strokeWidth="0.12" />
        </g>
      )}
    </svg>
  );
}
