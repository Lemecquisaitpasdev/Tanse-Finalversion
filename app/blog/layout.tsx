// app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog SEO Local & GEO — Guides et Actualités | TANSE",
  description: "Guides pratiques SEO local, actualités GEO et stratégies de visibilité dans les moteurs IA. Expertise TANSE pour PME françaises.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog SEO Local & GEO — Guides et Actualités | TANSE",
    description: "Guides pratiques SEO local, actualités GEO et stratégies de visibilité dans les moteurs IA. Expertise TANSE pour PME françaises.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
