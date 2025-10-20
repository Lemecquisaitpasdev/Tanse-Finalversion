// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "TANSE — Visibilité locale & GEO",
  description: "SEO local & GEO pour l’automobile.",
  // Domaine de prod — IMPORTANT pour les canoniques/OG
  metadataBase: new URL("https://tanse.fr"),
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "TANSE — Visibilité locale & GEO",
    description: "SEO local & GEO pour l’automobile.",
    url: "https://tanse.fr",
    siteName: "TANSE",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "TANSE — Visibilité locale & GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TANSE — Visibilité locale & GEO",
    description: "SEO local & GEO pour l’automobile.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Couleur de thème et viewport */}
        <meta name="theme-color" content="#0F1115" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Consent Mode v2 — défaut EU: non-essentiels refusés (brancher plus tard à la CMP) */}
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });
        `}</Script>

        {/* JSON-LD Organization */}
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://tanse.fr/#org",
              name: "TANSE",
              url: "https://tanse.fr",
              logo: "https://tanse.fr/brand/tanse-logo.png",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "12 Rue Exemple",
                  addressLocality: "Paris",
                  postalCode: "75002",
                  addressCountry: "FR",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "hello@tanse.io",
                  areaServed: "FR",
                  availableLanguage: ["fr"],
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/tanse",
                "https://twitter.com/tanse",
              ],
              taxID: "FRXXXXXXXXX",
              vatID: "FRXXXXXXXXX",
              legalName: "TANSE (à compléter)",
            }),
          }}
        />

        {/* JSON-LD WebSite (Sitelinks Search) — cible sûre (page d'accueil) */}
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://tanse.fr/#website",
              url: "https://tanse.fr",
              name: "TANSE",
              inLanguage: "fr-FR",
              publisher: { "@id": "https://tanse.fr/#org" },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://tanse.fr/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* JSON-LD LocalBusiness (Paris) — dupliquez plus tard pour Lyon */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://tanse.fr/#lb-paris",
              name: "TANSE",
              url: "https://tanse.fr",
              image: "https://tanse.fr/brand/tanse-logo.png",
              telephone: "+33 1 23 45 67 89",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Rue Exemple",
                addressLocality: "Paris",
                postalCode: "75002",
                addressCountry: "FR",
              },
              areaServed: ["FR-75", "FR-69", "France"],
              priceRange: "€€",
              sameAs: [
                "https://www.linkedin.com/company/tanse",
                "https://twitter.com/tanse",
              ],
            }),
          }}
        />
      </head>

      <body className="bg-white text-[color:var(--ink,#0F1115)] antialiased">
        <div className="min-h-dvh flex flex-col">
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}