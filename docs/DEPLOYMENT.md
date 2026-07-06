# Deployment Guide

REVAYAH is configured for direct Vercel deployment.

## Required

- Node.js compatible with Next.js 16
- pnpm 11+
- Environment variables from `.env.example`

## Commands

```bash
pnpm install
pnpm build
pnpm start
```

## Vercel

- Framework preset: Next.js
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output: managed by Vercel

Set `NEXT_PUBLIC_SITE_URL` to the production domain and `NEXT_PUBLIC_CONTACT_EMAIL` to the monitored partnership inbox.
