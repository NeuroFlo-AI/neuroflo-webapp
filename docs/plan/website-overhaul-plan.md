# NeuroFlo Website Overhaul — Plan

Status: DRAFT — awaiting confirmation before build starts.
Scope source: founder walkthrough (chat, 2026-09-11) + pasted fact-check/citation report on pitch-deck statistics.

## Confirmed decisions going in

- **Nav pattern = Option A.** `Home` and `About` and `Contact` stay flat, updated in place. `Investors` upgrades from a flat link to a dropdown. A new `Platform` dropdown is added. No new top-level items beyond that.
- **Legal stays footer-only.** Terms/Privacy/Compliance never go in the header nav. Footer `Legal` and `Company` columns get the new page links added alongside what's already there.
- **CFO page is not in any nav.** It's a landing page linked from the ROI page and outbound sales material only.
- **Design system carries over, not replaces.** Dark/light mode via `next-themes` stays as-is. Slide-deck halftone/glow/blur effects get pulled in but recolored to the site's existing blue-600→cyan-600 gradient on near-black, not the decks' native palette.
- **Every "Request a meeting / demo" CTA still routes to `/contact`.**

## Verified starting state (read directly, not assumed)

- Stack: Next.js 13.5 App Router, Tailwind, Radix UI. `components/ui/navigation-menu.tsx` (Radix dropdown primitive) is already installed but **unused** — `components/layout/header.tsx` currently renders a flat `NAV_ITEMS` array only.
- Existing pages: `/`, `/about`, `/investors`, `/contact`, `/compliance`, `/terms`, `/privacy`, `/download-deck`.
- `/download-deck` already exists and serves the pitch deck (`public/pitchdeck/neuroflo_pitchdeck_2025.pdf`, pre-split into 30 pages under `public/pitchdeck/split/`). No new pitch-deck page needed — just a nav link pointing at it.
- Two animated slide decks exist as standalone HTML, not yet wired into the Next app:
  - `docs/animated slide/animated-slide_v1/neuroflo-opener.html` (730KB — primary source, per founder: read this one in full)
  - `docs/animated slide/animated-slide_v2/neuroflo-deck-v2.html` (861 lines — only the trailing/exit-strategy slides differ from v1, per founder)
  - `docs/animated slide/neuroflo-opener.html` (854 lines, top-level — appears to be a third variant; needs to be identified in Phase 0, not assumed to be a duplicate)
- Confirmed on-site claims that the fact-check report contradicts (found by reading the actual page source, not inferred):
  - `app/investors/page.tsx`: "one HIPAA and SOC 2 compliant solution" and "Successful ... HIPAA and SOC 2 compliance validation" — states SOC 2 as already achieved.
  - `app/about/page.tsx`: a "SOC 2" bullet under Core Technology phrased as an already-met control, plus a "Multimodal Capabilities" card the founder wants removed/folded in.
  - `app/investors/page.tsx` Market Size block: $15.8B medical coding / $45B healthcare AI by 2026 / $2.3B doc market / $38B EHR — none of these match the corrected, single-sourced figures in the fact-check report and need to be reconciled or replaced.
- `docs/diagrams/` is currently **empty** — nothing to migrate from there yet.

## Phase 0 — Source extraction & fact base (no site changes yet)

Goal: read everything once, produce two reference docs everything else pulls from, so content work in later phases doesn't require re-reading PDFs/HTML repeatedly.

1. Read docs 1–5 in `docs/`: Full Platform Overview, App1 (Op Note), App2 (Billing/Coding & Revenue Cycle), App3 (AI Surgical Insights), Market & Competitive Analysis — plus `neuroflo-engine-architecture-and-validation.md.pdf` and `NeuroFlo Market Positioning & Strategic Differentiation.pdf`.
2. Read `animated-slide_v1/neuroflo-opener.html` in full: extract the exact "4-point" structure the founder referenced (Agentic Intelligence / Op Note Assistant / Coding Validation / EHR — to be **verified against source**, not assumed correct as dictated), the per-pillar taglines, and the lifecycle-hook animation markup/CSS for each of the 3 core parts.
3. Skim only the trailing slides of `neuroflo-deck-v2.html` for exit-strategy-era content that isn't in v1.
4. Resolve what the top-level `docs/animated slide/neuroflo-opener.html` is (duplicate vs. distinct draft) before treating it as a source.
5. **Color mapping (verified by direct inspection of the deck source).** The animated deck's primary-blue family is indigo/violet-leaning (`#0D1FDC`, `#1E5BFF`, `#0A8BFF`, `#3FA2FF`, `#5A7CFF`, `#5B3BE8`, with light tints `#BFD4FF`/`#A99BFF`/`#9DB7FF`/`#DCE6FF`/`#E8EEFF`/`#E6EDFF`) on a navy-tinted black background (`#030615`/`#01020a`). The site's actual brand color is stock Tailwind `blue-600 → cyan-600` (`#2563eb → #0891b2`, azure-to-teal) on a neutral near-black (`--background: 0 0% 3.9%`) — confirmed there's no custom color token in `tailwind.config.ts`, the site uses stock Tailwind utility classes directly in components. Every ported slide/animation gets its blue family remapped to the site's blue→cyan range and its background desaturated to neutral black, not just recolored by eye.
7. Produce **`docs/plan/citations.md`** — one row per statistic, built from the founder's pasted fact-check report: claim, corrected wording, source + link, confidence, and where on the site it currently appears (if anywhere). Includes the SOC 2 correction, the DNFB terminology fix, the "about 80%" wording, the single-sourced medical-coding market figures, the AI-coding-market figure (one firm only, not blended), the corrected valuation-multiple range (3–6x base, 1.5–2x EHR-native premium — not 10–15x), and the "label as internal estimate / modeled" claims (op-note time savings, 95%+ accuracy claims not already piloted, $30M working capital, 2,500 reclaimed hours).
8. Produce **`docs/plan/content-inventory.md`** — short extraction of reusable copy/taglines/stats per pillar (Op Note, Coding & Revenue, AI Insights) plus the site's current brand tokens (gradient values, dark-mode background) so Phase 2/5 recoloring has a fixed target.

**Output of this phase is reference material only — reviewed before Phase 1 starts.**

## Phase 1 — Navigation & routing scaffold

1. Build a dropdown-capable header using the existing Radix `navigation-menu` component (simple link-list style per your "just discuss options" call — no mega-menu, to keep initial scope tight and revisit later if wanted):
   - `Platform ▾`: Op Note Capture · Billing, Coding & Revenue Cycle Hub · AI Surgical Insights · Architecture
   - `Investors ▾`: Investor Overview · Pitch Deck (→ `/download-deck`) · **Animated Overview (new — see below)** · Explainer Video · ROI & Financial Framework · Market & Competitive Analysis
   - `Home`, `About`, `Contact` stay flat links.
2. Add placeholder routes so links resolve: `/platform/op-note`, `/platform/coding-revenue`, `/platform/ai-insights`, `/platform/architecture`, `/investors/animated-overview`, `/investors/explainer`, `/investors/roi`, `/investors/market-analysis`, plus unlisted `/cfo`.
3. Update `components/layout/footer.tsx` `RESOURCES`/`LEGAL` arrays to add the new pages so every new route is reachable from both header and footer.
4. Verify mobile menu still works with the dropdown items (flatten to a simple list on mobile, matching current mobile-nav pattern).

## Phase 2 — Homepage rebuild

Working through the page top to bottom, in place:

1. **Hero tagline** — replace "Operate with Intelligence in Healthcare and Government" (drop the "in healthcare and government" qualifier per founder direction), shorter copy, smaller card. `Request Demo` → `/contact` (unchanged target). `Learn More` → `/about` (unchanged target, content updated in Phase 3).
2. **New "three pillars" section** — 3 nodes (rounded-square or circular, per founder either is fine) for Op Note / Coding & Revenue Cycle / AI Insights, animated connecting lines between them, each clickable through to its new Platform page (Phase 5). Visual treatment sourced from Phase 0's extracted slide assets, recolored to brand palette.
3. **Video section** — currently has no title. Add a title + short positioning line pulled from the slide taglines (the "we are not a scribe app" framing), sourced in Phase 0.
4. **Replace the "coordinated stack of specialized agents" 4-point block** with the verified (not assumed) 4-point structure from the V1 deck, adjusted per founder correction: SOC 2 readiness (in progress, not "compliant"), government-contractor status, SMART-on-FHIR readiness (Cerner/Epic integration), and surgical-field specialization (vs. generalist AI-scribe competitors). This block is reframed as "what NeuroFlo is" rather than an agent-architecture explainer.
5. **"Industries We Serve"** — rewrite the 4 blocks around Government + Surgical/Medical, replacing the current generic set.
6. **"Core Capabilities" tabs** — keep the 4-tab structure, rename tabs and rewrite content around: proprietary models trained per code system (CPT/HCPCS/ICD/CMS), cohort/server systems with current code-set data, the admin + legal + clinician requirement pipeline that produces groupings/modifiers, and the human-in-the-loop framing. Visual redesign: halftone + glow treatment from the slides, recolored to brand palette. Section retitled to sell the pilot, not just list features.
7. **CTA language** — flagged as an open decision below (keep "Request Demo" vs. "Pilot With Us").
8. **"Why NeuroFlo"** — copy update, buttons unchanged.
9. **Funding teaser block** — update traction/market figures to match `docs/plan/citations.md`.

## Phase 3 — About page rewrite

1. Update mission copy.
2. `Compliance First / Expert-Led / Results-Driven` cards — reframe toward core-tenet language per founder's steer, update descriptions; team/leadership sections stay as-is (founder confirmed unchanged).
3. Rewrite **Core Technology**: replace agent-architecture-forward framing with "critical AI, machine learning, and reinforcement learning" framing — proprietary per-code-system trained models, cohort/server data currency, and the admin/legal/clinician requirement pipeline. De-emphasize "agentic" as a headline term per founder's note that it reads as played-out.
4. Remove/fold the "Multimodal Capabilities" card.
5. Fix the "SOC 2" bullet from present-tense-achieved to "SOC 2 Type I audit in progress."

## Phase 4 — Investors page rewrite

1. Add an explicit **Pitch Deck** button/link (→ `/download-deck`) beside "Request Meeting."
2. Update **What We Do** to the corrected positioning (RL/ML framing, not agentic-AI-forward).
3. Update **Traction** — no new milestones to add (still just Vandalia Health, other prospects are under NDA and can't be named). Wording pass only: keep the Vandalia pilot as the anchor claim, and honestly frame the unnamed prospects as a forming pipeline ("growing pipeline of additional health systems currently evaluating NeuroFlo under NDA") — real and truthful, just framed to read as more than a single data point. No invented names, numbers, or logos.
4. Correct **Market Size** block using `docs/plan/citations.md` (single-sourced Business Research Company figures, not the four current uncited numbers).
5. **Investment Ask** — use the spend model below. Ask **$1M on a post-money SAFE**, sized to fund ~4 quarters of the "Growth" scenario (~$859K modeled spend, ~$72K/month average burn), covering: first enterprise sales hire, 2 AI engineers, SOC 2 Type II report + pen test, AMA CPT licensing, and additional hospital pilot support. Site copy must label this as **benchmark-based/estimated**, not actual books — several line items (cloud/AI costs, legal, insurance, travel) are industry-benchmark placeholders pending your real operating costs. Optional supporting line: SAFE caps for raises in the $1–2.5M range have recently clustered around a $15M median, with healthtech pricing higher — presented as market context, not as NeuroFlo's committed terms.
6. Fix "HIPAA and SOC 2 compliant" language sitewide on this page to the standardized SOC 2 phrasing (see below).
7. Update **Unique Insights** to drop generic agentic-AI framing in favor of RL/ML + surgical-specialization positioning.
8. **Exit section** — omitted from the page (confirmed).

### Standardized SOC 2 wording (applies to every page that mentions it)

Goal: sound viable and in-motion, never claim the certification is already held. Canonical phrasing to reuse verbatim across Homepage, About, and Investors:

- Badge/label form: **"SOC 2 Type II — Audit Underway"**
- Body-copy form: **"Actively pursuing SOC 2 Type II certification"** / **"SOC 2-ready architecture, certification in progress."**

Replaces the current "HIPAA and SOC 2 compliant solution" / "SOC 2 compliance validation" / "SOC 2: Security controls..." wording on the Investors and About pages, which currently states SOC 2 as already achieved.

## Phase 5 — New Platform pages

`/platform/op-note`, `/platform/coding-revenue`, `/platform/ai-insights` — each gets its own hero, distinct tagline/value prop/problem statement (per founder: these three must NOT share messaging), and a modal that plays the lifecycle-hook animation for that pillar, adapted from the V1 slide deck and recolored to brand palette.

`/platform/architecture` — built from the engine architecture & validation doc.

## Phase 6 — New Investor-adjacent pages

- `/investors/animated-overview` — **deploys the full `animated-slide_v2/neuroflo-deck-v2.html` deck as a live, viewable page**, wrapped with a page title and short description (not just embedded raw — built as a proper Next page/route), recolored per the Phase 0 color mapping (deck's indigo/violet blue family + navy-black background → site's blue-600→cyan-600 on neutral near-black). This is distinct from the static PDF `Pitch Deck` link and from the 3 lifecycle-hook animations extracted onto the Platform pages — it's the whole animated deck, viewable end to end on its own page.
- `/investors/roi` — ROI & Financial Framework page, grounded in the ROI Financial Framework PDF plus the AI Surgical Coding Platform Strategy PDF for context, using the **corrected** valuation range (3–6x base, 1.5–2x EHR-native premium) rather than the contradicted 10–15x figure, and the new spend/ask model (Phase 4) for the funding-ask framing.
- `/investors/market-analysis` — from the Market & Competitive Analysis + Market Positioning docs.
- `/investors/explainer` — video explainer page (distinct from the pitch deck and from the animated overview).
- `/cfo` — unlisted buyer-persona landing page, linked from `/investors/roi`.

Every statistic placed on these pages gets a footnote/citation sourced from `docs/plan/citations.md`.

## Phase 7 — Legal pages pass

Terms, Privacy, Compliance: proofreading/tightening pass only. Fix factual errors if found. No structural rewrite unless something is actually wrong — founder confirmed these can stay as-is if nothing's broken.

## Phase 8 — Asset migration & QA

1. Move only the specific diagrams/images actually referenced by new pages from `docs/` into `public/` (no blanket copy).
2. Confirm dark/light mode on every new/changed component.
3. Run the dev server, click every nav item (desktop + mobile), footer link, and CTA to confirm routing.
4. Final sweep: confirm no page states SOC 2 compliance as an already-met fact anywhere on the site.

---

## Resolved decisions (2026-09-11, second confirmation pass)

1. **Exit-strategy section** — omitted from the Investors page. Confirmed.
2. **Investment Ask** — resolved via the spend model in Phase 4 above: $1M post-money SAFE, ~4 quarters of the Growth scenario, use-of-funds breakdown provided, labeled as benchmark-based pending real operating costs.
3. **Traction** — no new milestones exist yet (Vandalia Health pilot only; other prospects are real but unnamed under NDA). Wording pass to honestly frame the NDA pipeline, no fabricated claims.
4. **SOC 2 wording** — standardized phrase adopted, see Phase 4. Applied everywhere SOC 2 is mentioned (Homepage, About, Investors).
5. **Deck file** — out of scope for this plan. The founder's pasted fact-check report is explicitly addressed in part to "the other agent" handling the corrected/footnoted deck file separately; this plan does not touch `neuroflo-opener.html` or produce a competing corrected deck.
6. **`docs/animated slide/neuroflo-opener.html` vs. the `animated-slide_v1`/`animated-slide_v2` folders** — founder's read is that the two subfolders are the canonical v1/v2. Phase 0 will confirm by inspection rather than assume, but proceeds on that basis.
7. **All other calls** (primary CTA wording, minor sequencing) — founder deferred to my judgment. Decision: standardize on **"Request a Pilot"** as the primary CTA label sitewide (replacing "Request Demo" text only — every instance still routes to `/contact`), since the founder was explicit earlier that "pilot" is the preferred framing over "demo."

No open questions remain. Plan is ready to build pending final go-ahead.

---

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
