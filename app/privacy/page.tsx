import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | REVAYAH",
  description: "Privacy Policy for REVAYAH.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <article className="container max-w-4xl py-24 md:py-32">
      <p className="eyebrow mb-5">Legal</p>
      <h1 className="serif-heading text-[clamp(3rem,7vw,6rem)]">Privacy Policy</h1>
      <div className="prose-revayah mt-10">
        <p>
          REVAYAH respects the privacy of executives, companies, and partners who contact us. We collect only the information required to respond to commercial enquiries and evaluate potential partnership fit.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect contact details, company information, country, website, role, and message content submitted through the website or email.
        </p>
        <h2>How We Use Information</h2>
        <p>
          Information is used to respond to enquiries, assess partnership relevance, maintain business records, and improve our communications.
        </p>
        <h2>Data Sharing</h2>
        <p>
          REVAYAH does not sell personal information. We may share limited information with trusted service providers only when required for operational support.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, contact REVAYAH using the email address listed on this website.
        </p>
      </div>
    </article>
  );
}
