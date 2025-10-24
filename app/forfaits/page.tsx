// app/forfaits/page.tsx
import Link from "next/link";
import { Check, Sparkles, Building2, Shield } from "lucide-react";

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
    <section className="bg-gradient-to-br from-[#444684] to-[#5a5794] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Plans adaptés à vos besoins</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">Nos forfaits</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
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
      <section className="-mt-16 pb-12">
        <div className="mx-auto w-full max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-3">
            {cards.map((c) => {
              const isBest = Boolean(c.best);
              const href =
                c.k === "grand-groupes"
                  ? "/contact?plan=grand-groupes"
                  : `/api/checkout?plan=${c.k}`;

              return (
                <div
                  key={c.k}
                  className={`group relative rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                    isBest
                      ? "border-[#444684] bg-gradient-to-br from-white to-[#444684]/5 shadow-[0_30px_90px_-20px_rgba(68,70,132,0.3)]"
                      : "border-neutral-200 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)] hover:border-neutral-300 hover:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.25)]"
                  } p-8`}
                >
                  {isBest && (
                    <>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#444684] to-[#5a5794] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                        <Sparkles className="h-3.5 w-3.5" />
                        Meilleur choix
                      </div>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#444684]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </>
                  )}

                  <div className="relative">
                    <div className="text-xl font-bold text-neutral-900 mb-3">{c.titre}</div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-br from-[#444684] to-[#5a5794] bg-clip-text text-transparent">{c.prix}</span>
                    </div>
                    <div className="text-sm text-neutral-600 font-medium mb-6">{c.sous}</div>

                    <ul className="space-y-3 mb-8">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-neutral-800">
                          <Check className="h-5 w-5 text-[#444684] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={href}
                      className={`block w-full rounded-full px-6 py-3.5 text-center text-sm font-semibold shadow-md transition-all duration-300 ${
                        isBest
                          ? "bg-gradient-to-r from-[#444684] to-[#5a5794] text-white hover:shadow-xl hover:scale-105"
                          : "border-2 border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400"
                      }`}
                    >
                      {c.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="pb-12">
        <div className="mx-auto w-full max-w-7xl px-5 grid gap-6 md:grid-cols-3">
          <div className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#444684] to-[#5a5794] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-lg text-neutral-900 mb-3">Résultats attendus</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Quick wins en 2–6 semaines (Google Business, avis). SEO durable sur 3–6 mois selon la
              concurrence. Objectif : plus d'essais, d'appels et de RDV atelier.
            </p>
          </div>
          <div className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#444684] to-[#5a5794] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-lg text-neutral-900 mb-3">Pourquoi TANSE ?</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Nous sommes pionniers du Geo et un cabinet spécialisé automobile : nous parlons votre langage métier et focalisons la
              stratégie sur vos objectifs commerciaux locaux.
            </p>
          </div>
          <div className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#444684] to-[#5a5794] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-lg text-neutral-900 mb-3">Réassurance</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Paiement Stripe, transparence totale, reporting clair. Vous restez propriétaire de vos actifs
              (site, comptes, contenus).
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Questions fréquentes</h2>
            <p className="text-neutral-600">Tout ce que vous devez savoir sur nos forfaits</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105">
              <div className="font-semibold text-lg text-neutral-900 mb-3 group-hover:text-[#444684] transition-colors">Puis-je commencer sans site ?</div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Oui. Le Pack Complet met en place (ou refond) un site vitrine optimisé, votre fiche Google,
                et les pages locales/services qui comptent.
              </p>
            </div>
            <div className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105">
              <div className="font-semibold text-lg text-neutral-900 mb-3 group-hover:text-[#444684] transition-colors">Le mois offert du Pack Complet inclut quoi ?</div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Suivi positions, gestion avis/posts, 2 contenus GEO-ready, recommandations — idéal pour
                stabiliser et accélérer après la mise en place.
              </p>
            </div>
            <div className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105">
              <div className="font-semibold text-lg text-neutral-900 mb-3 group-hover:text-[#444684] transition-colors">La maintenance est-elle sans engagement ?</div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Oui, mensuelle à <strong>850€</strong> et résiliable. Recommandée pour garder l'avantage concurrentiel local.
              </p>
            </div>
            <div className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105">
              <div className="font-semibold text-lg text-neutral-900 mb-3 group-hover:text-[#444684] transition-colors">Et si j'ai déjà un site ?</div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Nous optimisons l'existant (vitesse, mobile, contenus locaux, schémas), branchons les
                parcours de conversion et corrigeons les fondamentaux.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300 hover:scale-105 shadow-md"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}