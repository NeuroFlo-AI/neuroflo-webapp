import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { LifecycleFlow, type LifecycleStep } from "@/components/sections/lifecycle-flow";
import { CheckList } from "@/components/ui/check-list";

const STEPS: LifecycleStep[] = [
  {
    id: "listen",
    title: "Listen",
    detail: "Ambient listening and provider dictation, tied to the session type.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1"></path><line x1="12" y1="18" x2="12" y2="22"></line></svg>
    ),
  },
  {
    id: "structure",
    title: "Structure",
    detail: "Free-text dictation becomes a structured draft note.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg>
    ),
  },
  {
    id: "validate",
    title: "Validate",
    detail: "Checked against provider profile, administrative, legal, template, and SMART on FHIR/EHR rules.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
    ),
    feedBadge: "Fed by continuous learning",
  },
  {
    id: "review",
    title: "Review",
    detail: "Gaps are flagged and the surgeon reviews recommendations before signing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    ),
  },
  {
    id: "complete",
    title: "Complete",
    detail: "Finalized note writes back to the EHR and the provider profile learns.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    ),
  },
];

export default function OpNotePage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-blue-500 mb-3">Op Note — AI Operative Note Suite</p>
          <h1 className="text-4xl font-bold mb-4">
            We are not selling an AI scribe.
          </h1>
          <p className="text-xl text-muted-foreground">
            We are selling surgical capacity and revenue capture at the point of care.
          </p>
        </div>

        {/* Differentiator */}
        <GlassmorphismCard intensity="medium" glowAccent className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-4">Move Beyond Passive Transcription</h2>
          <p className="text-muted-foreground">
            Unlike other vendors, NeuroFlo does not simply record what the surgeon says. It
            actively evaluates the operative note for clinical, structural, financial, and
            procedural completeness before it becomes the permanent source document used
            downstream — catching missing details while the surgeon can still act on them, not
            weeks later in a denial.
          </p>
        </GlassmorphismCard>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="border border-border/40 rounded-lg p-6 bg-background/40 text-center">
            <p className="text-2xl font-bold text-blue-500 mb-1">5–10 min</p>
            <p className="text-sm text-muted-foreground">Per note, down from 30–60 min today</p>
            <p className="text-[11px] text-muted-foreground/60 mt-2">NeuroFlo internal estimate</p>
          </div>
          <div className="border border-border/40 rounded-lg p-6 bg-background/40 text-center">
            <p className="text-2xl font-bold text-blue-500 mb-1">Up to 1%</p>
            <p className="text-sm text-muted-foreground">Of net charges lost to charge-capture leakage industry-wide</p>
            <p className="text-[11px] text-muted-foreground/60 mt-2">Source: HFMA, 2017</p>
          </div>
          <div className="border border-border/40 rounded-lg p-6 bg-background/40 text-center">
            <p className="text-2xl font-bold text-blue-500 mb-1">2,500 hrs</p>
            <p className="text-sm text-muted-foreground">Surgical hours reclaimed annually</p>
            <p className="text-[11px] text-muted-foreground/60 mt-2">Modeled</p>
          </div>
        </div>

        {/* Lifecycle */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-2">The Operative Note Lifecycle</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Every note moves through the same disciplined path, from the first word spoken to a
            signed, submission-ready record.
          </p>
          <GlassmorphismCard intensity="low" className="md:p-10">
            <LifecycleFlow caption="Listen. Structure. Validate. Complete. Learn." steps={STEPS} loopLabel="validation gets smarter with every signed note" />
          </GlassmorphismCard>
        </div>

        {/* Full Value + Problems Solved lists, from the App1 source document */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">The Value of the Operative Note Suite</h2>
          <GlassmorphismCard intensity="low">
            <CheckList
              items={[
                { title: "Faster Documentation", detail: "Reduces operative note completion from 30–60 minutes to approximately 5–10 minutes per case — the surgeon dictates the facts while NeuroFlo structures, reviews, and completes the note." },
                { title: "Increased Surgical Capacity", detail: "Reclaiming just 30 minutes per day across 20 surgeons models to roughly 2,500 additional surgical hours annually, about $10M in additional revenue capacity, and about $2M in net profit at a 20% margin (modeled)." },
                { title: "Prevented Charge Leakage at the Point of Care", detail: "Uncaptured procedures, omitted implants, untracked OR time, and missing secondary codes otherwise erase up to 1% of net charges (HFMA, 2017). NeuroFlo enforces real-time completeness while the case is fresh, capturing billable components before sign-off." },
                { title: "Accelerated Path to Billing", detail: "Instantly translating the completed note into CPT, ICD-10, and HCPCS codes shrinks DNFB (Discharged Not Final Billed) charge lag toward under 24 hours — for a hospital processing $5M daily, that's modeled at $30M in freed liquidity." },
                { title: "Reduced Documentation Burden & Physician Burnout", detail: "Less time writing, reviewing, correcting, and revisiting operative notes removes a repetitive administrative burden from already demanding surgical workloads." },
              ]}
            />
          </GlassmorphismCard>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Problems We Solve</h2>
          <GlassmorphismCard intensity="low">
            <CheckList
              items={[
                { title: "Point-of-Care Completeness", detail: "NeuroFlo checks documentation against historical data, legal requirements, hospital requirements, administrative requirements, physician-specific preferences, note structure, and complex surgical subspecialty requirements — prompting the surgeon when information is missing, inconsistent, or insufficient before finalization." },
                { title: "Reduced Documentation Burden & Physician Burnout", detail: "Less time spent writing, reviewing, correcting, and revisiting operative notes lets surgeons spend more of their time on clinical care." },
                { title: "Real-Time Completeness Analysis", detail: "NeuroFlo analyzes the note while it is being created and identifies missing critical parameters — anesthesia time blocks, implants, devices, secondary anatomical repairs, procedures, and other billable details — before the surgeon signs." },
                { title: "Intelligent Subspecialty Alignment", detail: "NeuroFlo identifies complex procedures and surgical subtypes and cross-references documentation against CPT, ICD-10-CM, CMS, and HCPCS requirements." },
                { title: "Historical Surgical AI and Reinforcement Learning Intelligence", detail: "NeuroFlo uses AI and reinforcement learning to gather signals from similar surgeries and prior operative notes, using historical procedure patterns to flag information that would normally be expected but is missing from the current note." },
                { title: "Revenue Guardrails Before Sign-Off", detail: "If a required clinical or billing variable is missing, NeuroFlo flags it while the surgeon can still correct the documentation — not after it becomes a downstream coder's problem." },
                { title: "Move Beyond Passive Transcription", detail: "Unlike other vendors, NeuroFlo doesn't simply record what the surgeon says — it actively evaluates the note for clinical, structural, financial, and procedural completeness before it becomes the permanent source document used downstream." },
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
