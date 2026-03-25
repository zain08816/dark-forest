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

/** Invisible fence — dashed great circle */
export function BeatZooGate({ thumb }: BeatVisualProps) {
  const r = useReducedMotion() || thumb;
  return (
    <Svg>
      <rect width="100" height="100" fill="#07090e" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#2a3f58" strokeWidth="0.45" strokeDasharray="6 5" opacity={0.7} />
      <circle cx="50" cy="50" r="28" fill="#0e121a" stroke="#3a4a60" strokeWidth="0.35" opacity={0.9} />
      {!r && (
        <motion.g
          style={{ transformOrigin: '50px 50px' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="rgba(110,181,255,0.12)"
            strokeWidth="0.8"
            strokeDasharray="4 8"
          />
        </motion.g>
      )}
    </Svg>
  );
}

/** Correlated residuals — survey grid with one bright defect */
export function BeatZooWatch(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#080a10" />
      {Array.from({ length: 8 }, (_, i) =>
        Array.from({ length: 8 }, (_, j) => (
          <line
            key={`g-${i}-${j}`}
            x1={14 + j * 10}
            y1={18 + i * 10}
            x2={14 + j * 10 + 10}
            y2={18 + i * 10}
            stroke="#1a2230"
            strokeWidth="0.35"
          />
        ))
      )}
      <rect x="44" y="38" width="12" height="8" fill="rgba(255,200,120,0.22)" stroke="#c9a060" strokeWidth="0.4" />
    </Svg>
  );
}

/** Sealed packet — institutional drop */
export function BeatZooSlip(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#0a0c12" />
      <rect x="28" y="32" width="44" height="40" rx="2" fill="#161c28" stroke="#4a5568" strokeWidth="0.6" />
      <polygon points="28,32 50,22 72,32" fill="#1e2434" stroke="#5a6578" strokeWidth="0.5" />
      <line x1="36" y1="48" x2="64" y2="48" stroke="#3a4558" strokeWidth="0.45" />
      <line x1="36" y1="54" x2="58" y2="54" stroke="#3a4558" strokeWidth="0.45" />
      <circle cx="68" cy="58" r="3" fill="none" stroke="#8a5060" strokeWidth="0.5" strokeDasharray="2 2" />
    </Svg>
  );
}

/** Shock to body politic — cracking seal */
export function BeatZooFork(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#080810" />
      <circle cx="50" cy="50" r="22" fill="none" stroke="#4a5880" strokeWidth="1.2" />
      <path d="M50 28 L50 72 M28 50 L72 50" stroke="#a05050" strokeWidth="0.7" opacity={0.85} />
      <path d="M36 36 L64 64 M64 36 L36 64" stroke="#6a6088" strokeWidth="0.45" opacity={0.65} />
    </Svg>
  );
}

/** Stewarded calm — soft enclosure bars */
export function BeatZooEndCalm(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#06080a" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={30 + i * 8} y1="24" x2={26 + i * 8} y2="76" stroke="#2a3438" strokeWidth="1.5" opacity={0.45} />
      ))}
      <circle cx="50" cy="50" r="8" fill="#1a2028" stroke="#3a4850" strokeWidth="0.5" />
    </Svg>
  );
}

/** Breaking glass radial */
export function BeatZooEndStorm(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#050508" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + Math.cos(a) * 42}
            y2={50 + Math.sin(a) * 42}
            stroke="#6a8ab0"
            strokeWidth="0.55"
            opacity={0.5}
          />
        );
      })}
      <circle cx="50" cy="50" r="14" fill="none" stroke="#c0d8f0" strokeWidth="0.4" opacity={0.5} />
    </Svg>
  );
}

/** Circumscribed truth — inner ring / outer ring */
export function BeatZooEndDeal(_props: BeatVisualProps) {
  return (
    <Svg>
      <rect width="100" height="100" fill="#090b10" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#2a3040" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="20" fill="#0e121c" stroke="#6eb5ff" strokeWidth="0.45" opacity={0.85} />
      <circle cx="50" cy="50" r="9" fill="#2a3548" />
      <text x="50" y="88" textAnchor="middle" fill="#5a6678" fontSize="3" fontFamily="system-ui">
        concentric knowing
      </text>
    </Svg>
  );
}

export const zooBeatVisuals = {
  zoo_gate: BeatZooGate,
  zoo_watch: BeatZooWatch,
  zoo_slip: BeatZooSlip,
  zoo_fork: BeatZooFork,
  zoo_end_calm: BeatZooEndCalm,
  zoo_end_storm: BeatZooEndStorm,
  zoo_end_deal: BeatZooEndDeal,
} as const;
