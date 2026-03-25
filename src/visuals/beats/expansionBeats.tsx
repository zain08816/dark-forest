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

/** Carved sector — comet-shaped void */
export function BeatExpandShell(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#050608" />
      {Array.from({ length: 40 }, (_, i) => {
        const x = (i * 7.3) % 96;
        const y = (i * 11.7) % 96;
        return <circle key={i} cx={x + 2} cy={y + 2} r="0.45" fill="#a8b8d0" opacity={0.25} />;
      })}
      <polygon points="50,50 100,0 100,100" fill="rgba(12,14,22,0.92)" stroke="#4a6088" strokeWidth="0.35" />
      <text x="74" y="44" fill="#5a7088" fontSize="3" fontFamily="system-ui" transform="rotate(32 74 44)">
        picked clean
      </text>
    </Svg>
  );
}

/** Dust wakes — IR spiral arms */
export function BeatExpandRush({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <Svg>
      <rect width="100" height="100" fill="#080604" />
      <path
        d="M50 50 Q82 30 70 18 Q55 12 40 20 Q28 35 38 50 Q48 70 72 74 Q88 70 84 52"
        fill="none"
        stroke="#5a3020"
        strokeWidth="2"
        opacity={0.45}
      />
      <path
        d="M50 50 Q20 65 22 82 Q35 92 55 88"
        fill="none"
        stroke="#7a4830"
        strokeWidth="1.2"
        opacity={0.35}
      />
      {!r && (
        <motion.circle
          cx="64"
          cy="36"
          r="2"
          fill="#ff8866"
          opacity={0.4}
          animate={{ opacity: [0.15, 0.55, 0.15], r: [1.5, 3, 1.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      )}
    </Svg>
  );
}

/** Shear boundary — two flow fields */
export function BeatExpandFront(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#07080c" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`a-${i}`}
          x1="10"
          y1={20 + i * 12}
          x2="45"
          y2={22 + i * 11}
          stroke="#3a4a68"
          strokeWidth="0.5"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`b-${i}`}
          x1="55"
          y1={24 + i * 11}
          x2="92"
          y2={18 + i * 12}
          stroke="#4a3848"
          strokeWidth="0.5"
        />
      ))}
      <line x1="50" y1="14" x2="50" y2="86" stroke="#6eb5ff" strokeWidth="0.35" strokeDasharray="4 4" opacity={0.55} />
    </Svg>
  );
}

/** Under the wave — three survival icons */
export function BeatExpandFork(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#060810" />
      <path d="M8 30 Q50 18 92 28 L92 78 Q50 88 8 78 Z" fill="#121820" stroke="#3a4a60" strokeWidth="0.5" />
      <g transform="translate(22,44)">
        <polygon points="0,18 8,0 16,18" fill="#5a9a6a" opacity={0.8} />
      </g>
      <g transform="translate(42,46)">
        <rect x="0" y="0" width="16" height="14" rx="2" fill="#4a5870" opacity={0.85} />
      </g>
      <g transform="translate(64,44)">
        <path d="M0 18 L8 4 L16 18 M4 12 L12 12" stroke="#c07070" strokeWidth="1.2" fill="none" />
      </g>
    </Svg>
  );
}

/** Client node feeding upstream hub */
export function BeatExpandEndServe(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#070910" />
      <circle cx="50" cy="32" r="10" fill="#3a4a60" stroke="#6eb5ff" strokeWidth="0.45" />
      <circle cx="28" cy="62" r="5" fill="#4a5a70" />
      <circle cx="72" cy="62" r="5" fill="#4a5a70" />
      <line x1="33" y1="58" x2="42" y2="38" stroke="#5a6a80" strokeWidth="0.6" />
      <line x1="67" y1="58" x2="58" y2="38" stroke="#5a6a80" strokeWidth="0.6" />
    </Svg>
  );
}

/** Lint clusters in void */
export function BeatExpandEndBunker(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#050608" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <circle cx={20 + (i % 3) * 22} cy={28 + Math.floor(i / 3) * 28} r="5" fill="#121820" stroke="#2a3038" strokeWidth="0.4" />
          <circle cx={20 + (i % 3) * 22 + 3} cy={28 + Math.floor(i / 3) * 28 - 2} r="0.6" fill="#3a4550" opacity={0.5} />
        </g>
      ))}
      <text x="50" y="94" textAnchor="middle" fill="#3a4550" fontSize="3" fontFamily="system-ui">
        heat smeared thin
      </text>
    </Svg>
  );
}

/** Refusal echo — indelible streak */
export function BeatExpandEndSpark(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#050508" />
      <line x1="18" y1="72" x2="82" y2="28" stroke="#3a3030" strokeWidth="0.6" opacity={0.5} />
      <line x1="20" y1="70" x2="80" y2="30" stroke="#ff8866" strokeWidth="1.4" strokeLinecap="round" opacity={0.75} />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={30 + i * 10}
          y1={40 + i * 5}
          x2={32 + i * 10}
          y2={68}
          stroke="rgba(255,140,100,0.15)"
          strokeWidth="4"
        />
      ))}
    </Svg>
  );
}

export const expansionBeatVisuals = {
  expand_shell: BeatExpandShell,
  expand_rush: BeatExpandRush,
  expand_front: BeatExpandFront,
  expand_fork: BeatExpandFork,
  expand_end_serve: BeatExpandEndServe,
  expand_end_bunker: BeatExpandEndBunker,
  expand_end_spark: BeatExpandEndSpark,
} as const;
