import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { getInsights } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const items = getInsights()
    .map(
      (insight) => `
        <item>
          <title><![CDATA[${insight.title}]]></title>
          <description><![CDATA[${insight.description}]]></description>
          <link>${siteConfig.url}/insights/${insight.slug}</link>
          <guid>${siteConfig.url}/insights/${insight.slug}</guid>
          <pubDate>${new Date(insight.date).toUTCString()}</pubDate>
        </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name} Insights</title>
        <description>${siteConfig.description}</description>
        <link>${siteConfig.url}/insights</link>
        ${items}
      </channel>
    </rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
