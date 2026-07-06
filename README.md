# REVAYAH Website

Production-ready public website for REVAYAH, a healthcare market access and commercial partnerships company helping international healthcare organizations enter and grow in Nigeria.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui-style primitives with Radix UI
- Framer Motion
- Lucide icons
- React Hook Form + Zod
- MDX insights
- Metadata API, JSON-LD, sitemap, robots, and RSS

## Getting Started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production Commands

```bash
pnpm build
pnpm start
pnpm lint
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`: canonical production URL.
- `NEXT_PUBLIC_CONTACT_EMAIL`: email used for partnership CTAs and validated form submissions.

Optional integrations are intentionally non-blocking and can be enabled later:

- Resend
- HubSpot
- PostHog
- Google Analytics
- Google Tag Manager
- Supabase
- Sanity
- Contentful
- Crisp Chat

## Architecture

- `app/`: routes, layouts, metadata routes, legal pages, and route-level composition.
- `components/layout/`: header, footer, and page shell components.
- `components/sections/`: page sections and reusable marketing blocks.
- `components/ui/`: accessible primitives inspired by shadcn/ui.
- `components/cards/`: repeated card patterns.
- `components/common/`: cross-page visual utilities.
- `content/insights/`: MDX insight articles with frontmatter.
- `lib/`: content loading, SEO helpers, schema, and utility functions.
- `config/`: navigation, site configuration, brand constants, and integrations.

## Deployment

The project is ready for Vercel:

1. Connect the repository to Vercel.
2. Set the environment variables from `.env.example`.
3. Use the default Next.js framework preset.
4. Build command: `pnpm build`.
5. Install command: `pnpm install`.

No appointment booking or Calendly dependency is implemented. Primary conversion flows use `mailto:` and a professional contact form that can later be wired to Resend, HubSpot, Supabase, or a CRM action.
