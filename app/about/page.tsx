import Image from "next/image";
import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/common/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About REVAYAH | Digital Health Commercial Partner in Nigeria",
  description:
    "Learn how REVAYAH supports international digital health companies entering Nigeria through market validation, buyer intelligence, commercial strategy, and local representation.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="container py-20 md:py-32">
        <div className="site-grid items-end">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading
              eyebrow="About Revayah"
              title="A digital health commercial partner built for trust."
              description="REVAYAH exists for international digital health companies that need credible, long-term commercial presence in Nigeria without guessing from a distance."
            />
          </div>
          <p className="col-span-12 text-lg leading-8 text-muted lg:col-span-4 lg:col-start-9">
            We help teams understand the market, map buyers, validate demand, build the right relationships, and pursue qualified opportunities with a calm, disciplined commercial posture.
          </p>
        </div>
        <div className="relative mt-16 min-h-[420px] overflow-hidden rounded-[20px] border border-emerald/10 shadow-[0_28px_90px_rgba(13,59,46,0.1)] md:min-h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=82"
            alt="Contemporary institutional architecture with warm natural light"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chocolate/35 via-transparent to-transparent" />
        </div>
      </section>
      <section className="bg-white py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our role"
            title="Market clarity, buyer intelligence, and commercial momentum."
          />
          <div className="grid gap-8 text-lg leading-8 text-muted">
            <p>
              REVAYAH serves as a local commercial partner for digital health companies evaluating Nigeria. We work with AI diagnostics, clinical decision support, remote patient monitoring, digital diagnostics, telehealth, and health software companies that need strategy grounded in local commercial reality.
            </p>
            <p>
              Our mission is to help international digital health companies transform healthcare in Africa. Our vision is a future where Africa becomes the world&apos;s centre for medical tourism.
            </p>
            <p>
              We do not manufacture, import, hold inventory, or operate as a product distributor. We help partners validate the market, understand buyers, and build the conditions for durable market growth.
            </p>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
