# CLAUDE.md

## Dev workflow

The Next.js dev server (`npm run dev`, port 3080) runs continuously and the founder watches it live in a browser. This means:

- **Do not spin up browser-automation verification scripts (Playwright/chromium-cli screenshot loops) or full production builds after routine edits.** Hot-reload already shows the change; the founder will look at it directly and report back with a screenshot or description if something's wrong. Reserve that kind of heavier verification for rare, major structural changes only (e.g., a new routing scheme), not for normal content/style/component edits.
- A quick `npx tsc --noEmit` after a batch of edits is fine (cheap, catches typos), but don't treat it as a substitute for the founder's own visual review, and don't loop on it.
- When the founder pastes a screenshot with feedback, treat it as ground truth for what's actually rendering — fix the specific thing shown, don't re-derive it from first principles.

## Project context

See `docs/plan/website-overhaul-plan.md`, `docs/plan/content-inventory.md`, and `docs/plan/citations.md` for the in-progress website overhaul: source material summaries, resolved decisions, and the fact-check/citation table that every stat placed on the site must trace to.
