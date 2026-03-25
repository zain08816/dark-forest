import type { StoryNode } from '../types';

export const expansionTrackNodes: StoryNode[] = [
  {
    id: 'expand_shell',
    title: 'Silhouette of prior work',
    body: `Not every quiet sky means universal hiding. Some thinkers imagine civilizations that **spread**—not sneaking, but eating—turning matter into shell and engine until the easy ground is gone. What looks empty from your hill might already be **someone else’s yard**, written in scales your telescopes barely sense: no billboard, only finished work across megaparsecs.

Your longest baselines find a stubborn tilt: one wedge of the galaxy thinned out, as if useful suns were **picked** long ago and only cooling shells remain.`,
    whyItMatters:
      'Pairs game-theoretic dread with blunt resource competition—expansion as rival to universal concealment.',
    choices: [{ label: 'Point the arrays at the cold sector', nextId: 'expand_rush' }],
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
    choices: [{ label: 'Map what the boundary implies', nextId: 'expand_front' }],
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
    choices: [{ label: 'Choose how to meet the expansion', nextId: 'expand_fork' }],
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
    body: `**Serve:** trade niche competence for a tolerated place inside their expansion.

**Hide:** shrink into cold pockets and debris until the front reads you as ignorable noise.

**Raise the price of swallowing you:** sabotage, data that stains, local physics tweaks that outlast capitulation—lose if you must, but do not dissolve quietly.

The wave is not asking what is fair, only what still fits.`,
    choices: [
      {
        label: 'Serve: offer fealty and useful skills',
        nextId: 'expand_end_serve',
        effects: { detectability: 0.3, tech: 0.18 },
      },
      {
        label: 'Hide: scatter into debris and stay marginal',
        nextId: 'expand_end_bunker',
        effects: { detectability: -0.3, suspicion: 0.2 },
      },
      {
        label: 'Resist: make annexation costly; leave a record',
        nextId: 'expand_end_spark',
        effects: { detectability: 0.5, suspicion: 0.35 },
      },
    ],
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
    timelineSegment: {
      title: 'Ending — Loud negation',
      summary: 'You may lose; you refuse to dissolve quietly.',
      t: 44,
      yearLabel: 'Fire preserved for successor bubbles',
    },
  },
];
