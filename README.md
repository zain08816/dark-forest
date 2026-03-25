# Dark Forest — interactive scenario

A static SPA that walks through the Dark Forest hypothesis as a choose-your-own-adventure: branching narrative, animated visuals, a timeline that grows with your path, and optional save/resume via `localStorage`.

## Commands

- `npm run dev` — local development
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build
- `npm test` — graph integrity tests

## Editing the story

1. Open [`src/story/nodes/`](src/story/nodes/) (see [`index.ts`](src/story/nodes/index.ts); add modules and wire them in [`src/story/graph.ts`](src/story/graph.ts)).
2. Each node has an `id`, `title`, `body` (paragraphs separated by `\n\n`; use `**bold**` for emphasis), `choices[]` with `nextId` and optional `effects` on world state, `visual`, and `timelineSegment`.
3. Terminal nodes use `choices: []`.
4. Run `npm test` to ensure every `nextId` exists and the graph is reachable from `start`.

## Deployment

`dist/` is static files only; deploy to any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).
