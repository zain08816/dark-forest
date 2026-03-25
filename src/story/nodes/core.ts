import type { StoryNode } from '../types';

export const coreNodes: StoryNode[] = [
  {
    id: 'start',
    title: 'The Great Silence',
    body: `Your civilization can listen across light-years. The sky is full of stars and chemistry, yet it stays silent—no clear hellos, no structures you can point to and say *they built that*. That mismatch is the Fermi paradox: a crowded universe that feels empty.

This is not a story about what aliens are *like*. It is a test of one cold idea: the Dark Forest. Many worlds may exist; they keep their voices down because being seen can be dangerous. You start where every watcher starts—in the dark, not knowing who else is breathing.`,
    whyItMatters:
      'The scenario treats the Dark Forest as a game-theoretic sketch, not a proof about the real universe.',
    choices: [{ label: 'Begin the listening campaign', nextId: 'signal' }],
    visual: { kind: 'starfield', exposure: 0.1, crosshair: false },
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
        label: 'Analyze quietly and share nothing',
        nextId: 'chain',
        effects: { suspicion: 0.05 },
        hint: 'Keep the finding inside a small circle; the wider world still senses something shifting.',
      },
      {
        label: 'Alert allied institutes and widen the search',
        nextId: 'chain',
        effects: { detectability: 0.15, suspicion: -0.05 },
        hint: 'Pool minds and instruments; coordinated search trades stealth for shared certainty.',
      },
    ],
    visual: { kind: 'starfield', exposure: 0.25, crosshair: true },
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
    choices: [{ label: 'Continue', nextId: 'explosion' }],
    visual: { kind: 'network', actorCount: 4, edgeDensity: 0.4 },
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
    choices: [{ label: 'Face the strategic choice', nextId: 'router' }],
    visual: { kind: 'gauges' },
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
    body: `A quiet sky does not prove the Dark Forest. It only proves you still lack answers. From here the story splits five ways. Each path keeps the same chill at its center—being seen, being guessed, being outpaced by someone you will never meet—but each changes *what* you fear most.

You can take the **classic fork**: shout, hide, or tap the dark with a small, careful knock. Or you follow **machines that copy themselves** until no one remembers who launched them; the **zoo** idea, where silence is a rule someone enforced; a universe **already carved up** by those who arrived early; or the **long wait**, where civilizations put off noisy work until the deep future changes the math.

None of these is a prediction. They are lenses. Pick one and see what breaks.`,
    choices: [
      {
        label: 'Classic exposure — bright signal, deep silence, or bare timing ping',
        nextId: 'strategy',
        effects: { suspicion: 0.02 },
        hint: `Three moves. Each teaches the sky something different about you.

**Broadcast** is a bet that honesty will be answered in kind—not with a shot fired early out of dread of how strong you might become. **Going dark** buys stealth and costs shared knowledge; you may still be found by leaks you did not plan. A **minimal ping** says *we are here* without much else—but even a thin signal can tighten the **chain of suspicion** instead of loosening it.`,
      },
      {
        label: 'Probe tracks — von Neumann machines and mandates that outlive their makers',
        nextId: 'probe_intro',
        effects: { suspicion: 0.06 },
        hint: `Here the danger is not only minds like yours. It is **machines** that copy themselves—wreckage, old code, orders left behind when their makers are dust.

You follow metal that should not exist in your timeline, watch spread surge until something—energy, error, raw stuff—finally chokes it, and ask whether the silent sky is the calm **after** such a bloom, or the quiet **before** the next one. Hate is optional; duplication and distance are enough.

The ending depends on whether you face an enemy who can bargain—or only **heirs** still running a command no one can cancel.`,
      },
      {
        label: 'Zoo hypothesis — the Great Silence as quarantine or custodianship',
        nextId: 'zoo_gate',
        effects: { detectability: -0.05 },
        hint: `Maybe the silence is **on purpose**—old powers agreeing not to stomp young worlds, or ethics that treat your planet as a living exhibit. The fear shifts from “they are all hiding” to “we were never alone; we were watched.”

You hunt for tiny regularities in the data, memos that sound like maintenance, not scripture, and the day your curiosity bumps a fence you did not agree to.

The close depends on whether such rules hold when someone cheats, whether you are only seeing patterns in noise—or whether knowing the house rules makes you a problem for the house.`,
      },
      {
        label: 'Expansion scar — rivals who ate the easy real estate before you arrived',
        nextId: 'expand_shell',
        effects: { detectability: 0.12 },
        hint: `In this fork, stealth is not the whole story. Some actors may simply **spread**—turning matter into shell after shell until the easy ground is gone. The sky looks empty because the good seats were taken long before you looked up.

You track a cold direction in the maps, dust warmed in bursts you cannot date, rules in the gas that feel imported—less “ship at the door” than *your* patch of physics bearing someone else’s fingerprints.

Endings turn on who moved first, whether you can fit into their order or must refuse it, and whether fear of the forest still matters when the map already shows hunger written plain.`,
      },
      {
        label: 'The long wait — civilizations postponing loud, costly phases',
        nextId: 'wait_patience',
        effects: { tech: 0.05 },
        hint: `Perhaps nobody is screaming because the **clock** is wrong. Advanced worlds might postpone heavy, hot work until the universe cools enough that serious thought becomes cheap. From far away, waiting and nothingness look the same.

You build governments meant to last ice ages, treat boredom as law, and learn whether stillness saved your options—or cost you the only years when a move was possible.

The ending weighs discipline against regret: the forest may simply be **not loud yet**. You included.`,
      },
    ],
    visual: { kind: 'network', actorCount: 6, edgeDensity: 0.55 },
    timelineSegment: {
      title: 'Era 4 — Fork',
      summary: 'One sky; several incompatible stories.',
      t: 4,
      yearApprox: 2040,
    },
  },
];
