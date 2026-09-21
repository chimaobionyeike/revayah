import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { createMetadata } from "@/lib/seo";
import { mailtoUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Contact REVAYAH | Partner with Revayah",
  description:
    "Contact REVAYAH to discuss healthcare market access, commercial representation, and strategic partnership opportunities in Nigeria.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="container py-20 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Partner with Revayah."
            description="For international healthcare companies evaluating Nigeria, share your context and we will respond with discretion and focus."
          />
          <div className="mt-10 rounded-[18px] border border-champagne/20 bg-chocolate p-7 text-[#f7f7f5] shadow-[0_24px_80px_rgba(33,26,23,0.14)]">
            <p className="text-sm font-semibold text-champagne">Primary contact</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-3 block break-words text-lg font-medium text-[#f7f7f5]">
              {siteConfig.email}
            </a>
            <Button asChild variant="secondary" className="mt-6 border-[#f7f7f5]/25 bg-[#f7f7f5] text-emerald">
              <a href={mailtoUrl()}>
                <Mail aria-hidden="true" className="h-4 w-4" />
                Partner with Revayah
              </a>
            </Button>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
