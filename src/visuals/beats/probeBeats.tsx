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

/** Wreck shard with alien alloy sheen */
export function BeatProbeIntro(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#080a0f" />
      <circle cx="78" cy="22" r="0.6" fill="#a8b8d0" opacity={0.4} />
      <polygon
        points="38,52 52,28 68,48 58,72 32,64"
        fill="#2a3548"
        stroke="#8a9ebc"
        strokeWidth="0.9"
      />
      <line x1="52" y1="28" x2="58" y2="38" stroke="rgba(180,200,240,0.4)" strokeWidth="0.4" />
      <text x="50" y="90" textAnchor="middle" fill="#5a6b80" fontSize="3" fontFamily="system-ui">
        chemistry off-ledger
      </text>
    </Svg>
  );
}

/** Recursive relay lattice — children of children */
export function BeatProbeEcho({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <Svg>
      <rect width="100" height="100" fill="#070910" />
      <circle cx="50" cy="50" r="18" fill="none" stroke="#3a4d68" strokeWidth="0.5" strokeDasharray="3 2" />
      <circle cx="50" cy="32" r="3" fill="#7a9cc8" />
      <circle cx="66" cy="58" r="3" fill="#7a9cc8" />
      <circle cx="34" cy="58" r="3" fill="#7a9cc8" />
      <circle cx="50" cy="68" r="2.5" fill="#a0b8e0" opacity={0.8} />
      <line x1="50" y1="35" x2="50" y2="65" stroke="#4a6088" strokeWidth="0.45" />
      <line x1="53" y1="34" x2="63" y2="56" stroke="#4a6088" strokeWidth="0.45" />
      <line x1="47" y1="34" x2="37" y2="56" stroke="#4a6088" strokeWidth="0.45" />
      {!r && (
        <motion.circle
          cx="50"
          cy="50"
          fill="none"
          stroke="rgba(110,181,255,0.15)"
          strokeWidth="0.6"
          animate={{ r: [22, 42], opacity: [0.4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </Svg>
  );
}

/** Asymptotic spread: fan of doubling bots */
export function BeatProbePatrol(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#060809" />
      <circle cx="50" cy="78" r="3" fill="#6eb5ff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const a = -Math.PI * 0.85 + (i / 6) * Math.PI * 0.7;
        const len = 12 + i * 5;
        const x = 50 + Math.cos(a) * len;
        const y = 78 + Math.sin(a) * len * 0.55;
        return <circle key={i} cx={x} cy={y} r={1.2 + i * 0.12} fill="#889cbe" opacity={0.5 + i * 0.05} />;
      })}
    </Svg>
  );
}

/** Three response lanes — towers */
export function BeatProbeDecision(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#080b12" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${24 + i * 26}, 38)`}>
          <rect x="0" y="20" width="6" height="32" fill="#2a3848" />
          <polygon points="3,20 8,8 -2,8" fill="#c87878" opacity={0.85} />
          <ellipse cx="3" cy="52" rx="10" ry="4" fill="rgba(100,160,255,0.08)" />
        </g>
      ))}
    </Svg>
  );
}

/** Open challenge — lightning reply */
export function BeatProbeEndBrave(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#050508" />
      <path
        d="M48 18 L42 42 L52 42 L38 72 L58 38 L48 38 L55 18 Z"
        fill="rgba(255,230,180,0.25)"
        stroke="#ffe0a0"
        strokeWidth="0.6"
      />
      <circle cx="72" cy="58" r="8" fill="#3a2a28" stroke="#903020" strokeWidth="0.8" />
    </Svg>
  );
}

/** Submergence — sediment horizon */
export function BeatProbeEndShadow(_props: BeatVisualProps) {
  return (
    <Svg>
      <defs>
        <linearGradient id="psh" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a1018" />
          <stop offset="55%" stopColor="#151820" />
          <stop offset="100%" stopColor="#252018" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#psh)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="0"
          y1={48 + i * 4}
          x2="100"
          y2={46 + i * 4}
          stroke="#2a3038"
          strokeWidth="0.8"
          opacity={0.4}
        />
      ))}
      <circle cx="50" cy="38" r="2" fill="#5a6a78" opacity={0.35} />
    </Svg>
  );
}

/** Traffic mimic — square lattice trap */
export function BeatProbeEndRide(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#08090d" />
      {Array.from({ length: 10 }, (_, i) =>
        Array.from({ length: 10 }, (_, j) => (
          <rect
            key={`${i}-${j}`}
            x={12 + j * 7.2}
            y={14 + i * 7.2}
            width="6"
            height="6"
            fill={i === 4 && j === 5 ? '#4a5a78' : '#1a1e28'}
            stroke="#2a3040"
            strokeWidth="0.25"
          />
        ))
      )}
      <circle cx="47.5" cy="43.5" r="2" fill="#8ab4ff" opacity={0.7} />
    </Svg>
  );
}

export const probeBeatVisuals = {
  probe_intro: BeatProbeIntro,
  probe_echo: BeatProbeEcho,
  probe_patrol: BeatProbePatrol,
  probe_decision: BeatProbeDecision,
  probe_end_brave: BeatProbeEndBrave,
  probe_end_shadow: BeatProbeEndShadow,
  probe_end_ride: BeatProbeEndRide,
} as const;
