import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70svh] items-center py-24">
      <div className="max-w-2xl">
        <p className="eyebrow mb-5">404</p>
        <h1 className="serif-heading text-balance text-[clamp(3.5rem,8vw,7rem)]">
          This page is not available.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          The page may have moved, or the address may be incorrect.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}
