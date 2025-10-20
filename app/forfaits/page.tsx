// app/forfaits/page.tsx
import Link from "next/link";

export const metadata = {
  title: "TANSE — Nos forfaits SEO + GEO",
  description:
    "Trois offres claires : SEO+GEO (coût unique 1 490€ puis maintenance 850€/mois), Pack Complet SEO+GEO+Site (2 490€) avec 1 mois de maintenance offert, et Grand groupes sur devis.",
};

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
    prix: "1 490€",
    sous: "coût unique — puis maintenance 850€/mois",
    points: [
      "Fiche Google Business professionnelle",
      "Pages locales/services clés",
      "Cohérence NAP & annuaires",
      "Schémas & Knowledge Graph",
    ],
    cta: "Commander l’offre",
  },
  {
    k: "pack-complet",
    titre: "Pack Complet (SEO + GEO + Site web / Refonte)",
    prix: "2 490€",
    sous: "coût unique — 1 mois de maintenance OFFERT",
    points: [
      "Tout le SEO + GEO, plus :",
      "Optimisations Web (UX, vitesse, mobile) ou refonte",
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
      "Qualité NAP à l’échelle & workflows d’approbation",
      "Reporting agrégé + par entité, connecteurs & API",
      "SLA, formations & accompagnement dédié",
    ],
    cta: "Parler à un expert",
  },
] as const;

function HeaderBand() {
  return (
    <section className="bg-[#444684] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">Nos forfaits</h1>
        <p className="mx-auto mt-3 max-w-3xl text-white/90">
          Des packs simples, adaptés à votre contexte. Paiement sécurisé via Stripe. Démarrage sous 5 jours ouvrés.
        </p>
      </div>
    </section>
  );
}

export default function ForfaitsPage() {
  return (
    <main className="bg-[#E4E4E4]">
      <HeaderBand />

      {/* Cartes */}
      <section className="-mt-10 pb-6">
        <div className="mx-auto w-full max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => {
              const isBest = Boolean(c.best);
              const href =
                c.k === "grand-groupes"
                  ? "/contact?plan=grand-groupes"
                  : `/api/checkout?plan=${c.k}`;

              return (
                <div
                  key={c.k}
                  className={`rounded-3xl border ${
                    isBest ? "border-[#444684]" : "border-neutral-200"
                  } bg-white p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]`}
                >
                  {isBest && (
                    <div className="mb-3 inline-flex rounded-full bg-[#444684]/10 px-3 py-1 text-[11px] uppercase tracking-wide text-[#444684]">
                      Meilleur choix
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
                    className={`mt-6 block w-full rounded-full px-5 py-2.5 text-center text-sm font-medium shadow-sm ${
                      isBest
                        ? "bg-[#444684] text-white hover:opacity-95"
                        : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
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
      <section className="pb-4">
        <div className="mx-auto w-full max-w-7xl px-5 grid gap-6 md:grid-cols-3">
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