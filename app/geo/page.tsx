import Link from "next/link";
import { Sparkles, Brain, Search, TrendingUp, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO : Optimisation pour les Moteurs IA & Answer Engines — TANSE",
  description:
    "Découvrez le GEO (Generative Engine Optimization), la nouvelle discipline qui optimise votre visibilité sur ChatGPT, Perplexity, Google AI et les moteurs de réponse. Complément essentiel du SEO traditionnel.",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "optimisation IA",
    "ChatGPT SEO",
    "Perplexity",
    "Google AI",
    "answer engines",
    "moteurs de réponse",
    "SEO IA",
    "visibilité IA"
  ],
  openGraph: {
    title: "GEO : Optimisation pour les Moteurs IA — TANSE",
    description: "Le GEO complète le SEO en optimisant votre présence sur ChatGPT, Perplexity et les moteurs IA. Découvrez comment être cité par les IA.",
    type: "article",
  },
};

export default function GeoPage() {
  return (
    <main className="bg-[#E4E4E4] text-[#0b0b0c]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E4E4E4] via-neutral-100 to-[#E4E4E4] py-20 md:py-28 border-b border-white/50">
        {/* Decorative gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#444684]/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-[#444684]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/80 transition-all"
            >
              <span aria-hidden>←</span> Retour à l'accueil
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#444684] to-[#524e7d] bg-clip-text text-transparent">
              L'avenir de la visibilité en ligne
            </p>
          </div>

          <h1 className="text-[clamp(40px,5.5vw,72px)] font-bold leading-[1.1] mb-6 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-transparent">
            GEO : Optimisation pour les <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#444684] via-[#524e7d] to-[#6b5d99] bg-clip-text text-transparent">
              Moteurs IA & Answer Engines
            </span>
          </h1>

          <p className="max-w-3xl text-[18px] leading-relaxed text-neutral-700 mb-8">
            Le <strong className="text-[#444684]">GEO (Generative Engine Optimization)</strong> est la nouvelle discipline qui complète le SEO traditionnel.
            Alors que le SEO vous positionne sur Google, le GEO vous rend <strong className="text-[#444684]">citable et recommandable</strong> par
            ChatGPT, Perplexity, Google AI Overviews et tous les moteurs de réponse qui transforment la recherche en ligne.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/forfaits-geo-seo"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#444684] to-[#524e7d] hover:from-[#3d3f75] hover:to-[#4a4770] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#444684]/30 hover:shadow-xl hover:shadow-[#444684]/40 transition-all duration-300"
            >
              Découvrir nos forfaits GEO
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact-audit-gratuit"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#444684]/30 hover:border-[#444684]/50 px-8 py-4 text-base font-medium text-neutral-800 hover:bg-white transition-all duration-300"
            >
              Demander un audit GEO
            </Link>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le GEO ? */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#444684]/10 text-[#444684] text-sm font-semibold mb-4">
              <Sparkles className="h-4 w-4" />
              Définition
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Qu'est-ce que le <span className="text-[#444684]">GEO</span> ?
            </h2>
            <p className="text-[17px] leading-relaxed text-neutral-700 mb-4">
              Le <strong>GEO (Generative Engine Optimization)</strong> est l'art d'optimiser votre contenu pour qu'il soit
              <strong className="text-[#444684]"> compris, digéré et cité</strong> par les intelligences artificielles génératives comme
              ChatGPT, Claude, Gemini, Perplexity et Google AI Overviews.
            </p>
            <p className="text-[17px] leading-relaxed text-neutral-700 mb-4">
              Contrairement au SEO qui vise à <strong>apparaître dans une liste de liens</strong>, le GEO vise à
              <strong className="text-[#444684]"> être la source d'information recommandée</strong> par l'IA elle-même.
            </p>
            <p className="text-[17px] leading-relaxed text-neutral-700">
              C'est la différence entre <em>"voici 10 liens bleus"</em> et <em>"voici la meilleure réponse, et elle vient de cette entreprise"</em>.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white p-8 shadow-xl border border-neutral-200">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg flex-shrink-0">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">SEO Traditionnel</h3>
                    <p className="text-sm text-neutral-600">
                      Apparaître dans les résultats de recherche Google (liens bleus classiques)
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                  <span className="px-4 text-sm font-semibold text-neutral-500 whitespace-nowrap">+</span>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg flex-shrink-0">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">GEO (Nouveau)</h3>
                    <p className="text-sm text-neutral-600">
                      Être cité et recommandé par les IA (ChatGPT, Perplexity, Google AI Overviews)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                  <Zap className="h-5 w-5" />
                  Résultat
                </div>
                <p className="text-sm text-neutral-700">
                  <strong>Visibilité maximale :</strong> Vous êtes trouvé sur Google ET recommandé par les IA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche ? */}
      <section className="bg-white py-20 md:py-24 border-y border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#444684]/10 text-[#444684] text-sm font-semibold mb-4">
              <TrendingUp className="h-4 w-4" />
              Méthodologie
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comment fonctionne le <span className="text-[#444684]">GEO</span> ?
            </h2>
            <p className="max-w-3xl mx-auto text-[17px] leading-relaxed text-neutral-700">
              Le GEO repose sur 4 piliers fondamentaux qui rendent votre contenu <strong>compréhensible et citablepar les IA</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pilier 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#444684]/5 to-[#524e7d]/5 p-8 border border-[#444684]/20 hover:border-[#444684]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#444684]/20 to-purple-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#444684] to-[#524e7d] text-white font-bold text-xl mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3">Structure de données</h3>
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-[#444684]">Schema.org avancé</strong>, graphes de connaissances et balises sémantiques.
                  Les IA doivent comprendre <em>qui vous êtes</em>, <em>ce que vous faites</em> et <em>pourquoi vous êtes fiable</em>.
                </p>
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/50 to-[#444684]/5 p-8 border border-[#444684]/15 hover:border-[#444684]/35 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-[#444684]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#5566a3] to-[#444684] text-white font-bold text-xl mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3">Contenu E-E-A-T</h3>
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-[#444684]">Expertise, Expérience, Autorité, Confiance</strong>. Les IA favorisent les sources
                  démontrables, avec des preuves concrètes (cas clients, données chiffrées, certifications).
                </p>
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50/50 to-[#524e7d]/5 p-8 border border-[#524e7d]/15 hover:border-[#524e7d]/35 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-[#524e7d]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#6b5d99] to-[#524e7d] text-white font-bold text-xl mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3">Entités & Relations</h3>
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-[#444684]">Connecter votre marque</strong> aux entités reconnues (lieux, personnes, événements).
                  Les IA construisent des graphes de connaissances : plus vos liens sont riches, plus vous êtes citable.
                </p>
              </div>
            </div>

            {/* Pilier 4 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E4E4E4] to-[#444684]/5 p-8 border border-neutral-200 hover:border-[#444684]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neutral-200/30 to-[#444684]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#524e7d] to-[#3d3f75] text-white font-bold text-xl mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-2xl font-bold mb-3">Réponses directes</h3>
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-[#444684]">Format Q&A, listes, tableaux</strong>. Les IA cherchent des réponses claires,
                  structurées et concises. Un contenu "citationnable" est un contenu qui répond précisément à une question.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi le GEO est essentiel */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi le GEO est <span className="text-[#444684]">essentiel</span> en 2025 ?
          </h2>
          <p className="max-w-3xl mx-auto text-[17px] leading-relaxed text-neutral-700">
            Les habitudes de recherche changent radicalement. Voici pourquoi le GEO devient incontournable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#444684] to-[#524e7d] text-white font-bold text-2xl mb-4 shadow-lg">
              64%
            </div>
            <h3 className="text-xl font-bold mb-2">des recherches se font sur les IA</h3>
            <p className="text-neutral-600 text-sm">
              ChatGPT, Perplexity et Google AI Overviews captent une part croissante des recherches.
              Si vous n'êtes pas cité, vous n'existez pas.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#5566a3] to-[#444684] text-white font-bold text-2xl mb-4 shadow-lg">
              85%
            </div>
            <h3 className="text-xl font-bold mb-2">des utilisateurs font confiance aux IA</h3>
            <p className="text-neutral-600 text-sm">
              Une recommandation par ChatGPT ou Perplexity est perçue comme plus crédible qu'un lien Google classique.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#6b5d99] to-[#524e7d] text-white font-bold text-2xl mb-4 shadow-lg">
              0
            </div>
            <h3 className="text-xl font-bold mb-2">clic nécessaire pour voir votre nom</h3>
            <p className="text-neutral-600 text-sm">
              Les IA citent directement. Pas besoin de clic : votre marque apparaît dans la réponse.
            </p>
          </div>
        </div>
      </section>

      {/* Comparaison SEO vs GEO */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SEO vs GEO : <span className="text-[#6b5d99]">Complémentaires</span>, pas concurrents
            </h2>
            <p className="max-w-3xl mx-auto text-[17px] leading-relaxed text-neutral-300">
              Le SEO et le GEO travaillent ensemble pour maximiser votre visibilité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SEO */}
            <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Search className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold">SEO Traditionnel</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Position dans les résultats Google (liens bleus)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Mots-clés, backlinks, vitesse de chargement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Trafic organique vers votre site</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Nécessite un clic pour vous découvrir</span>
                </li>
              </ul>
            </div>

            {/* GEO */}
            <div className="rounded-3xl bg-gradient-to-br from-[#444684]/20 to-[#6b5d99]/20 backdrop-blur-sm border border-[#524e7d]/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-8 w-8 text-[#6b5d99]" />
                <h3 className="text-2xl font-bold">GEO (Nouveau)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#6b5d99] flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Citation directe par les IA (ChatGPT, Perplexity, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#6b5d99] flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Structure sémantique, entités, E-E-A-T</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#6b5d99] flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Visibilité instantanée dans la réponse IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#6b5d99] flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Votre nom apparaît sans clic nécessaire</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-start gap-4">
              <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">Stratégie gagnante :</h4>
                <p className="text-neutral-300 leading-relaxed">
                  <strong className="text-white">Combinez SEO + GEO</strong> pour couvrir 100% des canaux de découverte.
                  Le SEO vous amène du trafic via Google, le GEO fait de vous <strong className="text-[#6b5d99]">la référence citée par les IA</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#444684] via-[#524e7d] to-[#6b5d99] p-12 md:p-16 text-center text-white shadow-2xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à optimiser votre présence <br className="hidden md:block" />
              sur les moteurs IA ?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-100 mb-10">
              TANSE déploie le GEO et le SEO local pour maximiser votre visibilité.
              Découvrez nos forfaits ou demandez un audit personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/forfaits-geo-seo"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#444684] hover:bg-neutral-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Voir nos forfaits
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact-audit-gratuit"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300"
              >
                Demander un audit GEO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
