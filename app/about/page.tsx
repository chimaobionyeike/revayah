import Image from "next/image";
import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/common/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About REVAYAH | Commercial Partner for Healthcare Market Access in Nigeria",
  description:
    "Learn how REVAYAH supports international healthcare companies as a trusted commercial partner and manufacturer's representative in Nigeria.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="container py-24 md:py-32">
        <div className="site-grid items-end">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading
              eyebrow="About Revayah"
              title="A healthcare commercial partner built for trust."
              description="REVAYAH exists for international healthcare companies that need credible, long-term commercial presence in Nigeria without the ambiguity of distributor, importer, or consultancy models."
            />
          </div>
          <p className="col-span-12 text-lg leading-8 text-muted lg:col-span-4 lg:col-start-9">
            We help manufacturers and healthcare innovators understand the market, build the right relationships, and pursue qualified opportunities with a calm, disciplined commercial posture.
          </p>
        </div>
        <div className="relative mt-16 min-h-[420px] overflow-hidden rounded-[20px] md:min-h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=82"
            alt="Premium hospital corridor with contemporary healthcare architecture"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
      <section className="bg-white py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our role"
            title="Representation, relationships, and commercial momentum."
          />
          <div className="grid gap-8 text-lg leading-8 text-muted">
            <p>
              REVAYAH serves as a local commercial partner for companies that require thoughtful entry into Nigeria&apos;s healthcare ecosystem. We help partners understand stakeholder dynamics, develop strategic relationships, and create structured commercial pathways.
            </p>
            <p>
              We do not manufacture, import, hold inventory, or operate as a product distributor. We represent commercial interests and help build the conditions for durable market growth.
            </p>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
