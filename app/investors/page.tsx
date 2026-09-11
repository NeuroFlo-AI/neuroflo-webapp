'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

// Create a client component for the download button
const DownloadButton = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Redirect to download deck page
    window.location.href = '/download-deck';
  };

  return (
    <Button variant="outline" onClick={handleDownload}>
      Pitch Deck
    </Button>
  );
};

// Keep the main page component as a server component
export default function InvestorsPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Investor Information</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A healthcare-first platform turning operative notes into codes, clean claims, and
              live operational intelligence — built for the surgical revenue cycle, not applied
              to it.
            </p>
          </div>

          <GlassmorphismCard
            intensity="medium"
            glowAccent={true}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">We&apos;re Raising $1M</h2>
                <p className="text-muted-foreground">
                  A post-money SAFE funding four quarters of growth: our first enterprise sales
                  hire, two AI engineers, SOC 2 Type II certification, AMA CPT licensing, and
                  support for additional hospital pilots.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                    <Link href="/contact?type=investor">Request Meeting</Link>
                  </Button>
                  <DownloadButton />
                </div>
              </div>
              {/* Floating orb animations */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-[50px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer rotating ring */}
                  <div className="w-3/4 h-3/4 rounded-full border-4 border-blue-500/30 animate-[spin_10s_linear_infinite] flex items-center justify-center relative">
                    {/* Orbital dots on outer ring */}
                    <div className="absolute w-3 h-3 bg-blue-400/60 rounded-full animate-[spin_10s_linear_infinite] -top-1.5 left-1/2 transform -translate-x-1/2"></div>
                    <div className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-[spin_10s_linear_infinite] top-1/2 -right-1 transform -translate-y-1/2"></div>

                    {/* Inner counter-rotating ring */}
                    <div className="w-1/2 h-1/2 rounded-full border-4 border-cyan-500/30 animate-[spin_5s_linear_infinite_reverse] relative flex items-center justify-center">
                      {/* Orbital dots on inner ring */}
                      <div className="absolute w-2 h-2 bg-cyan-300/70 rounded-full animate-[spin_5s_linear_infinite_reverse] -top-1 left-1/2 transform -translate-x-1/2"></div>
                      <div className="absolute w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-[spin_5s_linear_infinite_reverse] top-1/2 -left-0.5 transform -translate-y-1/2"></div>

                      {/* Pulsing center core */}
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400/80 to-cyan-400/80 rounded-full animate-pulse shadow-lg"></div>
                    </div>

                    {/* Additional floating elements */}
                    <div className="absolute w-1 h-1 bg-blue-200/60 rounded-full animate-[spin_15s_linear_infinite] top-1/4 left-1/4"></div>
                    <div className="absolute w-1 h-1 bg-cyan-200/60 rounded-full animate-[spin_8s_linear_infinite_reverse] bottom-1/4 right-1/4"></div>
                  </div>

                  {/* Central glowing backdrop */}
                  <div className="absolute w-20 h-20 rounded-full bg-blue-600/30 backdrop-blur-md animate-pulse"></div>

                  {/* Floating particles around the whole system */}
                  <div className="absolute w-1 h-1 bg-blue-300/40 rounded-full animate-[spin_20s_linear_infinite] top-8 left-8"></div>
                  <div className="absolute w-0.5 h-0.5 bg-cyan-300/40 rounded-full animate-[spin_12s_linear_infinite_reverse] bottom-12 right-6"></div>
                  <div className="absolute w-1 h-1 bg-blue-200/30 rounded-full animate-[spin_25s_linear_infinite] top-16 right-12"></div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">What We Do</h2>
              <GlassmorphismCard intensity="low">
                <p className="text-lg mb-4">
                  NeuroFlo transforms surgical documentation and medical coding using critical
                  AI, machine learning, and reinforcement learning working together — not a
                  single generalist model guessing across every code system, but models trained
                  specifically for CPT, ICD-10, HCPCS, and CMS.
                </p>
                <p className="text-muted-foreground">
                  Our platform unifies documentation, coding, insights, and workflow automation
                  in one system, with HIPAA controls today and SOC 2 Type II certification
                  underway. Providers document once while our models infer CPT, ICD-10, and
                  HCPCS codes with 98%+ accuracy measured in active pilot deployment, provide
                  sentence-level evidence, validate payer rules, and integrate with major EHRs
                  like Oracle Cerner. We deliver a custom-built platform with full audit trails
                  and role-based access.
                </p>
              </GlassmorphismCard>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Team</h2>
              <GlassmorphismCard intensity="low">
                <p className="text-muted-foreground mb-6">
                  Our team consists of AI specialists with over 20 years of combined experience in secure, mission-critical systems:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>
                      <span className="font-medium">Engineering Leadership</span> – Driving technical vision and execution across AI systems architecture, infrastructure, and performance optimization.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>
                      <span className="font-medium">Team of PhD Researchers</span> – Experts in machine learning, computer vision, and natural language processing.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>
                      <span className="font-medium">Compliance Specialists</span> – Ensuring our solutions meet HIPAA, CJIS, and FedRAMP requirements.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>
                      <span className="font-medium">UI/UX Designers</span> – Creating intuitive interfaces for complex AI systems.
                    </p>
                  </li>
                </ul>
              </GlassmorphismCard>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Traction</h2>
              <GlassmorphismCard intensity="low">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p><strong>Active Pilot with Vandalia Health</strong> - Deployed AI-powered surgical documentation and coding automation system</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>98%+ accuracy in CPT, ICD-10, and HCPCS code generation, measured in active pilot deployment, with full evidence traceability</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Oracle Cerner EHR integration, with HIPAA controls today and SOC 2 Type II certification underway</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Growing pipeline of additional health systems currently evaluating NeuroFlo, several under NDA</p>
                  </li>
                </ul>
              </GlassmorphismCard>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Unique Insights</h2>
              <GlassmorphismCard intensity="low">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Surgical documentation and coding requires models trained specifically for each code system — CPT, ICD-10, HCPCS, and CMS — not one generalist model guessing across all of them.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Validating the note at the point of care, before it&apos;s signed, catches what no amount of downstream AI coding can fix after the fact.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>HIPAA compliance and audit traceability must be built into AI systems from day one, not retrofitted, to meet healthcare industry requirements.</p>
                  </li>
                </ul>
              </GlassmorphismCard>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Market Size</h2>
              <GlassmorphismCard intensity="low">
                <p className="text-muted-foreground mb-6">
                  A growing, well-documented opportunity in medical coding, with AI adoption
                  accelerating within it:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-border/40 rounded-lg p-6 bg-background/40">
                    <h3 className="font-medium text-lg mb-2">Medical Coding Market</h3>
                    <p className="text-muted-foreground">$20.8B in 2026, growing to $30.4B by 2030 at a 10% CAGR.</p>
                    <p className="text-xs text-muted-foreground/70 mt-2">Source: The Business Research Company, 2026</p>
                  </div>
                  <div className="border border-border/40 rounded-lg p-6 bg-background/40">
                    <h3 className="font-medium text-lg mb-2">AI in Medical Coding</h3>
                    <p className="text-muted-foreground">$3.56B in 2026, projected to reach $6B by 2030 at a 14% CAGR.</p>
                    <p className="text-xs text-muted-foreground/70 mt-2">Source: The Business Research Company, 2026</p>
                  </div>
                </div>
              </GlassmorphismCard>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Investment Ask</h2>
              <GlassmorphismCard intensity="medium" glowAccent={true}>
                <div className="text-center p-4">
                  <h3 className="text-3xl font-bold mb-2">$1M</h3>
                  <p className="text-xl text-muted-foreground mb-6">
                    Post-money SAFE, funding four quarters of growth
                  </p>
                  <ul className="text-left max-w-md mx-auto space-y-2 mb-6 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <span>First enterprise sales hire</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <span>Two AI engineers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <span>SOC 2 Type II certification and penetration test</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <span>AMA CPT licensing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <span>Support for additional hospital pilots</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground/70 mb-8">
                    Figures are benchmark-based estimates pending our confirmed operating costs, not final books.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                      <Link href="/contact?type=investor">Request Meeting</Link>
                    </Button>
                    <DownloadButton />
                  </div>
                </div>
              </GlassmorphismCard>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}