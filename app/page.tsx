import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { PositioningSection } from "@/components/sections/positioning-section";
import { ServiceGrid } from "@/components/sections/service-grid";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProcessSection } from "@/components/sections/process-section";
import { NigeriaSection } from "@/components/sections/nigeria-section";
import { WhyRevayah } from "@/components/sections/why-revayah";
import { CtaSection } from "@/components/sections/cta-section";
import { InsightCard } from "@/components/cards/insight-card";
import { SectionHeading } from "@/components/common/section-heading";
import { getInsights } from "@/lib/content";

export default function HomePage() {
  const insights = getInsights().slice(0, 3);

  return (
    <>
      <Hero />
      <PositioningSection />
      <ServiceGrid preview />
      <IndustriesSection />
      <ProcessSection />
      <NigeriaSection />
      <WhyRevayah />
      <section className="container py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Perspective on healthcare market access in Nigeria."
            description="Executive briefings for companies evaluating commercial growth, partnerships, and healthcare opportunity across Nigeria and Africa."
          />
          <Link href="/insights" className="inline-flex items-center gap-2 font-semibold text-emerald">
            View all insights
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
