import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OverviewPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-medium text-blue-500 mb-3">For Investors</p>
          <h1 className="text-4xl font-bold mb-4">Overview</h1>
          <p className="text-xl text-muted-foreground">
            An interactive walkthrough of NeuroFlo&apos;s three pillars, the problem, and the
            platform — the same walkthrough we present in investor meetings.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border/40 shadow-2xl">
          <iframe
            src="/overview/neuroflo-opener-v1.html"
            title="NeuroFlo Platform Overview"
            className="w-full aspect-video bg-black"
            loading="lazy"
          />
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
            <Link href="/contact">Request a Pilot</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
