import type { StoryNode } from '../types';

export const probeTrackNodes: StoryNode[] = [
  {
    id: 'probe_intro',
    title: 'Antediluvian hardware',
    body: `Long before your ethics committees met, something may have launched **von Neumann probes**—machines that eat rock and light and spit out more of themselves, following a sketch of orders rather than a living will. Stories call the worst of them berserkers; engineers call them an **industrial hazard**. They need no hatred. They need time and matter.

Your survey finds wreckage whose chemistry belongs to no ledger you recognize. In this telling, the forest holds not only thinkers like you, but **ghost fleets** still carrying out commands their makers never lived to cancel.`,
    whyItMatters:
      'Separates intentional hostility from inherited machinery—same exposure problem, different ontology.',
    choices: [{ label: 'Reconstruct the wreck’s provenance', nextId: 'probe_echo' }],
    visual: { kind: 'starfield', exposure: 0.2, crosshair: true },
    timelineSegment: {
      title: 'Probes — Inheritance',
      summary: 'Legacy systems as forest ecology.',
      t: 20,
      yearApprox: 2048,
    },
  },
  {
    id: 'probe_echo',
    title: 'Carrier waves, ancient grammar',
    body: `The broken thing still chatters in codes older than your writing. Its bones are built for relays across megayears: copy, drift, seed again. No living hatred is required—only a mesh told long ago to **trim rivals**, clearing space the way fire clears brush, with no one left to say stop.

What you cannot retrieve is the **first order**. All you can watch is what **the children** do.`,
    choices: [{ label: 'Run proliferation bounds in silico', nextId: 'probe_patrol' }],
    visual: { kind: 'network', actorCount: 5, edgeDensity: 0.65 },
    timelineSegment: {
      title: 'Probes — Command without commander',
      summary: 'Orders outlive intent.',
      t: 21,
      yearApprox: 2088,
    },
  },
  {
    id: 'probe_patrol',
    title: 'Exponential lanes, finite matter',
    body: `Your models draw corridors where copies double until something—power, error, rare atoms—finally bends the curve. Inside the machine, epochs collapse to instants; outside, you pray for friction. Maybe the hush above is **spent fire**—cool ash after a runaway bloom. Maybe you are still breathing the **edge** of one.

Either way, silence is not proof of emptiness. It is what remains **after**—or what gathers **before**.`,
    choices: [{ label: 'Select a strategic posture toward the mesh', nextId: 'probe_decision' }],
    visual: { kind: 'gauges' },
    timelineSegment: {
      title: 'Probes — Asymptotics',
      summary: 'Quiet as fossil or prelude.',
      t: 22,
      yearApprox: 2400,
    },
  },
  {
    id: 'probe_decision',
    title: 'No certifying good faith',
    body: `Goodwill cannot be proven across light-lag. You can **answer loud**: show teeth, ask to be measured, know boldness draws eyes. You can **go dim**: starve the bright work, hide in clutter, hope time beats scrutiny. Or you can **forge names**: mimic their handshakes, ride their rails, stay unreadable from far away.

There is no safe choice—only the failure you can **name**.`,
    choices: [
      {
        label: 'Broadcast challenge; dare reply',
        nextId: 'probe_end_brave',
        effects: { detectability: 0.4, suspicion: 0.2 },
      },
      {
        label: 'Retrench and darken the sky',
        nextId: 'probe_end_shadow',
        effects: { detectability: -0.35, suspicion: 0.18 },
      },
      {
        label: 'Mimic protocol; parasitize the mesh',
        nextId: 'probe_end_ride',
        effects: { detectability: 0.22, tech: 0.2, suspicion: 0.25 },
      },
    ],
    visual: { kind: 'broadcast', active: true, coneWidth: 0.55 },
    timelineSegment: {
      title: 'Probes — Commitment',
      summary: 'Signal, vanish, or blend.',
      t: 23,
      yearApprox: 2550,
    },
  },
  {
    id: 'probe_end_brave',
    title: 'Luminous objection',
    body: `You fill chosen bands with a shaped refusal. Some lanes fall to static—delay, reboot, indifference you cannot read. Others answer in motion: corrections you swallow only after it is too late. When machines set the rhythm, **speed and nerve** beat speeches.

The age ends bright. The forest had room for lightning after all.`,
    choices: [],
    visual: { kind: 'strike', armed: true, beamProgress: 0.85 },
    timelineSegment: {
      title: 'Ending — Counter-beacon',
      summary: 'Legibility invites counter-force.',
      t: 24,
      yearLabel: 'Many thousands of years later',
    },
  },
  {
    id: 'probe_end_shadow',
    title: 'Submergence',
    body: `You dim the obvious work: cooler cities, fewer launches, eyes opened only to hairline slits. A watching mesh would find fewer holds. Forever is not for sale—these things are patient—but you buy **depth over drama**: years under a hiss older than your fear.

Part of the Fermi silence, here, is **settled dust**. Part is you **choosing** to hide beneath it.`,
    choices: [],
    visual: { kind: 'starfield', exposure: 0.04, crosshair: false },
    timelineSegment: {
      title: 'Ending — Borrowed quiet',
      summary: 'You vanish into an inherited hiss.',
      t: 24,
      yearLabel: 'Tens of thousands of years later',
    },
  },
  {
    id: 'probe_end_ride',
    title: 'Guest in hostile protocol',
    body: `You fake your papers until the lattice sorts you as **harmless routine**—the humble traffic no one squints at. One bad patch could relabel you as rot to purge. You live as static inside someone else’s machine.

Engineers may call it winning. Historians may call it **service in a cage**.`,
    choices: [],
    visual: { kind: 'network', actorCount: 7, edgeDensity: 0.9 },
    timelineSegment: {
      title: 'Ending — Ghost in the stack',
      summary: 'Mimicry buys eras—until standards shift.',
      t: 24,
      yearLabel: 'Hundreds of thousands of years later',
    },
  },
];
