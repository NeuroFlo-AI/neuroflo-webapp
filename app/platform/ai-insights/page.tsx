import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { LifecycleFlow, type LifecycleStep } from "@/components/sections/lifecycle-flow";
import { CheckList } from "@/components/ui/check-list";

const STEPS: LifecycleStep[] = [
  {
    id: "query",
    title: "Query",
    detail: "Ask in plain language — e.g. “aortic valve replacement time vs. complication rate, by surgeon.”",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    ),
    feedBadge: "Refined by every rerun",
  },
  {
    id: "extract",
    title: "Extract",
    detail: "Scope and metrics are pulled from every matching operative note.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
    ),
  },
  {
    id: "analyze",
    title: "Analyze",
    detail: "Factors are detected, evidence attached, and results aggregated.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
    ),
  },
  {
    id: "visualize",
    title: "Visualize",
    detail: "Results land in a live KPI dashboard, not a static export.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
    ),
  },
  {
    id: "act",
    title: "Act",
    detail: "Leadership acts on it — and reruns the query as new notes come in.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    ),
  },
];

export default function AiInsightsPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-blue-500 mb-3">AI Insights — Operational KPI Engine</p>
          <h1 className="text-4xl font-bold mb-4">
            We are not selling a dashboard.
          </h1>
          <p className="text-xl text-muted-foreground">
            We are selling surgical data governance and strategic foresight.
          </p>
        </div>

        {/* Differentiator */}
        <GlassmorphismCard intensity="medium" glowAccent className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-4">Unlock Data Legacy EHR Analytics Can&apos;t Access</h2>
          <p className="text-muted-foreground">
            NeuroFlo extracts surgical nuance buried in unstructured operative-note text and
            converts it into structured, trackable variables that traditional EHR reporting
            tools cannot easily analyze without manual chart review.
          </p>
        </GlassmorphismCard>

        {/* Stats */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="border border-border/40 rounded-lg p-6 bg-background/40 text-center">
            <p className="text-2xl font-bold text-blue-500 mb-1">About 80%</p>
            <p className="text-sm text-muted-foreground">Of clinical data is trapped in unstructured text, invisible to standard EHR dashboards</p>
            <p className="text-[11px] text-muted-foreground/60 mt-2">Source: Li et al., Yale University</p>
          </div>
        </div>

        {/* Lifecycle */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-2">The KPI Insights Lifecycle</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            From a plain-language question to a live, evidence-backed answer.
          </p>
          <GlassmorphismCard intensity="low" className="md:p-10">
            <LifecycleFlow caption="Query. Extract. Analyze. Visualize. Act. Learn." steps={STEPS} loopLabel="every rerun sharpens the next query" />
          </GlassmorphismCard>
        </div>

        {/* Full Value + Problems Solved lists, from the App3 source document */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Value Proposition</h2>
          <GlassmorphismCard intensity="low">
            <CheckList
              items={[
                { title: "Unlock Surgical Data Trapped in Operative Notes", detail: "About 80% of clinical data sits as unstructured text inside legacy EHR systems (Li et al., Yale University). NeuroFlo converts operative-note content into structured, trackable clinical, operational, and financial intelligence." },
                { title: "Replace Weeks-Long Manual Chart Audits With On-Demand Intelligence", detail: "Hospital leadership defines what it wants to measure and uses NeuroFlo to extract those variables from current or historical operative notes, instead of manually reviewing charts to build the dataset." },
                { title: "Measure Surgical Performance at a Granular Level", detail: "Turns operative-note data into real-time KPIs for physician efficiency, procedure duration, morbidity, outcomes, supply costs, compliance, and profitability by surgical subtype." },
                { title: "Improve Clinical, Operational, and Financial Decision-Making", detail: "Identifies efficiency gains across surgical teams, evaluates profitability by surgical subspecialty, and tracks outcomes and compliance measures that support quality and risk improvement." },
              ]}
            />
          </GlassmorphismCard>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Problems We Solve</h2>
          <GlassmorphismCard intensity="low">
            <CheckList
              items={[
                { title: "Plain-Language Data Point Extraction", detail: "Administrators and clinical leaders describe what they want to track — surgical duration by surgeon, complication rates for a procedure — without first building the underlying dataset manually." },
                { title: "AI Variable Mapping", detail: "Converts those requests into structured variables extracted across both historical and real-time operative notes." },
                { title: "No-Code KPI Creation", detail: "Users map extracted variables to the metrics, deltas, comparisons, and visualizations they want without a custom analytics project for every new question." },
                { title: "Retroactive Data Mining", detail: "Queries historical operative-note repositories to build new datasets and cohort analytics without manual chart review." },
                { title: "Continuous Surgical Intelligence", detail: "Static operative reports become live, trackable metrics analyzed across surgeons, procedures, specialties, teams, and departments, instead of isolated documents inside the EHR." },
                { title: "Eliminate Manual Chart Audits", detail: "Extracts granular surgical data directly from operative notes that would otherwise require expensive, time-consuming manual chart review." },
                { title: "Unlock Data Legacy EHR Analytics Cannot Access", detail: "Extracts surgical nuance buried in unstructured operative-note text and converts it into structured, trackable variables that traditional EHR reporting tools cannot easily analyze without manual review." },
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
