"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const NODES = [
  {
    id: "capture",
    label: "Capture",
    sub: "Op Note",
    href: "/platform/op-note",
    x: 50, y: 15,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1"></path><line x1="12" y1="18" x2="12" y2="22"></line></svg>
    ),
  },
  {
    id: "convert",
    label: "Convert",
    sub: "Medical Coding",
    href: "/platform/coding-revenue",
    x: 85, y: 80,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"></rect><path d="M7 21h10"></path><path d="M9 17v4"></path><path d="M15 17v4"></path></svg>
    ),
  },
  {
    id: "capitalize",
    label: "Capitalize",
    sub: "AI Insights",
    href: "/platform/ai-insights",
    x: 15, y: 80,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
    ),
  },
];

// Same three points as NODES, in a fixed 400x400 SVG coordinate space, used to
// draw the connecting loop. pathLength="1" normalizes stroke-dasharray/offset
// to 0-1 regardless of actual line length, so the draw-in animation is exact
// with no per-line length math needed.
const EDGES = [
  { d: "M200,60 L340,320" }, // capture -> convert
  { d: "M340,320 L60,320" }, // convert -> capitalize
  { d: "M60,320 L200,60" },  // capitalize -> capture
];

function FlywheelDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative max-w-lg mx-auto aspect-square">
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="edge-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(37 99 235)" />
            <stop offset="100%" stopColor="rgb(8 145 178)" />
          </linearGradient>
        </defs>
        {EDGES.map((edge, i) => (
          <path
            key={i}
            d={edge.d}
            pathLength={1}
            stroke="url(#edge-gradient)"
            strokeWidth={2}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={1}
            className={cn(
              "transition-[stroke-dashoffset] duration-[1400ms] ease-out",
              isInView ? "[stroke-dashoffset:0]" : "[stroke-dashoffset:1]"
            )}
            style={{ transitionDelay: `${i * 300}ms` }}
          />
        ))}
        {isInView &&
          EDGES.map((edge, i) => (
            <circle key={`pulse-${i}`} r={4} fill="rgb(34 211 238)">
              <animateMotion dur="3s" repeatCount="indefinite" path={edge.d} begin={`${i}s`} />
            </circle>
          ))}
      </svg>

      {NODES.map((node) => (
        <Link
          key={node.id}
          href={node.href}
          className="absolute -translate-x-1/2 -translate-y-1/2 group"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-transform group-hover:scale-110">
              {node.icon}
            </div>
            <div className="text-center bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1 border border-border/40">
              <p className="font-semibold text-sm leading-tight">{node.label}</p>
              <p className="text-[11px] text-muted-foreground leading-tight">{node.sub}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

const DRIVERS = [
  {
    title: "Zero Revenue Leakage",
    detail: "Nothing billable is missed at the point of care.",
  },
  {
    title: "Faster Cash",
    detail: "Clean claims move from signed note to submission in hours, not weeks.",
  },
  {
    title: "Lower Overhead",
    detail: "Coders and administrators spend time on exceptions, not data entry.",
  },
  {
    title: "More Surgical Capacity",
    detail: "Surgeons spend more of their day operating, less of it documenting.",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-blue-500 mb-3">Architecture</p>
          <h1 className="text-4xl font-bold mb-4">
            Turning Surgical Documentation Into Instant, Error-Free Revenue
          </h1>
          <p className="text-xl text-muted-foreground">
            We aren&apos;t automating medical coding. We&apos;re engineering surgical revenue
            from the ground up — one system, three connected engines.
          </p>
        </div>

        {/* Flywheel */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-2">One Continuous Intelligence Loop</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Capture, convert, and capitalize aren&apos;t three separate products bolted
            together — they&apos;re one loop, where each pillar&apos;s output feeds the next.
          </p>
          <FlywheelDiagram />
        </div>

        {/* Design philosophy */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">How It&apos;s Actually Built</h2>
          <GlassmorphismCard intensity="medium" glowAccent className="mb-6">
            <p className="text-lg mb-4">
              &quot;You cannot validate an operative note against a Current Procedural
              Terminology code. You can only validate it against the facts that select the
              code.&quot;
            </p>
            <p className="text-muted-foreground">
              That single idea drives the whole design: a two-step pipeline. Step one uses
              language-model reasoning to extract structured facts from free-text prose — the
              part language models are good at. Step two maps those facts to codes using
              deterministic, rule-based logic — not a model — because code selection is exactly
              the kind of reasoning where models are least reliable and errors are hardest to
              catch.
            </p>
          </GlassmorphismCard>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassmorphismCard intensity="low">
              <h3 className="font-semibold mb-3">Ask, Don&apos;t Guess</h3>
              <p className="text-sm text-muted-foreground">
                Where confidence is insufficient, the system asks rather than guesses. It should
                never silently apply the wrong profile, and it should never refuse to run —
                every degradation is visible to the person using it.
              </p>
            </GlassmorphismCard>
            <GlassmorphismCard intensity="low">
              <h3 className="font-semibold mb-3">Nothing Is Boilerplate by Default</h3>
              <p className="text-sm text-muted-foreground">
                Only text verifiable from another system of record, or affirmatively confirmed
                by the surgeon, can be pre-populated. Findings, complications, and patient
                condition are never boilerplate, under any circumstances.
              </p>
            </GlassmorphismCard>
          </div>
        </div>

        {/* Why hospitals buy */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Why Hospitals Buy NeuroFlo</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {DRIVERS.map((driver) => (
              <GlassmorphismCard key={driver.title} intensity="low" hoverEffect>
                <h3 className="font-semibold mb-2">{driver.title}</h3>
                <p className="text-sm text-muted-foreground">{driver.detail}</p>
              </GlassmorphismCard>
            ))}
          </div>
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
