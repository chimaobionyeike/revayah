import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mailtoUrl } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="rounded-[18px] bg-emerald px-6 py-16 text-white md:px-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-5 text-champagne">Partner with Revayah</p>
          <h2 className="serif-heading text-balance text-[clamp(3rem,7vw,7rem)] text-white">
            Build your Nigerian healthcare presence with the right local partner.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/72">
            For international healthcare companies evaluating Nigeria, REVAYAH provides the commercial partnership structure required to enter with confidence.
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
