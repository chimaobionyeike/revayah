import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms | REVAYAH",
  description: "Terms of use for the REVAYAH website.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <article className="container max-w-4xl py-24 md:py-32">
      <p className="eyebrow mb-5">Legal</p>
      <h1 className="serif-heading text-[clamp(3rem,7vw,6rem)]">Terms</h1>
      <div className="prose-revayah mt-10">
        <p>
          This website provides general information about REVAYAH and its healthcare market access and commercial partnership work. It does not create a client, agency, distribution, or advisory relationship.
        </p>
        <h2>Use of the Website</h2>
        <p>
          Visitors may use this website for lawful business evaluation and communication with REVAYAH. Content may not be copied, modified, or used in a misleading way.
        </p>
        <h2>No Warranty</h2>
        <p>
          Website information is provided for general reference. REVAYAH makes reasonable efforts to keep information accurate but does not guarantee completeness for every commercial circumstance.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms may be directed to the contact email listed on this website.
        </p>
      </div>
    </article>
  );
}
