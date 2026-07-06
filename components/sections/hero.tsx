import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mailtoUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-emerald/10">
      <div className="container grid min-h-[calc(100svh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Healthcare market access in Nigeria</p>
          <h1 className="serif-heading text-balance text-[clamp(4.1rem,9.5vw,9.8rem)] text-foreground">
            REVAYAH
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-muted md:text-2xl md:leading-10">
            A long-term commercial partner for international healthcare companies entering and growing
            in the Nigerian healthcare market.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={mailtoUrl()}>
                Partner with Revayah
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="/services">Explore our work</a>
            </Button>
          </div>
          <dl className="mt-14 grid gap-6 border-t border-emerald/10 pt-8 sm:grid-cols-3">
            {[
              ["Focus", "Market access"],
              ["Model", "Commercial partner"],
              ["Region", "Nigeria"]
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald">
                  {label}
                </dt>
                <dd className="mt-2 text-base font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <Image
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1400&q=82"
            alt="Modern healthcare leadership environment with natural light"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="rounded-[20px] object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-[18px] border border-white/20 bg-white/88 p-6 shadow-[0_20px_80px_rgba(13,59,46,0.14)] backdrop-blur-xl">
            <p className="text-sm font-semibold text-emerald">Not a distributor. Not a consultancy.</p>
            <p className="mt-2 text-lg leading-7 text-foreground">
              REVAYAH operates as a manufacturer&apos;s representative and local commercial partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
