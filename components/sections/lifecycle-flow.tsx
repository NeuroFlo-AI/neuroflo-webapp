"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";
import { useRef, type ReactNode } from "react";

export interface LifecycleStep {
  id: string;
  title: string;
  detail: string;
  icon: ReactNode;
  /** Small badge shown under this node, e.g. "Fed by continuous learning" */
  feedBadge?: string;
}

interface LifecycleFlowProps {
  caption: string;
  steps: LifecycleStep[];
  /** Label for the loop-back arrow from the last step back into the flow, e.g. "Learn" */
  loopLabel?: string;
  className?: string;
}

/**
 * Renders an operative/coding/insight lifecycle as a connected sequence of steps,
 * adapted from the animated deck's node/edge flow diagrams (see
 * docs/plan/content-inventory.md, section 3) but rebuilt as a responsive,
 * static-value-only component — no canvas, no per-render Math, so it can't
 * reintroduce a hydration mismatch, and it reflows cleanly instead of relying
 * on a fixed-pixel canvas.
 */
export function LifecycleFlow({ caption, steps, loopLabel, className }: LifecycleFlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <p className="text-center text-sm font-medium text-blue-500 mb-8 tracking-wide uppercase">
        {caption}
      </p>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0 relative">
        {steps.map((step, i) => (
          <div key={step.id} className="relative flex md:flex-col items-center md:items-center flex-1 gap-4 md:gap-0">
            {/* connector to next step */}
            {i < steps.length - 1 && (
              <>
                {/* mobile: vertical connector */}
                <div className="md:hidden absolute left-6 top-14 w-0.5 h-[calc(100%+1.5rem)] -z-0">
                  <div
                    className={cn(
                      "h-full w-full origin-top bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 transition-transform duration-[1200ms] ease-out",
                      isInView ? "scale-y-100" : "scale-y-0"
                    )}
                  />
                </div>
                {/* desktop: horizontal connector, offset to sit at icon center */}
                <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-0.5 -z-0">
                  <div
                    className={cn(
                      "h-full w-full origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-transform duration-[1200ms] ease-out",
                      isInView ? "scale-x-100" : "scale-x-0"
                    )}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  />
                </div>
              </>
            )}

            <div className="relative z-10 flex flex-col items-center text-center md:w-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] flex-shrink-0">
                {step.icon}
              </div>
              <div className="mt-3 md:mt-3 md:px-2">
                <h4 className="font-semibold text-sm md:text-base">{step.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 hidden md:block">{step.detail}</p>
                {step.feedBadge && (
                  <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-medium text-cyan-500 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2 py-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"></path><path d="M21 3v6h-6"></path></svg>
                    {step.feedBadge}
                  </span>
                )}
              </div>
            </div>

            {/* mobile-only detail (hidden on desktop version above, shown here for narrow screens) */}
            <p className="text-xs text-muted-foreground md:hidden flex-1">{step.detail}</p>
          </div>
        ))}
      </div>

      {loopLabel && (
        <div className="flex justify-center mt-8">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-500 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1l4 4-4 4"></path><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8"></path><path d="M7 21.9l-4-4 4-4"></path><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"></path></svg>
            One continuous loop: {loopLabel}
          </span>
        </div>
      )}
    </div>
  );
}
