import type { Metadata } from "next";
import { ServiceGrid } from "@/components/sections/service-grid";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/common/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services | Healthcare Market Access and Commercial Representation",
  description:
    "Explore REVAYAH services including healthcare market access, commercial representation, strategic partnerships, business development, network development, and market intelligence.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="container py-24 md:py-32">
        <SectionHeading
          eyebrow="Services"
          title="Commercial services for healthcare companies entering Nigeria."
          description="Our work is designed for international teams that need a serious local partner, not a short-term project vendor."
        />
      </section>
      <ServiceGrid />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
