// app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Blog — Actualités SEO & GEO | TANSE",
  description: "Restez informés des dernières innovations SEO et GEO pour anticiper le monde de demain. Guides, analyses et actualités par TANSE.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Notre Blog — Actualités SEO & GEO | TANSE",
    description: "Restez informés des dernières innovations SEO et GEO pour anticiper le monde de demain.",
    type: "website",
    url: "/blog",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "TANSE Blog - SEO & GEO"
      }
    ]
  },
  keywords: [
    "blog SEO",
    "blog GEO",
    "actualités SEO local",
    "innovations IA",
    "moteurs de recherche IA",
    "OpenAI Atlas",
    "SEO 2025"
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
