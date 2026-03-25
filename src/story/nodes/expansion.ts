import type { StoryNode } from '../types';

export const expansionTrackNodes: StoryNode[] = [
  {
    id: 'expand_shell',
    title: 'Silhouette of prior work',
    body: `Not every quiet sky means universal hiding. Some thinkers imagine civilizations that **spread**—not sneaking, but eating—turning matter into shell and engine until the easy ground is gone. What looks empty from your hill might already be **someone else’s yard**, written in scales your telescopes barely sense: no billboard, only finished work across megaparsecs.

Your longest baselines find a stubborn tilt: one wedge of the galaxy thinned out, as if useful suns were **picked** long ago and only cooling shells remain.`,
    whyItMatters:
      'Pairs game-theoretic dread with blunt resource competition—expansion as rival to universal concealment.',
    choices: [{ label: 'Refocus arrays on the cold sector', nextId: 'expand_rush' }],
    visual: { kind: 'starfield', exposure: 0.22, crosshair: true },
    timelineSegment: {
      title: 'Expansion — Angular scar',
      summary: 'Quietude with a preferred direction.',
      t: 40,
      yearApprox: 2051,
    },
  },
  {
    id: 'expand_rush',
    title: 'Footprints without ledgers',
    body: `Survey after survey shows the same story: poor metals in that wedge, extra infrared as dust heats in pulses you can only bracket in time. It looks like **something passed through**—industry without an invitation. If growth stacks generation on generation, those who moved first owe latecomers nothing.

The Dark Forest’s strike still fits this world—but **plain hunger** is enough to color the map.`,
    choices: [{ label: 'Interpret the contact geometry', nextId: 'expand_front' }],
    visual: { kind: 'gauges' },
    timelineSegment: {
      title: 'Expansion — Wake evidence',
      summary: 'Appetite recorded in dust and spectra.',
      t: 41,
      yearApprox: 2150,
    },
  },
  {
    id: 'expand_front',
    title: 'Contact without herald',
    body: `The numbers tighten until pretending hurts more than believing: your corner of space follows **rules you did not vote on**—not a ship knocking, but the medium itself carrying instructions from upstream. There is no face at the hatch. There is only flow you cannot claim you started.

What is left is **join**, **vanish into clutter**, or **fight** in ways that bruise both sides.`,
    choices: [{ label: 'Commit', nextId: 'expand_fork' }],
    visual: { kind: 'network', actorCount: 8, edgeDensity: 0.48 },
    timelineSegment: {
      title: 'Expansion — Boundary layer',
      summary: 'Physics downstream of an alien tide.',
      t: 42,
      yearApprox: 3500,
    },
  },
  {
    id: 'expand_fork',
    title: 'Alignment, occultation, sabotage',
    body: `You can **offer work**—skills, biology, data—and hope utility buys you a slot. You can **thin out**—small worlds, slow orbits, signatures drowned in rubble—until the wave mostly ignores you. Or you can **make annexation expensive**: loud sabotage, poisoned records, a bill tallied in whoever comes after.

The geometry does not ask what feels fair. It asks what still fits.`,
    choices: [
      {
        label: 'Offer fealty and niche expertise',
        nextId: 'expand_end_serve',
        effects: { detectability: 0.3, tech: 0.18 },
      },
      {
        label: 'Scatter into clutter; survive as noise',
        nextId: 'expand_end_bunker',
        effects: { detectability: -0.3, suspicion: 0.2 },
      },
      {
        label: 'Make absorption expensive; archive the dissent',
        nextId: 'expand_end_spark',
        effects: { detectability: 0.5, suspicion: 0.35 },
      },
    ],
    visual: { kind: 'broadcast', active: true, coneWidth: 0.7 },
    timelineSegment: {
      title: 'Expansion — Under the wave',
      summary: 'Serve, hide, or burn the bridge.',
      t: 43,
      yearApprox: 4000,
    },
  },
  {
    id: 'expand_end_serve',
    title: 'Department within unknown firm',
    body: `You bend on purpose. Later children learn languages built for alien goals; what you called beauty drifts toward someone else’s grid. Survival wears the mask of **useful strangeness**. Whether that is extinction, translation, or ascent is for the ones who come after to argue.

The quiet sky was never unclaimed. You only found the signature late.`,
    choices: [],
    visual: { kind: 'network', actorCount: 9, edgeDensity: 0.35 },
    timelineSegment: {
      title: 'Ending — Client polity',
      summary: 'Persistence as subsidiary talent.',
      t: 44,
      yearLabel: 'Millions of years in their calendar',
    },
  },
  {
    id: 'expand_end_bunker',
    title: 'Interstitial lint',
    body: `You split into cold pockets—tiny biospheres, slow thought, heat smeared until you look like more **rubble**. The front usually ignores what does not slow it down. Those who follow may bless you for choosing smallness over a bright death.

Maybe “preserved” only means **static** loud enough that no one bothers to clean the channel.`,
    choices: [],
    visual: { kind: 'starfield', exposure: 0.06, crosshair: false },
    timelineSegment: {
      title: 'Ending — Niche survival',
      summary: 'Too marginal to scrub; too marginal to court.',
      t: 44,
      yearLabel: 'Millions of years, scattered enclaves',
    },
  },
  {
    id: 'expand_end_spark',
    title: 'Recorded refusal',
    body: `You raise the cost of swallowing you: data that stains, ethics wired into signals hard to wipe, small cruelties to the local physics that will not wash out. You may still lose. You still choose **how the loss is written down**.

Predators and tides both fear a shout that **echoes** after the throat is gone.`,
    choices: [],
    visual: { kind: 'strike', armed: true, beamProgress: 1 },
    timelineSegment: {
      title: 'Ending — Loud negation',
      summary: 'You may lose; you refuse to dissolve quietly.',
      t: 44,
      yearLabel: 'Fire preserved for successor bubbles',
    },
  },
];
