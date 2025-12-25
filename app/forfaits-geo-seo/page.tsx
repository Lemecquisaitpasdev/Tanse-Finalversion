// app/forfaits/page.tsx
"use client";

import Link from "next/link";
import { useOptimization } from "../components/OptimizationProvider";

type Card = {
  k: string;
  titre: string;
  prix: string;
  sous: string;
  points: string[];
  cta: string;
  best?: boolean;
};

const cards: readonly Card[] = [
  {
    k: "seo-geo",
    titre: "SEO + GEO",
    prix: "2 490€",
    sous: "coût unique — puis maintenance 920€/mois",
    points: [
      "Fiche Google Business professionnelle",
      "Pages locales/services clés",
      "Cohérence NAP & annuaires",
      "Schémas & Knowledge Graph",
      "Révision rapidité & lecture de page",
      "Optimisation des balises (meta, headings, etc.)",
    ],
    cta: "Commander l'offre",
  },
  {
    k: "pack-complet",
    titre: "Pack Complet (SEO + GEO + Refonte)",
    prix: "Sur mesure",
    sous: "1 mois de maintenance OFFERT",
    points: [
      "Tout le SEO + GEO, plus :",
      "Optimisations Web (UX, vitesse, mobile)",
      "Refonte et amélioration de l'existant",
      "Parcours de conversion (click-to-call, agenda, devis)",
      "Tracking & analytics (positions, avis, contenus GEO-ready)",
    ],
    best: true,
    cta: "Commander le pack",
  },
  {
    k: "grand-groupes",
    titre: "Grand groupes (multi-sites)",
    prix: "Sur devis",
    sous: "Gouvernance, industrialisation & SLA",
    points: [
      "Pilotage multi-marques / multi-régions",
      "Qualité NAP à l'échelle & workflows d'approbation",
      "Reporting agrégé + par entité, connecteurs & API",
      "SLA, formations & accompagnement dédié",
    ],
    cta: "Parler à un expert",
  },
] as const;

function HeaderBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#444684] via-[#3d3a66] to-[#524e7d] text-white">
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium mb-6">
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          Paiement 100% sécurisé via Stripe
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Nos forfaits
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
          Des packs simples, adaptés à votre contexte.<br className="hidden md:block" />
          Démarrage sous 5 jours ouvrés.
        </p>
      </div>
    </section>
  );
}

export default function ForfaitsPage() {
  const config = useOptimization();

  // Adaptive hover shadow - complex on macOS, simple on Windows
  const hoverShadowClass = config.enableShadows
    ? "hover:shadow-[0_40px_120px_-30px_rgba(68,70,132,0.4)]"
    : "hover:shadow-xl";

  return (
    <main className="bg-[#E4E4E4]">
      <HeaderBand />

      {/* Cartes */}
      <section className="-mt-16 pb-12 md:pb-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
            {cards.map((c) => {
              const isBest = Boolean(c.best);
              const href =
                c.k === "grand-groupes"
                  ? "/contact-audit-gratuit?plan=grand-groupes"
                  : `/checkout/${c.k}`;

              return (
                <div
                  key={c.k}
                  className={`group relative rounded-3xl border ${
                    isBest ? "border-[#444684] ring-2 ring-[#444684]/20" : "border-neutral-200"
                  } bg-white p-7 md:p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 ${hoverShadowClass}`}
                >
                  {isBest && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#444684] to-[#524e7d] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
                        Meilleur choix
                      </div>
                    </div>
                  )}

                  <div className="text-lg font-semibold text-neutral-900">{c.titre}</div>
                  <div className="mt-1 text-4xl font-semibold text-neutral-900">{c.prix}</div>
                  <div className="text-sm text-neutral-600">{c.sous}</div>

                  <ul className="mt-5 space-y-2 text-sm text-neutral-800">
                    {c.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>

                  <a
                    href={href}
                    className={`mt-8 block w-full rounded-full px-6 py-3.5 text-center text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 min-h-[48px] flex items-center justify-center ${
                      isBest
                        ? "bg-[#444684] text-white hover:opacity-90 hover:shadow-xl focus-visible:outline-[#444684]"
                        : "border-2 border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:outline-[#444684]"
                    }`}
                  >
                    {c.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto w-full max-w-7xl px-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]">
            <div className="font-semibold text-neutral-900">Résultats attendus</div>
            <p className="mt-2 text-sm text-neutral-700">
              Quick wins en 2–6 semaines (Google Business, avis). SEO durable sur 3–6 mois selon la
              concurrence. Objectif : plus d’essais, d’appels et de RDV atelier.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]">
            <div className="font-semibold text-neutral-900">Pourquoi TANSE ?</div>
            <p className="mt-2 text-sm text-neutral-700">
              Nous sommes pionniers du Geo et un cabinet spécialisé automobile : nous parlons votre langage métier et focalisons la
              stratégie sur vos objectifs commerciaux locaux.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]">
            <div className="font-semibold text-neutral-900">Réassurance</div>
            <p className="mt-2 text-sm text-neutral-700">
              Paiement Stripe, transparence totale, reporting clair. Vous restez propriétaire de vos actifs
              (site, comptes, contenus).
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16">
        <div className="mx-auto w-full max-w-7xl px-5">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900">FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="font-medium text-neutral-900">Puis-je commencer sans site ?</div>
              <p className="mt-2 text-sm text-neutral-700">
                Oui. Le Pack Complet met en place (ou refond) un site vitrine optimisé, votre fiche Google,
                et les pages locales/services qui comptent.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="font-medium text-neutral-900">Le mois offert du Pack Complet inclut quoi ?</div>
              <p className="mt-2 text-sm text-neutral-700">
                Suivi positions, gestion avis/posts, 2 contenus GEO-ready, recommandations — idéal pour
                stabiliser et accélérer après la mise en place.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="font-medium text-neutral-900">La maintenance est-elle sans engagement ?</div>
              <p className="mt-2 text-sm text-neutral-700">
                Oui, mensuelle à <strong>850€</strong> et résiliable. Recommandée pour garder l’avantage concurrentiel local.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="font-medium text-neutral-900">Et si j’ai déjà un site ?</div>
              <p className="mt-2 text-sm text-neutral-700">
                Nous optimisons l’existant (vitesse, mobile, contenus locaux, schémas), branchons les
                parcours de conversion et corrigeons les fondamentaux.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}