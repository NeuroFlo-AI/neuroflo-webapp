"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const PLATFORM_ITEMS = [
  { name: "Architecture", href: "/platform/architecture" },
  { name: "Op Note", href: "/platform/op-note" },
  { name: "Medical Coding", href: "/platform/coding-revenue" },
  { name: "AI Insights", href: "/platform/ai-insights" },
];

const INVESTOR_ITEMS = [
  { name: "Investor Overview", href: "/investors" },
  { name: "Pitch Deck", href: "/download-deck" },
  { name: "Overview", href: "/investors/animated-overview" },
  { name: "Explainer Video", href: "/investors/explainer" },
  { name: "ROI & Financial Framework", href: "/investors/roi" },
  { name: "Market & Competitive Analysis", href: "/investors/market-analysis" },
];

const TRIGGER_CLASS =
  "bg-transparent text-muted-foreground hover:bg-accent/30 hover:text-primary focus:bg-accent/30 focus:text-primary data-[state=open]:bg-accent/50 data-[state=open]:text-primary px-3 py-2 h-auto";

const DROPDOWN_LINK_CLASS =
  "block select-none rounded-md px-3 py-2 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent/30 hover:text-primary";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const isPlatformActive = pathname.startsWith("/platform");
  const isInvestorsActive =
    pathname === "/investors" ||
    pathname.startsWith("/investors/") ||
    pathname === "/download-deck";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-40 h-16 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="w-8 h-8" /> {/* Placeholder for logo */}
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-border/50"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-50 h-10  flex items-center justify-center">
              <Image
                src={resolvedTheme === 'dark' ? '/logo/neuroflow-xl.png' : '/logo/neroflow-logo-dark-lg.png'}
                alt="NeuroFlo Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>

          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex" delayDuration={100}>
          <NavigationMenuList className="gap-1 space-x-0">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className={cn(
                    "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === "/"
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(TRIGGER_CLASS, isPlatformActive && "text-primary bg-accent/50")}
              >
                Platform
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-1 p-2">
                  {PLATFORM_ITEMS.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            DROPDOWN_LINK_CLASS,
                            pathname === item.href && "bg-accent/50 text-primary"
                          )}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(TRIGGER_CLASS, isInvestorsActive && "text-primary bg-accent/50")}
              >
                Investors
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-1 p-2">
                  {INVESTOR_ITEMS.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            DROPDOWN_LINK_CLASS,
                            pathname === item.href && "bg-accent/50 text-primary"
                          )}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className={cn(
                    "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === "/about"
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                  )}
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === "/contact"
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center">
            <span className="text-sm text-muted-foreground mr-2 font-medium">
              (904) 497-1348
            </span>
            <ThemeToggle />
            <Button asChild className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
              <Link href="/contact">Request a Pilot</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-1"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container px-4 py-3">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md",
                  pathname === "/"
                    ? "text-primary bg-accent/50"
                    : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                )}
              >
                Home
              </Link>

              <div className="pt-2 mt-1 border-t border-border/40">
                <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
                  Platform
                </p>
                {PLATFORM_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium rounded-md",
                      pathname === item.href
                        ? "text-primary bg-accent/50"
                        : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-2 mt-1 border-t border-border/40">
                <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
                  Investors
                </p>
                {INVESTOR_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium rounded-md",
                      pathname === item.href
                        ? "text-primary bg-accent/50"
                        : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-2 mt-1 border-t border-border/40 flex flex-col space-y-1">
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md",
                    pathname === "/about"
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                  )}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md",
                    pathname === "/contact"
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                  )}
                >
                  Contact
                </Link>
              </div>

              <div className="flex items-center pt-2 border-t border-border/50 mt-2">
                <span className="text-sm text-muted-foreground font-medium">
                  (904) 497-1348
                </span>
              </div>
              <Button asChild className="mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Request a Pilot</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
