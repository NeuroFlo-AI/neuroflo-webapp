import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

export default function CfoPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-blue-500 mb-3">For Healthcare CFOs</p>
          <h1 className="text-4xl font-bold mb-4">What NeuroFlo Means for the Bottom Line</h1>
          <p className="text-xl text-muted-foreground">
            Faster billing, fewer denials, less leakage — without adding headcount.
          </p>
        </div>

        <GlassmorphismCard intensity="medium" glowAccent className="max-w-3xl mx-auto mb-12">
          <p className="text-muted-foreground">
            A full breakdown built specifically for financial decision-makers is coming to this
            page shortly, with every figure sourced or clearly labeled as a model estimate.
          </p>
        </GlassmorphismCard>

        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
            <Link href="/contact">Talk to Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
