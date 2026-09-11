# NeuroFlo Website — Citations & Fact-Check Table

Status: Phase 0 output. Reference document — consumed by Phase 4 (Investors rewrite), Phase 2/3 (Homepage/About SOC 2 fixes), and Phase 6 (ROI, Market Analysis pages). Every external statistic placed on any page must trace to a row here.

Built from the founder's pasted fact-check report (summarized in `docs/plan/website-overhaul-plan.md`) plus direct inspection of `app/investors/page.tsx` and `app/about/page.tsx` (read in full on 2026-09-11 — no other page files were checked; if a claim also appears on the homepage or elsewhere, that has not been verified here and should not be assumed).

**Notation:** "Where it appears" cites exact file + line number(s) as read directly from source, not inferred.

---

## 1. Revenue leakage (charge-capture leakage)

| Field | Value |
|---|---|
| **Corrected wording** | "Up to 1% of net charges lost to charge-capture leakage." |
| **Source** | HFMA, "Avoiding the High Cost of Charge-Capture Leakage" (Johnson & Ward, 2017). https://www.hfma.org/revenue-cycle/charge-capture/55358/ |
| **Confidence/caveat** | High for the HFMA figure itself. **However, source-document figures disagree with this and with each other:** `1-NeuroFlo_ Full Platform Overview.pdf` uses "1% to 3%" (p.4) and also "up to 3%" (p.3) and "more than 3%" (p.4, second instance — three different phrasings in the same document); `2-App1...pdf` p.2 says "up to 3%"; `5-Neuroflo Market & Competitive Analysis.pdf` says "1% to 3%" (p.2) with no citation. The animated deck v1 (`neuroflo-opener.html` line 426) says "1–3%" uncited; **deck v2 already corrects this to "Up to 1%" with the HFMA link** (`neuroflo-deck-v2.html` line ~430, `src:"hfma"`, `SRC.hfma` = `https://www.hfma.org/revenue-cycle/charge-capture/55358/`). Use "up to 1%" per the corrected figure; do not blend with the internal 1–3%/3% figures without a clear "NeuroFlo internal model" label if those are kept anywhere. |
| **Where it appears on site** | Not found verbatim in `app/investors/page.tsx` or `app/about/page.tsx`. No "1%", "3%", or "revenue leakage" dollar-percentage claim exists on either page as currently written. **No site fix needed for this specific figure on these two pages** — but flag for whichever page absorbs Market/ROI content (`/investors/roi`, `/investors/market-analysis`) since it will be pulled from these PDFs. |

## 2. DNFB (Discharged Not Final Billed)

| Field | Value |
|---|---|
| **Corrected wording** | "7.1-day median DNFB (Advisory Board benchmark)" — NOT "charge lag" (a different metric). |
| **Source** | Advisory Board Revenue Cycle Benchmarking Study (2015), via MD Clarity: https://www.mdclarity.com/blog/dnfb-in-healthcare |
| **Confidence/caveat** | The terminology error is confirmed present in source material: deck v1 line 427 says "Average charge lag while charts sit in Discharged Not Final Billed (DNFB) status" (conflates the two terms exactly as the fact-check warns against). **Deck v2 already fixes this** — line ~427 reworded to "Median time charts sit discharged but not final billed (DNFB) before cash can move," sourced to `SRC.ab` = `https://www.mdclarity.com/blog/dnfb-in-healthcare`, labeled "Advisory Board benchmark via MD Clarity." `1-NeuroFlo_ Full Platform Overview.pdf` p.1/p.4 also says "7-day industry average" / "7 days" (rounded, no "median" framing, one citation link present in App1 PDF p.2 labeled only "Source: DNF in Healthcare" — link target text not extractable, treat as unverified until the actual URL is confirmed). `2-App1.pdf` p.1 uses "7.1 Days" matching the corrected figure. |
| **Where it appears on site** | Not found on `app/investors/page.tsx` or `app/about/page.tsx` — neither page currently states a DNFB/charge-lag day figure. No site fix needed on these two pages; applies to future `/investors/roi` and Platform/Coding pages. |

## 3. Unstructured clinical data percentage

| Field | Value |
|---|---|
| **Corrected wording** | "about 80%" (not "over 80%"). |
| **Source** | Li, Krumholz, Radev et al., Yale, arXiv:2107.02975. https://arxiv.org/pdf/2107.02975 |
| **Confidence/caveat** | Source material is inconsistent: deck v1 line 428 says plain "80%" (matches corrected wording in spirit); deck v1 line 501 (Pillar 3 stats) says "80%+"; **deck v2 already corrects both instances to "~80%" and cites** `SRC.yale` = `https://arxiv.org/pdf/2107.02975`, labeled "Li et al., Yale University" (lines ~423 and ~509 in v2). `5-Neuroflo Market & Competitive Analysis.pdf` p.2–3 says "Over 80%" (uncited) — this is the version the fact-check explicitly says to stop using. `4-App-3...pdf` p.1 says "More than 80%" (also uncited, also the wording to avoid) and attributes it only to "is described in the document as" with no named source. Use "about 80%" / "~80%" per the Yale citation; do not use "over 80%" or "more than 80%" anywhere new copy is written. |
| **Where it appears on site** | Not found on `app/investors/page.tsx` or `app/about/page.tsx`. No fix needed on these two pages currently. |

## 4. Denied claim cost

| Field | Value |
|---|---|
| **Corrected wording** | Recommend using **$57.23/claim (Premier, 2023)** and recomputing any savings math that depends on it. If $118 is kept anywhere, it must be labeled "(Change Healthcare, 2017)". |
| **Source** | $118/claim: Change Healthcare, 2017 (no link supplied in the founder's fact-check pass — flag as pending citation if this figure is kept). $57.23/claim: Premier, 2023 (no link supplied — flag as pending citation before publishing either figure). |
| **Confidence/caveat** | **No source link was provided for either figure** in the material available to this research pass — both need a verified URL before publishing. Confirmed present, uncited, in source PDFs: `1-NeuroFlo_ Full Platform Overview.pdf` p.4 — "$118 average cost per denied claim" (used to compute "$1,390,000 in ... savings"). `3-App-2...pdf` p.1 — "$118 per reworked claim" used in the model math ("$590,000 in administrative savings" from "5,000 reworks"). Deck v1 does not use the $118 figure directly in visible slide text (checked — not present in the S[] array I read in full). **If switching to $57.23/claim, the downstream $1.39M/$590K savings figures in App1/App2 PDFs and any site copy derived from them must be recalculated, not just relabeled** — this is flagged, not done here (Phase 0 is extraction only). |
| **Where it appears on site** | Not found on `app/investors/page.tsx` or `app/about/page.tsx`. No fix needed on these two pages currently; will matter for `/investors/roi`. |

## 5. Medical coding market size

| Field | Value |
|---|---|
| **Corrected wording** | Use The Business Research Company, Feb 2026 report, consistently: **$18.88B (2025) → $20.8B (2026) → $30.44B (2030) at 10% CAGR.** Do NOT mix with other firms' estimates ($8.91B or $44.12B from other firms) — do not blend. |
| **Source** | https://www.researchandmarkets.com/reports/5752068/medical-coding-market-report |
| **Confidence/caveat** | `5-Neuroflo Market & Competitive Analysis.pdf` p.1 already states the matching figures uncited: "$18.88 billion in 2025 to $20.80 billion in 2026 ... over $30.00 billion by 2030 at a 10% CAGR." Deck v1 line 519 says "$20.8B... in 2026, projected past $30B by 2030 at a 10% CAGR" (rounds $30.44B to "past $30B," uncited). **Deck v2 line ~466 keeps the same $20.8B/2026 figure, updates the 2030 endpoint to "$30.4B" (matches $30.44B), and adds the source link** `SRC.tbrc` = `https://www.researchandmarkets.com/reports/5752068/medical-coding-market-report`, labeled "The Business Research Company, 2026." This is the one figure in the whole research set that is already fully consistent and correctly sourced in deck v2 — safe to reuse as-is. |
| **Where it appears on site — CONFLICTS FOUND** | `app/investors/page.tsx` line 217 (Market Size section, "Medical Coding Market" card): **"$15.8B global medical coding market growing at 9.8% CAGR"** — this figure and CAGR match NEITHER the corrected $18.88B/$20.8B/$30.44B/10% figures NOR any figure found in any source PDF or deck. Its origin is unknown / unverifiable from any source read in this pass. **Must be replaced.** |

## 6. AI medical coding market size

| Field | Value |
|---|---|
| **Corrected wording** | Pick ONE firm, do not blend. **Recommended: Option A** (Business Research Company, near-term) — $3.56B (2026) → $6B (2030) at 14% CAGR. |
| **Source (Option A)** | https://www.thebusinessresearchcompany.com/report/artificial-intelligence-in-medical-coding-global-market-report |
| **Source (Option B, not recommended)** | Research Nester — $2.99B (2025) → past $10.6B by 2035. No verified link available for this option. |
| **Confidence/caveat** | Source material has THREE different variants of this figure, none matching Option A's $6B/2030/14% endpoint until deck v2: (a) `5-Neuroflo Market & Competitive Analysis.pdf` p.1 — "$3.12 billion in 2025 to $3.56 billion in 2026 ... reaching $10.60 billion by 2035" (uncited); (b) `NeuroFlo Market Positioning...pdf` p.1 — "$3.4 Billion in 2026 to $10.6 Billion by 2035" (uncited — note the $3.4B 2026 figure does not even match (a)'s $3.56B 2026 figure, an internal contradiction between two source PDFs); (c) deck v1 line 520 — "$3.56B" (2026) "forecast to reach $10.6B by 2035" (uncited, matches variant (a), i.e. the long-range/Option-B-style endpoint, not Option A). **Deck v2 line ~467 changes the 2030 endpoint to "$6B ... at a 14% compound annual growth rate," cited to** `SRC.tbrcai` = `https://www.thebusinessresearchcompany.com/report/artificial-intelligence-in-medical-coding-global-market-report`, i.e. deck v2 has already switched to Option A. Recommend following deck v2's lead and standardizing on Option A everywhere; retire the $10.6B/2035 figure since it belongs to the different, unlinked Option B source. |
| **Where it appears on site** | Not found on `app/investors/page.tsx` or `app/about/page.tsx` under this specific figure. The page's "Healthcare AI" card (line 224-225) says "$45B healthcare AI market by 2026" — this is a broader/different market category (all healthcare AI, not AI medical coding specifically) and does not match this figure or any figure found in any source document read in this pass; origin unverifiable. **Must be replaced or clearly re-scoped** if kept, since it is not the same market as either the medical-coding or AI-medical-coding figures above. |

## 7. Valuation multiple

| Field | Value |
|---|---|
| **Corrected wording** | "$10M ARR supports a $60–120M valuation for an EHR-native revenue-cycle AI platform (3–6x base, 1.5–2x EHR-native premium)" — NOT the previously-used 10–15x / 12x "conservative" figure. |
| **Source** | Windsor Drake, "AI in Healthcare Valuations: Q1 2026." https://windsordrake.com/market-intelligence/reports/ai-in-healthcare-valuations-q1-2026 |
| **Confidence/caveat** | The OLD, incorrect figure is directly confirmed in two source locations: `1-NeuroFlo_ Full Platform Overview.pdf` p.5 — "Healthcare AI platforms trade at 10x to 15x Forward ARR ... $120,000,000 valuation at a conservative 12x multiple" (uncited). Deck v1 lines 549-555 (slide "Investor outlook," title "The path to a $120M valuation") — "$10M ... Annual recurring revenue: $120M at a conservative 12x" (uncited). **Deck v2 removes this slide entirely** and replaces it with a "market" slide (lines ~493-497) whose "Path to exit" panel states: **"$45–120M ... Valuation range at 3–6x revenue for revenue-cycle AI, with a 1.5–2x premium for EHR-native platforms,"** cited to `SRC.wd` = `https://windsordrake.com/market-intelligence/reports/ai-in-healthcare-valuations-q1-2026`, labeled "Windsor Drake, Q1 2026." **Note a numeric discrepancy to flag, not silently resolve:** the task's corrected wording states a **$60–120M** range; deck v2 states **$45–120M**. Both cite Windsor Drake and both use "3–6x base, 1.5–2x EHR-native premium" — the low end differs ($45M = 3x × $10M×1.5, vs. $60M = 6x × $10M — actually $60M would be 6x×$10M base only, and $45M = 3x×$10M×1.5 premium: these appear to be two different points read off the same 3–6x/1.5–2x multiplier grid, not a contradiction, but which exact low-end number to publish should be confirmed against the primary source report before publishing either.) |
| **Where it appears on site** | Not found on `app/investors/page.tsx` (page has no "valuation," "12x," "10x," or "$120M" language) or `app/about/page.tsx`. No existing site copy to fix on these two pages — this will be new content for `/investors/roi`, and must use the corrected range, not the deck/PDF's retired 12x figure. |

## 8. Unsourced / internal claims — label, do not cite externally

| Claim | Required label | Confirmed present in source material |
|---|---|---|
| Operative note time reduction (30–60 min → 5–10 min) | "NeuroFlo internal estimate" (no published study found) | Deck v1 line 419/455; deck v2 tags this stat `m:true` → rendered with a **"Modeled" badge** (see `vp` renderer, `.mtag` CSS class, deck v2 diff line ~338). `1-NeuroFlo...pdf` p.1 and `2-App1...pdf` p.1 both state this range, explicitly prefaced "The model...shows" / "approximately." Consistent across all sources — no source claims this as measured/validated. |
| 95%+ first-pass accuracy | "modeled" everywhere EXCEPT the founder-confirmed real pilot figure below | Deck v1 line 480 note: "Modeled for 95%+ first-pass accuracy..." (already self-labeled "modeled" in v1). `3-App-2...pdf` p.2: "modeled around 95%+ first-pass accuracy." **Site conflict, RESOLVED by founder (2026-09-11):** `app/investors/page.tsx` line 99/164 states "98%+ accuracy" — founder confirmed this is a **real measured figure from the active Vandalia Health pilot**, not the same modeled-95% estimate used in the marketing PDFs/decks. Decision: keep 98%+ on the Investors page, but soften "Demonstrated" (line 164) to pilot-scoped language (e.g. "measured in active pilot deployment") rather than an unqualified validated-claim verb, since it's real-but-in-pilot, not independently/formally validated. Do not blend this pilot-measured 98%+ figure with the unrelated modeled-95% figure used elsewhere in source PDFs/decks — they are two different things (one measured, one modeled) and should stay labeled accordingly wherever both could appear on the same page. |
| $30M working capital figure | "modeled" | Deck v1 line 478 (uncited, framed as fact: "Working capital freed..."); deck v2 tags it `m:true` ("Modeled" badge, line ~471); `1-NeuroFlo...pdf` p.4 and `3-App-2...pdf` p.1 both explicitly preface it "the model equates..." / "unlocks $30,000,000." Consistent internal-estimate framing once you reach the PDFs; deck v1 alone (pre-correction) presents it as unlabeled fact. |
| 2,500 reclaimed surgical hours | "modeled" | Deck v1 line 456 (uncited, presented as fact); deck v2 tags it `m:true` (line ~468); `1-NeuroFlo...pdf` p.1/p.4 and `2-App1...pdf` p.1 both preface it "The model...shows"/"reclaims...annually" without qualifying language in that specific sentence, but adjacent text in both PDFs frames the whole revenue-capacity build-up as a model. |
| Missing-implant-details claim | "pending citation, do not publish without one" | Partial secondary evidence exists per the founder's fact-check (an orthopaedic audit found prosthesis details documented in only 30% of notes reviewed, tourniquet time undocumented in any; also references prior work suggesting up to 45% of op notes are medicolegally indefensible) — **no verified link was supplied to this research pass and none was found in any of the seven source PDFs or either deck.** The closest source-material claim is `2-App1...pdf` p.1's flowchart callout "Catches omissions before sign-off" and the general "missing implants, anesthesia time blocks" language used throughout (e.g. deck v1 line 434) — these are NeuroFlo's own problem-statement framing, not the cited external orthopaedic-audit statistic. Do not conflate the two. |

**Where these appear on site:** `app/investors/page.tsx` line 99 ("98%+ accuracy," unlabeled) and line 164 ("Demonstrated 98%+ accuracy... with full evidence traceability," unlabeled, uses "Demonstrated" which reads as a validated/measured claim, not a model). No "$30M," "2,500 hours," or "30–60 to 5–10 minutes" language currently appears on `app/investors/page.tsx` or `app/about/page.tsx`.

## 9. SOC 2 status

| Field | Value |
|---|---|
| **Corrected wording** | Badge/label form: **"SOC 2 Type II — Audit Underway."** Body-copy form: **"Actively pursuing SOC 2 Type II certification"** / **"SOC 2-ready architecture, certification in progress."** |
| **Confidence/caveat** | This is a confirmed internal contradiction across the founder's own source material, not just a site-copy problem: `1-NeuroFlo_ Full Platform Overview.pdf` p.3 contains an **explicit internal instruction**: "SOC 2 readiness is part of NeuroFlo's enterprise deployment path. Because the SOC 2 process is not yet completed, we should present this as readiness/in-progress rather than claiming completed SOC 2 certification." But `5-Neuroflo Market & Competitive Analysis.pdf` (Hidden Technical Advantages table, p.3-4) states NeuroFlo "Enforces SOC 1, SOC 2, HIPAA, and CMS compliance frameworks prior to note sign-off" (stated as already-active), and `NeuroFlo Market Positioning...pdf` p.1 states "**Certified across HIPAA, SOC 1, and SOC 2 frameworks**" (stated as an already-completed certification). These two documents directly contradict Source 1's own instruction not to claim this. The standardized corrected wording above should govern all new copy regardless of this source inconsistency. |
| **Where it appears on site — CONFIRMED, category error** | `app/investors/page.tsx` line 102: "Our platform unifies documentation, coding, insights, and workflow automation in **one HIPAA and SOC 2 compliant solution**." — states SOC 2 as an already-achieved fact. `app/investors/page.tsx` line 170: "Successful Oracle Cerner EHR integration with **HIPAA and SOC 2 compliance validation**." — same error, in the Traction section. `app/about/page.tsx` lines 415-418: bullet labeled **"SOC 2:"** reading "Security controls, change management, access reviews, logging, and continuous monitoring." — phrased as an already-met control with no "in progress" qualifier anywhere in the sentence or its surrounding card ("Compliance-First Design," lines 365-467). **All three instances must be corrected to the standardized wording above.** |

## 10. Investment ask / spend model

| Field | Value |
|---|---|
| **Corrected model** | Ask **$1M on a post-money SAFE**, sized to fund ~4 quarters of the **Growth scenario** (≈$859K/4Q, ≈$72K/mo average burn — adds 2 AI engineers vs. the Lean scenario's 1 sales hire only, ≈$392K/4Q, ≈$33K/mo). Covers: 1 enterprise sales hire ($168K/4Q), 2 AI engineers ($388.8K/4Q), SOC 2 Type II report ($40K), penetration test ($10K), AMA CPT license ($17.75K), plus **PLACEHOLDER/benchmark line items that must be flagged as such and replaced with real costs before being treated as fact**: cloud+AI model costs ($36K), legal ($25K), insurance ($10K), travel/conferences ($20K), plus 20% contingency. |
| **Source basis** | Enterprise AE median base $140K; Built In 2026 survey cites ML engineer base $162,080; SOC 2 first-year total typically $25–50K industry-wide; pen test $5–15K; AMA CPT per-user licensing ~$18.50/user assumed 200 users (**must be confirmed against AMA's official pricing schedule before being treated as fact** — not yet verified in this research pass, no AMA source document was among the 7 PDFs reviewed). Market context: 2025 average SAFE deal size (raises ≥$1M) rose to $1.4M; median post-money valuation caps ~$15M for $1–2.5M raises broadly, ~$35M median for healthtech raises ≥$2.5M — present as market color, not NeuroFlo's committed cap. |
| **Confidence/caveat** | This entire model is a founder-provided spend plan, not something independently verifiable against the 7 source PDFs read in this pass — none of them contain a use-of-funds breakdown. `1-NeuroFlo_ Full Platform Overview.pdf` p.5's "Investor Exit Strategy" section discusses valuation multiples (see item 7) but not a spend/use-of-funds plan. Treat the whole model as founder-supplied, benchmark-based, and explicitly labeled as such in site copy per the plan's Phase 4 instruction — do not present placeholder line items as firm figures. |
| **Where it appears on site — CONFLICTS FOUND** | `app/investors/page.tsx` line 46: **"We're Raising $3M"**, line 48: "NeuroFlo is seeking $3M in funding ... We're willing to accept $1M for seed funding..."; line 239: **"$3M"** (Investment Ask header), line 244: "We're willing to accept $1M for seed funding to enable intensive roadmap development and rapid deployment." — the current site states a **$3M ask with a $1M fallback**, not the corrected **$1M post-money SAFE** ask. This entire section (both the hero card and the "Investment Ask" section) needs replacement with the new spend-model framing, not just a number swap. |

## 11. Exit strategy

| Field | Value |
|---|---|
| **Decision** | OMITTED from the Investors page per founder decision. Not a citation/fact-check issue — recorded here for completeness only. |
| **Source-material note** | `1-NeuroFlo_ Full Platform Overview.pdf` p.5 has a section titled "Investor Exit Strategy & Valuation Milestone" naming strategic acquirers (Epic, Oracle Health/Cerner, MEDITECH, Optum, R1 RCM, Waystar, Microsoft Nuance, Google Health) — this exists in source material but is deliberately not being placed on the Investors page per the founder's confirmed decision. Deck v1's closing "Investor outlook" slide (lines 549-555) names the same acquirer list plus "Google Health" with the retired 12x valuation figure (see item 7); deck v2's replacement "market" slide (line ~497) keeps a shortened acquirer list ("Epic, Oracle Health, MEDITECH, Optum, R1 RCM, Waystar, Microsoft, Google") alongside the corrected valuation range — this acquirer-list content exists in the deck (which is explicitly out of scope for this plan to edit) but should not be assumed to belong on the Investors page given the founder's omission decision. |
| **Where it appears on site** | No exit-strategy or acquirer-list language exists on `app/investors/page.tsx` or `app/about/page.tsx` currently — nothing to remove. |

---

## Summary of confirmed on-site errors requiring correction (both files read in full)

**`app/investors/page.tsx`:**
- Line 46-48: "We're Raising $3M" / "$3M in funding" / "$1M for seed funding" ask language → replace per item 10.
- Line 99: "98%+ accuracy" (unlabeled) → correct number/label per item 8.
- Line 102: "one HIPAA and SOC 2 compliant solution" → correct per item 9.
- Line 164: "Demonstrated 98%+ accuracy ... with full evidence traceability" → correct per item 8.
- Line 170: "HIPAA and SOC 2 compliance validation" → correct per item 9.
- Lines 209-230 (Market Size section): "$15.8B ... 9.8% CAGR" (item 5, unverifiable origin), "$2.3B clinical documentation improvement market" (no source found in any of the 7 PDFs or either deck — flag as unverifiable, not just uncited), "$45B healthcare AI market by 2026" (item 6, wrong market category), "$38B EHR market" (no source found anywhere in this research pass — flag as unverifiable) → all four sub-blocks need sourced replacements or removal.
- Lines 236-254 (Investment Ask section): "$3M" / "$1M for seed funding" → replace per item 10.

**`app/about/page.tsx`:**
- Lines 415-418: "SOC 2:" bullet phrased as already-met control → correct per item 9.
- Lines 259-363: "Multimodal Capabilities" card — flagged in the plan for removal/folding (not a citation issue, noting for completeness since it sits directly beside the SOC 2 bullet in the same section).

No other numeric/statistical claims requiring fact-check were found on either page — both files were read in full, not sampled.

---

## Addendum: independent corroboration from `neuroflo-engine-architecture-and-validation.md.pdf`

This PDF's actual title is **"The Operative Note Intelligence Engine: Architecture, Evidence, and What Must Be Built"** — it is a consultant/researcher's critique-and-roadmap document addressed to NeuroFlo, dated September 2026, **not** a description of a built and validated system. Part Two of the document is explicitly titled "Validating the problem, and correcting the numbers" and independently fact-checks several of NeuroFlo's own existing marketing figures. This is directly relevant to items 2, 4, and 8 above and should not be ignored:

- **Corroborates item 4** (denied-claim cost): the document independently arrives at "**cost per denied claim rising to $57.23**" (citing Premier), matching this table's own recommendation — treat as reinforcing, not just this research pass's own view.
- **Complicates item 2** (DNFB): the document states the "**7.1 day industry median**" DNFB figure, *as attributed to HFMA*, "appears to be invented... HFMA does not publish a target" and recommends dropping it. This is not a direct contradiction of item 2's corrected wording above (which attributes 7.1 days to the **Advisory Board Benchmarking Study via MD Clarity**, not HFMA) — but it is a serious flag that the *same number* has circulated under a false HFMA attribution elsewhere in NeuroFlo's material, and the founder should confirm the Advisory Board/MD Clarity attribution independently before publishing rather than assuming it is automatically clean because it names a different source than the debunked one.
- **Strengthens item 8** (op-note time reduction): the document calls the underlying "30–45 minutes per operative note" baseline "**arithmetically impossible against the best measurement available**," citing real EHR audit-log data showing surgeons spend "57.5 minutes per day logged into the EHR" **in total**, not per note. This is a stronger caveat than "no published study found" — it's an active refutation of the baseline number the 30–60→5–10 minute claim is built on. Recommend treating the entire time-savings stat as higher-risk than a simple "label as internal estimate" fix would suggest; consider revisiting the underlying math before republishing it anywhere, not just relabeling it.
- **New, unresolved flag — not previously in scope:** the same document also references an existing NeuroFlo claim of "**3,945% ROI**," calling it something that "reads as unserious to finance professionals." This figure was not found in any of the 7 PDFs or either animated deck reviewed for this research pass (it may live in `NeuroFlow AI ROI Financial Framework.pdf` or `AI Surgical Coding Platform Strategy.pdf`, neither of which was in this task's required reading list). Flagging for the founder's awareness — if this figure exists anywhere in current materials or site copy, it needs the same fact-check treatment as everything else in this table, and none of the pages checked in this pass (`investors`, `about`) contain it.
- **No security/compliance claims found:** the document contains **zero mentions of HIPAA, SOC 2, or encryption** — it is silent on compliance architecture entirely. It should not be used as a source for any SOC 2/HIPAA claim on `/platform/architecture`; that page's compliance language must come from the same standardized SOC 2 wording used everywhere else (item 9), not from this document.
- **Customer-identification caution:** the document repeatedly names "**Vandalia**" (matching the site's already-disclosed "Vandalia Health" pilot in `app/investors/page.tsx` line 158, so the customer name itself is not a new leak) and discusses specifics of their **Cerner PowerNote** configuration. The site already names Vandalia Health as a customer (confirmed acceptable per the existing Traction section), but the PowerNote implementation specifics in this document are internal technical/consulting detail, not cleared public copy, and should not be quoted verbatim on `/platform/architecture`.
