import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  armed: boolean;
  beamProgress: number;
};

export function StrikeBeam({ armed, beamProgress }: Props) {
  const reduce = useReducedMotion();
  const y2 = 15 + (1 - beamProgress) * 55;

  return (
    <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden>
      <rect width="100" height="100" fill="#050608" />
      <circle cx="22" cy="50" r="6" fill="#4a6fa5" opacity={0.9} />
      <circle cx="78" cy="50" r="5" fill="#c94c4c" opacity={0.85} />
      {armed && (
        <motion.line
          x1="28"
          y1="50"
          x2="73"
          y2={y2}
          stroke="#ff6666"
          strokeWidth="0.6"
          strokeLinecap="round"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      )}
      <text
        x="50"
        y="92"
        textAnchor="middle"
        fill="#6a7a90"
        fontSize="3.5"
        fontFamily="system-ui"
      >
        {armed ? 'first-strike calculus' : 'deterrence sketch'}
      </text>
    </svg>
  );
}
