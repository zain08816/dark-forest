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
      <motion.circle
        cx="22"
        cy="50"
        r="6"
        fill="#4a6fa5"
        animate={reduce ? {} : { opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="78"
        cy="50"
        r="5"
        fill="#c94c4c"
        animate={reduce ? {} : { opacity: [0.8, 0.98, 0.8] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />
      {armed && (
        <>
          <motion.line
            x1="28"
            y1="50"
            x2="73"
            y2={y2}
            stroke="rgba(255,110,110,0.4)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="1.8 3.2"
            animate={reduce ? {} : { strokeDashoffset: [0, -24, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
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
            transition={{ duration: 0.85, ease: 'easeOut' }}
          />
          {!reduce && (
            <motion.line
              x1="28"
              y1="50"
              x2="73"
              y2={y2}
              stroke="rgba(255,200,200,0.45)"
              strokeWidth="0.35"
              strokeLinecap="round"
              animate={{ opacity: [0.25, 0.65, 0.25] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </>
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
