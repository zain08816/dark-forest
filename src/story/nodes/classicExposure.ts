import type { StoryNode } from '../types';

export const classicExposureNodes: StoryNode[] = [
  {
    id: 'strategy',
    title: 'Exposure',
    body: `This branch isolates **visibility**. Emissions that reveal place or capability—deliberate or not—help others model you. Under Dark Forest logic, a sharper model can be a deadlier one.

How much will you show in the next move?`,
    whyItMatters:
      'Holds other variables fixed: the main question is what observers learn from what you emit.',
    choices: [
      {
        label: 'Broadcast: declare where you are and what you can do',
        nextId: 'broadcast',
        effects: { detectability: 0.35, suspicion: 0.1 },
      },
      {
        label: 'Go dark: cut emissions and signatures',
        nextId: 'hide',
        effects: { detectability: -0.25, suspicion: 0.1 },
      },
      {
        label: 'Minimal ping: timing only, almost no content',
        nextId: 'minimal',
        effects: { detectability: 0.08, suspicion: 0.15 },
      },
    ],
    timelineSegment: {
      title: 'Classic — Strategic fork',
      summary: 'Visibility, silence, or a minimal probe.',
      t: 10,
      yearApprox: 2043,
    },
  },
  {
    id: 'broadcast',
    title: 'Bright signal',
    body: `You choose to be read clearly. A loud world is easier to befriend—and easier to aim at. In the Dark Forest sketch, this is not a verdict on your soul. It is a bet that openness will be answered with openness, not with a first shot born of dread at your possible **technological explosion**.

Your sky grows noisier. Far minds, in your model, redraw their picture of you. Some may wait. Some may not.`,
    choices: [{ label: 'Continue: how openness plays out', nextId: 'broadcast_end' }],
    timelineSegment: {
      title: 'Classic — Broadcast',
      summary: 'High visibility; high variance of responses.',
      t: 11,
      yearApprox: 2046,
    },
  },
  {
    id: 'hide',
    title: 'Quiet shell',
    body: `You pull your signature in. You treat the cosmos as a place where being noticed can cost you. You cannot prove you are harmless; you can only make yourself harder to spot.

Nothing promises this holds forever—leaks, mishaps, and sideways clues still exist—but in the Dark Forest reading, this is the one stance that *refuses* to volunteer evidence against yourself.`,
    choices: [{ label: 'Continue: how silence plays out', nextId: 'hide_end' }],
    timelineSegment: {
      title: 'Classic — Silence',
      summary: 'Reduced emissions; survival by obscurity.',
      t: 11,
      yearApprox: 2046,
    },
  },
  {
    id: 'minimal',
    title: 'Ping without a story',
    body: `You send a narrow signal: *we are here*, without blueprints, without your story, without handing over more position than physics already spills. You want to be quieter than a broadcast but too real to dismiss.

It is still a bet. Anything that lifts you above the hiss tells distant minds that **someone** plays games in the dark.`,
    choices: [{ label: 'Continue: how a thin signal plays out', nextId: 'ambiguous_end' }],
    timelineSegment: {
      title: 'Classic — Minimal',
      summary: 'A thin thread of evidence; ambiguous intent.',
      t: 11,
      yearApprox: 2046,
    },
  },
  {
    id: 'broadcast_end',
    title: 'The forest notices',
    body: `Here the universe runs like the Dark Forest: most may not wish you harm, but *any* watcher with enough motive can tag you as tomorrow’s problem. You sharpened your outline on purpose. Help may come—or a reply keyed to the day you lit the lamp.

In this version, the Fermi paradox is not *where is everyone*. It is what happens when **strategic silence** meets **technological explosion**—when being known can shorten your future.`,
    choices: [],
    timelineSegment: {
      title: 'Ending — Bright sky',
      summary: 'Openness increases the chance of being modeled—and targeted.',
      t: 12,
      yearApprox: 2120,
    },
  },
  {
    id: 'hide_end',
    title: 'The forest stays quiet',
    body: `You win no oath of safety; you only stop volunteering one kind of proof. If the cosmos is thick with careful minds, the sky stays still not because it is empty, but because **being seen** is expensive.

One answer to the Fermi paradox, then: the silence is not absence. It is the hush of a forest where noise draws eyes.`,
    choices: [],
    timelineSegment: {
      title: 'Ending — Low profile',
      summary: 'Silence as a rational response to uncertainty.',
      t: 12,
      yearApprox: 2150,
    },
  },
  {
    id: 'ambiguous_end',
    title: 'The forest argues',
    body: `Your thin tap leaves far minds guessing: rising threat, curious neighbor, bait on a string. The chain of suspicion does not vanish; it **splits**. Some may look away. Some may fix you in their glass. Some may refuse to wait for your second gesture.

The Dark Forest idea does not script every actor. It only says that when proof is expensive, **quiet and small** often costs less than being fully read.`,
    choices: [],
    timelineSegment: {
      title: 'Ending — Ambiguous evidence',
      summary: 'Thin signals can still move the strategic calculus.',
      t: 12,
      yearApprox: 2100,
    },
  },
];
