import type { Metadata } from "next";
import { InsightCard } from "@/components/cards/insight-card";
import { SectionHeading } from "@/components/common/section-heading";
import { getInsights } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { insightCategories } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Insights | REVAYAH",
  description:
    "Healthcare market access insights for international healthcare companies evaluating Nigeria and Africa.",
  path: "/insights"
});

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <section className="container py-24 md:py-32">
      <SectionHeading
        eyebrow="Insights"
        title="Healthcare market access thinking for Nigeria and Africa."
        description="Briefings on commercial partnerships, healthcare investment, diagnostics, medical devices, policy, and market entry."
      />
      <div className="mt-10 flex flex-wrap gap-3">
        {insightCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-emerald/12 bg-white px-4 py-2 text-sm font-medium text-emerald"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {insights.map((insight) => (
          <InsightCard key={insight.slug} insight={insight} />
        ))}
      </div>
    </section>
  );
}
