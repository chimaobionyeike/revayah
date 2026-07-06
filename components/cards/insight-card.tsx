import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/lib/content";

type InsightCardProps = {
  insight: Insight;
};

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <article className="rounded-[18px] border border-emerald/10 bg-white p-7 shadow-[0_18px_60px_rgba(13,59,46,0.05)]">
      <div className="mb-10 flex items-center justify-between gap-4">
        <p className="eyebrow text-[0.72rem]">{insight.category}</p>
        <span className="text-sm text-muted">{insight.readingTime}</span>
      </div>
      <h3 className="text-balance text-2xl font-semibold leading-tight text-foreground">
        <Link href={`/insights/${insight.slug}`} className="focus-visible:outline-offset-8">
          {insight.title}
        </Link>
      </h3>
      <p className="mt-5 leading-7 text-muted">{insight.description}</p>
      <Link
        href={`/insights/${insight.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald"
      >
        Read insight
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </article>
  );
}
