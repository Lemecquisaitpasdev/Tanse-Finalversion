// app/forfaits-geo-seo/page.tsx
"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrowserCompanyFooter from "../components/outils/BrowserCompanyFooter";

type Card = {
  k: string;
  titre: string;
  prix: string;
  sous: string;
  points: string[];
  cta: string;
  best?: boolean;
  color: string;
};

const cards: readonly Card[] = [
  {
    k: "maintenance",
    titre: "Maintenance SEO + GEO",
    prix: "920€/mois",
    sous: "Suivi et optimisation continue",
    points: [
      "Fiche Google Business professionnelle",
      "Pages locales/services clés",
      "Cohérence NAP & annuaires",
      "Schémas & Knowledge Graph",
      "Révision rapidité & lecture de page",
      "Optimisation des balises (meta, headings, etc.)",
    ],
    cta: "Souscrire",
    color: "from-orange-400/20 to-pink-400/20",
  },
  {
    k: "pack-complet",
    titre: "Pack Complet (SEO + GEO + Refonte)",
    prix: "2 490€",
    sous: "coût unique — 1 mois de maintenance OFFERT",
    points: [
      "Tout le SEO + GEO, plus :",
      "Optimisations Web (UX, vitesse, mobile)",
      "Refonte et amélioration de l'existant",
      "Parcours de conversion (click-to-call, agenda, devis)",
      "Tracking & analytics (positions, avis, contenus GEO-ready)",
    ],
    best: true,
    cta: "Commander le pack",
    color: "from-blue-400/20 to-purple-400/20",
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
    color: "from-green-400/20 to-teal-400/20",
  },
] as const;

export default function ForfaitsPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative min-h-screen bg-background pt-16">
        {/* Background blurs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-br from-green-200 to-teal-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6">
              Forfaits & Tarifs
            </p>
            <h1 className="font-display italic text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-8">
              Choisissez votre forfait.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Des packs simples, adaptés à votre contexte.<br />
              Démarrage sous 5 jours ouvrés.
            </p>
          </div>
        </section>

        {/* Forfaits Mockups */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {cards.map((card, index) => {
              const href =
                card.k === "grand-groupes"
                  ? "/contact-audit-gratuit?plan=grand-groupes"
                  : `/checkout/${card.k}`;

              const isEven = index % 2 === 0;

              return (
                <div
                  key={card.k}
                  className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Mockup Card */}
                  <div className={`relative ${!isEven ? 'md:order-2' : ''}`}>
                    <div className={`relative bg-gradient-to-br ${card.color} backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-foreground/10`}>
                      {card.best && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse"></span>
                            Meilleur choix
                          </div>
                        </div>
                      )}

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-display italic text-3xl md:text-4xl mb-2">{card.titre}</h3>
                          <p className="text-sm text-muted-foreground font-mono">{card.sous}</p>
                        </div>

                        <div className="text-5xl md:text-6xl font-display italic">
                          {card.prix}
                        </div>

                        <ul className="space-y-3 text-sm">
                          {card.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="text-foreground/60 mt-1">✓</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>

                        <a
                          href={href}
                          className={`block w-full text-center rounded-full px-8 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                            card.best
                              ? "bg-foreground text-background hover:bg-foreground/90"
                              : "bg-background text-foreground border-2 border-foreground/20 hover:border-foreground/40"
                          }`}
                        >
                          {card.cta}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className={isEven ? 'md:order-2' : ''}>
                    <div className="space-y-6">
                      <h2 className="font-display italic text-4xl md:text-5xl leading-tight">
                        {card.k === "maintenance" && "Optimisation continue."}
                        {card.k === "pack-complet" && "Tout-en-un."}
                        {card.k === "grand-groupes" && "À l'échelle."}
                      </h2>
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        {card.k === "maintenance" &&
                          "Maintenez votre avance locale. Suivi mensuel de vos positions SEO et GEO, gestion proactive de votre présence en ligne et optimisations continues pour rester devant vos concurrents."
                        }
                        {card.k === "pack-complet" &&
                          "La solution complète pour démarrer fort. Site optimisé, présence locale impeccable et stratégie GEO dès le jour 1. Tout ce dont vous avez besoin pour dominer localement."
                        }
                        {card.k === "grand-groupes" &&
                          "Déployez votre stratégie à grande échelle. Multi-marques, multi-régions, gouvernance centralisée et reporting consolidé. Pour les groupes qui veulent industrialiser leur SEO local."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Réassurance Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display italic text-4xl md:text-5xl text-center mb-16">
              Pourquoi nous choisir ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 border border-foreground/10">
                <h3 className="font-display italic text-2xl mb-4">Résultats attendus</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Quick wins en 2–6 semaines (Google Business, avis). SEO durable sur 3–6 mois selon la
                  concurrence. Objectif : plus d'essais, d'appels et de RDV atelier.
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-foreground/10">
                <h3 className="font-display italic text-2xl mb-4">Pourquoi TANSE ?</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Nous sommes pionniers du GEO et un cabinet spécialisé automobile : nous parlons votre langage métier et focalisons la
                  stratégie sur vos objectifs commerciaux locaux.
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border border-foreground/10">
                <h3 className="font-display italic text-2xl mb-4">Réassurance</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Paiement Stripe, transparence totale, reporting clair. Vous restez propriétaire de vos actifs
                  (site, comptes, contenus).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display italic text-4xl md:text-5xl text-center mb-16">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-foreground/10">
                <h3 className="font-semibold text-xl mb-3">Puis-je commencer sans site ?</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Oui. Le Pack Complet met en place (ou refond) un site vitrine optimisé, votre fiche Google,
                  et les pages locales/services qui comptent.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 md:p-8 border border-foreground/10">
                <h3 className="font-semibold text-xl mb-3">Le mois offert du Pack Complet inclut quoi ?</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Suivi positions, gestion avis/posts, 2 contenus GEO-ready, recommandations — idéal pour
                  stabiliser et accélérer après la mise en place.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 md:p-8 border border-foreground/10">
                <h3 className="font-semibold text-xl mb-3">La maintenance est-elle sans engagement ?</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Oui, mensuelle à <strong>920€</strong> et résiliable. Recommandée pour garder l'avantage concurrentiel local.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 md:p-8 border border-foreground/10">
                <h3 className="font-semibold text-xl mb-3">Et si j'ai déjà un site ?</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Nous optimisons l'existant (vitesse, mobile, contenus locaux, schémas), branchons les
                  parcours de conversion et corrigeons les fondamentaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        <BrowserCompanyFooter />
      </main>
    </>
  );
}
