import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

const LANDSCAPE = [
  {
    name: "Front-End Clinical Scribes",
    examples: "Nuance DAX, Abridge",
    critique: "They are purely passive; they transcribe what they hear without any knowledge of what belongs in a compliant, billable note.",
  },
  {
    name: "Back-End Autonomous Coders",
    examples: "Fathom Health, CodaMetrix",
    critique: "They suffer from garbage in, garbage out — if an operative report is missing critical details, downstream AI will perfectly code an incomplete note.",
  },
  {
    name: "Legacy EHR Analytics",
    examples: "Epic / Cerner native dashboards",
    critique: "About 80% of actual surgical nuance remains trapped in unstructured text that these dashboards were never built to read.",
  },
];

export default function MarketAnalysisPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-blue-500 mb-3">Market & Competitive Analysis</p>
          <h1 className="text-4xl font-bold mb-4">
            Two Isolated Silos. NeuroFlo Connects Them.
          </h1>
          <p className="text-xl text-muted-foreground">
            The market is fragmented between front-end scribes and back-end coders — and the
            gap between them is exactly where revenue disappears.
          </p>
        </div>

        {/* Positioning narrative */}
        <GlassmorphismCard intensity="medium" glowAccent className="max-w-4xl mx-auto mb-16">
          <p className="text-muted-foreground">
            The global AI medical coding market is growing fast, but it&apos;s currently
            fragmented on two isolated fronts. On one side, companies build ambient AI scribes
            to help doctors write notes faster. On the other, autonomous coding companies build
            backend AI to help hospitals read those notes. Both approaches are fundamentally
            flawed because they treat documentation and billing as two separate silos — if a
            surgeon writes a clinically vague note on the front end and forgets key details, the
            world&apos;s most advanced AI coder on the back end still cannot legally bill for
            the missing parts. The hospital still loses the revenue. NeuroFlo collapses the
            space between the operating table and the revenue cycle into a single, continuous
            intelligence loop — we don&apos;t passively decode whatever the surgeon happens to
            write, we actively partner with them in real time at the point of care.
          </p>
        </GlassmorphismCard>

        {/* Competitive landscape */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Where Everyone Else Falls Short</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {LANDSCAPE.map((item) => (
              <GlassmorphismCard key={item.name} intensity="low">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-xs text-muted-foreground/70 mb-3">{item.examples}</p>
                <p className="text-sm text-muted-foreground">{item.critique}</p>
              </GlassmorphismCard>
            ))}
          </div>
        </div>

        {/* Market size */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Market Size</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassmorphismCard intensity="low" className="text-center">
              <h3 className="font-medium text-lg mb-2">Medical Coding Market</h3>
              <p className="text-3xl font-bold text-blue-500 mb-2">$20.8B → $30.4B</p>
              <p className="text-sm text-muted-foreground">2026 to 2030, at a 10% CAGR</p>
              <p className="text-xs text-muted-foreground/60 mt-2">Source: The Business Research Company, 2026</p>
            </GlassmorphismCard>
            <GlassmorphismCard intensity="low" className="text-center">
              <h3 className="font-medium text-lg mb-2">AI in Medical Coding</h3>
              <p className="text-3xl font-bold text-blue-500 mb-2">$3.56B → $6B</p>
              <p className="text-sm text-muted-foreground">2026 to 2030, at a 14% CAGR</p>
              <p className="text-xs text-muted-foreground/60 mt-2">Source: The Business Research Company, 2026</p>
            </GlassmorphismCard>
          </div>
        </div>

        {/* Enterprise interoperability */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Enterprise Interoperability & Federal Contracting Readiness</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassmorphismCard intensity="low">
              <h3 className="font-semibold mb-3">Native SMART on FHIR Integration</h3>
              <p className="text-sm text-muted-foreground">
                NeuroFlo operates natively as a SMART on FHIR (Substitutable Medical Applications
                and Reusable Technologies on Fast Healthcare Interoperability Resources)
                application, integrating directly within EHR environments like Cerner and Epic.
                By launching inside the physician&apos;s existing workspace and exporting
                finalized notes directly back into the patient chart, NeuroFlo avoids heavy data
                liabilities and unnecessary ingestion of personally identifiable information,
                while eliminating multi-month IT integration delays.
              </p>
            </GlassmorphismCard>
            <GlassmorphismCard intensity="low">
              <h3 className="font-semibold mb-3">Government Contracting & Defense Tech Capabilities</h3>
              <p className="text-sm text-muted-foreground">
                NeuroFlo is registered in SAM.gov (System for Award Management) as an Air Force
                veteran-owned healthcare technology enterprise, engineered to facilitate direct
                public-sector contracting, medical research, and defense health deployments
                across Department of Defense medical centers and Veterans Health Administration
                health systems — with HIPAA controls today and SOC 2 Type II certification
                underway, for both federal agencies and commercial health networks.
              </p>
            </GlassmorphismCard>
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
            <Link href="/contact?type=investor">Request Meeting</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
