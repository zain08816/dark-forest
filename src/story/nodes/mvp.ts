import type { StoryNode } from '../types';

export const mvpNodes: StoryNode[] = [
  {
    id: 'start',
    title: 'The Great Silence',
    body: `You model a civilization advanced enough to listen across light-years. The sky offers plenty of chemistry and energy, yet no obvious conversations—no unambiguous broadcasts, no megastructures you can trust. This is the Fermi paradox in one sentence: the universe looks empty of peers.

You are not here to decide what aliens "are like." You are here to test a single, ruthless model: the Dark Forest hypothesis. Under this model, many civilizations exist, but they stay quiet because visibility invites risk. Begin where every observer begins: with uncertainty.`,
    whyItMatters:
      'The scenario treats the Dark Forest as a game-theoretic sketch, not a proof about the real universe.',
    choices: [
      { label: 'Begin the listening campaign', nextId: 'signal' },
    ],
    visual: { kind: 'starfield', exposure: 0.1, crosshair: false },
    timelineSegment: {
      title: 'Era 0 — Listening',
      summary: 'A civilization turns its instruments outward.',
      t: 0,
    },
  },
  {
    id: 'signal',
    title: 'Anomaly',
    body: `Your arrays catch a faint, structured pattern. It could be astrophysics. It could be a leak. It could be a lure. You cannot know the sender's intent—only that *someone* may now share your universe with you.

The first crack in the Great Silence is not a greeting; it is evidence that strategy might matter beyond your world.`,
    whyItMatters:
      'In the Dark Forest framing, evidence of others starts the clock on suspicion and exposure.',
    choices: [
      { label: 'Analyze quietly and share nothing', nextId: 'chain', effects: { suspicion: 0.05 } },
      { label: 'Alert allied institutes and widen the search', nextId: 'chain', effects: { detectability: 0.15, suspicion: -0.05 } },
    ],
    visual: { kind: 'starfield', exposure: 0.25, crosshair: true },
    timelineSegment: {
      title: 'Era 1 — First ambiguity',
      summary: 'A structured signal appears; intent is unknown.',
      t: 1,
    },
  },
  {
    id: 'chain',
    title: 'Chain of suspicion',
    body: `If another civilization exists, you cannot know whether it is benevolent, indifferent, or hostile. They cannot know that about you either. You can both model the other modeling you. That recursion—each side guessing what the other is guessing—is the **chain of suspicion**.

It does not require hatred. It requires only *risk under uncertainty*. A single unpredictable actor can make "quiet" look like rational survival.`,
    choices: [{ label: 'Continue', nextId: 'explosion' }],
    visual: { kind: 'network', actorCount: 4, edgeDensity: 0.4 },
    timelineSegment: {
      title: 'Era 2 — Chain of suspicion',
      summary: 'Uncertainty compounds across minds you cannot read.',
      t: 2,
    },
  },
  {
    id: 'explosion',
    title: 'Technological explosion',
    body: `You cannot assume a static opponent. If development can accelerate—breakthroughs feeding breakthroughs—then a weak-looking civilization might become a strong one on a short cosmic timescale. That is **technological explosion**: a reason for preemptive fear even when no one has fired yet.

You are not proving this will happen. You are asking: if it *could*, how does that change your incentives?`,
    choices: [{ label: 'Face the strategic choice', nextId: 'strategy' }],
    visual: { kind: 'gauges' },
    timelineSegment: {
      title: 'Era 3 — Non-constant threat',
      summary: 'Capabilities may change faster than light can carry news.',
      t: 3,
    },
  },
  {
    id: 'strategy',
    title: 'Exposure',
    body: `You stand at a fork that is not about morality in a vacuum. It is about *visibility*. Anything you emit that carries information about your location and capabilities—deliberately or not—can be modeled as increasing your exposure in a forest where hunters listen.

Choose a posture for the next phase of your experiment.`,
    choices: [
      {
        label: 'Broadcast openly: declare existence and position',
        nextId: 'broadcast',
        effects: { detectability: 0.35, suspicion: 0.1 },
      },
      {
        label: 'Go dark: minimize emissions and signatures',
        nextId: 'hide',
        effects: { detectability: -0.25, suspicion: 0.1 },
      },
      {
        label: 'Send a minimal ping: timing without content',
        nextId: 'minimal',
        effects: { detectability: 0.08, suspicion: 0.15 },
      },
    ],
    visual: { kind: 'broadcast', active: false, coneWidth: 0.3 },
    timelineSegment: {
      title: 'Era 4 — Strategic fork',
      summary: 'Visibility, silence, or a minimal probe.',
      t: 4,
    },
  },
  {
    id: 'broadcast',
    title: 'Bright signal',
    body: `You choose maximum legibility. A loud civilization is easier to help—and easier to target. In the Dark Forest model, this is not a moral verdict; it is a bet that openness will be met by openness, not by a first strike driven by fear of your future **technological explosion**.

Your sky becomes a little louder. In your simulation, distant observers update their models. Some may do nothing. Some may not.`,
    choices: [{ label: 'See the outcome', nextId: 'broadcast_end' }],
    visual: { kind: 'broadcast', active: true, coneWidth: 0.95 },
    timelineSegment: {
      title: 'Branch — Broadcast',
      summary: 'High visibility; high variance of responses.',
      t: 5,
    },
  },
  {
    id: 'hide',
    title: 'Quiet shell',
    body: `You shrink your signature. You treat the cosmos as a place where attention is danger. You do not prove you are safe; you only prove you are harder to find.

That is not guaranteed to work forever—leakage, accidents, and indirect detection still exist—but the Dark Forest hypothesis treats this as the only posture that *does not* voluntarily add to the evidence against you.`,
    choices: [{ label: 'See the outcome', nextId: 'hide_end' }],
    visual: { kind: 'starfield', exposure: 0.08, crosshair: false },
    timelineSegment: {
      title: 'Branch — Silence',
      summary: 'Reduced emissions; survival by obscurity.',
      t: 5,
    },
  },
  {
    id: 'minimal',
    title: 'Ping without a story',
    body: `You send a constrained signal: a proof of presence without blueprints, without biography, without coordinates beyond what physics already leaks. You are trying to be *less* informative than a broadcast while still being real.

This is still a gamble. Any signal that distinguishes you from noise can still tighten the chain of suspicion—because you are evidence that strategists exist.`,
    choices: [{ label: 'See the outcome', nextId: 'ambiguous_end' }],
    visual: { kind: 'broadcast', active: true, coneWidth: 0.2 },
    timelineSegment: {
      title: 'Branch — Minimal',
      summary: 'A thin thread of evidence; ambiguous intent.',
      t: 5,
    },
  },
  {
    id: 'broadcast_end',
    title: 'The forest notices',
    body: `In this branch, the universe behaves as if the Dark Forest were real: not every civilization is hostile, but *any* sufficiently motivated observer can treat you as a future risk. You made yourself easy to model. You may receive help—or you may receive a response timed to your visibility.

The Fermi paradox, in this telling, is not a mystery of aliens "hiding." It is a consequence of **strategic silence** under uncertainty and **technological explosion** as a threat multiplier.`,
    choices: [],
    visual: { kind: 'strike', armed: true, beamProgress: 0.7 },
    timelineSegment: {
      title: 'Ending — Bright sky',
      summary: 'Openness increases the chance of being modeled—and targeted.',
      t: 6,
    },
  },
  {
    id: 'hide_end',
    title: 'The forest stays quiet',
    body: `You do not win a guarantee of safety; you only remove one class of self-inflicted evidence. If the universe is full of cautious actors, the sky stays quiet not because nobody exists, but because **visibility is a liability**.

This is one possible answer to the Fermi paradox: the silence is not emptiness; it is the equilibrium of a dark forest.`,
    choices: [],
    visual: { kind: 'starfield', exposure: 0.05, crosshair: false },
    timelineSegment: {
      title: 'Ending — Low profile',
      summary: 'Silence as a rational response to uncertainty.',
      t: 6,
    },
  },
  {
    id: 'ambiguous_end',
    title: 'The forest argues',
    body: `Your minimal ping leaves observers unsure whether you are a rising threat, a curious neighbor, or a trap. The chain of suspicion does not dissolve; it *forks*. Some may ignore you. Some may watch. Some may decide not to wait for your next move.

The Dark Forest hypothesis does not predict every civilization's behavior. It predicts that **when contact is costly to verify**, silence and hiding become cheap compared to the risks of being fully known.`,
    choices: [],
    visual: { kind: 'network', actorCount: 4, edgeDensity: 0.75 },
    timelineSegment: {
      title: 'Ending — Ambiguous evidence',
      summary: 'Thin signals can still move the strategic calculus.',
      t: 6,
    },
  },
];
