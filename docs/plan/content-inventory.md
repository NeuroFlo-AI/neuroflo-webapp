# NeuroFlo Website — Content Inventory

Status: Phase 0 output. Reference document only — no site pages were edited to produce this. Consumed by Phase 2 (Homepage), Phase 3 (About), Phase 5 (Platform pages), Phase 6 (Investor-adjacent pages incl. animated overview, ROI, Market Analysis, Architecture).

**Read in full for this inventory:** all 7 required PDFs (`1`–`5`, `neuroflo-engine-architecture-and-validation.md.pdf`, `NeuroFlo Market Positioning...pdf`), `docs/animated slide/animated-slide_v1/neuroflo-opener.html` (854 lines, in full), a complete line-by-line diff of `animated-slide_v2/neuroflo-deck-v2.html` against v1, and `app/globals.css` / `tailwind.config.ts` for the color-mapping table. The top-level `docs/animated slide/neuroflo-opener.html` referenced in the plan **does not exist** — see "Top-level file" section below.

---

## 0. Headline finding: the "4-point structure" is NOT what was dictated

The founder described the structure as **Agentic Intelligence / Op Note Assistant / Coding Validation / EHR**. This exact phrase, or anything close to it, **does not appear anywhere** in any of the 7 PDFs, in `animated-slide_v1/neuroflo-opener.html`, or in `animated-slide_v2/neuroflo-deck-v2.html`.

What the source material actually presents, consistently across every document that discusses platform structure, is a **3-pillar structure**, stated explicitly and repeatedly:

- `1-NeuroFlo_ Full Platform Overview.pdf` p.2, header **"NeuroFlo has 3 Core Pillars"** (verbatim, with source typos "Neuroflo"/"mai tenants"):
  1. **AI Operative Note Suite (Capture)**
  2. **Medical Coding & RCM Hub (Convert)**
  3. **Operational KPI Engine (Capitalize)**
- `animated-slide_v1/neuroflo-opener.html` line 392: `const P1="AI Operative Note Suite", P2="Medical Coding & RCM Hub", P3="Operational KPI Engine";` and line 438-445, a dedicated slide titled **"Three core pillars"** / "Capture. Convert. Capitalize." with exactly 3 pillar cards, no 4th.
- Naming is **inconsistent even within Source 1 itself**: p.1 calls pillar 2 "Medical Coding Center (The Conversion)" while p.2 calls it "Medical Coding & RCM Hub (Convert)"; p.1 calls pillar 3 "Operational KPI Engine (The Capitalization)" while p.2 calls it "(Capitalize)." Pick one canonical form — recommend the deck's own naming (`P1`/`P2`/`P3` above) since it's used consistently across all ~30 pillar-specific slides.

### Closest things to a 4-item structure that DO exist (none matches the dictated names)

1. **`animated-slide_v1` line 399-404** — a 3-card slide titled "What you should know first": Government contractor / SMART on FHIR native / AI with reinforcement learning. Only 3 cards.
2. **`animated-slide_v2` (diff line ~87-102)** — the equivalent slide was expanded to **4 cards**: Government contractor / SMART on FHIR native / Reinforcement learning / **"Not an AI scribe"** (folded in as a 4th card, replacing what was a separate full-screen "scribe" slide in v1). This is the only place in any source where a genuine 4-card "what you should know first" structure exists — and its 4 items are **Government contractor, SMART on FHIR, Reinforcement Learning, Not-an-AI-scribe**, not SOC 2/government/SMART-on-FHIR/surgical-specialization as dictated.
3. **`5-Neuroflo Market & Competitive Analysis.pdf` pp.3-4, "Hidden Technical Advantages"** — a 4-row **competitor-comparison table** (Interoperability & Data Liability / Adaptive Learning Loop / Audit & Clawback Protection / Federal Contracting Readiness), each row pairing "Competitor Reality" against "NeuroFlo Capability." This is a diff-matrix, not a capability-framework slide, and its "Audit & Clawback Protection" row states SOC 1/SOC 2/HIPAA/CMS as **already enforced** — which contradicts the SOC 2 correction (see `citations.md` item 9) and should not be reused as-is.

**Recommendation for Phase 2 step 4:** build the new 4-point "what NeuroFlo is" block from the founder's dictated list (SOC 2 readiness, government-contractor status, SMART-on-FHIR readiness, surgical-field specialization) as **new copy**, informed by but not copied from, the v2 deck's 4-card slide and the Source-2 diff table — since no source document states that exact 4-item list anywhere.

---

## 1. Source PDF summaries by topic

### 1a. `1-NeuroFlo_ Full Platform Overview.pdf` (5 pages, fully read)

**Canonical whole-platform summary line (p.3, the doc explicitly calls this out as the intended one-liner):**
> "We make surgeons faster, get hospitals paid within 24 hours instead of weeks, and turn dead text into live operational intelligence."

**Overall tagline (p.1):**
> "Turning Surgical Documentation into Instant, Error-Free Revenue."

**Anti-generic-AI positioning (p.1 and p.3, near-verbatim repeat):**
> "We Aren't Automating Medical Coding. We Are Engineering Surgical Revenue From the Ground Up."

**Per-pillar copy (p.2):**
- **AI Operative Note Suite (Capture)** — "Provides surgeons with real-time dictation and templated note capture tailored for complex surgeries." Value: "It actively analyzes the note at the point of care to prevent revenue leakage. If critical clinical or billing details are missing, it prompts the surgeon to verify them *before* signing off..."
- **Medical Coding & RCM Hub (Convert)** — "Acts as an intelligent companion tool that instantly translates signed operative notes into submission-ready medical codes, applying the hospital's specific compliance and grouping rules." Value: "...crushes the Discharged Not Final Billed (DNFB) lag from the 7-day industry average to under 24 hours."
- **Operational KPI Engine (Capitalize)** — "Uses an AI feature extractor to mine the unstructured clinical text..." Value: "Hospital leadership can use a no-code, drag-and-drop, and dictation interface to type plain-language queries and generate live dashboards."

**Government-contractor / compliance caveats (p.3 — important, self-flagged by the source):**
> "Government-contractor status provides an additional enterprise and institutional-readiness credential. **This comes from the additional information you provided, not the attached documents.**"
> "SOC 2 readiness is part of NeuroFlo's enterprise deployment path. **Because the SOC 2 process is not yet completed, we should present this as readiness/in-progress rather than claiming completed SOC 2 certification.**"

This second line is the source document's *own* explicit instruction not to claim completed SOC 2 — directly consistent with `citations.md` item 9's correction, and directly contradicted by two other source PDFs (see 1b, 1c below).

**Investor Exit Strategy (p.5, out of scope for the Investors page per founder decision, recorded for completeness):**
> "Healthcare AI platforms trade at 10x to 15x Forward Annual Recurring Revenue (ARR)... $10,000,000 ARR, establishing a $120,000,000 valuation at a conservative 12x multiple." Acquirers named: Epic, Oracle Health/Cerner, MEDITECH, Optum, R1 RCM, Waystar, Microsoft Nuance, Google Health.

This is the **old, incorrect** valuation figure — see `citations.md` item 7 for the corrected 3–6x/1.5–2x range.

### 1b. `5-Neuroflo Market & Competitive Analysis.pdf` (4 pages, fully read)

**Market sizing (p.1, uncited in the PDF itself):**
- Medical coding market: "$18.88 billion in 2025 to $20.80 billion in 2026... over $30.00 billion by 2030 at a 10% CAGR." — matches the corrected figures in `citations.md` item 5.
- AI medical coding segment: "$3.12 billion in 2025 to $3.56 billion in 2026... $10.60 billion by 2035." — this is the **long-range Option B style figure**, not the corrected Option A ($6B/2030/14% CAGR) — see `citations.md` item 6.

**Competitive landscape (p.1-3):** three competitor groups — Front-End Clinical Scribes (Nuance DAX, Abridge), Back-End Autonomous Coders (Fathom Health, CodaMetrix), Legacy Data Analytics (Epic/Cerner native dashboards). Key anti-generic lines:
> "They are purely passive; they transcribe what they hear without any knowledge." (on scribes)
> "They suffer from 'Garbage In, Garbage Out'. If an operative report is missing critical details... downstream AI will perfectly code an *incomplete* note." (on autonomous coders)
> "Over 80% of actual surgical nuance remains trapped in unstructured text..." (on legacy EHR dashboards — note "over 80%," the wording to avoid; see `citations.md` item 3)

**"Hidden Technical Advantages" 4-row table (pp.3-4)** — see Section 0 above. States SOC 1/SOC 2/HIPAA/CMS as already "enforced" — **conflicts with Source 1a's own instruction**, flag accordingly.

### 1c. `NeuroFlo Market Positioning & Strategic Differentiation (Blue Ocean Position Shift).pdf` (1 page of content, p.2 blank)

This is the source of the **single strongest "not a generic scribe" paragraph** across all materials (p.1, full quote):

> "...Both approaches are fundamentally flawed because they treat documentation and billing as two separate silos. If a surgeon writes a clinically vague note on the front end and forgets key details, the world's most advanced AI coder on the back end still cannot legally bill for the missing parts... **We do not passively attempt to decode whatever the surgeon happens to write; we actively partner with them in real-time at the point of care** to ensure the note is mathematically and clinically complete... We aren't just automating medical coding; we are engineering surgical revenue and operational intelligence from the ground up."

Also states (p.1): **"Certified across HIPAA, SOC 1, and SOC 2 frameworks"** — an already-achieved-certification claim that directly contradicts Source 1a's explicit "not yet completed" instruction. Flag, do not silently resolve.

Note: the document's title says "Blue Ocean Position Shift" but the term "blue ocean" does not otherwise appear in the body text — the framing is asserted only in the title.

AI medical coding market figure here (p.1): "$3.4 Billion in 2026 to $10.6 Billion by 2035" — a **third variant**, disagreeing with Source 1b's $3.56B/2026 figure even though both cite 2026. See `citations.md` item 6.

### 1d. `2-App1 - AI Operative Note Suite (The Capture).pdf` (4 pages, fully read)

**Tagline (p.1):** *"We are not selling an AI scribe. We are selling surgical capacity and revenue capture at the point of care."*

**Differentiator (p.3):** *"Move Beyond Passive Transcription: Unlike other vendors, NeuroFlo does not simply record what the surgeon says. It actively evaluates the operative note for clinical, structural, financial, and procedural completeness before it becomes the permanent source document used downstream."*

**Distinct angle:** point-of-care completeness enforcement, pre-sign-off intervention. Problems Solved / Value Proposition are both 5-7 bullet lists (see agent report for full text) mapping directly to Platform page section candidates.

**Lifecycle diagram (p.1 infographic):** "NeuroFlow Operative Note Lifecycle" (**note the "w"** — see spelling flag below) — LISTEN → STRUCTURE → VALIDATE → COMPLETE → LEARN. A more detailed technical version appears on p.4 (image only): Session type → Ambient listening/Provider dictation → Draft note → 6-box validation stack (Provider profile/RL, Administrative, Legal/Precedent, Internal/Proprietary, Template, SMART on FHIR/EHR) → Gap detection → Recommendations/Finalized note → Provider accepts → EHR write-back → Profile learning (feeds back into validation stack). This maps almost exactly to the `op` FLOWS diagram in the animated deck (Section 3 below) — same 5-6 stage shape, same feedback loop.

**Stats (all explicitly modeled, only one cited):** 30-60→5-10 min per note; 2,500 hrs/$10M/$2M revenue capacity model; "up to 3%" revenue erased; **DNFB drop to under 24hrs, $30M unlocked — the only App1 stat with a citation link, labeled "Source: DNF in Healthcare" (link text only, target URL not extractable — treat as unverified until confirmed).**

### 1e. `3-App-2-Medical Billing Coding & Revenue Cycle Hub.pdf` (3 pages, fully read)

**Tagline (p.1):** *"We are not selling automated medical coding. We are selling instant liquidity and margin recovery."*

**Differentiator (p.2):** *"Human-in-the-Loop by Design: NeuroFlo is built as a companion to existing medical coders, not a replacement."*

**Distinct angle (vs. App1's "not a scribe" and App3's "not a dashboard"):** this pillar disclaims being *autonomous/replacement* coding software, not passive capture. Its differentiator is coder-augmentation with source-linked evidence, not autonomy.

**Lifecycle diagram (p.1 infographic):** "NeuroFlow Medical Coding Lifecycle" — PREPARE → REVIEW → VALIDATE → EVIDENCE → ENHANCE → CONFIRM → CHARGE. Matches the `code` FLOWS diagram in the deck almost node-for-node (Section 3 below).

**Stats (all explicitly "the model" / "modeled around," none validated):** 7.1 days→<24hrs DNFB, $30M+$1.5M model; 5% denial reduction on 100K claims → $590K savings **at $118/reworked claim** (the old, uncorrected figure — see `citations.md` item 4); 10 outsourced coders @ $80K/yr → $800K savings; "modeled around 95%+ first-pass accuracy."

### 1f. `4-App-3  AI Surgical Insights.pdf` (3 pages, fully read)

**Tagline (p.1):** *"We are not selling a dashboard. We are selling surgical data governance and strategic foresight."*

**Differentiator (p.2):** *"Unlock Data Legacy EHR Analytics Cannot Access: NeuroFlo extracts surgical nuance buried in unstructured operative-note text and converts it into structured, trackable variables that traditional Electronic Health Record reporting tools cannot easily analyze without manual review."*

**Distinct angle:** positions against generic BI dashboards / custom-analytics-project workflows and manual chart audits, not against scribes or coding automation.

**Lifecycle diagram (p.1 infographic):** "NeuroFlow KPI Insights Lifecycle" — QUERY → EXTRACT → ANALYZE → VISUALIZE → ACT → LEARN. Matches the `kpi` FLOWS diagram in the deck (Section 3 below), including the worked example query "Aortic valve replacement time vs. complication rate, by surgeon."

**Stats:** this document has almost none — the **only** numeric claim in all 3 pages is "More than 80% of clinical data is described in the document as trapped in unstructured text" (uncited, "over 80%" wording to avoid — see `citations.md` item 3). Every ROI/dollar figure elsewhere in App1/App2 is absent here; App3 sells on capability, not modeled savings.

**Editorial-note leak, flag for cleanup:** p.2 contains a line that reads like an internal drafting note left in by mistake: *"This is distinct enough from retroactive data mining because the value is specifically removing the manual audit burden."* Do not reuse verbatim.

### Cross-cutting spelling flag (all three App PDFs)

All body-text copy in these three PDFs spells the product **"NeuroFlo."** But every infographic/diagram header and the embedded logo image on each PDF's first page reads **"NeuroFlow"** (with a trailing "w") — e.g. "NeuroFlow Operative Note Lifecycle," logo tagline "A CLEARER RECORD / A BRIGHTER TOMORROW." This is a real inconsistency in the source material (not a misread) and should be resolved to "NeuroFlo" before any of these diagrams are recreated for the Platform pages.

### 1g. `neuroflo-engine-architecture-and-validation.md.pdf` (15 pages, fully read — for `/platform/architecture`)

**Important framing, read before using this source for anything:** despite its filename, this is **not** a description of a built, validated system. Its actual title is *"The Operative Note Intelligence Engine: Architecture, Evidence, and What Must Be Built"* — a consultant's critique-and-roadmap document addressed to NeuroFlo (dated Sept 2026), written in first person ("You asked me to help validate the problem..."). It:
- **Critiques several of NeuroFlo's own existing marketing figures as unsupported or wrong** (see the citations.md addendum for full detail — the 30-45min baseline is called "arithmetically impossible," the "7.1-day...HFMA" DNFB attribution is called "appears to be invented," a "3,945% ROI" claim is called "unserious").
- **Proposes six knowledge-base "artifacts" that do not yet exist** and must be built: Detection Criteria, Element Dictionary, Procedure Profiles, Code Selection Decision Trees, Bundling/Conflict/Modifier Evidence Rules, Boilerplate & Redundancy Library.
- Names a specific customer, **"Vandalia,"** and their Cerner PowerNote configuration in technical/consulting detail (the customer name itself is already public via the site's own Traction section — "Vandalia Health" — but the PowerNote implementation specifics are not cleared public copy).
- **Contains zero HIPAA/SOC 2/encryption/security-compliance claims of any kind** — it cannot be used as a source for any compliance statement on `/platform/architecture`.

**Architecture thesis actually usable as public-facing framing (p.1-2):**
> "You cannot validate an operative note against a Current Procedural Terminology code. You can only validate it against the facts that select the code." — This yields a two-step pipeline: LLM-based fact extraction from prose, then deterministic (non-LLM) table-logic mapping of facts to codes, described as intentional: "the second step... is exactly the kind of reasoning where models are least reliable and where errors are least detectable."

**Vocabulary actually used by this document** (does NOT use "agentic AI," "reinforcement learning," or "proprietary models per code system" anywhere): "multi-agent system," "agent" (generic), "large language models," "language model" (lowercase, generic). Notably, the document's own first recommended deliverable states: "The scan requires no clinical artificial intelligence, no CPT license for the descriptors, no model at all."

**Human-in-the-loop design principles (usable, reframed as product philosophy, not as claims of a built system):**
- "Where confidence is insufficient, ask rather than guess." (Detection Criteria design principle)
- "The system should never silently apply a wrong profile, and it should never refuse to run. Every degradation should be visible to the user..."
- Three-tier override model: Tier 1 fixed/non-configurable; Tier 2 "suppressible with consequence" (logged, attributed, cost shown); Tier 3 freely overridable, no friction.
- Boilerplate safeguard: only text "verifiable from another system of record" or "the surgeon must affirmatively confirm" may be pre-populated; findings/complications/patient condition are "never boilerplate under any circumstances."

**EHR integration:** names Cerner and Epic directly, references "standard interoperability interfaces" and "scheduled procedure or encounter resource" — **does not use the term "FHIR" or "SMART on FHIR" anywhere in this document.** Do not infer FHIR-specific claims from this source; that language comes from the other PDFs and the deck instead (see 1a, 1c, and Section 3).

**Recommendation for `/platform/architecture`:** treat this document as background/technical-credibility material to be rewritten into public-safe language describing the two-step (extract-then-map) design philosophy and human-in-the-loop principles — do NOT quote its ROI critiques, customer specifics, or "what must be built" roadmap items as though they describe a finished, shipped system.

---

## 2. Animated deck v1 — full structural analysis

Source: `docs/animated slide/animated-slide_v1/neuroflo-opener.html`, 854 lines, 730KB (mostly base64-embedded WebP screenshots — the actual markup/CSS/JS is ~74KB once images are stripped). Read in full.

### File structure (line ranges)

| Section | Lines | Contents |
|---|---|---|
| CSS: color vars, type, layout for every slide type | 10-318 | See color table, Section 5 |
| Body shell (`#start`, `#stage`, `#slides`, `#ui`) | 320-341 | Presentation chrome |
| `IMG` / `SHOTS` / `IC` (icon library) | 344-386 | Base64 screenshots + inline SVG icon defs |
| **`S[]` — all slide content/copy** | 392-558 | See Section 2a below |
| **`FLOWS` — lifecycle diagram data** | 560-608 | See Section 3 |
| `flow()` render function | 611-636 | Turns FLOWS data into SVG+DOM |
| `R{}` — per-slide-type renderer functions | 646-681 | One function per slide `type` |
| Engine: scaling, halftone transition canvas, count-up/evidence hooks, autoplay/nav | 683-833 | Reusable animation engine, not content |
| Keyboard/click handlers, deep-link (`#12` jumps to slide 12) | 835-854 | — |

### 2a. Slide-by-slide copy inventory (34 slides total)

1. **logo** — tagline: "Operate with Intelligence." (word-by-word reveal)
2. **statement** — "We aren't automating medical coding." / "We're engineering surgical revenue from the ground up."
3. **cards (3)** — "What you should know first": Government contractor / SMART on FHIR native / AI with reinforcement learning (see Section 0)
4. **scribe** — "Not an AI scribe." / "Not in any shape or form." / "Scribes passively transcribe what they hear. NeuroFlo actively checks the surgical record against clinical, legal and billing requirements before it's signed."
5. **section** divider — "Platform overview"
6. **paragraph** — "From the operating table to the revenue cycle, in one system." / "NeuroFlo is an end-to-end surgical revenue engineering platform for surgical documentation, medical coding and operational intelligence. It runs natively inside Epic and Cerner as a SMART on FHIR application."
7. **cards (3)** — "Turning surgical documentation into instant, error-free revenue.": Faster surgeons (5-10min notes) / Paid within 24hrs / Live operational insight
8. **stats (3)** — "Millions are lost at the operative note.": "1-3%" procedural revenue lost / "7.1 days" avg charge lag+DNFB (conflated terminology, see citations.md item 2) / "80%" clinical data trapped in unstructured text
9. **versus** — "Where revenue leaks, and how we close it.": 3 problem→solution rows mapped to Capture/Convert/Capitalize
10. **section** divider — "Three core pillars."
11. **pillars** — "Capture. Convert. Capitalize." — the 3-pillar summary cards (P1/P2/P3)
12-16. **Pillar 01 (Capture) block** — intro tagline "Complete, compliant and fully billable, before the surgeon signs."; statement "We are not selling an AI scribe. We are selling surgical capacity and revenue capture at the point of care."; stats (5-10min, 2500hrs, $10M); diagram (`op` flow, Section 3); list of 5 "Problems solved"
17-22. **Pillar 02 (Convert) block** — intro "Signed notes to submission-ready codes, each one traced to its evidence."; statement "We are not selling automated medical coding. We are selling instant liquidity and margin recovery."; stats (<24hrs, $30M, $1.39M); diagram (`code` flow); evidence slide (interactive op-note→CPT-code trace demo); list of 5 problems solved
23-27. **Pillar 03 (Capitalize) block** — intro "Plain-language questions, answered live from every operative note."; statement "We are not selling a dashboard. We are selling surgical data governance and strategic foresight."; stats (80%+, No-code, Live); diagram (`kpi` flow); list of 5 problems solved
28. **stats (market)** — "A $20B market, moving to AI." $20.8B medical coding 2026→$30B 2030 @10%CAGR; $3.56B AI coding 2026→$10.6B 2035 (old, long-range figure — see citations.md item 6)
29. **landscape** — "Two isolated silos. NeuroFlo connects them.": Front-end scribes (Nuance DAX, Abridge) vs. NeuroFlo (nf-highlighted center column) vs. Back-end coders (CodaMetrix, Fathom)
30. **drivers (4 tiles)** — "Why hospitals buy NeuroFlo.": Zero revenue leakage / Faster cash / Lower overhead / More surgical capacity
31. **flywheel** — "One continuous intelligence loop.": Complete operative notes → Clean verified codes → Live surgical insight → Sharper surgeon profiles (circular flywheel diagram)
32. **table** — "NeuroFlo at a glance" summary table, one row per pillar
33. **stats (investor outlook)** — "The path to a $120M valuation." (OLD/incorrect 12x multiple — see citations.md item 7)
34. **logo** — closing, "neuroflo.io"

### 2b. Per-pillar distinct positioning (directly answers the "must be distinct" requirement)

| Pillar | "We are not selling X" | "We are selling Y" |
|---|---|---|
| P1 Capture | an AI scribe | surgical capacity and revenue capture at the point of care |
| P2 Convert | automated medical coding | instant liquidity and margin recovery |
| P3 Capitalize | a dashboard | surgical data governance and strategic foresight |

These three lines (deck lines 451, 473, 497) are the cleanest, most reusable distinct-per-pillar tagline set found anywhere in the source material — recommend using them near-verbatim as each Platform page's hero subhead.

---

## 3. Lifecycle-hook animation structure (for React recreation)

All three pillars share one **generic animated flow-diagram system**, driven entirely by data (the `FLOWS` object), not by bespoke markup per pillar. To recreate as a React component: build one `<LifecycleFlow>` component that takes a `FLOWS`-shaped data object as a prop, and define three data objects (one per pillar) matching the shapes below.

### Data shape (`animated-slide_v1/neuroflo-opener.html` lines 565-608)

Each flow is `{id, w, h, start, step, nodes:[...], edges:[...], extra}`:
- **`nodes`**: each has `{id, col, x, y, w, h, icon, t (title), s (subtitle, optional), cls (CSS modifier: "io"|"stack"|"feed"|"engine"|"rich"), html (custom inner markup for complex nodes), dec (decision-diamond label, optional)}`. Position is explicit pixel `x/y` within a fixed 1760×690 canvas — not auto-laid-out.
- **`edges`**: each has `{a, b (node ids), fa/fb (anchor side: t/b/l/r), d (explicit SVG path override for curved/looping edges), loop (bool), delay, dur, label, lx/ly (label position)}`.

### The three pillar flows

1. **`op` (Pillar 1, "Operative note life cycle," lines 566-580):** Dictation+ambient listening → Note structuring → Session selection → [fed by: Continuous learning (RL)] → Multi-layer validation engine → Gap detection → Surgeon review → "Complete?" decision diamond → (loop back to Gap detection if not) → Finalized note → (feeds back into Continuous learning). Caption: "Listen, structure, validate, complete, learn." This maps closely to App1 PDF's own two lifecycle diagrams (p.1 and p.4).
2. **`code` (Pillar 2, "Medical coding life cycle," lines 581-595):** Prepared op note → Coder workspace → Validation+research [fed by: Hospital rules engine, Code references] → Evidence chain review → Code enhancement → AI review+human confirmation → Charge item output → (loop back to Coder workspace: "Local coder edits train facility-specific accuracy"). Caption: "Prepare, review, validate, trace evidence, enhance, confirm, charge." Matches App2 PDF's lifecycle diagram closely.
3. **`kpi` (Pillar 3, "KPI insights life cycle," lines 596-607):** KPI request (worked example: "Aortic valve replacement time vs. complication rate, by surgeon.") → Query interpretation → Scope+metrics chips → Background processing (animated scan bars) → Factor detection+evidence → Aggregation+statistics → KPI dashboard (live sparkline chart) → (loop back to Query interpretation: "Refine the query and rerun"). Caption: "Query, extract, analyze, visualize, act, learn." Matches App3 PDF's lifecycle diagram closely.

### Rendering mechanics (lines 611-636, the `flow()` function)

- SVG `<path>` per edge, `stroke-dasharray:1 1; stroke-dashoffset:1`, transitioning to `stroke-dashoffset:0` over 1.6s when the parent slide gets class `.slide.on` — this "draws" the connecting line.
- A traveling `<circle class="pulse">` per edge uses SVG `<animateMotion>` with `<mpath href="#edgeId">` to move a dot along the drawn path, looping indefinitely — this is the signature "data flowing through the pipeline" visual.
- Loop-back edges get class `.wire.loop` with a dashed pattern (`stroke-dasharray:.006 .008`) and continuous `dash` keyframe animation (line 199: `@keyframes dash{to{stroke-dashoffset:-.056}}`) instead of a one-time draw, visually distinguishing "feedback" edges from "forward" edges.
- Nodes are plain positioned `<div class="node rv">` elements (CSS class `.rv` = the generic reveal system: opacity/blur/translateY transition, staggered via a `--d` delay CSS custom property set inline per node/edge based on its column position — see `.rv` definition lines 61-67).
- Decision-diamond nodes (`dec` field) render as a rotated-square `.node-dec` div instead of a rectangle.
- Special node content (chip lists, scan-bar animations, live sparkline charts) is passed as raw `html` per-node rather than being a separate component type — e.g. the KPI dashboard's live chart is an inline `<svg class="spark">` with a hand-authored path.

### Supporting visual systems (reusable independent of the flow diagrams)

- **`.rv` reveal system** (lines 61-67): the base "fade/blur-in + rise" transition used by nearly every text element in the deck, keyed off `.slide.on` and a `--base`+`--d` delay pair — the single most reusable primitive for a React port (`opacity/filter:blur/transform` transition on mount, staggered per child).
- **Halftone circle-dot slide transition** (lines 747-766, `halftone()` function): canvas-based, draws a grid of circles whose radius ramps in from 0 based on distance-from-diagonal-wipe-front, used for a subset of slide transitions (`tr:"halftone"`). Distinct per-pillar via the `dir` param (`lr`/`rl`/`radial`).
- **Ambient background "aura" blobs** (lines 24-33, `#aura`/`.blob`): four large blurred radial-gradient circles that drift via a `drift` keyframe and reposition per "mood" (`open`/`blue`/`indigo`/`violet` — see `MOODS` object, lines 717-722) — this is what gives each pillar section a distinct background color wash (pillar 1 = blue mood, pillar 2 = indigo mood, pillar 3 = violet mood).
- **Ambient halftone dot canvas** (lines 727-746, `drawDots()`): a second, continuously-animated (not transition-only) canvas of small dots density-modulated by 3 moving Gaussian "blobs," opacity controlled per-slide via a `dots` value (0-1) in the slide's data object — gives busier/calmer slides different ambient texture.

---

## 4. Animated deck v2 — what actually differs from v1

**Correction to the plan's stated assumption:** the plan states v2 differs from v1 only in "the trailing/exit-strategy slides." **This is not accurate.** A full line-by-line diff of the two files (both stripped of embedded base64 image data to make them diffable; line numbers below match the original files since only embedded image bytes were truncated) shows v2 is a **citation-corrected, restructured rewrite of the entire deck**, consolidating from **34 slides down to 20** (one further slide, the summary table, is present in the data but runtime-hidden via `skip:true`). Key changes, in order of importance:

1. **Citations added throughout.** A new `SRC{}` object (diff, new lines after v1 line 391) defines real source links:
   - `hfma` → HFMA 2017, `https://www.hfma.org/revenue-cycle/charge-capture/55358/`
   - `ab` → "Advisory Board benchmark via MD Clarity," `https://www.mdclarity.com/blog/dnfb-in-healthcare`
   - `yale` → "Li et al., Yale University," `https://arxiv.org/pdf/2107.02975`
   - `tbrc` → "The Business Research Company, 2026," `https://www.researchandmarkets.com/reports/5752068/medical-coding-market-report`
   - `tbrcai` → "The Business Research Company, 2026," `https://www.thebusinessresearchcompany.com/report/artificial-intelligence-in-medical-coding-global-market-report`
   - `wd` → "Windsor Drake, Q1 2026," `https://windsordrake.com/market-intelligence/reports/ai-in-healthcare-valuations-q1-2026`

   These match `citations.md` items 1, 2, 3, 5, 6, and 7 almost exactly (see that file for the one small numeric discrepancy: v2's valuation range is "$45-120M," the citations task's corrected wording says "$60-120M" — both cite Windsor Drake; flagged, not resolved, in citations.md).

2. **Stat corrections matching the fact-check exactly:**
   - Revenue leakage: "1-3%" → **"Up to 1%"**, sourced `hfma`.
   - DNFB: "Average charge lag while charts sit in...DNFB status" → **"Median time charts sit discharged but not final billed (DNFB) before cash can move"**, sourced `ab`. Terminology conflation fixed.
   - Unstructured data: "80%" / "80%+" → **"~80%"** (both instances), sourced `yale`.
   - AI coding market: "$3.56B (2026)...$10.6B by 2035" → **"$3.56B (2026)...$6B by 2030 at 14% CAGR,"** sourced `tbrcai` — matches citations.md item 6 Option A.
   - Medical coding market: "$20.8B...past $30B by 2030" → **"$20.8B...to $30.4B by 2030,"** sourced `tbrc`.
   - Valuation: the old "$120M at a conservative 12x" slide is **deleted entirely**, replaced by a new slide type (`market`, diff new lines) with panel "Path to exit" stating **"$45–120M... Valuation range at 3–6x revenue for revenue-cycle AI, with a 1.5–2x premium for EHR-native platforms,"** sourced `wd`.

3. **"Modeled" labeling added.** A new `<span class="mtag">Modeled</span>` badge (CSS `.mtag`, diff new lines after v1 line 293) is attached (via a new `m:true` flag on stat objects) to every internal-estimate figure: the 5-10min note time, 2,500 hrs, $10M revenue capacity, <24hr DNFB, $30M working capital, $1.39M savings — directly implementing the exact "label as modeled" instruction in `citations.md` item 8.

4. **Structural consolidation, not addition:** the separate full-screen "Not an AI scribe" statement slide (v1 slide 4) is removed and folded into a 4th card on the opening "what you should know first" cards slide (see Section 0). The separate per-pillar "statement" slides ("We are not selling X...") are removed and folded into a `<blockquote class="quote">` inside each pillar's existing "intro" slide instead of being their own slide. The "Value delivered" stats slide and "Problems solved" list slide per pillar are merged into one new two-column `vp` (value-proposition) slide type. Net effect: same information density, far fewer slides, everything sourced.

5. **No new "exit strategy" content was added beyond what v1 already had.** If anything, the opposite happened — v1's exit/valuation slide was corrected and folded into a combined "Market and path to exit" slide; nothing new about exit strategy appears in v2 that wasn't already a (differently-worded, uncited) slide in v1. **The plan's premise that v2 contains additional trailing exit-strategy content not present in v1 should be treated as incorrect** — what actually differs is that the entire deck was corrected and consolidated, and the founder's own 2026-09-11 plan decision to omit exit-strategy from the Investors page (see `website-overhaul-plan.md`, resolved decision #1) should govern regardless of what either deck version contains.

---

## 5. Top-level `docs/animated slide/neuroflo-opener.html` — does not exist

The plan document (`website-overhaul-plan.md`, "Verified starting state" section and resolved decision #6) references a third file: `docs/animated slide/neuroflo-opener.html` (top-level, 854 lines, described as possibly "a third variant" needing identification).

**Direct filesystem check (2026-09-11) confirms this file does not exist.** `docs/animated slide/` contains exactly two items: the `animated-slide_v1/` and `animated-slide_v2/` subfolders, and nothing else — no top-level `.html` file of any kind. `find "docs" -iname "*neuroflo-opener*"` from the repo root returns exactly one match: `docs/animated slide/animated-slide_v1/neuroflo-opener.html`.

**Conclusion:** the "top-level 854-line file" the plan describes is almost certainly a mistaken reference to `animated-slide_v1/neuroflo-opener.html` itself (which genuinely is 854 lines and 730KB, matching the plan's own stated size for the v1 file one bullet above). There is no third variant to reconcile. Phase 1+ work should proceed treating `animated-slide_v1/` and `animated-slide_v2/` as the only two deck files that exist, full stop — no further reconciliation needed. (If a third file existed elsewhere in the repo it was not found by a full-path search of `docs/`; if the founder has it saved outside this repo, it was not available to this research pass.)

---

## 6. Color mapping — deck palette to site palette

**Site's actual brand tokens (verified by direct inspection, not assumed):**
- `app/globals.css` line 48: dark-mode `--background: 0 0% 3.9%` (neutral near-black, no hue).
- `tailwind.config.ts`: exactly one `colors:` block (line 22), entirely CSS-variable-driven semantic tokens (`background`, `foreground`, `card`, `primary`, etc. — all `hsl(var(--...))`). **No custom blue/cyan color token exists anywhere in the 90-line file** (confirmed via full-file grep for "cyan"/"blue"/"colors:" — only the one `colors:` block header matches). The `blue-600`→`cyan-600` gradient seen across the site (e.g. `app/investors/page.tsx` line 51, `app/about/page.tsx` lines 7-8) is applied via stock Tailwind utility classes directly in component markup, not a custom token.
- Effective site brand gradient: **stock Tailwind `blue-600` (#2563eb) → `cyan-600` (#0891b2)**, azure-to-teal, on neutral near-black.

**Deck's palette (`animated-slide_v1/neuroflo-opener.html` lines 11-13, `:root` custom properties):**
```
--ink:#030615        (background base)
--cobalt:#0D1FDC
--blue:#1E5BFF
--sky:#0A8BFF
--ice:#BFD4FF        (light tint)
--lav:#A99BFF        (light tint, lavender)
--violet:#5B3BE8
```
Plus, used inline (not as root vars) elsewhere in the stylesheet: gradient stops `#3FA2FF`, `#5A6CFF`/`#5A7CFF`, `#B7A8FF`; additional light tints `#9DB7FF`, `#DCE6FF`, `#E8EEFF`, `#E6EDFF`; background gradient `radial-gradient(...,#07113d 0%,#030615 55%,#01020a 100%)`. This is an **indigo/violet-leaning blue family on navy-black**, distinct in hue from the site's azure/teal-leaning family on neutral black.

**Recommended mapping table for Phase 2/5/6 recoloring work:**

| Deck token | Deck hex | Role in deck | Site equivalent | Site hex |
|---|---|---|---|---|
| `--ink` / bg gradient | `#030615` / `#01020a` | Page background | `--background` (dark mode) | `hsl(0 0% 3.9%)` |
| `--cobalt` | `#0D1FDC` | Deep accent, blob 1, halftone gradient start | `blue-700`/`blue-800` range | `#1d4ed8` / `#1e40af` |
| `--blue` | `#1E5BFF` | Primary mid-blue, node glows, evidence badges | `blue-600` | `#2563eb` |
| `--sky` | `#0A8BFF` | Bright accent, bar-fill gradient start, pulse dots | `cyan-600`-adjacent | `#0891b2` (or `sky-500 #0ea5e9` if a closer hue match is wanted) |
| `#3FA2FF` | `#3FA2FF` | Flow-wire gradient start (lighter sky) | `cyan-500` | `#06b6d4` |
| `--lav` | `#A99BFF` | Secondary accent, ring outlines, eyebrow text | closest site accent: `blue-400`-ish, but site has no violet — **recommend flattening to blue/cyan range**, not introducing a new hue | `#60a5fa` (blue-400) as a non-violet substitute |
| `--violet` | `#5B3BE8` | Blob 3, violet "mood" (Pillar 3 background wash) | no direct site equivalent — **desaturate/remap to the blue-cyan range**, e.g. deeper `blue-700` | `#1d4ed8` |
| `--ice` | `#BFD4FF` | Light body/heading text tint | `blue-100`/near-white text on dark | `#dbeafe` or just `foreground` token |
| `#5A6CFF`/`#5A7CFF` | `#5A6CFF` | Flow-wire gradient midpoint | `blue-500` | `#3b82f6` |
| `#B7A8FF` | `#B7A8FF` | Flow-wire gradient end (violet-tinted) | `cyan-400` (replacing the violet lean with the site's cyan) | `#22d3ee` |

**General rule for Phase 2/5/6:** every place the deck's CSS uses `--lav`/`--violet`/the `#B7A8FF`-family violet tint, remap to a point in the site's blue→cyan gradient rather than preserving the violet hue — the deck's 3-mood system (blue/indigo/violet per pillar) should likely become a single consistent blue→cyan treatment per the plan's "recolored to the site's existing blue-600→cyan-600 gradient... not the decks' native palette" instruction, rather than 3 different hue families per pillar.

---

## 7. Quick-jump index for later build phases

- **Homepage (Phase 2) "three pillars" section:** Section 2a slide 11 (pillars summary), Section 2b (distinct taglines table), Section 3 (flow diagrams for the connecting-lines animation concept).
- **Homepage 4-point block:** Section 0 (read the whole section — the dictated 4 points don't exist verbatim anywhere; build as new copy).
- **About page Core Technology (Phase 3):** Section 1g (architecture doc — use the two-step pipeline philosophy and human-in-the-loop principles, NOT the ROI critiques or "what must be built" roadmap).
- **Platform pages (Phase 5):** Sections 1d/1e/1f for problem/value/differentiator copy per pillar; Section 2b for hero taglines; Section 3 for the lifecycle-hook animation to adapt into each page's modal.
- **`/platform/architecture` (Phase 5):** Section 1g in full, with its caveats respected.
- **`/investors/animated-overview` (Phase 6):** Section 4 in full — this is the deck to deploy live; it is already the more citation-correct of the two versions.
- **`/investors/roi` (Phase 6):** `citations.md` items 4, 7, 10 plus Section 1g's ROI critiques (the engine-architecture doc's own fact-check of NeuroFlo's ROI claims is directly relevant here and should be read before finalizing any ROI page numbers).
- **`/investors/market-analysis` (Phase 6):** Sections 1b, 1c in full; `citations.md` items 5, 6.
- **Color recoloring, any phase touching deck-derived visuals:** Section 6.
