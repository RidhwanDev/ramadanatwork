import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";
import "@/styles/globals.css";
import "@/styles/print.css";

export const metadata: Metadata = {
  title: {
    default: site.meta.title,
    template: `%s | ${site.name}`,
  },
  description: site.meta.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://ramadanatwork.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: "/",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
