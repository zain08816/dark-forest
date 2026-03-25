# Dark Forest — interactive scenario

A static **React + Vite + TypeScript** SPA that explores the Dark Forest idea as a branching narrative: choices update **world-state meters**, per-beat **animations** (one visual component per story node id), a **timeline** tied to your path, optional **path map / decision hints** in the UI, and **save/resume** via `localStorage`. No backend — `npm run build` outputs static files in `dist/`.

## Commands

| Command | Purpose |
|--------|---------|
| `npm run dev` | Local development |
| `npm run build` | Typecheck + production build |
| `npm run test` | Vitest (story graph and related tests under `src/**/*.test.ts`) |
| `npm run lint` | ESLint |
| `npm run preview` | Preview the production build |

After editing nodes or links, run **`npm test`** so bad `nextId` values or unreachable nodes show up quickly.

## Editing the story

1. Narrative modules live in [`src/story/nodes/`](src/story/nodes/). Export node arrays from new files and add them to [`src/story/nodes/index.ts`](src/story/nodes/index.ts) as part of `allStoryNodes`. [`src/story/graph.ts`](src/story/graph.ts) builds `storyGraph` from that list; the entry id is `start`.
2. Each node needs `id`, `title`, `body` (paragraphs with `\n\n`; `**bold**` is rendered in the narrative UI), `choices` (`label`, `nextId`, optional `hint`, optional `effects` on detectability / suspicion / tech), and `timelineSegment` (`title`, `summary`, plus optional `t`, `yearApprox`, `yearLabel`). Optional `whyItMatters` adds extra context in the UI. Endings use `choices: []`.
3. Stage graphics are **not** on the node object: register a component for each node id under [`src/visuals/beats/`](src/visuals/beats/) and merge it in [`src/visuals/beats/registry.tsx`](src/visuals/beats/registry.tsx). Missing ids show a fallback graphic in dev/play.

Contributor-oriented layout and conventions are in [`AGENTS.md`](AGENTS.md).

## Deployment

`dist/` is static files only; deploy to any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).
