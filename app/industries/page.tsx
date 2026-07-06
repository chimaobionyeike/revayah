import type { Metadata } from "next";
import { IndustriesSection } from "@/components/sections/industries-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/common/section-heading";
import { industries } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Industries | Medical Devices, Diagnostics, Pharmaceuticals, Digital Health",
  description:
    "REVAYAH supports medical device, diagnostics, pharmaceutical, digital health, healthcare technology, and medical equipment companies entering Nigeria.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <>
      <section className="container py-24 md:py-32">
        <SectionHeading
          eyebrow="Industries"
          title="Healthcare segments where trust shapes commercial access."
          description="REVAYAH works with companies whose products and platforms require careful stakeholder alignment, clinical credibility, and long-term institutional confidence."
        />
      </section>
      <IndustriesSection />
      <section className="container pb-24 md:pb-32">
        <div className="grid gap-5 md:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry.title} className="rounded-[18px] border border-emerald/10 bg-white p-8">
              <h2 className="text-2xl font-semibold text-foreground">{industry.title}</h2>
              <p className="mt-4 leading-7 text-muted">{industry.description}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
