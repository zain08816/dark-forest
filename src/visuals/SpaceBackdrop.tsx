import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  exposure: number;
  crosshair?: boolean;
};

export function SpaceBackdrop({ exposure, crosshair }: Props) {
  const reduce = useReducedMotion();

  const stars = Array.from({ length: 56 }, (_, i) => ({
    x: (Math.sin(i * 7.13) * 0.5 + 0.5) * 100,
    y: (Math.cos(i * 5.91) * 0.5 + 0.5) * 100,
    r: 0.35 + (i % 5) * (0.12 + (i % 3) * 0.04),
    o: 0.15 + (i % 7) * 0.09,
    layer: i % 3,
    tw: 3 + (i % 5) * 0.45,
  }));

  const dim = 1 - exposure * 0.85;
  const drift = reduce ? false : true;
  const showMeteor = !reduce && crosshair && exposure >= 0.18;

  return (
    <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden>
      <defs>
        <radialGradient id="bg" cx="50%" cy="42%" r="72%">
          <stop offset="0%" stopColor="#1c2436" />
          <stop offset="55%" stopColor="#10151f" />
          <stop offset="100%" stopColor="#06080d" />
        </radialGradient>
        <radialGradient id="nebula" cx="38%" cy="35%" r="55%">
          <stop offset="0%" stopColor="rgba(100, 140, 200, 0.14)" />
          <stop offset="100%" stopColor="rgba(20, 30, 50, 0)" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#bg)" />
      {!reduce && (
        <motion.rect
          width="100"
          height="100"
          fill="url(#nebula)"
          initial={false}
          animate={{ opacity: [0.55, 0.95, 0.55], x: [0, 1.2, 0], y: [0, 0.8, 0] }}
          transition={{ duration: 48, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      {stars.map((s, i) => (
        <motion.g
          key={i}
          animate={
            drift
              ? {
                  x: [0, (s.layer - 1) * 0.35, 0],
                  y: [0, (s.layer * 0.2 - 0.2) * 0.6, 0],
                }
              : {}
          }
          transition={{
            duration: 36 + s.layer * 22 + (i % 7) * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.08,
          }}
        >
          <motion.circle
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="#c8d4e8"
            opacity={s.o * dim}
            animate={
              reduce
                ? {}
                : { opacity: s.o * dim * (0.82 + exposure * 0.18 * (1 + s.layer * 0.08)) }
            }
            transition={{ duration: s.tw, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.g>
      ))}
      {showMeteor && (
        <motion.g
          initial={false}
          animate={{ x: [0, 14, 0], y: [0, 10, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 11, ease: 'easeOut' }}
        >
          <line
            x1="4"
            y1="4"
            x2="22"
            y2="17"
            stroke="rgba(210, 225, 255, 0.65)"
            strokeWidth="0.28"
            strokeLinecap="round"
          />
        </motion.g>
      )}
      {crosshair && (
        <g opacity={0.35 + exposure * 0.5}>
          <motion.line
            x1="50"
            y1="18"
            x2="50"
            y2="82"
            stroke="#e06666"
            strokeWidth="0.14"
            animate={reduce ? {} : { opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.line
            x1="18"
            y1="50"
            x2="82"
            y2="50"
            stroke="#e06666"
            strokeWidth="0.14"
            animate={reduce ? {} : { opacity: [0.4, 0.72, 0.4] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#e06666"
            strokeWidth="0.11"
            animate={reduce ? { r: 8 } : { r: [8, 8.6, 8], opacity: [0.45, 0.68, 0.45] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>
      )}
    </svg>
  );
}
