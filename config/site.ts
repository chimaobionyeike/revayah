import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Building2,
  CircleDot,
  Globe2,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  ScanSearch,
  ShieldCheck,
  Stethoscope
} from "lucide-react";

export const siteConfig = {
  name: "REVAYAH",
  title: "REVAYAH | Digital Health Market Access and Commercial Partnerships in Nigeria",
  description:
    "REVAYAH helps international digital health and healthcare technology companies enter and grow in Nigeria through strategic partnerships, commercial representation, healthcare networks, and qualified market opportunities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://revayah-africa.vercel.app",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "partnerships@revayah.com",
  locale: "en_US",
  ogImage: "/og"
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
] as const;

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Nigeria Expansion Strategy Session",
    description:
      "A focused introductory session to assess whether Nigeria is a credible market for your digital health product and what the next move should be.",
    icon: Globe2
  },
  {
    title: "Commercial Launch Blueprint",
    description:
      "Our flagship 3-week engagement covering market validation, customer segmentation, geography, buyer intelligence, positioning, and a 90-day action plan.",
    icon: ScanSearch
  },
  {
    title: "Commercial Outreach Sprint",
    description:
      "A 30-day execution sprint for companies ready to test market response through outreach, qualification, meeting scheduling, feedback, and weekly reporting.",
    icon: LineChart
  },
  {
    title: "REVAYAH Intelligence",
    description:
      "A monthly retainer for market monitoring, competitor intelligence, policy signals, procurement insight, partnership opportunities, and strategy calls.",
    icon: BarChart3
  },
  {
    title: "Nigeria Market Access Partner",
    description:
      "Long-term partner support for introductions, pilot programme development, partner sourcing, and in-country commercial representation.",
    icon: Handshake
  },
  {
    title: "Fractional Nigeria Market Lead",
    description:
      "Embedded local market leadership for international digital health companies that need a dedicated commercial presence without building a local team first.",
    icon: Building2
  }
];

export const industries = [
  {
    title: "Digital Health",
    description:
      "Commercial partnership routes for virtual care, patient engagement, remote monitoring, analytics, and care coordination platforms.",
    icon: CircleDot
  },
  {
    title: "Healthcare Technology",
    description:
      "Relationship and opportunity development for health software, workflow, infrastructure, and AI-enabled healthcare companies.",
    icon: HeartPulse
  },
  {
    title: "Diagnostics Technology",
    description:
      "Market access support for laboratory platforms, imaging technology, point-of-care networks, and specialist diagnostic systems.",
    icon: Activity
  },
  {
    title: "Medical Devices",
    description:
      "Commercial pathways for connected device and medtech companies seeking credible clinical and institutional relationships.",
    icon: Stethoscope
  },
  {
    title: "Pharmaceutical Technology",
    description:
      "Partnership development for medication access, adherence, data, specialty care, and pharmaceutical enablement platforms.",
    icon: ShieldCheck
  },
  {
    title: "Healthcare Investors",
    description:
      "Market perspective and partnership pathways for investors backing digital health, healthtech, and care delivery models.",
    icon: Landmark
  }
] as const;

export const insightCategories = [
  "Healthcare",
  "Diagnostics",
  "Medical Devices",
  "Healthcare Investment",
  "Healthcare Market Access",
  "Digital Health",
  "Healthcare Policy",
  "Africa"
] as const;

export const processSteps = [
  "Strategy Session",
  "Launch Blueprint",
  "Buyer Intelligence",
  "Commercial Outreach",
  "Qualified Interest",
  "Market Intelligence",
  "Long-Term Representation"
] as const;
