import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "") {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://revayah.com";
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function mailtoUrl(subject = "Partnership enquiry for REVAYAH", body = "") {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "partnerships@revayah.com";
  const params = new URLSearchParams({ subject, body });
  return `mailto:${email}?${params.toString()}`;
}
