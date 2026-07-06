import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getInsightBySlug, getInsights } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsights().find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return createMetadata({
    title: `${insight.title} | REVAYAH Insights`,
    description: insight.description,
    path: `/insights/${insight.slug}`,
    type: "article"
  });
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const exists = getInsights().some((item) => item.slug === slug);

  if (!exists) {
    notFound();
  }

  const insight = getInsightBySlug(slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: absoluteUrl(`/insights/${insight.slug}`)
  };

  return (
    <article className="container max-w-4xl py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <p className="eyebrow mb-5">{insight.category}</p>
      <h1 className="serif-heading text-balance text-[clamp(3rem,7vw,6.5rem)]">
        {insight.title}
      </h1>
      <p className="mt-7 text-xl leading-9 text-muted">{insight.description}</p>
      <div className="mt-8 flex flex-wrap gap-4 border-y border-emerald/10 py-5 text-sm font-medium text-muted">
        <span>{insight.author}</span>
        <span>{new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(insight.date))}</span>
        <span>{insight.readingTime}</span>
      </div>
      <div className="prose-revayah mt-12">
        <MDXRemote source={insight.content} />
      </div>
    </article>
  );
}
