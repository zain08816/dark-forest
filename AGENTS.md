# Agent guidance — Dark Forest

Instructions for AI coding agents (and contributors) working in this repository.

## What this is

A static **React + Vite + TypeScript** SPA: an interactive “Dark Forest” scenario with branching narrative, timeline, animated visuals, and optional **localStorage** save/resume. There is no backend; `npm run build` produces static files in `dist/`.

## Commands

| Command | Purpose |
|--------|---------|
| `npm run dev` | Local development |
| `npm run build` | Typecheck + production build |
| `npm run test` | Vitest (story graph integrity) |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |

After changing story nodes or graph wiring, run **`npm test`** so broken `nextId` links or unreachable nodes surface early.

## Repository layout

- **`src/App.tsx`** — Shell: landing vs play mode; warns in dev if `graphValidation` fails.
- **`src/hooks/useGameRoute.ts`** — Route state, choices, reset, persistence coordination.
- **`src/components/`** — UI: `Landing`, `PlayLayout`, narrative UI (`NarrativeBeat`, `ChoiceList`, `Timeline`, etc.).
- **`src/visuals/`** — Framer Motion–backed visuals keyed by `VisualSpec` (`starfield`, `network`, `broadcast`, `strike`, `gauges`).
- **`src/story/`** — Story types, graph build/validation, persistence, timeline helpers.
  - **`src/story/nodes/`** — Narrative modules composed in **`index.ts`** (`allStoryNodes`).
  - **`src/story/graph.ts`** — Assembles `storyGraph` from node modules; **`START_ID`** is `'start'`.
  - **`src/story/types.ts`** — `StoryNode`, `Choice`, `VisualSpec`, `WorldState`, etc.
  - **`src/story/validate.ts`** — Graph checks consumed as `graphValidation`.
  - **`src/story/graph.test.ts`** — Tests around validation / graph invariants.

## Editing the story

1. Edit or extend files under **`src/story/nodes/`** (export arrays and add them to **`index.ts`**, or import into **`src/story/graph.ts`**).
2. Each node needs `id`, `title`, `body` (paragraphs with `\n\n`; Markdown-style `**bold**` supported in rendering), `choices` (`label`, `nextId`, optional `effects` on world state), `visual`, and `timelineSegment`. Terminal nodes use `choices: []`.
3. **`nextId`** values must reference existing node `id`s; the graph must be reachable from **`START_ID`**.

New **`VisualSpec`** variants require matching handling in **`VisualStage`** (and usually a component under **`src/visuals/`**).

## Implementation notes

- **React 19**; **Framer Motion** for animations. Keep UI and story data separate: narrative copy and structure live under **`src/story/`**, presentation under **`src/components/`** and **`src/visuals/`**.
- Prefer small, focused changes; follow existing naming, imports, and patterns in touched files.
- **Cursor rules** can live under `.cursor/rules/` if the project grows project-specific policies beyond this file.
