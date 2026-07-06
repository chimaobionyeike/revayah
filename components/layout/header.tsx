import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { mailtoUrl } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald/10 bg-background/88 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-[0.18em] text-emerald">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/78 transition hover:text-emerald"
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
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-[14px] border border-emerald/15 bg-white text-emerald">
            <Menu aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <div className="absolute right-0 top-14 w-72 rounded-[18px] border border-emerald/10 bg-white p-4 shadow-[0_18px_60px_rgba(13,59,46,0.12)]">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-emerald/5"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-3 w-full">
                <a href={mailtoUrl()}>Partner with Revayah</a>
              </Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
