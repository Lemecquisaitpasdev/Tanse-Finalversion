// app/forfaits-geo-seo/page.tsx
"use client";

import { motion } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import BrowserCompanyFooter from "../components/outils/BrowserCompanyFooter";
import PricingCard from "../components/forfaits/PricingCard";
import AnimatedBackground from "../components/forfaits/AnimatedBackground";

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

const reassuranceCards = [
  {
    title: "Résultats attendus",
    description: "Quick wins en 2–6 semaines (Google Business, avis). SEO durable sur 3–6 mois selon la concurrence. Objectif : plus d'essais, d'appels et de RDV atelier.",
    color: "from-orange-50 to-pink-50",
  },
  {
    title: "Pourquoi TANSE ?",
    description: "Nous sommes pionniers du GEO et un cabinet spécialisé automobile : nous parlons votre langage métier et focalisons la stratégie sur vos objectifs commerciaux locaux.",
    color: "from-blue-50 to-purple-50",
  },
  {
    title: "Réassurance",
    description: "Paiement Stripe, transparence totale, reporting clair. Vous restez propriétaire de vos actifs (site, comptes, contenus).",
    color: "from-green-50 to-teal-50",
  },
];

const faqItems = [
  {
    question: "Puis-je commencer sans site ?",
    answer: "Oui. Le Pack Complet met en place (ou refond) un site vitrine optimisé, votre fiche Google, et les pages locales/services qui comptent.",
  },
  {
    question: "Le mois offert du Pack Complet inclut quoi ?",
    answer: "Suivi positions, gestion avis/posts, 2 contenus GEO-ready, recommandations — idéal pour stabiliser et accélérer après la mise en place.",
  },
  {
    question: "La maintenance est-elle sans engagement ?",
    answer: "Oui, mensuelle à 920€ et résiliable. Recommandée pour garder l'avantage concurrentiel local.",
  },
  {
    question: "Et si j'ai déjà un site ?",
    answer: "Nous optimisons l'existant (vitesse, mobile, contenus locaux, schémas), branchons les parcours de conversion et corrigeons les fondamentaux.",
  },
];

export default function ForfaitsPage() {
  // Schema.org structured data for pricing
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Maintenance SEO + GEO",
        "description": "Suivi et optimisation continue de votre présence locale et SEO",
        "price": "920",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "920",
          "priceCurrency": "EUR",
          "billingDuration": "P1M"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "Maintenance SEO + GEO",
          "provider": {
            "@type": "Organization",
            "name": "TANSE"
          }
        }
      },
      {
        "@type": "Offer",
        "name": "Pack Complet (SEO + GEO + Refonte)",
        "description": "Solution complète : Site optimisé, présence locale impeccable et stratégie GEO dès le jour 1",
        "price": "2490",
        "priceCurrency": "EUR",
        "itemOffered": {
          "@type": "Service",
          "name": "Pack Complet SEO + GEO + Refonte",
          "provider": {
            "@type": "Organization",
            "name": "TANSE"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <SiteHeader />
      <main className="relative min-h-screen bg-background pt-16">
        {/* Animated Background with Mouse Following Gradient */}
        <AnimatedBackground />

        {/* Hero Section - Staggered Animation */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6"
            >
              Forfaits & Tarifs
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="font-display italic text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-8"
            >
              Choisissez votre forfait.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
            >
              Des packs simples, adaptés à votre contexte.<br />
              Démarrage sous 5 jours ouvrés.
            </motion.p>
          </div>
        </section>

        {/* Forfaits Mockups - Enhanced with 3D Tilt & Magnetic Hover */}
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
                  {/* Enhanced Pricing Card */}
                  <div className={`relative ${!isEven ? 'md:order-2' : ''}`}>
                    <PricingCard card={card} href={href} index={index} />
                  </div>

                  {/* Description - Scroll-triggered */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                      delay: index * 0.1 + 0.2,
                    }}
                    className={isEven ? 'md:order-2' : ''}
                  >
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
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Réassurance Section - Glassmorphism + Staggered */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display italic text-4xl md:text-5xl text-center mb-16"
            >
              Pourquoi nous choisir ?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {reassuranceCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", damping: 15, stiffness: 300 },
                  }}
                  className={`relative bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-3xl p-8 border border-foreground/10
                    hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                    hover:border-foreground/20
                    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    cursor-default
                  `}
                >
                  <h3 className="font-display italic text-2xl mb-4">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Slide-in from left */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display italic text-4xl md:text-5xl text-center mb-16"
            >
              Questions fréquentes
            </motion.h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    x: 4,
                    transition: { type: "spring", damping: 15, stiffness: 300 },
                  }}
                  className="bg-background rounded-2xl p-6 md:p-8 border border-foreground/10
                    hover:border-foreground/20 hover:shadow-lg
                    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  "
                >
                  <h3 className="font-semibold text-xl mb-3">{item.question}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.answer.includes("920€") ? (
                      <>
                        {item.answer.split("920€")[0]}
                        <strong>920€</strong>
                        {item.answer.split("920€")[1]}
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BrowserCompanyFooter />
      </main>
    </>
  );
}
