import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const insightsDirectory = path.join(process.cwd(), "content", "insights");

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  content: string;
};

type Frontmatter = {
  title?: string;
  description?: string;
  category?: string;
  date?: string;
  readingTime?: string;
  author?: string;
};

export function getInsights(): Insight[] {
  if (!fs.existsSync(insightsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(insightsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getInsightBySlug(slug);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getInsightBySlug(slug: string): Insight {
  const fullPath = path.join(insightsDirectory, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as Frontmatter;

  return {
    slug,
    title: frontmatter.title ?? slug,
    description: frontmatter.description ?? "",
    category: frontmatter.category ?? "Healthcare",
    date: frontmatter.date ?? new Date().toISOString(),
    readingTime: frontmatter.readingTime ?? "4 min read",
    author: frontmatter.author ?? "REVAYAH",
    content
  };
}
