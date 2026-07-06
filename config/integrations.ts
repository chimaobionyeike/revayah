export const integrations = {
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID,
    postHogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    postHogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST
  },
  crm: {
    hubSpotPortalId: process.env.HUBSPOT_PORTAL_ID,
    hubSpotFormId: process.env.HUBSPOT_FORM_ID
  },
  email: {
    resendApiKey: process.env.RESEND_API_KEY
  },
  data: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY
  },
  cms: {
    sanityProjectId: process.env.SANITY_PROJECT_ID,
    sanityDataset: process.env.SANITY_DATASET,
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  chat: {
    crispWebsiteId: process.env.CRISP_WEBSITE_ID
  }
} as const;
