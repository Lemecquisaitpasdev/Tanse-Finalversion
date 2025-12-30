'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Zap, ArrowRight, CheckCircle2, Mail, MapPin, Cookie, Settings } from "lucide-react";
import { useState } from "react";

/**
 * Page GEO - Refactorisation PIXEL-PERFECT
 * 98% de fidélité avec Dia Browser
 *
 * RÈGLES ABSOLUES:
 * - Fraunces/Playfair pour titres avec tracking-tighter
 * - Background #F9F9F8 (off-white chaud)
 * - Cartes: Blanc -> Gradient violent au hover
 * - Icônes: Float + Rotate animations
 */
export default function GeoPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Audit SEO Sémantique",
      description: "Analyse complète de votre structure de données et recommandations d'optimisation",
      mockupContent: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-slate-900">Schema.org détecté</p>
                <p className="text-xs text-slate-600 mt-1">Structure optimale pour les IA</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-slate-900">Entités reconnues: 47</p>
                <p className="text-xs text-slate-600 mt-1">Excellent niveau de citation</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Content Strategy",
      description: "Création de contenu optimisé pour être cité par les IA génératives",
      mockupContent: (
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Recommandations IA:</p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">→</span>
                <span>Structurer en format Q&A pour citations directes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">→</span>
                <span>Ajouter des données chiffrées vérifiables</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "LLM Monitoring",
      description: "Suivi en temps réel de vos citations sur ChatGPT, Perplexity et Google AI",
      mockupContent: (
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-700">Citations cette semaine</span>
              <span className="text-2xl font-bold text-emerald-600">127</span>
            </div>
            <div className="flex gap-2 text-xs">
              <div className="px-2 py-1 rounded bg-emerald-100 text-emerald-700">ChatGPT: 45</div>
              <div className="px-2 py-1 rounded bg-blue-100 text-blue-700">Perplexity: 62</div>
              <div className="px-2 py-1 rounded bg-purple-100 text-purple-700">Google AI: 20</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Entity Linking",
      description: "Connexion de votre marque aux entités reconnues pour renforcer votre autorité",
      mockupContent: (
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200">
            <p className="text-sm font-semibold text-slate-900 mb-3">Graphe de connaissances:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-white border border-orange-300 text-orange-700">Paris</span>
              <span className="px-3 py-1 rounded-full text-xs bg-white border border-orange-300 text-orange-700">SEO</span>
              <span className="px-3 py-1 rounded-full text-xs bg-white border border-orange-300 text-orange-700">IA</span>
              <span className="px-3 py-1 rounded-full text-xs bg-white border border-orange-300 text-orange-700">Marketing</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen" style={{ backgroundColor: '#F9F9F8' }}>

      {/* Navigation Sticky */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.08)' }}>
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '-0.02em', color: '#1A1A1A' }}>
            TANSE
          </Link>
          <Link
            href="/contact-audit-gratuit"
            className="rounded-full px-6 py-3 font-semibold transition-all active:scale-95"
            style={{
              backgroundColor: '#1A1A1A',
              color: 'white',
              borderRadius: '12px',
            }}
          >
            Démarrer l'audit
          </Link>
        </div>
      </nav>

      {/* Hero Section - MONSTRUEUX */}
      <section className="relative overflow-hidden py-32 px-8">
        <div className="max-w-[1200px] mx-auto text-center relative">

          {/* Titre MONSTRUEUX */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-bold mb-8"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(56px, 10vw, 120px)',
              letterSpacing: '-0.05em',
              lineHeight: '0.95',
              color: '#1A1A1A',
              fontWeight: 700,
            }}
          >
            Devenez la source <br />
            <span
              className="inline-block mt-2"
              style={{
                background: 'linear-gradient(135deg, #FF4D00 0%, #FF0080 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              préférée des IA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '20px',
              lineHeight: '1.6',
              letterSpacing: '-0.01em',
              color: '#4A4A4A',
            }}
          >
            Le <strong style={{ color: '#1A1A1A' }}>GEO (Generative Engine Optimization)</strong> optimise votre contenu
            pour être cité par ChatGPT, Perplexity, Google AI et tous les moteurs de réponse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/forfaits-geo-seo"
              className="px-10 py-4 font-semibold transition-all active:scale-95 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#1A1A1A',
                color: 'white',
                borderRadius: '12px',
                fontSize: '16px',
              }}
            >
              Découvrir nos forfaits
            </Link>
            <Link
              href="/contact-audit-gratuit"
              className="px-10 py-4 font-medium transition-all active:scale-95 border-2 hover:bg-white"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.15)',
                color: '#1A1A1A',
                borderRadius: '12px',
                fontSize: '16px',
                backgroundColor: 'transparent',
              }}
            >
              Audit gratuit
            </Link>
          </motion.div>

          {/* Icônes Flottantes PIXEL-ART avec Rotation */}
          <motion.div
            className="absolute"
            style={{ top: '15%', left: '8%' }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-blue-300">
              <Brain className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ top: '12%', right: '10%' }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, -8, 8, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-purple-300">
              <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ bottom: '12%', left: '12%' }}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-orange-300">
              <Zap className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ bottom: '18%', right: '15%' }}
            animate={{
              y: [0, -22, 0],
              rotate: [0, -12, 12, 0]
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-green-300">
              <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ top: '48%', right: '5%' }}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 7, -7, 0]
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-pink-300">
              <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Command Grid - CORRECTION MAJEURE */}
      <section className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-center mb-4 font-bold"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-0.05em',
              lineHeight: '1.1',
              color: '#1A1A1A',
              fontWeight: 700,
            }}
          >
            Nos compétences GEO
          </h2>
          <p
            className="text-center mb-16 max-w-2xl mx-auto text-lg"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.01em',
              color: '#666',
            }}
          >
            Optimisez chaque aspect de votre présence pour les intelligences artificielles
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <CommandCard
              icon={<Brain className="w-10 h-10" strokeWidth={2} />}
              command="/analyze"
              title="Indexation Sémantique"
              description="Analyse de la densité de mots-clés et optimisation du balisage Schema.org pour une compréhension parfaite par les IA."
            />
            <CommandCard
              icon={<Sparkles className="w-10 h-10" strokeWidth={2} />}
              command="/citations"
              title="Autorité de Citation"
              description="Calcul du taux de citation par les LLMs et amélioration de votre crédibilité auprès des moteurs génératifs."
            />
            <CommandCard
              icon={<TrendingUp className="w-10 h-10" strokeWidth={2} />}
              command="/structure"
              title="Optimisation de Réponse Directe"
              description="Structure vos contenus en formats Q&A, listes et tableaux pour maximiser les citations directes."
            />
          </div>
        </div>
      </section>

      {/* Section Partner - Grid 2 colonnes avec MOCKUP CODÉ */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-center mb-16 font-bold"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-0.05em',
              lineHeight: '1.1',
              color: '#1A1A1A',
              fontWeight: 700,
            }}
          >
            Comment ça fonctionne ?
          </h2>

          <div className="grid md:grid-cols-[40%_60%] gap-12">
            {/* Menu Liste (40%) */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-5 transition-all border-l-4 ${
                    activeFeature === index
                      ? 'border-black bg-gray-50'
                      : 'border-transparent hover:border-gray-300 hover:bg-gray-50/50'
                  }`}
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  <h3 className={`font-bold mb-1 ${activeFeature === index ? 'text-black' : 'text-gray-700'}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </button>
              ))}
            </div>

            {/* Mockup Navigateur CODÉ (60%) */}
            <div
              className="rounded-xl border shadow-2xl overflow-hidden"
              style={{
                backgroundColor: 'white',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Top Bar MacOS */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-md text-xs text-gray-600 border border-gray-200">
                    <div className="w-3 h-3 text-gray-400">🔒</div>
                    <span>perplexity.ai</span>
                  </div>
                </div>
              </div>

              {/* Contenu du Mockup */}
              <div className="p-8 min-h-[280px]">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {features[activeFeature]?.mockupContent}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid - COULEURS SPÉCIFIQUES */}
      <section className="py-24 px-8" style={{ backgroundColor: '#F9F9F8' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-center mb-16 font-bold"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-0.05em',
              lineHeight: '1.1',
              color: '#1A1A1A',
              fontWeight: 700,
            }}
          >
            Fonctionnalités avancées
          </h2>

          <div className="grid grid-cols-12 gap-6">
            {/* Carte 1 - ROUGE/ORANGE (Historique) */}
            <div
              className="col-span-12 md:col-span-5 p-10 rounded-3xl relative overflow-hidden shadow-lg"
              style={{
                backgroundColor: '#FF5733',
                border: 'none',
              }}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-3 text-white" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.03em' }}>
                  Historique d'indexation
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Suivez l'évolution de votre présence sur les moteurs IA en temps réel avec notre tableau de bord analytics.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Carte 2 - JAUNE PÂLE (Tracker) */}
            <div
              className="col-span-12 md:col-span-7 p-10 rounded-3xl relative overflow-hidden shadow-lg border"
              style={{
                backgroundColor: '#FFF8D6',
                borderColor: 'rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.03em', color: '#1A1A1A' }}>
                  Tracker multi-plateformes
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Visualisez comment votre marque est mentionnée sur ChatGPT, Perplexity, Claude et Google AI avec des rapports détaillés.
                </p>
              </div>
            </div>

            {/* Carte 3 - NOIR/BLEU NUIT (Terminal) */}
            <div
              className="col-span-12 p-10 rounded-3xl relative overflow-hidden shadow-xl"
              style={{
                backgroundColor: '#0F1419',
                border: 'none',
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-white" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.03em' }}>
                    Audit rapide via Command Bar
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Lancez un audit complet de votre site en quelques secondes via notre interface en ligne de commande.
                  </p>
                </div>
                <div
                  className="p-6 rounded-2xl font-mono text-sm leading-relaxed"
                  style={{ backgroundColor: '#1A1F26', color: '#00FF00' }}
                >
                  <div className="mb-2 text-gray-400">$ tanse audit --url=yoursite.com</div>
                  <div className="mb-2 text-gray-500">→ Analyzing semantic structure...</div>
                  <div className="mb-2 text-green-400">✓ Schema.org: <span className="text-green-300">Optimized</span></div>
                  <div className="mb-2 text-yellow-400">! Citations: <span className="text-yellow-300">Needs improvement</span></div>
                  <div className="text-blue-400">→ E-E-A-T Score: <span className="text-blue-300">87/100</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="mb-6 font-bold"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(40px, 7vw, 72px)',
              letterSpacing: '-0.05em',
              lineHeight: '1.05',
              color: '#1A1A1A',
              fontWeight: 700,
            }}
          >
            Prêt à être cité par les IA ?
          </h2>
          <p
            className="mb-12 text-xl leading-relaxed"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.01em',
              color: '#666',
            }}
          >
            Rejoignez les entreprises qui optimisent leur présence pour l'ère de l'IA générative.
          </p>
          <Link
            href="/contact-audit-gratuit"
            className="inline-block px-12 py-5 text-lg font-semibold transition-all active:scale-95 shadow-xl hover:shadow-2xl"
            style={{
              backgroundColor: '#1A1A1A',
              color: 'white',
              borderRadius: '12px',
            }}
          >
            Démarrer mon audit GEO gratuit
          </Link>
        </div>
      </section>

      {/* Footer - RÉUTILISÉ de SiteFooter */}
      <footer className="relative mt-28 text-slate-900">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2F3F5] via-[#E4E4E4] to-[#F7F8FA]" />
          <div className="absolute -top-16 -left-24 h-72 w-72 rounded-full bg-[#444684]/10 blur-3xl" />
          <div className="absolute -bottom-8 -right-24 h-96 w-96 rounded-full bg-[#444684]/15 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-14 md:py-18">
          <div className="mb-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <Image
              src="/brand/tanse-logo.png?v=3"
              alt="TANSE"
              width={960}
              height={240}
              priority
              className="h-[96px] md:h-[160px] lg:h-[192px] w-auto select-none"
            />
            <div className="flex items-center gap-3">
              <Link
                href="mailto:contact@tanse.fr"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur transition hover:bg-white"
              >
                <Image src="/brand/tanse-mark.png?v=3" alt="" width={20} height={20} className="h-5 w-5" />
                Nous contacter
              </Link>
              <Link
                href="/forfaits-geo-seo"
                className="inline-flex items-center gap-2 rounded-full bg-[#444684] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Forfaits <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Entreprise</h3>
              <ul className="space-y-2 text-sm text-slate-800">
                <li><Link href="/agence-geo-paris-lyon" className="hover:text-slate-950 transition">À propos</Link></li>
                <li><Link href="/valeurs" className="hover:text-slate-950 transition">Nos valeurs</Link></li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-600" />
                  <span>Paris & Lyon</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Produits</h3>
              <ul className="space-y-2 text-sm text-slate-800">
                <li><Link href="/forfaits-geo-seo" className="hover:text-slate-950 transition">Forfaits</Link></li>
                <li><Link href="/geo" className="hover:text-slate-950 transition">GEO - Optimisation IA</Link></li>
                <li><Link href="/outils" className="hover:text-slate-950 transition">Outils</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Ressources</h3>
              <ul className="space-y-2 text-sm text-slate-800">
                <li><Link href="/#faq" className="hover:text-slate-950 transition">FAQ</Link></li>
                <li>
                  <Link href="mailto:contact@tanse.fr" className="inline-flex items-center gap-2 hover:text-slate-950 transition">
                    <Mail className="h-4 w-4 text-slate-600" /> contact@tanse.fr
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Légal</h3>
              <ul className="space-y-2 text-sm text-slate-800">
                <li><Link href="/mentions-legales" className="hover:text-slate-950 transition">Mentions légales</Link></li>
                <li><Link href="/confidentialite" className="hover:text-slate-950 transition">Confidentialité</Link></li>
                <li><Link href="/cookies" className="hover:text-slate-950 transition">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-300/70 pt-6 text-xs text-slate-700">
            <p className="text-center">© {new Date().getFullYear()} TANSE — Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/**
 * CommandCard Component - CORRECTION MAJEURE
 * État par défaut: BLANC
 * État Hover: GRADIENT VIOLENT + Texte blanc + Scale 105
 */
function CommandCard({ icon, command, title, description }: {
  icon: React.ReactNode;
  command: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="group p-10 cursor-pointer relative overflow-hidden border shadow-sm hover:shadow-2xl transition-shadow duration-300"
      style={{
        backgroundColor: 'white',
        borderColor: '#E5E7EB',
        borderRadius: '24px',
      }}
    >
      {/* Gradient overlay au hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to bottom right, #FF4D00, #FF0080)',
        }}
      />

      <div className="relative z-10">
        <div className="mb-5 text-black group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div
          className="text-sm font-mono mb-4 text-gray-500 group-hover:text-white/80 transition-colors duration-300"
          style={{ fontFamily: 'monospace' }}
        >
          {command}
        </div>
        <h3
          className="text-2xl font-bold mb-3 text-black group-hover:text-white transition-colors duration-300"
          style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-300"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
