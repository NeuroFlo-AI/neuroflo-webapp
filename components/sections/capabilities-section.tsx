"use client";

import { useRef } from "react";
import { useInView } from "@/lib/use-in-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { motion } from "@/lib/motion";

const CAPABILITIES = [
  {
    id: "validation",
    name: "Point-of-Care Validation",
    tabLabel: "Validation",
    description: "NeuroFlo checks the operative note against clinical, legal, and billing requirements before it's ever signed — catching missing details while the surgeon can still act on them, not weeks later in a denial.",
    features: [
      "Real-time gap detection before sign-off",
      "Multi-layer validation: provider profile, administrative, legal, and template rules",
      "SMART on FHIR sync with Epic and Cerner",
      "Full evidence trail back to the original note"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m9 12 2 2 4-4"></path><path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.7 9c-1.1.6-1.7 1.8-1.7 3s.6 2.4 1.7 3A3.6 3.6 0 0 0 9 19.3c.6 1.1 1.8 1.7 3 1.7s2.4-.6 3-1.7A3.6 3.6 0 0 0 19.3 15c1.1-.6 1.7-1.8 1.7-3s-.6-2.4-1.7-3A3.6 3.6 0 0 0 15 4.7c-.6-1.1-1.8-1.7-3-1.7Z"></path></svg>
    )
  },
  {
    id: "coding-intelligence",
    name: "Code-Specific Intelligence",
    tabLabel: "Code Intelligence",
    description: "Proprietary models trained separately for CPT, ICD-10, HCPCS, and CMS — not one generalist model guessing across all of them.",
    features: [
      "Models trained per code system, kept current as code sets change",
      "Cohort and server systems with up-to-date rules for each",
      "Sentence-level evidence for every suggested code",
      "Payer and NCCI rule validation before submission"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect x="3" y="3" width="18" height="14" rx="2"></rect><path d="M7 21h10"></path><path d="M9 17v4"></path><path d="M15 17v4"></path></svg>
    )
  },
  {
    id: "governance",
    name: "Human-in-the-Loop Governance",
    tabLabel: "Human-in-the-Loop",
    description: "Administrators set the policy, legal sets the guardrails, and surgeons and coders shape it in practice — NeuroFlo doesn't override any of them silently.",
    features: [
      "HIPAA controls with SOC 2 Type II underway",
      "Full audit trail: every edit, decision, and override logged",
      "Role-based access and data residency options",
      "Every degradation visible — never a silent guess"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
    )
  },
  {
    id: "insights",
    name: "Live Operational Insight",
    tabLabel: "Live Insights",
    description: "Ask a plain-language question and get an answer sourced from every operative note, not a static report someone built last quarter.",
    features: [
      "No-code, drag-and-drop, and dictation query interface",
      "Live dashboards built from unstructured note text",
      "Outcomes, complications, LOS, and readmission tracking",
      "Cohort filters and secure exports for research"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
    )
  }
];

// --- Four distinct, per-tab visuals. Everything below uses only static
// Tailwind classes / literal keyframe values (no Math.* computed per render),
// so nothing here can ever produce a server/client hydration mismatch. Each
// one responds to hover (group-hover) so switching tabs isn't the only
// interaction available.

const VISUAL_SHELL = "relative order-1 md:order-2 aspect-square max-w-md mx-auto flex items-center justify-center group";

// 1. Point-of-Care Validation: a note being scanned, checks landing as it passes.
const ValidationVisual = () => (
  <div className={VISUAL_SHELL}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-[60px]"></div>
    <div className="relative w-48 h-60 rounded-lg border-2 border-blue-500/30 bg-background/60 overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-colors group-hover:border-blue-400/60">
      {/* note lines */}
      <div className="p-5 space-y-3">
        {[85, 70, 90, 60, 80, 50].map((w, i) => (
          <div key={i} className="h-2 rounded bg-foreground/10" style={{ width: `${w}%` }} />
        ))}
      </div>
      {/* scan beam */}
      <div className="validation-scan absolute left-0 right-0 h-10 bg-gradient-to-b from-cyan-400/0 via-cyan-300/40 to-cyan-400/0" />
      {/* checks that land as the beam passes */}
      {[
        { top: "18%" },
        { top: "40%" },
        { top: "62%" },
        { top: "84%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="validation-check absolute right-3 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.6)]"
          style={{ ...pos, animationDelay: `${i * 0.5 + 0.3}s` }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"></path></svg>
        </div>
      ))}
    </div>
    <style jsx>{`
      @keyframes validation-scan-move {
        0% { top: -10%; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { top: 100%; opacity: 0; }
      }
      .validation-scan {
        animation: validation-scan-move 2.6s ease-in-out infinite;
      }
      .group:hover .validation-scan {
        animation-play-state: paused;
      }
      @keyframes validation-check-pop {
        0%, 20% { transform: scale(0); opacity: 0; }
        35%, 100% { transform: scale(1); opacity: 1; }
      }
      .validation-check {
        animation: validation-check-pop 2.6s ease-out infinite;
      }
    `}</style>
  </div>
);

// 2. Code-Specific Intelligence: a neuron core with labeled bubbles orbiting it.
const CODE_LABELS = ["CPT", "ICD-10", "HCPCS", "CMS"];
const CodeIntelligenceVisual = () => (
  <div className={VISUAL_SHELL}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-[60px]"></div>
    <div className="relative w-64 h-64">
      {/* connecting spokes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-blue-500/20"></div>
        <div className="absolute h-full w-px bg-blue-500/20"></div>
      </div>
      {/* core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_40px_rgba(37,99,235,0.6)] animate-pulse z-10"></div>
      {/* orbiting labeled bubbles */}
      {CODE_LABELS.map((label, i) => (
        <div
          key={label}
          className={`code-orbit code-orbit-${i} absolute inset-0 group-hover:[animation-play-state:paused]`}
        >
          <div className="code-counter-spin absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="px-3 py-1.5 rounded-full bg-background border border-blue-500/40 text-xs font-semibold text-blue-400 shadow-[0_0_12px_rgba(37,99,235,0.3)] transition-transform hover:scale-110 hover:border-cyan-400 whitespace-nowrap">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
      @keyframes code-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes code-counter-spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(-360deg); } }
      .code-orbit-0 { animation: code-spin 14s linear infinite; }
      .code-orbit-1 { animation: code-spin 14s linear infinite; animation-delay: -3.5s; }
      .code-orbit-2 { animation: code-spin 14s linear infinite; animation-delay: -7s; }
      .code-orbit-3 { animation: code-spin 14s linear infinite; animation-delay: -10.5s; }
      .code-counter-spin { animation: code-counter-spin 14s linear infinite; animation-delay: inherit; }
    `}</style>
  </div>
);

// 3. Human-in-the-Loop: a review cycle — suggest, review, confirm, learn — orbiting a person icon.
const LOOP_STEPS = [
  { label: "Suggest", pos: "top-0 left-1/2 -translate-x-1/2" },
  { label: "Review", pos: "top-1/2 right-0 -translate-y-1/2" },
  { label: "Confirm", pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { label: "Learn", pos: "top-1/2 left-0 -translate-y-1/2" },
];
const HumanLoopVisual = () => (
  <div className={VISUAL_SHELL}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-[60px]"></div>
    <div className="relative w-64 h-64 rounded-full border-2 border-dashed border-blue-500/30">
      {/* traveling pulse riding the ring */}
      <div className="loop-travel absolute inset-0 group-hover:[animation-play-state:paused]">
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(34,211,238,0.7)]"></div>
      </div>
      {/* step badges at cardinal points */}
      {LOOP_STEPS.map((step) => (
        <div key={step.label} className={`absolute ${step.pos}`}>
          <div className="px-2.5 py-1 rounded-full bg-background border border-blue-500/40 text-[11px] font-medium text-blue-400 whitespace-nowrap transition-transform hover:scale-110 hover:border-cyan-400">
            {step.label}
          </div>
        </div>
      ))}
      {/* center: the human */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </div>
    </div>
    <style jsx>{`
      @keyframes loop-travel-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .loop-travel { animation: loop-travel-spin 6s linear infinite; }
    `}</style>
  </div>
);

// 4. Live Operational Insight: a live-updating bar chart with a pulsing "live" badge.
const BAR_HEIGHTS = [45, 75, 55, 90, 65, 80];
const LiveInsightVisual = () => (
  <div className={VISUAL_SHELL}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-[60px]"></div>
    <div className="relative w-64 h-48 rounded-lg border border-blue-500/30 bg-background/60 flex items-end justify-center gap-3 px-6 pb-6 pt-10 shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-colors group-hover:border-blue-400/60">
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-[10px] font-medium tracking-wide text-cyan-400">LIVE</span>
      </div>
      {BAR_HEIGHTS.map((h, i) => (
        <div
          key={i}
          className="live-bar w-6 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400"
          style={{ height: `${h}%`, animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </div>
    <style jsx>{`
      @keyframes live-bar-pulse {
        0%, 100% { transform: scaleY(1); opacity: 0.85; }
        50% { transform: scaleY(1.12); opacity: 1; }
      }
      .live-bar {
        transform-origin: bottom;
        animation: live-bar-pulse 2.2s ease-in-out infinite;
      }
    `}</style>
  </div>
);

const VISUALS: Record<string, () => JSX.Element> = {
  validation: ValidationVisual,
  "coding-intelligence": CodeIntelligenceVisual,
  governance: HumanLoopVisual,
  insights: LiveInsightVisual,
};

export function CapabilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Built to Earn a Pilot</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Critical AI, machine learning, and reinforcement learning working together —
              not a chatbot wrapper, and not another generalist model guessing at your codes.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="validation" className="w-full">
          <TabsList className="w-full max-w-4xl mx-auto h-auto flex flex-wrap justify-center gap-2 bg-transparent mb-10 p-0">
            {CAPABILITIES.map((capability) => (
              <TabsTrigger
                key={capability.id}
                value={capability.id}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/50 bg-background/40 data-[state=active]:bg-primary/10 data-[state=active]:border-blue-500/50"
              >
                <span className="hidden sm:inline-block text-sm">{capability.tabLabel}</span>
                <span className="sm:hidden">{capability.icon}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {CAPABILITIES.map((capability) => {
            const Visual = VISUALS[capability.id];
            return (
              <TabsContent key={capability.id} value={capability.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <GlassmorphismCard
                      intensity="medium"
                      glowAccent={true}
                      className="order-2 md:order-1 md:p-8"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                        {capability.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{capability.name}</h3>
                      <p className="text-muted-foreground mb-6">
                        {capability.description}
                      </p>
                      <ul className="space-y-2">
                        {capability.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-1"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassmorphismCard>

                    <Visual />
                  </div>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
