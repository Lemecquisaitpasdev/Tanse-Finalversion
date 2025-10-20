// app/conditions/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Conditions d’utilisation — TANSE",
  description: "Conditions d’utilisation du site TANSE.",
  alternates: { canonical: "/conditions" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "20/10/2025";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold">Conditions d’utilisation</h1>
      <p className="text-sm text-neutral-600 mb-8">Dernière mise à jour : {LAST_UPDATED}</p>

      <p>En accédant au site TANSE, vous acceptez ces conditions. L’usage doit rester conforme au droit français et ne pas nuire aux services tiers utilisés.</p>

      <h2 className="mt-8 text-xl font-semibold">Comptes & accès</h2>
      <p>Vous êtes responsable des accès transmis (Google Business Profile, analytics, CMS). Vous pouvez les révoquer à tout moment.</p>

      <h2 className="mt-8 text-xl font-semibold">Contenus</h2>
      <p>Vous garantissez disposer des droits sur les contenus fournis (textes, images, logos). TANSE peut refuser des contenus illicites ou trompeurs.</p>

      <h2 className="mt-8 text-xl font-semibold">Disclaimers</h2>
      <p>Les résultats SEO/GEO dépendent de nombreux facteurs extérieurs. Le site peut contenir des liens vers des services tiers dont TANSE n’a pas la maîtrise.</p>

      <Script id="ld-terms" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://tanse.io/conditions",
            "url": "https://tanse.io/conditions",
            "name": "Conditions d’utilisation — TANSE",
            "inLanguage": "fr-FR",
            "dateModified": "2025-10-20"
          })
        }}
      />
    </main>
  );
}