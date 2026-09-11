"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "@/lib/use-in-view";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    name: "Op Note",
    href: "/platform/op-note",
    tagline: "Surgical capacity and revenue capture at the point of care.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="m9 15 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    name: "Medical Coding",
    href: "/platform/coding-revenue",
    tagline: "Instant liquidity and margin recovery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <rect x="3" y="3" width="18" height="14" rx="2"></rect>
        <path d="M7 21h10"></path>
        <path d="M9 17v4"></path>
        <path d="M15 17v4"></path>
      </svg>
    ),
  },
  {
    name: "AI Insights",
    href: "/platform/ai-insights",
    tagline: "Surgical data governance and strategic foresight.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M3 3v18h18"></path>
        <path d="m19 9-5 5-4-4-3 3"></path>
      </svg>
    ),
  },
];

export function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">One platform, three connected engines</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capture, convert, and capitalize on the same operative note — each with its own
              lifecycle. Click any one to see how it works.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line, desktop only — sits at the icon row's vertical center */}
          <div className="hidden md:block absolute left-[16.5%] right-[16.5%] top-[56px] h-0.5 -z-0">
            <div
              className={cn(
                "relative h-full w-full origin-left rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-transform duration-[1400ms] ease-out",
                isInView ? "scale-x-100" : "scale-x-0"
              )}
            >
              {isInView && (
                <div className="pillar-pulse absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_3px_rgba(34,211,238,0.8)]" />
              )}
            </div>
          </div>
          <style jsx>{`
            @keyframes pillar-travel {
              from { left: 0%; transform: translate(-50%, -50%); }
              to { left: 100%; transform: translate(-50%, -50%); }
            }
            .pillar-pulse {
              animation: pillar-travel 3s linear infinite;
            }
          `}</style>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link href={pillar.href} className="block h-full group">
                  <GlassmorphismCard
                    intensity="medium"
                    hoverEffect
                    glowAccent={index === 1}
                    className="h-full text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{pillar.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{pillar.tagline}</p>
                    <span className="mt-auto text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors">
                      See how it works →
                    </span>
                  </GlassmorphismCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
