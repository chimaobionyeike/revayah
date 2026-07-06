# Folder Structure

- `app/`: App Router routes, layouts, metadata routes, 404, sitemap, robots, RSS, and OG image.
- `components/layout/`: Header, footer, and site shell.
- `components/sections/`: Full-width public website sections.
- `components/ui/`: Accessible UI primitives following shadcn/ui conventions.
- `components/cards/`: Repeated card patterns.
- `components/common/`: Cross-page helpers such as section headings and motion wrappers.
- `config/`: Site, navigation, brand-adjacent data, and optional integration configuration.
- `constants/`: Stable design and brand constants.
- `content/insights/`: MDX editorial content.
- `hooks/`: Reusable client hooks.
- `lib/`: Server-safe utilities, content loaders, and SEO helpers.
- `actions/`: Server action placeholders for future CRM and email integrations.
- `types/`: Shared TypeScript types.
- `utils/`: Small pure formatting utilities.
- `styles/`: CSS token references.
- `public/`: Static public assets.

The site favors React Server Components by default. Client components are used only for form state, Radix label behavior, and Framer Motion viewport animation.
