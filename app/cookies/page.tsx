import type { Metadata } from "next";
import ConsentPreferencesButton from "../components/ConsentPreferencesButton";

export const metadata: Metadata = {
  title: "Politique de cookies — TANSE",
  description: "Types de cookies utilisés, finalités, durées, gestion du consentement et retrait.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "20/10/2025";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-semibold">Politique de cookies</h1>
      <p className="text-sm text-neutral-600 mb-8">Dernière mise à jour : {LAST_UPDATED}</p>

      <p className="mb-6">
        Nous utilisons des cookies/traceurs pour le fonctionnement du site, la mesure d’audience et la performance.
        Les cookies non essentiels ne sont déposés qu’avec votre consentement.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Catégories</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><b>Nécessaires</b> : sécurité, équilibrage de charge, préférences techniques.</li>
        <li><b>Mesure d’audience</b> (si activée) : statistiques anonymisées/agrégées (durée max 13 mois).</li>
        <li><b>Performance/UX</b> (si activée) : amélioration de l’expérience.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Gestion du consentement</h2>
      <p>Vous pouvez à tout moment modifier votre choix :</p>
      <ConsentPreferencesButton />

      <h2 className="mt-8 text-xl font-semibold">Exemples de cookies (à compléter)</h2>
      <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
        <ul className="space-y-2">
          <li><b>__Secure-next-auth.session</b> — Session — Nécessaire — Durée : session</li>
          <li><b>_ga</b> (si GA4) — Mesure d’audience — Consentement — Durée : 13 mois</li>
        </ul>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://tanse.io/cookies",
            "url": "https://tanse.io/cookies",
            "name": "Politique de cookies — TANSE",
            "inLanguage": "fr-FR",
            "dateModified": "2025-10-20"
          }),
        }}
      />
    </main>
  );
}