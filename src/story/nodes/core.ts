import type { StoryNode } from '../types';

export const coreNodes: StoryNode[] = [
  {
    id: 'start',
    title: 'The Great Silence',
    body: `Your civilization can listen across light-years. The sky is full of stars and chemistry, yet it stays silent—no clear hellos, no structures you can point to and say *they built that*. That mismatch is the Fermi paradox: a crowded universe that feels empty.

This is not a story about what aliens are *like*. It is a test of one cold idea: the Dark Forest. Many worlds may exist; they keep their voices down because being seen can be dangerous. You start where every watcher starts—in the dark, not knowing who else is breathing.`,
    whyItMatters:
      'The scenario treats the Dark Forest as a game-theoretic sketch, not a proof about the real universe.',
    choices: [{ label: 'Listen across the sky', nextId: 'signal' }],
    timelineSegment: {
      title: 'Era 0 — Listening',
      summary: 'A civilization turns its instruments outward.',
      t: 0,
      yearApprox: 2026,
    },
  },
  {
    id: 'signal',
    title: 'Anomaly',
    body: `Your arrays catch something organized—faint, but not like the usual hiss of creation. It might be nature showing off. It might be a mistake. It might be bait. You cannot read intent across the light-years; you only know the silence has a notch in it.

Whatever it is, it is not a handshake. It is proof that the night has rules you did not write.`,
    whyItMatters:
      'In the Dark Forest framing, evidence of others starts the clock on suspicion and exposure.',
    choices: [
      {
        label: 'Keep the finding secret; analyze in-house',
        nextId: 'chain',
        effects: { suspicion: 0.05 },
        hint: 'Keep the finding inside a small circle; the wider world still senses something shifting.',
      },
      {
        label: 'Tell allies and widen the search',
        nextId: 'chain',
        effects: { detectability: 0.15, suspicion: -0.05 },
        hint: 'Pool minds and instruments; coordinated search trades stealth for shared certainty.',
      },
    ],
    timelineSegment: {
      title: 'Era 1 — First ambiguity',
      summary: 'A structured signal appears; intent is unknown.',
      t: 1,
      yearApprox: 2029,
    },
  },
  {
    id: 'chain',
    title: 'Chain of suspicion',
    body: `If another mind is out there, you cannot know its heart. It cannot know yours. Each of you imagines what the other might do next—and what the other imagines *you* imagining. That endless mirror is the **chain of suspicion**.

You do not need hate for it to work. You only need risk in the dark. One player you cannot predict is enough to make silence look like wisdom.`,
    choices: [{ label: 'Next: when tech can outpace light', nextId: 'explosion' }],
    timelineSegment: {
      title: 'Era 2 — Chain of suspicion',
      summary: 'Uncertainty compounds across minds you cannot read.',
      t: 2,
      yearApprox: 2032,
    },
  },
  {
    id: 'explosion',
    title: 'Technological explosion',
    body: `Do not picture a frozen enemy. Capabilities can compound—each leap making the next one easier. A quiet neighbor can become a giant before your warnings travel far enough to matter. That possibility is **technological explosion**: a reason to worry before anyone shoots.

You are not claiming it always happens. You are asking what you should do if it *can*.`,
    choices: [{ label: 'Pick a scenario', nextId: 'router' }],
    timelineSegment: {
      title: 'Era 3 — Non-constant threat',
      summary: 'Capabilities may change faster than light can carry news.',
      t: 3,
      yearApprox: 2036,
    },
  },
  {
    id: 'router',
    title: 'Branching scenarios',
    body: `A quiet sky does not prove the Dark Forest—it only means you still lack an explanation. Here the narrative splits five ways. Every branch keeps the same strategic bite—being seen, misread, or outrun by actors you will never meet—but each one names a different *driver* of the silence.

**Classic exposure:** be loud, vanish, or ping with almost nothing.

**Probes:** self-replicating hardware still following orders no living builder can cancel.

**Zoo:** silence as policy—custodians who agreed (or were forced) to leave young worlds alone.

**Expansion:** the easy ground was taken long ago; your sky looks empty because you are downstream.

**Long wait:** advanced civs defer hot, obvious megaprojects until deep time makes them cheap—“gone” and “not loud yet” look the same.

These are thought experiments, not predictions. Pick one.`,
    choices: [
      {
        label: 'Classic: broadcast, hide, or minimal ping',
        nextId: 'strategy',
        effects: { suspicion: 0.02 },
        hint: `Three stances; each changes what distant observers can infer.

**Broadcast** assumes openness draws cooperation rather than a preemptive strike driven by fear of your growth.

**Going dark** shrinks your signature but costs shared knowledge; accidents can still expose you.

**A minimal ping** admits existence without detail—yet any signal above the noise can tighten the chain of suspicion.`,
      },
      {
        label: 'Probes: self-replicators and dead-hand orders',
        nextId: 'probe_intro',
        effects: { suspicion: 0.06 },
        hint: `The threat is not only alien minds but **self-replicators**: machines duplicating under mandates no living founder can revoke.

You track impossible wreckage, model spread until friction or error bends the curve, and ask whether the hush is ash after a past bloom or calm before the next. Malice is optional; exponentials and light-lag are not.

Resolutions hinge on whether anyone alive can negotiate—or only descendants still executing a mandate.`,
      },
      {
        label: 'Zoo: silence as quarantine or caretaking',
        nextId: 'zoo_gate',
        effects: { detectability: -0.05 },
        hint: `Maybe the silence is **by design**—treaty, taboo, or a preserve: “they are not hiding from you; they left you alone.”

You look for caretaker traces in survey residuals and memos that read like operations, not scripture—until curiosity hits a boundary you never ratified.

Outcomes turn on whether the rules survive cheaters, whether the pattern is real, and whether proof makes you an asset or a liability to whoever enforces the fence.`,
      },
      {
        label: 'Expansion: late to an already carved-up sky',
        nextId: 'expand_shell',
        effects: { detectability: 0.12 },
        hint: `Stealth is only half the picture. Some actors **expand**—turning matter into structure until latecomers inherit scraps. Empty sky can mean you missed the land rush.

Evidence skews directional: thinned sectors, episodic dust heating, local physics that feels “tuned” upstream—less a ship at the door than a tide you did not start.

Closures hinge on chronology, whether you can live inside their order or must defy it, and whether dark-forest logic still applies once the map already shows appetite.`,
      },
      {
        label: 'Long wait: loud work deferred to deep time',
        nextId: 'wait_patience',
        effects: { tech: 0.05 },
        hint: `Perhaps nobody is screaming because the **timeline** is skewed: civs may shelve hot, visible engineering until cosmic cooling makes megascale work cheap. Observers with short lives read long deferrals as absence.

You build institutions for ice ages and forbid flashy beacons, betting patience preserves option value.

The ending weighs whether stillness was wisdom—or whether you slept through the only window to matter. The forest may simply **not be loud yet**; you are part of that datum.`,
      },
    ],
    timelineSegment: {
      title: 'Era 4 — Fork',
      summary: 'One sky; several incompatible stories.',
      t: 4,
      yearApprox: 2040,
    },
  },
];
