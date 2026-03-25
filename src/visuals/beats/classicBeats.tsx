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

/** Classic — three stances as equal doorways */
export function BeatStrategy({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <Svg>
      <rect width="100" height="100" fill="#090c12" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${22 + i * 28}, 38)`}>
          <rect x="0" y="0" width="18" height="40" rx="2" fill="#121a28" stroke="#3a5068" strokeWidth="0.8" />
          <rect x="4" y="8" width="10" height="10" rx="1" fill={['#6eb5ff', '#2a3848', '#c9a86c'][i]} opacity={0.75} />
        </g>
      ))}
      {!r && (
        <motion.line
          x1="50"
          y1="28"
          x2="50"
          y2="34"
          stroke="rgba(200,210,230,0.4)"
          strokeWidth="0.6"
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
      )}
    </Svg>
  );
}

/** Bright megaphone cone into the sky */
export function BeatBroadcast({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <Svg>
      <rect width="100" height="100" fill="#06080c" />
      <circle cx="50" cy="78" r="13" fill="#2d4a6f" />
      <polygon points="50,78 20,12 80,12" fill="rgba(200,220,255,0.35)" stroke="rgba(240,248,255,0.5)" strokeWidth="0.5" />
      {[1, 2, 3].map((i) =>
        !r ? (
          <motion.ellipse
            key={i}
            cx="50"
            cy="40"
            rx={8 + i * 6}
            ry={4 + i * 2.5}
            fill="none"
            stroke="rgba(180,210,255,0.25)"
            strokeWidth="0.2"
            animate={{ opacity: [0.6, 0], rx: [8 + i * 6, 20 + i * 10] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35, ease: 'easeOut' }}
          />
        ) : null
      )}
    </Svg>
  );
}

/** Cocoon shell wrapping a dim world */
export function BeatHide(_props: BeatVisualProps) {
  return (
    <Svg>
      <defs>
        <radialGradient id="h1" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1a2538" />
          <stop offset="100%" stopColor="#050608" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#040508" />
      <circle cx="50" cy="50" r="22" fill="url(#h1)" opacity={0.85} />
      <ellipse cx="50" cy="50" rx="38" ry="34" fill="none" stroke="#2d3a4a" strokeWidth="2.2" opacity={0.9} />
      <ellipse cx="50" cy="50" rx="44" ry="40" fill="none" stroke="#1e2838" strokeWidth="0.6" opacity={0.6} />
      <text x="50" y="92" textAnchor="middle" fill="#4d5d70" fontSize="3.2" fontFamily="system-ui">
        emissions folded inward
      </text>
    </Svg>
  );
}

/** Single hairline ping */
export function BeatMinimal({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <Svg>
      <rect width="100" height="100" fill="#070910" />
      <line x1="12" y1="50" x2="88" y2="50" stroke="#1a2434" strokeWidth="0.4" />
      {!r ? (
        <motion.line
          x1="48"
          y1="50"
          x2="52"
          y2="50"
          stroke="#7eb8ff"
          strokeWidth="1.4"
          strokeLinecap="round"
          animate={{ x1: [47, 49], x2: [53, 51], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
      ) : (
        <line x1="49" y1="50" x2="51" y2="50" stroke="#7eb8ff" strokeWidth="1.4" strokeLinecap="round" />
      )}
    </Svg>
  );
}

/** Bright sky answered: converging hazard vectors */
export function BeatBroadcastEnd({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <Svg>
      <rect width="100" height="100" fill="#050608" />
      <circle cx="50" cy="48" r="6" fill="#8ab4e8" />
      {[20, 35, 65, 80].map((x, i) => (
        <line key={i} x1={x} y1={i % 2 === 0 ? 12 : 88} x2="50" y2="48" stroke="#d85c4a" strokeWidth="0.65" opacity={0.75} />
      ))}
      {!r && (
        <motion.circle
          cx="50"
          cy="48"
          r="4"
          fill="rgba(255,120,90,0.35)"
          animate={{ r: [3, 12, 5], opacity: [0.8, 0.1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      )}
    </Svg>
  );
}

/** Forest canopy hush - vertical striae */
export function BeatHideEnd(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#050705" />
      {Array.from({ length: 16 }, (_, i) => (
        <line
          key={i}
          x1={8 + i * 5.5}
          y1="12"
          x2={6 + i * 5.5}
          y2="88"
          stroke="#1a2820"
          strokeWidth="1.2"
          opacity={0.35 + (i % 4) * 0.08}
        />
      ))}
      <circle cx="50" cy="72" r="2" fill="#3a5040" opacity={0.5} />
      <text x="50" y="96" textAnchor="middle" fill="#3d5245" fontSize="3" fontFamily="system-ui">
        canopy geometry, no visitor
      </text>
    </Svg>
  );
}

/** Ambiguous read: one source, split shadows */
export function BeatAmbiguousEnd(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#080a10" />
      <circle cx="50" cy="38" r="4" fill="#c9d8f0" />
      <path d="M50 42 L32 78 M50 42 L50 78 M50 42 L68 78" stroke="#4a6188" strokeWidth="0.9" opacity={0.85} />
      <ellipse cx="32" cy="80" rx="8" ry="4" fill="#3d3048" opacity={0.65} transform="rotate(-20 32 80)" />
      <ellipse cx="50" cy="82" rx="8" ry="4" fill="#304038" opacity={0.65} />
      <ellipse cx="68" cy="80" rx="8" ry="4" fill="#483830" opacity={0.65} transform="rotate(20 68 80)" />
    </Svg>
  );
}

export const classicBeatVisuals = {
  strategy: BeatStrategy,
  broadcast: BeatBroadcast,
  hide: BeatHide,
  minimal: BeatMinimal,
  broadcast_end: BeatBroadcastEnd,
  hide_end: BeatHideEnd,
  ambiguous_end: BeatAmbiguousEnd,
} as const;
