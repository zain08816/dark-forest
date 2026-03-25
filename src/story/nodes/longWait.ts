import type { StoryNode } from '../types';

export const longWaitTrackNodes: StoryNode[] = [
  {
    id: 'wait_patience',
    title: 'Thermodynamic patience',
    body: `Another way to read the silence: not fear at every window, but **postponement**. A civilization far enough along might shelve its hottest, loudest work until the universe ages into a cheaper stage for serious thought. The wait is math, not timidity. From outside, their pause and their absence look the same.

This says nothing about ghosts in your Kuiper belt. It only says that patience on billion-year scales **looks like nothing** to a short-lived watcher.`,
    whyItMatters:
      'Separates “nobody there” from “nobody loud yet”—timing as first-class variable.',
    choices: [{ label: 'Institutionalize the slow course', nextId: 'wait_commit' }],
    visual: { kind: 'starfield', exposure: 0.18, crosshair: false },
    timelineSegment: {
      title: 'Long wait — Deferred cost',
      summary: 'Loud epochs postponed, not denied.',
      t: 50,
      yearApprox: 2054,
    },
  },
  {
    id: 'wait_commit',
    title: 'Constitutions for ice ages',
    body: `Governments learn to think in **long nows**: vaults that will not rot, languages locked so meaning cannot drift, laws against bright monuments that might light up someone else’s calendar. Critics hear religion; planners hear **option value**—keeping strength in reserve without shouting where you sleep.

The centuries feel unbearably slow. The instruments still say: *empty above*.`,
    choices: [{ label: 'Cross into deep time deliberately', nextId: 'wait_deep' }],
    visual: { kind: 'gauges' },
    timelineSegment: {
      title: 'Long wait — Institutional tempo',
      summary: 'Boredom as shield.',
      t: 51,
      yearApprox: 2300,
    },
  },
  {
    id: 'wait_deep',
    title: 'Punctuation on geological scales',
    body: `Epochs peel away. Tongues change; norms reset; names you loved become footnotes. Still the bargain holds: **no drunken beacon**, no graffiti on the stars for pride. You rest like seed under frost, betting the thaw will favor those who did not twitch.

From inside it feels like faith. From outside it might be **discipline**—or fear dressed as wisdom.`,
    choices: [{ label: 'Let a cycle complete', nextId: 'wait_stir' }],
    visual: { kind: 'starfield', exposure: 0.1, crosshair: false },
    timelineSegment: {
      title: 'Long wait — Buried intent',
      summary: 'Civilizational hibernation by policy.',
      t: 52,
      yearApprox: 12000,
      yearLabel: 'Then spans of ~10⁴–10⁶ years',
    },
  },
  {
    id: 'wait_stir',
    title: 'Calibration shifts',
    body: `Old sensors—you did not build them; you keep them because tradition demands it—whisper of a shift: the background a fraction cooler; the old thermodynamic trade finally tipping toward **cold thought**. Far off, **others who waited** stir on their own clocks. The forest was never empty. It was **between rings**.

What the ringing means—trade, hunger, or shared lack—is still ahead of you.`,
    choices: [{ label: 'Answer the wake', nextId: 'wait_fork' }],
    visual: { kind: 'network', actorCount: 6, edgeDensity: 0.6 },
    timelineSegment: {
      title: 'Long wait — Stirring',
      summary: 'Synchrony ends voluntary quiet.',
      t: 53,
      yearLabel: 'Many millions of years later',
    },
  },
  {
    id: 'wait_fork',
    title: 'Conclave, solitude, probe',
    body: `You can **signal with care**—find allies you never wanted, trade fresh visibility for maps of the waking dark. You can stay **alone**—refuse hands you cannot prove are clean. Or you can **listen hard and promise little**, treating every welcome as **possible bait** until the sky proves otherwise.

The cruel joke: patience is judged hardest **the day it stops**.`,
    choices: [
      {
        label: 'Join the waking cooperative',
        nextId: 'wait_end_conclave',
        effects: { detectability: 0.25, tech: 0.25 },
      },
      {
        label: 'Stay alone; keep your signature thin',
        nextId: 'wait_end_solo',
        effects: { detectability: -0.2, suspicion: 0.15 },
      },
      {
        label: 'Trust sensors over voices',
        nextId: 'wait_end_snare',
        effects: { detectability: 0.12, suspicion: 0.28 },
      },
    ],
    visual: { kind: 'broadcast', active: false, coneWidth: 0.25 },
    timelineSegment: {
      title: 'Long wait — Eyes open',
      summary: 'Trust, isolation, or verification.',
      t: 54,
      yearLabel: 'Deep-time wake cycle',
    },
  },
  {
    id: 'wait_end_conclave',
    title: 'Hall of debtors to delay',
    body: `What gathers is **frayed**—old feuds, half-dead archives, file formats older than your sun—but **alive**. Trade flickers back: recipes for cold minds, charts of edges still bright with **young**, rash voices.

You step into noise **late**, and not alone. The long quiet begins to look like a **waiting room** whose doors always stuck.`,
    choices: [],
    visual: { kind: 'network', actorCount: 10, edgeDensity: 0.42 },
    timelineSegment: {
      title: 'Ending — Crowded after hours',
      summary: 'Synchronized thrift repopulates the sky.',
      t: 55,
      yearLabel: 'Billions of years in the long now',
    },
  },
  {
    id: 'wait_end_solo',
    title: 'Solitary dawn',
    body: `You wake into voices you will not answer—listening through narrow pipes, turning away from open hands you cannot verify. That may be wisdom. It may be the price of **alliances** you will never know you missed.

The Fermi riddle, told this way, is a **stagger of alarms**: you slept through a meeting the careful held without you.`,
    choices: [],
    visual: { kind: 'starfield', exposure: 0.09, crosshair: true },
    timelineSegment: {
      title: 'Ending — Lonely breakfast',
      summary: 'Survival without trust; growth unclear.',
      t: 55,
      yearLabel: 'Far future, local-quiet stance',
    },
  },
  {
    id: 'wait_end_snare',
    title: 'Honey for yawners',
    body: `The instruments show something too neat to trust: a rallying light that sweetly rewards the first ship to say *yes*. Maybe no one alive tends the trap anymore—only **habit** burned into the spectrum.

Patience buys time. It does not **ban** the teeth. After a long deferral, *sharp* can simply mean **cruel**.`,
    choices: [],
    visual: { kind: 'strike', armed: true, beamProgress: 0.55 },
    timelineSegment: {
      title: 'Ending — Wake-up lure',
      summary: 'The reunion channel doubles as bait.',
      t: 55,
      yearLabel: 'Post-wait era, bruised inference',
    },
  },
];
