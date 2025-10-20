// app/mentions-legales/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mentions légales — TANSE",
  description: "Mentions légales : éditeur, directeur de la publication, hébergeur, coordonnées, SIREN, TVA.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "20/10/2025";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-semibold">Mentions légales</h1>
      <p className="text-sm text-neutral-600 mb-8">Dernière mise à jour : {LAST_UPDATED}</p>

      <section className="space-y-3">
        <p><b>Éditeur :</b> TANSE — Forme : <i>à compléter</i> — Capital : <i>à compléter</i></p>
        <p><b>SIREN :</b> <i>à compléter</i> — <b>TVA :</b> <i>à compléter</i></p>
        <p><b>Siège social :</b> 12 Rue Exemple, 75002 Paris, France</p>
        <p><b>Contact :</b> hello@tanse.io — <b>Téléphone :</b> <i>à compléter</i></p>
        <p><b>Directeur de la publication :</b> <i>à compléter</i></p>
        <p><b>Hébergeur :</b> <i>à compléter (ex. Vercel)</i> — Adresse : <i>à compléter</i> — Téléphone : <i>à compléter</i></p>
      </section>

      <hr className="my-8" />
      <p className="text-sm text-neutral-600">
        TANSE — Siège : 12 Rue Exemple, 75002 Paris — <a className="underline" href="mailto:hello@tanse.io">hello@tanse.io</a>
      </p>

      <Script id="ld-legal" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://tanse.io/mentions-legales",
            "url": "https://tanse.io/mentions-legales",
            "name": "Mentions légales — TANSE",
            "inLanguage": "fr-FR",
            "dateModified": "2025-10-20"
          })
        }}
      />
    </main>
  );
}