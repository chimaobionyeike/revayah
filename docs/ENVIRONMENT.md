# Environment Variables

## Required

- `NEXT_PUBLIC_SITE_URL`: canonical production URL, for example `https://revayah.com`.
- `NEXT_PUBLIC_CONTACT_EMAIL`: monitored inbox used by primary CTAs and the validated contact form.

## Optional

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
- `HUBSPOT_PORTAL_ID`
- `HUBSPOT_FORM_ID`
- `RESEND_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `CRISP_WEBSITE_ID`

Optional variables are intentionally read through `config/integrations.ts` and do not affect builds when unset.
