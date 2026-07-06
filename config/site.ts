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
  Network,
  ScanSearch,
  ShieldCheck,
  Stethoscope
} from "lucide-react";

export const siteConfig = {
  name: "REVAYAH",
  title: "REVAYAH | Healthcare Market Access and Commercial Partnerships in Nigeria",
  description:
    "REVAYAH helps international healthcare companies enter and grow in Nigeria through strategic partnerships, commercial representation, healthcare networks, and qualified market opportunities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://revayah.com",
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
    title: "Healthcare Market Access",
    description:
      "We help international teams understand entry pathways, buying centers, stakeholder expectations, and commercial routes into Nigeria.",
    icon: Globe2
  },
  {
    title: "Commercial Representation",
    description:
      "We act as a long-term local commercial partner and manufacturer's representative, without taking inventory or operating as a distributor.",
    icon: Handshake
  },
  {
    title: "Strategic Partnerships",
    description:
      "We build credible relationships with hospital groups, healthcare operators, private sector leaders, and public health stakeholders.",
    icon: Network
  },
  {
    title: "Business Development",
    description:
      "We identify qualified opportunities, support executive conversations, and help convert market interest into sustainable commercial progress.",
    icon: LineChart
  },
  {
    title: "Healthcare Network Development",
    description:
      "We connect healthcare companies with relevant decision-makers across clinical, operational, procurement, and investment contexts.",
    icon: Building2
  },
  {
    title: "Market Intelligence",
    description:
      "We translate local ecosystem knowledge into practical commercial judgment for leadership teams evaluating Nigeria.",
    icon: ScanSearch
  },
  {
    title: "Commercial Expansion Support",
    description:
      "We support market presence over time, helping partners develop trust, momentum, and repeatable growth systems.",
    icon: BarChart3
  }
];

export const industries = [
  {
    title: "Medical Devices",
    description:
      "Commercial pathways for device manufacturers seeking credible clinical and institutional relationships.",
    icon: Stethoscope
  },
  {
    title: "Diagnostics",
    description:
      "Market access support for laboratory, imaging, point-of-care, and specialist diagnostic companies.",
    icon: Activity
  },
  {
    title: "Pharmaceuticals",
    description:
      "Partnership development for pharmaceutical companies evaluating entry, access, and stakeholder engagement.",
    icon: ShieldCheck
  },
  {
    title: "Digital Health",
    description:
      "Commercial partnership routes for software, virtual care, analytics, workflow, and patient engagement companies.",
    icon: CircleDot
  },
  {
    title: "Healthcare Technology",
    description:
      "Relationship and opportunity development for technology companies serving providers, payers, and health systems.",
    icon: HeartPulse
  },
  {
    title: "Medical Equipment",
    description:
      "Structured access to hospital buyers, clinical leaders, and strategic healthcare groups for equipment manufacturers.",
    icon: Landmark
  }
] as const;

export const insightCategories = [
  "Healthcare",
  "Diagnostics",
  "Medical Devices",
  "Healthcare Investment",
  "Healthcare Market Access",
  "Healthcare Policy",
  "Africa"
] as const;

export const processSteps = [
  "International Healthcare Company",
  "Discovery",
  "Commercial Strategy",
  "Healthcare Relationships",
  "Business Development",
  "Qualified Opportunities",
  "Long-Term Market Growth"
] as const;
