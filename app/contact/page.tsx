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
    <section className="container py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Partner with Revayah."
            description="For international healthcare companies evaluating Nigeria, share your context and we will respond with discretion and focus."
          />
          <div className="mt-10 rounded-[18px] border border-emerald/10 bg-white p-7">
            <p className="text-sm font-semibold text-emerald">Primary contact</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-lg font-medium text-foreground">
              {siteConfig.email}
            </a>
            <Button asChild className="mt-6">
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
