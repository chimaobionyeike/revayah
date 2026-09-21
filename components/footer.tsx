import Link from "next/link";
import { Mail } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { mailtoUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-chocolate text-[#f7f7f5]">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <p className="wordmark text-xl text-champagne md:text-2xl">{siteConfig.name}</p>
            <p className="mt-8 max-w-xl text-3xl font-medium leading-tight text-[#f7f7f5]/86 md:text-4xl">
              A trusted local commercial partner for international healthcare companies entering Nigeria.
            </p>
            <Button asChild variant="secondary" className="mt-8 border-[#f7f7f5]/24 bg-[#f7f7f5] text-emerald">
              <a href={mailtoUrl()}>
                <Mail aria-hidden="true" className="h-4 w-4" />
                Partner with Revayah
              </a>
            </Button>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-champagne">Company</h2>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#f7f7f5]/68 hover:text-[#f7f7f5]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-champagne">Legal</h2>
            <nav aria-label="Legal navigation" className="mt-5 grid gap-3">
              <Link href="/privacy" className="text-sm text-[#f7f7f5]/68 hover:text-[#f7f7f5]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-[#f7f7f5]/68 hover:text-[#f7f7f5]">
                Terms
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[#f7f7f5]/68 hover:text-[#f7f7f5]"
              >
                {siteConfig.email}
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#f7f7f5]/12 pt-8 text-sm text-[#f7f7f5]/52 md:flex-row">
          <p>© {new Date().getFullYear()} REVAYAH. All rights reserved.</p>
          <p>Healthcare market access and commercial partnerships in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
