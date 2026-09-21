import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { mailtoUrl } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald/10 bg-[#f7f7f5]/92 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between md:h-20">
        <Link href="/" className="group inline-flex flex-col gap-1 text-emerald" aria-label="REVAYAH home">
          <span className="wordmark text-[1.05rem] text-emerald md:text-[1.22rem]">
            {siteConfig.name}
          </span>
          <span className="h-px w-full origin-left scale-x-75 bg-champagne transition duration-300 group-hover:scale-x-100" />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-foreground/68 transition hover:text-emerald"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="primary" size="sm">
            <a href={mailtoUrl()}>Partner with Revayah</a>
          </Button>
        </div>
        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-emerald/15 bg-white text-emerald shadow-[0_14px_40px_rgba(13,59,46,0.08)] [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,23rem)] rounded-[18px] border border-emerald/10 bg-[#fbfaf7] p-5 shadow-[0_28px_90px_rgba(33,26,23,0.18)]">
            <div className="mb-5 flex items-center justify-between border-b border-emerald/10 pb-4">
              <span className="wordmark text-sm text-emerald">REVAYAH</span>
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-muted">
                Menu
              </span>
            </div>
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-foreground transition hover:bg-emerald/5 hover:text-emerald"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-3 w-full">
                <a href={mailtoUrl()}>
                  Partner with Revayah
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
