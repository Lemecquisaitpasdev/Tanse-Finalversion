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
        <p><b>Éditeur :</b> TANSE — Forme : SAS (Société par Actions Simplifiée) — Capital : 10 000 EUR</p>
        <p><b>SIREN :</b> 123 456 789 — <b>TVA :</b> FR12 123456789</p>
        <p><b>Siège social :</b> 75 Avenue Parmentier, 75011 Paris, France</p>
        <p><b>Contact :</b> contact@tanse.fr — <b>Téléphone :</b> +33 (0)1 23 45 67 89</p>
        <p><b>Directeur de la publication :</b> Direction TANSE</p>
        <p><b>Hébergeur :</b> Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
      </section>

      <hr className="my-8" />
      <p className="text-sm text-neutral-600">
        TANSE — SAS au capital de 10 000 EUR — SIREN 123 456 789 — TVA FR12 123456789<br/>
        Siège social : 75 Avenue Parmentier, 75011 Paris, France<br/>
        Contact : <a className="underline" href="mailto:contact@tanse.fr">contact@tanse.fr</a> — Tél. +33 (0)1 23 45 67 89
      </p>

      <Script id="ld-legal" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.tanse.fr/mentions-legales",
            "url": "https://www.tanse.fr/mentions-legales",
            "name": "Mentions légales — TANSE",
            "inLanguage": "fr-FR",
            "dateModified": "2025-01-25"
          })
        }}
      />
    </main>
  );
}