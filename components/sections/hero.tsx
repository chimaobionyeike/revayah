import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mailtoUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-chocolate text-[#f7f7f5]">
      <div className="absolute inset-x-0 top-0 h-px bg-champagne/40" />
      <div className="container grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-champagne">
            Digital health market access and commercial partnerships
          </p>
          <h1 className="wordmark text-balance text-[3.45rem] text-[#f7f7f5] sm:text-[4.8rem] md:text-[6.4rem] lg:text-[7.7rem] xl:text-[8.8rem]">
            REVAYAH
          </h1>
          <div className="luxury-rule mt-7 max-w-xl" />
          <p className="mt-8 max-w-2xl text-xl leading-9 text-[#e7dfd4]/78 md:text-2xl md:leading-10">
            Helping international digital health companies validate, enter, and grow in the Nigerian
            healthcare market with local clarity, buyer intelligence, and commercial discipline.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={mailtoUrl()}>
                Partner with Revayah
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="border-[#f7f7f5]/24 bg-[#f7f7f5] text-emerald">
              <a href="/services">Explore our work</a>
            </Button>
          </div>
          <dl className="mt-14 grid gap-6 border-t border-[#f7f7f5]/12 pt-8 sm:grid-cols-3">
            {[
              ["Focus", "Digital health"],
              ["Model", "Digital health partner"],
              ["Region", "Africa"]
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-champagne">
                  {label}
                </dt>
                <dd className="mt-2 text-base font-medium text-[#f7f7f5]/84">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[20px] border border-[#f7f7f5]/10 shadow-[0_36px_110px_rgba(0,0,0,0.28)] sm:min-h-[520px] lg:min-h-[640px]">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82"
            alt="Executive boardroom for digital health commercial partnership discussions"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chocolate/72 via-chocolate/8 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[18px] border border-[#f7f7f5]/16 bg-chocolate/72 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-6">
            <p className="text-sm font-semibold text-champagne">Not a distributor. Not a consultancy.</p>
            <p className="mt-2 text-base leading-7 text-[#f7f7f5]/82 sm:text-lg">
              Built for AI diagnostics, clinical decision support, remote monitoring, digital diagnostics,
              telehealth, and health software companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
