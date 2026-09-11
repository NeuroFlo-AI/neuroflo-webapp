"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { motion } from "@/lib/motion";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <ParticlesBackground quantity={70} />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/95 to-background/90"></div>
      <div className="absolute top-20 -left-64 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">
                We Aren&apos;t Automating Medical Coding.
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
                We&apos;re Engineering Surgical Revenue From the Ground Up.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              NeuroFlo runs natively inside Epic and Cerner as a SMART on FHIR application —
              one system for surgical documentation, medical coding, and operational
              intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                <Link href="/contact">Request a Pilot</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/investors">Investor Information</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <GlassmorphismCard
              intensity="medium"
              glowAccent={true}
              className="relative z-10 p-8 md:p-10"
            >
              <div className="absolute opacity-30 top-0 right-0 w-40 h-40 bg-blue-600/30 rounded-full filter blur-xl"></div>
              <div className="absolute opacity-30  bottom-0 left-0 w-60 h-60 bg-cyan-600/30 rounded-full filter blur-xl"></div>

              <h3 className="text-2xl font-bold mb-6">What You Should Know First</h3>
              <p className="text-muted-foreground mb-6">
                Four things that separate NeuroFlo from a generic AI scribe or a coding bolt-on.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                  </div>
                  <span className="text-sm font-medium mb-1">SOC 2 Type II</span>
                  <span className="text-xs text-muted-foreground">Audit underway, alongside existing HIPAA controls</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><path d="M2 20h20"></path><path d="M5 20V8.2c0-.4.3-.8.7-.9l.2-.1c.4 0 .8.2 1 .5l1.8 2.6c.3.4.9.4 1.2 0l1.8-2.6c.3-.4.5-.6 1-.5.1 0 .2 0 .3.1.4.1.7.5.7.9V20"></path><path d="M13 14h6a2 2 0 0 1 2 2v4"></path><path d="M8 17H5"></path></svg>
                  </div>
                  <span className="text-sm font-medium mb-1">Government Contractor</span>
                  <span className="text-xs text-muted-foreground">SAM.gov registered, Air Force veteran-owned — built for federal contracting</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
                  </div>
                  <span className="text-sm font-medium mb-1">SMART on FHIR Native</span>
                  <span className="text-xs text-muted-foreground">Runs inside Epic and Cerner — no rip-and-replace</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <span className="text-sm font-medium mb-1">Built for Surgery</span>
                  <span className="text-xs text-muted-foreground">While generalist scribes chase primary care, our wheelhouse is the OR</span>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
                  <Link href="/about">Learn more about our technology →</Link>
                </Button>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}