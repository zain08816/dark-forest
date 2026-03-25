import type { StoryNode } from '../types';

export const zooTrackNodes: StoryNode[] = [
  {
    id: 'zoo_gate',
    title: 'Enclosure without signage',
    body: `Another answer to the Great Silence is **deliberate hands-off**: old powers—by treaty, habit, or shared ethics—agree not to trample young worlds. The zoo idea does not leave Earth forgotten. It leaves Earth **kept**: watched under regulations you were never shown.

The scheme is fragile. One cheater can break a truce. Still, it colors the same blank sky with **rules** as much as with fear.`,
    whyItMatters:
      'Shows that “universal hiding” is not prerequisite for quiet—shared taboos suffice in principle.',
    choices: [{ label: 'Look for traces of being watched', nextId: 'zoo_watch' }],
    timelineSegment: {
      title: 'Zoo — Policy silence',
      summary: 'Quiet as governance, not absence.',
      t: 30,
      yearApprox: 2047,
    },
  },
  {
    id: 'zoo_watch',
    title: 'Correlations in the residuals',
    body: `Glitches in your sky surveys line up too well; some shadows fall **too neatly** for chance. This is not mysticism. It is the dull truth that **careless watching leaves prints**. If this world is a preserve, a custodian’s stumble is how you learn the fence exists.

Any serious ear in the dark is rude—and may be **required**.`,
    choices: [{ label: 'Push until something reacts', nextId: 'zoo_slip' }],
    timelineSegment: {
      title: 'Zoo — Instrument fingerprints',
      summary: 'Order in the noise, or pareidolia.',
      t: 31,
      yearApprox: 2095,
    },
  },
  {
    id: 'zoo_slip',
    title: 'Unsigned memorandum',
    body: `A packet arrives with no sender you can swear to. The words are flat, facilities-grade: *do not shout on the marked bands; if you do, you will learn what custodial means.* No sermon—only **memo speech**, maybe slipped by a tired hand or a rebel in the office.

Owning the file is proof of **handlers**. Handlers mean law you did not pass—and whoever fights over that law is still behind the page.`,
    choices: [{ label: 'Decide what to do with the memo', nextId: 'zoo_fork' }],
    timelineSegment: {
      title: 'Zoo — Rules without seal',
      summary: 'Housekeeping as ontology.',
      t: 32,
      yearApprox: 2200,
    },
  },
  {
    id: 'zoo_fork',
    title: 'Compliance, rupture, or stratagem',
    body: `**Comply:** keep the memo contained; study sideways in private; behave like a tractable exhibit.

**Go public:** release the packet wholesale—force keepers, scrubbers, or chaos into the open.

**Brief the competent only:** tell engineers, judges, rivals who can act—split society, but avoid stampedes.

Whichever you pick, you are small, you are late, and you **cannot unread** the fence.`,
    choices: [
      {
        label: 'Comply and study quietly',
        nextId: 'zoo_end_calm',
        effects: { detectability: -0.15, suspicion: -0.1 },
      },
      {
        label: 'Publicize everything',
        nextId: 'zoo_end_storm',
        effects: { detectability: 0.45, suspicion: 0.2 },
      },
      {
        label: 'Tell only people who can act on it',
        nextId: 'zoo_end_deal',
        effects: { detectability: 0.2, suspicion: 0.12 },
      },
    ],
    timelineSegment: {
      title: 'Zoo — Shock to sovereignty',
      summary: 'Obedience, scandal, or elite compact.',
      t: 33,
      yearApprox: 2225,
    },
  },
  {
    id: 'zoo_end_calm',
    title: 'Within the enclosure',
    body: `The rhythm slackens: the big sky budgets dry up; the culture’s eyes drift home. The fence announces itself in **clean accidents**—just often enough that the knowing few cannot pretend.

If the zoo is real, most people live on tracks they cannot see—until boredom or disaster finds a hand too quick to wait.`,
    choices: [],
    timelineSegment: {
      title: 'Ending — Stewarded world',
      summary: 'Survival through discretion.',
      t: 34,
      yearLabel: 'Several centuries later',
    },
  },
  {
    id: 'zoo_end_storm',
    title: 'Breaking glass',
    body: `You force a world-sized disclosure: raw data, the failed correlations, the case from the instruments set naked in public. The bands fill with noise. Maybe keepers step in. Maybe scrubber scripts tidy unruly exhibits without drama. Maybe nothing answers, and you learn **being seen does not mean being heard**.

The quiet over your cities cracks even when the galaxy does not blink. History will call your act courage, vandalism, or both at once.`,
    choices: [],
    timelineSegment: {
      title: 'Ending — Open habitat',
      summary: 'Universal knowledge; uneven survival.',
      t: 34,
      yearApprox: 2240,
    },
  },
  {
    id: 'zoo_end_deal',
    title: 'Circumscribed truth',
    body: `You keep the file among those who can test it—engineers, judges, rivals you dare not surprise. The price is **two populations**: those who know, and those who are fed the old stories. The official sky stays empty while politics bends around a truth too heavy for systems built on innocence.

Zoos and Dark Forests agree on one point: the loud and careless are a danger. Ceremony becomes armor—and maybe a slow poison.`,
    choices: [],
    timelineSegment: {
      title: 'Ending — Quiet cabal',
      summary: 'Order without fireworks—until betrayal.',
      t: 34,
      yearApprox: 2280,
    },
  },
];
