import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { CheckList } from "@/components/ui/check-list";

const DRIVERS = [
  {
    name: "Revenue Leakage Recovery",
    formula: "ΔR = TR × L × E",
    legend: "TR = total annual revenue · L = leakage rate · E = capture efficiency",
    detail: "Uncaptured procedures, omitted implants, and missed secondary codes erase revenue that was earned but never billed. Recovering it is a function of how much leakage exists and how completely the platform captures it.",
  },
  {
    name: "Working Capital Acceleration",
    formula: "ΔWC = (R_daily × ΔDays) × C",
    legend: "R_daily = daily revenue · ΔDays = charge-lag days removed · C = cost of capital",
    detail: "Every day a claim sits between discharge and final billing is a day that cash isn't in the hospital's hands. Shrinking that lag frees working capital and the interest it would otherwise cost to carry.",
  },
  {
    name: "Operational Savings",
    formula: "ΔC = (N × Δ% × R) + K",
    legend: "N = claim volume · Δ% = drop in denial rate · R = cost per rework · K = outsourced coding spend eliminated",
    detail: "Fewer denials mean fewer reworks, and better first-pass coding means less dependence on outsourced coding labor.",
  },
  {
    name: "Surgical Capacity Expansion",
    formula: "ΔR_cap = (S × H × R_hr) × M",
    legend: "S = surgeons · H = hours saved per surgeon per year · R_hr = revenue per surgical hour · M = margin",
    detail: "Time surgeons reclaim from documentation is time available for additional cases. We model this driver qualitatively below — the dollar figure depends entirely on a hospital's own surgical volume and margin, so we don't publish a generic number for it.",
  },
];

export default function RoiPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-blue-500 mb-3">ROI & Financial Framework</p>
          <h1 className="text-4xl font-bold mb-4">
            We Aren&apos;t Automating Medical Coding.
          </h1>
          <p className="text-xl text-muted-foreground">
            We&apos;re Engineering Surgical Revenue From the Ground Up — and every value driver
            below is a formula you can run against your own numbers, not ours.
          </p>
        </div>

        {/* The four value drivers */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">The Value Drivers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {DRIVERS.map((driver) => (
              <GlassmorphismCard key={driver.name} intensity="low">
                <h3 className="font-semibold mb-3">{driver.name}</h3>
                <div className="bg-background/60 border border-border/40 rounded-md px-4 py-3 mb-3 font-mono text-sm text-blue-400 overflow-x-auto">
                  {driver.formula}
                </div>
                <p className="text-xs text-muted-foreground/70 mb-3">{driver.legend}</p>
                <p className="text-sm text-muted-foreground">{driver.detail}</p>
              </GlassmorphismCard>
            ))}
          </div>
        </div>

        {/* Illustrative scenario */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-2">An Illustrative Scenario</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Modeled for a hospital system processing about $5M in charges per day
            (~$1.825B annually) — the same order of magnitude as our active pilot partner.
            Every figure below is a model, not a measured result, and is labeled as such.
          </p>

          <GlassmorphismCard intensity="medium" glowAccent className="mb-6">
            <h3 className="font-semibold mb-3">Understanding Immediate Liquidity</h3>
            <p className="text-sm text-muted-foreground">
              The industry benchmark for DNFB (Discharged Not Final Billed) sits at a 7.1-day
              median (Advisory Board benchmark, via MD Clarity). Shrinking that toward under 24
              hours means roughly six fewer days that cash sits trapped between discharge and
              billing. For a hospital processing $5M/day, six days of accelerated billing is
              about $30M in freed working capital — a timing benefit, not new revenue, but real
              liquidity none the less.
            </p>
          </GlassmorphismCard>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/40 text-left">
                  <th className="py-3 pr-4 font-medium">Value Driver</th>
                  <th className="py-3 pr-4 font-medium">Modeled Calculation</th>
                  <th className="py-3 font-medium text-right">Result</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/20">
                  <td className="py-3 pr-4">Leakage Recovery</td>
                  <td className="py-3 pr-4">$1.825B × ~1% leakage (HFMA) × modeled capture efficiency</td>
                  <td className="py-3 text-right whitespace-nowrap">~$17.3M</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-3 pr-4">Working Capital Acceleration</td>
                  <td className="py-3 pr-4">$30M freed × 5% modeled cost of capital</td>
                  <td className="py-3 text-right whitespace-nowrap">~$1.5M</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-3 pr-4">Denial Rework Reduction</td>
                  <td className="py-3 pr-4">100,000 claims × 5% fewer denials × $57.23/rework (Premier, 2023)</td>
                  <td className="py-3 text-right whitespace-nowrap">~$286K</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-3 pr-4">Contractor Displacement</td>
                  <td className="py-3 pr-4">10 outsourced coders modeled at $80K/year</td>
                  <td className="py-3 text-right whitespace-nowrap">~$800K</td>
                </tr>
                <tr className="font-semibold text-foreground">
                  <td className="py-3 pr-4">Total Modeled Annual Value</td>
                  <td className="py-3 pr-4"></td>
                  <td className="py-3 text-right whitespace-nowrap">~$19.9M/year</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4">
            All figures above are modeled for illustration against a hospital of this size —
            not measured results, and not a projection for any specific customer. We don&apos;t
            publish a return-on-investment multiple against a software price here: the multiple
            depends entirely on your contract terms, and a generic one wouldn&apos;t mean
            anything applied to your numbers.
          </p>
        </div>

        {/* Beyond the direct math */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Beyond the Direct Math</h2>
          <GlassmorphismCard intensity="low">
            <CheckList
              items={[
                { title: "Compounding Value", detail: "The system learns from every manual correction a hospital's coders make, so baseline accuracy — and the labor savings that follow it — improves year over year." },
                { title: "Lower Integration Friction", detail: "As a SMART on FHIR application that doesn't bulk-ingest full patient histories, with HIPAA controls today and SOC 2 Type II underway, NeuroFlo is built to avoid the months-long security review a heavier integration would require." },
                { title: "Frictionless Physician Adoption", detail: "Surgeons export directly into the chart with one action, reclaiming time on every procedure rather than adding a new system to learn." },
                { title: "Clinical Protocol Standardization", detail: "Tracking morbidity, success rates, and per-surgeon speed for procedures like aortic valve replacement gives departments a factual basis to standardize technique." },
                { title: "Audit Defensibility", detail: "Completing the legal and administrative structure of a note before sign-off creates a defensible paper trail — a hedge against Medicare and Medicaid clawback audits, not just a documentation nicety." },
              ]}
            />
          </GlassmorphismCard>
        </div>

        {/* Documentation gap callout */}
        <GlassmorphismCard intensity="medium" glowAccent className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg font-medium">
            &quot;If it wasn&apos;t documented, it wasn&apos;t done.&quot;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            CMS documentation standards leave no room for ambiguity — and neither does the
            revenue that depends on getting the note right the first time.
          </p>
        </GlassmorphismCard>

        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
            <Link href="/contact?type=investor">Talk Through the Model</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
