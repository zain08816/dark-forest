# Agent guidance — Dark Forest

Instructions for AI coding agents (and contributors) working in this repository.

## What this is

A static **React + Vite + TypeScript** SPA: an interactive “Dark Forest” scenario with branching narrative, timeline, world-state meters, per-beat visuals, and optional **localStorage** save/resume. There is no backend; `npm run build` produces static files in `dist/`.

## Commands

| Command | Purpose |
|--------|---------|
| `npm run dev` | Local development |
| `npm run build` | Typecheck + production build |
| `npm run test` | Vitest (one-shot: `vitest run`) — story graph and related checks |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |

After changing story nodes or graph wiring, run **`npm test`** so broken `nextId` links or unreachable nodes surface early. Tests live under `src/**/*.test.ts` (see `vite.config.ts`).

## Repository layout

- **`src/App.tsx`** — Shell: landing vs play mode; warns in dev if `graphValidation` fails.
- **`src/hooks/useGameRoute.ts`** — Route state, choices, reset, persistence coordination.
- **`src/components/`** — UI: `Landing`, `PlayLayout`, `NarrativeBeat`, `ChoiceList`, `Timeline`, `StoryPathMap`, `RichParagraph`, `CompactMeters`, etc.
- **`src/visuals/BeatVisual.tsx`** — Resolves the stage graphic for the current node id (timeline thumbs reuse the same art).
- **`src/visuals/beats/`** — Per-node visual components: track bundles (`coreBeats`, `classicBeats`, `probeBeats`, `zooBeats`, `expansionBeats`, `longWaitBeats`) merged in **`registry.tsx`** as `beatVisualComponents`. Unregistered ids fall back to `DefaultBeatFallback`.
- **`src/story/`** — Story types, graph build/validation, persistence, timeline helpers, choice preview, path decisions, layout metadata.
  - **`src/story/nodes/`** — Narrative modules (`core`, `classicExposure`, `probes`, `zoo`, `expansion`, `longWait`) composed in **`index.ts`** as `allStoryNodes`.
  - **`src/story/graph.ts`** — Builds `storyGraph` from `allStoryNodes`; **`START_ID`** is `'start'`; exports **`graphValidation`**.
  - **`src/story/types.ts`** — `StoryNode`, `Choice`, `WorldState`, `TimelineSegment`, etc.
  - **`src/story/validate.ts`** — Graph reachability / `nextId` checks; **`applyEffects`** and related helpers for `WorldState`.
  - **`src/story/persistence.ts`** — Save/load run state.
  - **`src/story/timeline.ts`**, **`choicePreview.ts`**, **`pathDecisions.ts`**, **`storyGraphLayout.ts`**, **`worldMeters.ts`** — Timeline, UI hints, branching metadata, meters.
  - **`src/story/graph.test.ts`**, **`storyGraphLayout.test.ts`**, **`pathDecisions.test.ts`** — Tests for graph and story tooling.

## Editing the story

1. Edit or extend files under **`src/story/nodes/`** (export arrays and add spreads to **`index.ts`**).
2. Each node needs **`id`**, **`title`**, **`body`** (paragraphs with `\n\n`; `**bold**` segments are rendered via `RichParagraph`), **`choices`** (`label`, `nextId`, optional **`hint`**, optional **`effects`** on **`WorldState`**: `detectability`, `suspicion`, `tech`), and **`timelineSegment`** (`title`, `summary`, plus optional **`t`**, **`yearApprox`**, **`yearLabel`** for ordering and display). Optional **`whyItMatters`** adds a short explainer in the UI. Terminal nodes use **`choices: []`**.
3. **`nextId`** values must reference existing node **`id`**s; every node must be reachable from **`START_ID`** (see **`validateGraph`**).

New or moved node ids need a matching entry in **`src/visuals/beats/`** (and the **`beatVisualComponents`** map via the track module + **`registry.tsx`**) so the stage does not show the missing-visual fallback.

## Implementation notes

- **React 19**; **Framer Motion** for animations. Keep narrative data under **`src/story/`** and presentation under **`src/components/`** and **`src/visuals/`**.
- Prefer small, focused changes; follow existing naming, imports, and patterns in touched files.
- **Cursor rules** can live under **`.cursor/rules/`** if the project grows project-specific policies beyond this file.
