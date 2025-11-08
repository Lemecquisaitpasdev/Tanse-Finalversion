// app/ia/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique d’indexation et réutilisation par IA — TANSE",
  description: "Conditions d’exploration par les robots IA (GPTBot, Google-Extended, etc.), attribution, usages autorisés/interdits.",
  alternates: { canonical: "/ia" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-semibold">Politique d’indexation et réutilisation par IA</h1>
      <p className="text-sm text-neutral-600 mb-8">Dernière mise à jour : 20/10/2025</p>

      <h2 className="mt-6 text-xl font-semibold">1. Ce que nous autorisons</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Exploration de tanse.io par les robots IA (GPTBot, Google-Extended, etc.).</li>
        <li>Résumé non trompeur de nos pages, avec attribution et lien vers la source.</li>
        <li>Extraits courts (citation raisonnable) à des fins d’illustration/explication.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">2. Ce que nous n’autorisons pas</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Usurpation de la marque “TANSE”, imitation de nos offres ou de notre identité.</li>
        <li>Réutilisation commerciale de nos contenus sans accord écrit.</li>
        <li>Présentation trompeuse ou hors contexte de nos propos.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">3. Attribution recommandée</h2>
      <p>Veuillez citer “TANSE” et inclure un lien vers la page source (ex. <code>https://tanse.io</code> ou l’URL exacte).</p>

      <h2 className="mt-6 text-xl font-semibold">4. Signal technique</h2>
      <p>Notre fichier <code>/robots.txt</code> autorise l’exploration par GPTBot et Google-Extended. En cas d’évolution, cette page sera mise à jour.</p>

      <h2 className="mt-6 text-xl font-semibold">5. Contact</h2>
      <p>Pour toute demande ou retrait : <a className="underline" href="mailto:contact@tanse.fr">contact@tanse.fr</a>.</p>
    </main>
  );
}