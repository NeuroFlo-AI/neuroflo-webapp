import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { LifecycleFlow, type LifecycleStep } from "@/components/sections/lifecycle-flow";
import { CheckList } from "@/components/ui/check-list";

const STEPS: LifecycleStep[] = [
  {
    id: "prepare",
    title: "Prepare",
    detail: "The signed operative note arrives, ready for coding.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3.28a2 2 0 0 1 1.72.97l.98 1.63a2 2 0 0 0 1.72.97H19a2 2 0 0 1 2 2z"></path></svg>
    ),
  },
  {
    id: "review",
    title: "Review",
    detail: "Coder workspace surfaces the note alongside suggested codes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    ),
    feedBadge: "Trains from coder edits",
  },
  {
    id: "validate",
    title: "Validate",
    detail: "Checked against the hospital rules engine and current code references.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
    ),
  },
  {
    id: "evidence",
    title: "Evidence",
    detail: "Every suggested code traces to the exact sentence that supports it.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
    ),
  },
  {
    id: "enhance",
    title: "Enhance",
    detail: "Modifiers, bundling, and groupings applied per payer and facility rules.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>
    ),
  },
  {
    id: "confirm",
    title: "Confirm",
    detail: "AI review plus human confirmation before anything is finalized.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"></path></svg>
    ),
  },
  {
    id: "charge",
    title: "Charge",
    detail: "Submission-ready charge items move straight to billing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 6v2m0 8v2"></path></svg>
    ),
  },
];

export default function CodingRevenuePage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-blue-500 mb-3">Medical Coding — Coding & Revenue Cycle Hub</p>
          <h1 className="text-4xl font-bold mb-4">
            We are not selling automated medical coding.
          </h1>
          <p className="text-xl text-muted-foreground">
            We are selling instant liquidity and margin recovery.
          </p>
        </div>

        {/* Differentiator */}
        <GlassmorphismCard intensity="medium" glowAccent className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-4">Human-in-the-Loop by Design</h2>
          <p className="text-muted-foreground">
            NeuroFlo is built as a companion to existing medical coders, not a replacement for
            them. Every suggested code carries sentence-level evidence back to the note it came
            from, so coders confirm instead of guess — and every edit a coder makes trains the
            system toward that facility&apos;s specific accuracy.
          </p>
        </GlassmorphismCard>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="border border-border/40 rounded-lg p-6 bg-background/40 text-center">
            <p className="text-2xl font-bold text-blue-500 mb-1">&lt;24 hrs</p>
            <p className="text-sm text-muted-foreground">Target DNFB, down from a multi-day industry median</p>
            <p className="text-[11px] text-muted-foreground/60 mt-2">Modeled</p>
          </div>
          <div className="border border-border/40 rounded-lg p-6 bg-background/40 text-center">
            <p className="text-2xl font-bold text-blue-500 mb-1">~$286K</p>
            <p className="text-sm text-muted-foreground">Modeled savings from 5,000 avoided claim reworks at $57.23/claim</p>
            <p className="text-[11px] text-muted-foreground/60 mt-2">Source: Premier, 2023</p>
          </div>
          <div className="border border-border/40 rounded-lg p-6 bg-background/40 text-center">
            <p className="text-2xl font-bold text-blue-500 mb-1">95%+</p>
            <p className="text-sm text-muted-foreground">First-pass coding accuracy, modeled</p>
            <p className="text-[11px] text-muted-foreground/60 mt-2">Modeled</p>
          </div>
        </div>

        {/* Lifecycle */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-2">The Medical Coding Lifecycle</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            From a signed note to a submission-ready charge, with evidence attached at every
            step.
          </p>
          <GlassmorphismCard intensity="low" className="md:p-10">
            <LifecycleFlow caption="Prepare. Review. Validate. Trace Evidence. Enhance. Confirm. Charge." steps={STEPS} loopLabel="local coder edits train facility-specific accuracy" />
          </GlassmorphismCard>
        </div>

        {/* Full Value + Problems Solved lists, from the App2 source document */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Value Proposition</h2>
          <GlassmorphismCard intensity="low">
            <CheckList
              items={[
                { title: "Reduced Charge Lag", detail: "Moves completed operative notes through coding to submission-ready charges in under a day instead of a multi-day backlog. For a hospital processing $5M/day, that's modeled at $30M in working capital plus $1.5M in interest and capital savings." },
                { title: "Reduced Claim Denials and Administrative Rework", detail: "Better documentation, coding verification, modifiers, and hospital-specific rules improve first-pass claim quality. Modeled at a 5% reduction in denials across 100,000 claims — about 5,000 avoided reworks, roughly $286K in administrative savings at $57.23 per reworked claim (Premier, 2023)." },
                { title: "Reduced Outsourced Coding Costs", detail: "Internal coding teams process more cases with AI-assisted review, reducing reliance on third-party coding agencies — modeled at 10 external coders, about $800,000 in annual direct labor savings." },
                { title: "Coding Time Cut from Days to Minutes", detail: "The finalized operative note is translated into CPT, ICD-10, and HCPCS codes, passed through the hospital's custom rules engine, and presented to coders for verification in one workflow." },
                { title: "Improved First-Pass Claim Accuracy", detail: "The platform is modeled around 95%+ first-pass accuracy, reducing correction, resubmission, and downstream billing friction." },
                { title: "Increased Value of the Existing Coding Team", detail: "Built as a human-in-the-loop companion — coders verify and process clean claims faster rather than being replaced, reducing dependence on outsourced labor." },
              ]}
            />
          </GlassmorphismCard>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Problems We Solve</h2>
          <GlassmorphismCard intensity="low">
            <CheckList
              items={[
                { title: "Complete Documentation-to-Coding Workflow", detail: "NeuroFlo bridges the gap between the operative note and the billing department, carrying the intelligence established during documentation directly into coding instead of forcing coders to start from a disconnected, incomplete source document." },
                { title: "Hospital-Specific Coding Intelligence", detail: "Applies the hospital's own grouping preferences, CPT modifiers, payer-specific policies, administrative requirements, and coding logic across CPT, ICD-10, and HCPCS code sets." },
                { title: "Source-Linked Human Verification", detail: "Coders review AI-suggested codes directly against the highlighted source text in the operative note, giving them the clinical evidence needed to verify each recommendation before approval." },
                { title: "Human-in-the-Loop by Design", detail: "Built as a companion to existing medical coders, not a replacement — the system performs analysis and preparation while qualified coders retain final review and compliance justification." },
              ]}
            />
          </GlassmorphismCard>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
            <Link href="/contact">Request a Pilot</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
