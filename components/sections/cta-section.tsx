import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mailtoUrl } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[20px] border border-champagne/15 bg-chocolate px-6 py-16 text-[#f7f7f5] shadow-[0_34px_120px_rgba(33,26,23,0.16)] md:px-16 md:py-24">
        <div className="absolute inset-x-8 top-0 h-px bg-champagne/45" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-champagne">
            Partner with Revayah
          </p>
          <h2 className="serif-heading text-balance text-[clamp(2.8rem,7vw,6.8rem)] text-[#f7f7f5]">
            Build your Nigerian digital health presence with the right local partner.
          </h2>
          <div className="luxury-rule mx-auto mt-8 max-w-2xl" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#e7dfd4]/78">
            For digital health companies evaluating Nigeria, REVAYAH provides the market validation, buyer intelligence, and commercial partnership structure required to enter with confidence.
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-10 border-white/30 bg-white text-emerald">
            <a href={mailtoUrl()}>
              Partner with Revayah
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
