import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { BeatVisualProps } from './types';

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden>
      {children}
    </svg>
  );
}

/** Cold clock — thermodynamic gradient dial */
export function BeatWaitPatience(_props: BeatVisualProps) {
  return (
    <Svg>
      <defs>
        <linearGradient id="wp" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#1a1018" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#wp)" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="#2a4058" strokeWidth="0.6" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        return (
          <line
            key={i}
            x1={50 + Math.cos(a) * 24}
            y1={50 + Math.sin(a) * 24}
            x2={50 + Math.cos(a) * 27}
            y2={50 + Math.sin(a) * 27}
            stroke="#4a6080"
            strokeWidth="0.5"
          />
        );
      })}
      <line x1="50" y1="50" x2="50" y2="30" stroke="#6eb5ff" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="50" y1="50" x2="64" y2="56" stroke="#5a5058" strokeWidth="0.45" strokeLinecap="round" />
    </Svg>
  );
}

/** Tablets / strata — institutional slabs */
export function BeatWaitCommit(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#07080a" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="18"
          y={22 + i * 14}
          width="64"
          height="10"
          rx="1"
          fill="#12161c"
          stroke="#3a4550"
          strokeWidth="0.35"
          opacity={0.85 - i * 0.08}
        />
      ))}
      <line x1="26" y1="38" x2="70" y2="38" stroke="#4a5568" strokeWidth="0.35" />
      <line x1="26" y1="52" x2="62" y2="52" stroke="#4a5568" strokeWidth="0.35" />
    </Svg>
  );
}

/** Buried seed — nested ovals */
export function BeatWaitDeep(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#050608" />
      <ellipse cx="50" cy="50" rx="38" ry="18" fill="none" stroke="#1e2832" strokeWidth="0.6" />
      <ellipse cx="50" cy="50" rx="28" ry="14" fill="none" stroke="#2a3844" strokeWidth="0.55" />
      <ellipse cx="50" cy="50" rx="18" ry="9" fill="#1a222c" stroke="#4a5868" strokeWidth="0.4" />
      <circle cx="50" cy="50" r="3" fill="#3a5040" opacity={0.75} />
    </Svg>
  );
}

/** Stirring rings — synchronized wake */
export function BeatWaitStir({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <Svg>
      <rect width="100" height="100" fill="#06080c" />
      {[18, 28, 38].map((rad, i) =>
        !r ? (
          <motion.circle
            key={rad}
            cx="50"
            cy="50"
            r={rad}
            fill="none"
            stroke="rgba(110,181,255,0.2)"
            strokeWidth="0.45"
            initial={false}
            animate={{ opacity: [0.12, 0.38, 0.12] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ) : (
          <circle
            key={rad}
            cx="50"
            cy="50"
            r={rad}
            fill="none"
            stroke="rgba(110,181,255,0.2)"
            strokeWidth="0.45"
          />
        )
      )}
      <circle cx="50" cy="50" r="4" fill="#3a4a60" />
    </Svg>
  );
}

/** Three listeners — headsets, no broadcast */
export function BeatWaitFork(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#080a10" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${18 + i * 30}, 36)`}>
          <ellipse cx="17" cy="22" rx="14" ry="18" fill="none" stroke="#3a4a58" strokeWidth="0.8" />
          <circle cx="17" cy="22" r="3" fill="#2a3548" />
        </g>
      ))}
      <line x1="14" y1="72" x2="86" y2="72" stroke="#1a2028" strokeWidth="0.4" />
    </Svg>
  );
}

/** Crowded hall — many small actors */
export function BeatWaitEndConclave(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#070810" />
      {Array.from({ length: 24 }, (_, i) => {
        const x = 12 + (i % 8) * 10.5;
        const y = 18 + Math.floor(i / 8) * 14;
        return <circle key={i} cx={x} cy={y} r="2.2" fill="#6a7a98" opacity={0.6 + (i % 5) * 0.06} />;
      })}
      <rect x="8" y="62" width="84" height="22" rx="2" fill="none" stroke="#4a5568" strokeWidth="0.45" />
    </Svg>
  );
}

/** Solitary instrument */
export function BeatWaitEndSolo(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#050508" />
      <path d="M50 22 L46 58 L54 58 Z" fill="#3a4558" stroke="#5a7088" strokeWidth="0.4" />
      <rect x="47" y="58" width="6" height="18" fill="#2a3848" />
      <ellipse cx="58" cy="64" rx="16" ry="6" fill="none" stroke="#4a5568" strokeWidth="0.5" opacity={0.65} />
      <circle cx="76" cy="34" r="1" fill="#a8b8c8" opacity={0.3} />
      <circle cx="22" cy="48" r="0.8" fill="#8898a8" opacity={0.25} />
    </Svg>
  );
}

/** Honeyed lure — drip from band */
export function BeatWaitEndSnare(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#080604" />
      <rect x="20" y="24" width="60" height="14" rx="2" fill="#2a2018" stroke="#8a6040" strokeWidth="0.5" />
      <ellipse cx="50" cy="32" rx="18" ry="5" fill="rgba(255,200,120,0.2)" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${46 + i * 4} 38 Q${46 + i * 4} 52 ${44 + i * 4} 68`}
          fill="none"
          stroke="#d9a050"
          strokeWidth="1"
          opacity={0.65}
          strokeLinecap="round"
        />
      ))}
      <circle cx="50" cy="78" r="5" fill="none" stroke="#a04030" strokeWidth="0.6" strokeDasharray="2 2" />
    </Svg>
  );
}

export const longWaitBeatVisuals = {
  wait_patience: BeatWaitPatience,
  wait_commit: BeatWaitCommit,
  wait_deep: BeatWaitDeep,
  wait_stir: BeatWaitStir,
  wait_fork: BeatWaitFork,
  wait_end_conclave: BeatWaitEndConclave,
  wait_end_solo: BeatWaitEndSolo,
  wait_end_snare: BeatWaitEndSnare,
} as const;
