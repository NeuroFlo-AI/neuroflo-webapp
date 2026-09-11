"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Braces } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const RESOURCES = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const PLATFORM = [
  { name: "Architecture", href: "/platform/architecture" },
  { name: "Op Note", href: "/platform/op-note" },
  { name: "Medical Coding", href: "/platform/coding-revenue" },
  { name: "AI Insights", href: "/platform/ai-insights" },
];

const INVESTORS = [
  { name: "Investor Overview", href: "/investors" },
  { name: "Pitch Deck", href: "/download-deck" },
  { name: "Overview", href: "/investors/animated-overview" },
  { name: "Explainer Video", href: "/investors/explainer" },
  { name: "ROI & Financial Framework", href: "/investors/roi" },
  { name: "Market & Competitive Analysis", href: "/investors/market-analysis" },
];

const LEGAL = [
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
  { name: "Compliance", href: "/compliance" },
];

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === 'dark' ? '/logo/neuroflow-xl.png' : '/logo/neroflow-logo-dark-lg.png';

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2">
              <div className="relative w-50 h-18 flex items-center justify-center">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="relative w-50 h-10 flex items-center justify-center">
                    <Image
                      src={logoSrc}
                      alt="NeuroFlo Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>
            </div>
            
            <p className="max-w-xs mt-4 text-sm text-muted-foreground">
            Healthcare-first agentic AI for operations: from op-notes to intelligence to clean claims, live insights, and automated workflows. Government healthcare ready.
            </p>

            <div className="flex mt-6 space-x-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Contact Us:</span> <br />
                (904) 497-1348
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-foreground">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                {RESOURCES.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-medium text-foreground">Platform</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                {PLATFORM.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-medium text-foreground">Investors</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                {INVESTORS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-medium text-foreground">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                {LEGAL.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-8 border-t border-border/40 sm:flex-row">
          <div>
            <p className="font-medium text-foreground">Join Our Beta</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign up to be among the first to test our revolutionary AI platform.
            </p>
          </div>
          <Link
            href="/#signup"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md hover:from-blue-700 hover:to-cyan-700 transition-colors whitespace-nowrap"
          >
            Join Beta
          </Link>
        </div>

        <div className="pt-8 mt-8 border-t border-border/40">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} NeuroFlo LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}