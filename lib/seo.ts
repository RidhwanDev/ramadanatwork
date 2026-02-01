import { Metadata } from "next";
import { site, getRoleOgTitle } from "./content";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ramadanatwork.com";

export function generateMetadata(
  pageTitle?: string,
  pageDescription?: string,
  role?: string | null
): Metadata {
  const title = role ? getRoleOgTitle(role) : (pageTitle || site.meta.title);
  const description = pageDescription || site.meta.description;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      url: BASE_URL,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?title=${encodeURIComponent(title)}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    description: site.meta.description,
    url: BASE_URL,
  };
}
