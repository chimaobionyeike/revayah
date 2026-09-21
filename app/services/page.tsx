import type { Metadata } from "next";
import { ServiceGrid } from "@/components/sections/service-grid";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/common/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services | Digital Health Market Access and Commercial Representation",
  description:
    "Explore REVAYAH services including Nigeria expansion strategy sessions, commercial launch blueprints, outreach sprints, intelligence retainers, and digital health market representation.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="container py-24 md:py-32">
        <SectionHeading
          eyebrow="Services"
          title="A practical route into the Nigerian digital health market."
          description="Our services help AI diagnostics, clinical decision support, remote monitoring, digital diagnostics, telehealth, and health software companies validate Nigeria, understand buyers, and build qualified commercial momentum."
        />
      </section>
      <ServiceGrid />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
