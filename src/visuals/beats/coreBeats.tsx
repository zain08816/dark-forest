import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { BeatVisualProps } from './types';

function SvgShell({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden>
      {children}
    </svg>
  );
}

/** Era 0 — listening: lone parabolic dish under a spare field */
export function BeatStart({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <SvgShell>
      <defs>
        <radialGradient id="cs0" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#141c2e" />
          <stop offset="100%" stopColor="#050608" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#cs0)" />
      <circle cx="22" cy="28" r="0.7" fill="#9db4d8" opacity={0.45} />
      <circle cx="71" cy="22" r="0.5" fill="#8aa0c0" opacity={0.35} />
      <circle cx="58" cy="68" r="0.6" fill="#a8bcd8" opacity={0.4} />
      <path
        d="M50 72 L50 58 Q50 44 62 40 Q74 36 82 46"
        fill="none"
        stroke="#5a7090"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <ellipse cx="50" cy="58" rx="14" ry="4" fill="none" stroke="#6eb5ff" strokeWidth="0.85" opacity={0.55} />
      {!r && (
        <motion.circle
          cx="50"
          cy="58"
          r="2.2"
          fill="#6eb5ff"
          opacity={0.35}
          animate={{ r: [2.2, 3.4, 2.2], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </SvgShell>
  );
}

/** Era 1 — spectrum notch: anomaly in a calm trace */
export function BeatSignal({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <SvgShell>
      <rect width="100" height="100" fill="#080b10" />
      <path
        d="M8 58 C25 58 30 58 38 58 C44 58 48 52 50 58 C52 64 56 58 62 58 C72 58 85 58 92 58"
        fill="none"
        stroke="#2a3a52"
        strokeWidth="0.7"
      />
      <path d="M8 58 L92 58" stroke="#1a2838" strokeWidth="0.35" />
      <path
        d="M42 58 M44 52 L46 48 L50 38 L54 48 L56 52 L58 58"
        fill="none"
        stroke="#ff8a65"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {!r && (
        <motion.line
          x1="50"
          y1="38"
          x2="50"
          y2="72"
          stroke="rgba(255,138,101,0.25)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
      )}
      <text x="50" y="92" textAnchor="middle" fill="#5a6d88" fontSize="3.4" fontFamily="system-ui">
        structured excess in the hiss
      </text>
    </SvgShell>
  );
}

/** Era 2 — chain: mirrored suspicion loop */
export function BeatChain({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <SvgShell>
      <rect width="100" height="100" fill="#0a0d14" />
      <ellipse cx="35" cy="50" rx="16" ry="22" fill="none" stroke="#3d5578" strokeWidth="0.55" opacity={0.7} />
      <ellipse cx="65" cy="50" rx="16" ry="22" fill="none" stroke="#3d5578" strokeWidth="0.55" opacity={0.7} />
      <circle cx="35" cy="50" r="3.5" fill="#7a9cc8" opacity={0.9} />
      <circle cx="65" cy="50" r="3.5" fill="#c87878" opacity={0.9} />
      <path d="M38.5 50 L61.5 50" stroke="#9aaccc" strokeWidth="0.5" strokeDasharray="2 2" opacity={0.5} />
      <path
        d="M35 42 Q50 28 65 42"
        fill="none"
        stroke="#5a7ab0"
        strokeWidth="0.45"
        strokeDasharray="3 2"
        opacity={0.6}
      />
      <path
        d="M65 58 Q50 72 35 58"
        fill="none"
        stroke="#5a7ab0"
        strokeWidth="0.45"
        strokeDasharray="3 2"
        opacity={0.6}
      />
      {!r && (
        <motion.path
          d="M42 50 Q50 50 58 50"
          fill="none"
          stroke="rgba(110,181,255,0.35)"
          strokeWidth="0.7"
          animate={{ pathLength: [0.3, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      )}
    </SvgShell>
  );
}

/** Era 3 — explosion: capability staircase vs delay */
export function BeatExplosion({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <SvgShell>
      <rect width="100" height="100" fill="#0c1018" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={15 + i * 11}
          y={68 - i * i * 1.15}
          width="8"
          height={4 + i * i * 1.15}
          fill={`hsl(${210 - i * 8}, ${55 + i * 5}%, ${38 + i * 4}%)`}
          opacity={0.55 + i * 0.07}
        />
      ))}
      <path
        d="M12 82 L88 28"
        fill="none"
        stroke="rgba(255,200,160,0.35)"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
      {!r && (
        <motion.circle
          cx={24}
          cy={60}
          r="2.5"
          fill="#ffcc88"
          animate={{ cx: [24, 56, 78], cy: [60, 40, 30] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <text x="50" y="94" textAnchor="middle" fill="#7a879c" fontSize="3.2" fontFamily="system-ui">
        light-lag vs compounding leverage
      </text>
    </SvgShell>
  );
}

/** Era 4 — router: five-way fork as carved pillars */
export function BeatRouter({ thumb }: BeatVisualProps) {
  const reduce = useReducedMotion() || thumb;
  return (
    <SvgShell>
      <rect width="100" height="100" fill="#080a10" />
      <circle cx="50" cy="52" r="4" fill="#3d4f6f" stroke="#6eb5ff" strokeWidth="0.4" />
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = -Math.PI / 2 + (i * (2 * Math.PI)) / 5;
        const x2 = 50 + Math.cos(angle) * 38;
        const y2 = 52 + Math.sin(angle) * 34;
        return (
          <g key={i}>
            <line x1="50" y1="52" x2={x2} y2={y2} stroke="#3a4d68" strokeWidth="1" strokeLinecap="round" />
            <circle cx={x2} cy={y2} r="3.2" fill={['#5c7ab8', '#6a9a7a', '#b87a8a', '#b0a06e', '#8a6eb0'][i]} opacity={0.85} />
          </g>
        );
      })}
      {!reduce && (
        <motion.circle
          cx="50"
          cy="52"
          r="6"
          fill="none"
          stroke="rgba(110,181,255,0.2)"
          animate={{ r: [6, 28], opacity: [0.4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </SvgShell>
  );
}

export const coreBeatVisuals = {
  start: BeatStart,
  signal: BeatSignal,
  chain: BeatChain,
  explosion: BeatExplosion,
  router: BeatRouter,
} as const;
