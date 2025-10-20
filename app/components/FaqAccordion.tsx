"use client";

import { useMemo, useState } from "react";

const ITEMS = [
  // ✅ Nouvelle entrée mise en tête, visible avant le bouton “Plus”
  {
    q: "Pourquoi TANSE ?",
    a: "Nous sommes pionniers du GEO en France : optimisation pour les moteurs de réponse (LLM) — ChatGPT, Perplexity, Claude. Notre approche est orientée « réponse » (intention → entités → preuves) plutôt que simple ranking. Stack propriétaire : tests multi-LLM, QA NAP à l’échelle, schémas/Knowledge Graph et dashboards temps réel. Résultat : plus d’appels, de RDV, de devis – moins de vanity metrics.",
  },

  // (tes questions existantes)
  {
    q: "C’est quoi la différence entre GEO et SEO ?",
    a: "Le SEO optimise vos pages pour les moteurs classiques. Le GEO optimise vos données et contenus pour que les moteurs conversationnels (LLM/IA) vous citent directement dans leurs réponses.",
  },
  {
    q: "Combien de temps pour voir des résultats ?",
    a: "Sur le local, les premiers signaux apparaissent en quelques semaines (cartes, itinéraires, appels). Les gains s’installent vraiment sur 2–3 mois avec une base propre et cohérente.",
  },
  {
    q: "On peut garder mon site actuel ?",
    a: "Oui. On structure vos infos (entités, services, zones, preuves) autour de votre site et de vos fiches locales. Pas besoin de tout refaire pour démarrer.",
  },
  {
    q: "C’est compatible avec la pub ?",
    a: "Totalement. Le GEO renforce la base organique et la crédibilité, ce qui améliore aussi les performances des campagnes.",
  },
  {
    q: "Quels secteurs fonctionnent le mieux ?",
    a: "Tout ce qui est local et à rendez-vous : auto, santé, beauté, artisanat, services à domicile, B2B local…",
  },
  {
    q: "Comment mesurez-vous le ROI ?",
    a: "Nous suivons appels/clic-to-call, demandes via formulaires, itinéraires, positions Local Pack, impressions/visites, et sources LLM (ChatGPT/Perplexity…). Un tableau de bord + rapport mensuel sont fournis.",
  },
  {
    q: "De quoi avez-vous besoin pour démarrer ?",
    a: "Accès à Google Business Profile, au site/CMS, Analytics/Tag Manager, vos horaires/services/villes, photos/logo, et canaux de contact. On s’occupe du reste.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Les packs de création sont one-shot ; la maintenance est mensuelle, sans engagement et résiliable à tout moment (vous gardez vos accès et vos gains).",
  },

  // — le reste de ta longue FAQ —
  {
    q: "Gérez-vous les multi-établissements ?",
    a: "Oui. Modèles de pages locales, gestion de fiches multi-sites, données cohérentes par point de vente, et reporting par établissement.",
  },
  {
    q: "Mon site n’est pas sur WordPress, c’est un problème ?",
    a: "Non. Nos livrables (schémas, contenus, structures) sont agnostiques. Nous intégrons sur la plupart des CMS. Si besoin, on propose un mini-site vitrine rapide.",
  },
  {
    q: "Qui rédige les contenus ?",
    a: "Nous pouvons rédiger (IA + relecture humaine) avec votre validation. Ton métier respecté, FAQ locales, consignes E-E-A-T et données structurées à l’appui.",
  },
  {
    q: "Pouvez-vous gérer les avis ?",
    a: "Oui : plan de collecte (QR code, SMS/email), réponses types, alerte en cas d’avis négatif et suivi de la note moyenne.",
  },
  {
    q: "Que se passe-t-il si j’arrête ?",
    a: "Les optimisations restent en place et vous conservez l’entière propriété des comptes et données. Simplement, il n’y a plus de nouvelles itérations/rapports.",
  },
  {
    q: "Couvrez-vous toutes les régions/pays ?",
    a: "France et francophonie par défaut. Autres langues/pays possibles sur devis (adaptation des signaux et annuaires).",
  },
  {
    q: "Combien de temps prend l’implémentation initiale ?",
    a: "En général 1–2 semaines pour un établissement. Réseaux multi-sites : 2–4 semaines selon le nombre de points de vente et la matière disponible.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Paiement sécurisé via Stripe. Facture PDF automatique avec TVA. Vous pouvez mettre à jour vos coordonnées/bancaires ou résilier la maintenance depuis votre Espace client.",
  },
  {
    q: "Et la sécurité / propriété des données ?",
    a: "Vous restez propriétaire de vos comptes et données. Nous utilisons des accès minimaux, respectons le RGPD et documentons toutes les modifications.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  // combien visibles avant bouton “Plus”
  const VISIBLE = 9; // jusqu’à “Y a-t-il un engagement ?”
  const list = showAll ? ITEMS : ITEMS.slice(0, VISIBLE);

  const jsonLd = useMemo(() => {
    const mainEntity = ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }));
    return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity };
  }, []);

  return (
    <section id="faq" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28">
        <h2 className="mb-8 text-center text-[clamp(28px,3.2vw,44px)] font-semibold">
          Questions fréquentes
        </h2>

        <div className="mx-auto max-w-[980px] divide-y rounded-2xl border border-black/10 bg-white shadow-sm">
          {list.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i} className="p-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-5 md:px-6 py-5 md:py-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-[clamp(18px,2.1vw,22px)] font-medium">
                    {item.q}
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-black/10 text-sm">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    className="px-5 md:px-6 pb-6 -mt-2 text-[clamp(15px,1.1vw,17px)] text-neutral-700"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!showAll && ITEMS.length > VISIBLE && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-black/5 px-5 py-2.5 text-sm font-medium text-[#0b0b0c] hover:bg-black/10"
            >
              Plus
            </button>
          </div>
        )}
      </div>
    </section>
  );
}