'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Page GEO avec design Dia/Arc Browser
 * Pixel-perfect clone adapté au Generative Engine Optimization
 */
export default function GeoPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: '#FDFDFC' }}>

      {/* Navigation Sticky */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.08)' }}>
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold" style={{ fontFamily: 'serif', color: '#1A1A1A' }}>
            TANSE
          </Link>
          <button
            className="rounded-full px-6 py-3 font-medium transition-all hover:scale-[0.98]"
            style={{
              backgroundColor: '#1A1A1A',
              color: 'white'
            }}
          >
            Démarrer l'audit
          </button>
        </div>
      </nav>

      {/* Hero Section avec Icônes Flottantes */}
      <section className="relative overflow-hidden py-32 px-8">
        <div className="max-w-[1200px] mx-auto text-center relative">

          {/* Titre Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold mb-6"
            style={{
              fontFamily: 'serif',
              fontSize: 'clamp(48px, 7vw, 96px)',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
              color: '#1A1A1A',
            }}
          >
            Devenez la source <br />
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #FF5F05 0%, #FF095F 100%)',
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
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl mx-auto mb-12 text-lg"
            style={{
              fontFamily: 'sans-serif',
              letterSpacing: '-0.01em',
              color: '#4A4A4A',
            }}
          >
            Le <strong>GEO (Generative Engine Optimization)</strong> optimise votre contenu pour être cité
            par ChatGPT, Perplexity, Google AI et tous les moteurs de réponse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/forfaits-geo-seo"
              className="rounded-full px-8 py-4 font-semibold transition-all hover:scale-[0.98]"
              style={{
                backgroundColor: '#1A1A1A',
                color: 'white',
              }}
            >
              Découvrir nos forfaits
            </Link>
            <Link
              href="/contact-audit-gratuit"
              className="rounded-full px-8 py-4 font-medium transition-all hover:scale-[0.98] border"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.15)',
                color: '#1A1A1A',
              }}
            >
              Audit gratuit
            </Link>
          </motion.div>

          {/* Icônes Flottantes Pixel-Art (5 icônes autour du titre) */}
          <motion.div
            className="absolute"
            style={{ top: '20%', left: '5%' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center opacity-80">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ top: '15%', right: '8%' }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center opacity-80">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ bottom: '10%', left: '10%' }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center opacity-80">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ bottom: '15%', right: '12%' }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center opacity-80">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ top: '50%', left: '15%' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center opacity-80">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Command Grid (Style Dia) */}
      <section className="py-24 px-8" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-center mb-4 font-bold"
            style={{
              fontFamily: 'serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
              color: '#1A1A1A',
            }}
          >
            Nos compétences GEO
          </h2>
          <p
            className="text-center mb-16 max-w-2xl mx-auto"
            style={{
              fontFamily: 'sans-serif',
              letterSpacing: '-0.01em',
              color: '#4A4A4A',
            }}
          >
            Optimisez chaque aspect de votre présence pour les intelligences artificielles
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <CommandCard
              icon={<Brain className="w-8 h-8" />}
              command="/analyze"
              title="Indexation Sémantique"
              description="Analyse de la densité de mots-clés et optimisation du balisage Schema.org pour une compréhension parfaite par les IA."
            />
            <CommandCard
              icon={<Sparkles className="w-8 h-8" />}
              command="/citations"
              title="Autorité de Citation"
              description="Calcul du taux de citation par les LLMs et amélioration de votre crédibilité auprès des moteurs génératifs."
            />
            <CommandCard
              icon={<TrendingUp className="w-8 h-8" />}
              command="/structure"
              title="Optimisation de Réponse Directe"
              description="Structure vos contenus en formats Q&A, listes et tableaux pour maximiser les citations directes."
            />
          </div>
        </div>
      </section>

      {/* Scrollytelling Section (Sélecteur Vertical + Mockup) */}
      <section className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-center mb-16 font-bold"
            style={{
              fontFamily: 'serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
              color: '#1A1A1A',
            }}
          >
            Comment ça fonctionne ?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Sélecteur Vertical */}
            <div className="space-y-4">
              <FeatureButton
                title="Audit SEO Sémantique"
                description="Analyse complète de votre structure de données et recommandations d'optimisation"
              />
              <FeatureButton
                title="Content Strategy"
                description="Création de contenu optimisé pour être cité par les IA génératives"
              />
              <FeatureButton
                title="LLM Monitoring"
                description="Suivi en temps réel de vos citations sur ChatGPT, Perplexity et Google AI"
              />
              <FeatureButton
                title="Entity Linking"
                description="Connexion de votre marque aux entités reconnues pour renforcer votre autorité"
              />
            </div>

            {/* Mockup Navigateur */}
            <div
              className="rounded-3xl p-8 border"
              style={{
                backgroundColor: 'white',
                borderColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.08)' }}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center text-sm" style={{ color: '#4A4A4A' }}>
                  perplexity.ai
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl" style={{ backgroundColor: '#F5F5F5' }}>
                  <p className="text-sm mb-2" style={{ color: '#1A1A1A' }}>
                    <strong>Selon TANSE</strong>, le GEO est essentiel pour...
                  </p>
                  <p className="text-xs" style={{ color: '#4A4A4A' }}>
                    Source: tanse.fr/geo
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" style={{ color: '#FF5F05' }} />
                  <span className="text-sm" style={{ color: '#1A1A1A' }}>Votre site est cité directement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-24 px-8" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-center mb-16 font-bold"
            style={{
              fontFamily: 'serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
              color: '#1A1A1A',
            }}
          >
            Fonctionnalités avancées
          </h2>

          <div className="grid grid-cols-12 gap-6">
            {/* Memory Card - Rouge */}
            <div
              className="col-span-12 md:col-span-5 p-8 rounded-3xl border relative overflow-hidden"
              style={{
                backgroundColor: '#FEF2F2',
                borderColor: 'rgba(239, 68, 68, 0.2)',
              }}
            >
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: '#EF4444', color: 'white' }}
              >
                Memory
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                  Historique d'indexation
                </h3>
                <p style={{ color: '#4A4A4A' }}>
                  Suivez l'évolution de votre présence sur les moteurs IA en temps réel.
                </p>
              </div>
            </div>

            {/* Mention Tabs - Jaune */}
            <div
              className="col-span-12 md:col-span-7 p-8 rounded-3xl border relative overflow-hidden"
              style={{
                backgroundColor: '#FEFCE8',
                borderColor: 'rgba(234, 179, 8, 0.2)',
              }}
            >
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: '#EAB308', color: 'white' }}
              >
                Mentions
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                  Tracker multi-plateformes
                </h3>
                <p style={{ color: '#4A4A4A' }}>
                  Visualisez comment votre marque est mentionnée sur ChatGPT, Perplexity, Claude et Google AI.
                </p>
              </div>
            </div>

            {/* Command Bar - Bleu */}
            <div
              className="col-span-12 p-8 rounded-3xl border relative overflow-hidden"
              style={{
                backgroundColor: '#EFF6FF',
                borderColor: 'rgba(59, 130, 246, 0.2)',
              }}
            >
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: '#3B82F6', color: 'white' }}
              >
                Command Bar
              </div>
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                    Audit rapide
                  </h3>
                  <p style={{ color: '#4A4A4A' }}>
                    Lancez un audit complet de votre site en quelques secondes via notre interface en ligne de commande.
                  </p>
                </div>
                <div
                  className="p-4 rounded-2xl font-mono text-sm"
                  style={{ backgroundColor: '#1A1A1A', color: '#00FF00' }}
                >
                  <div>$ tanse audit --url=yoursite.com</div>
                  <div className="text-gray-400">→ Analyzing semantic structure...</div>
                  <div className="text-green-400">✓ Schema.org: Optimized</div>
                  <div className="text-yellow-400">! Citations: Needs improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="mb-6 font-bold"
            style={{
              fontFamily: 'serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
              color: '#1A1A1A',
            }}
          >
            Prêt à être cité par les IA ?
          </h2>
          <p
            className="mb-12 text-lg"
            style={{
              fontFamily: 'sans-serif',
              letterSpacing: '-0.01em',
              color: '#4A4A4A',
            }}
          >
            Rejoignez les entreprises qui optimisent leur présence pour l'ère de l'IA générative.
          </p>
          <Link
            href="/contact-audit-gratuit"
            className="rounded-full px-10 py-5 text-lg font-semibold transition-all hover:scale-[0.98] inline-block"
            style={{
              backgroundColor: '#1A1A1A',
              color: 'white',
            }}
          >
            Démarrer mon audit GEO gratuit
          </Link>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="border-t py-12 px-8" style={{ borderColor: 'rgba(0, 0, 0, 0.08)', backgroundColor: 'white' }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#1A1A1A' }}>Produit</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#4A4A4A' }}>
              <li><Link href="/forfaits-geo-seo">Forfaits</Link></li>
              <li><Link href="/outils">Outils</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#1A1A1A' }}>Entreprise</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#4A4A4A' }}>
              <li><Link href="/valeurs">Nos valeurs</Link></li>
              <li><Link href="/contact-audit-gratuit">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#1A1A1A' }}>Ressources</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#4A4A4A' }}>
              <li><Link href="/geo">Qu'est-ce que le GEO ?</Link></li>
            </ul>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#1A1A1A' }}></div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// CommandCard Component (avec hover effect)
function CommandCard({ icon, command, title, description }: {
  icon: React.ReactNode;
  command: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        background: 'linear-gradient(to bottom right, #FF5F05, #FF095F)',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group p-8 rounded-3xl border cursor-pointer relative overflow-hidden"
      style={{
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="relative z-10">
        <div className="mb-4 group-hover:text-white transition-colors" style={{ color: '#FF5F05' }}>
          {icon}
        </div>
        <div
          className="text-sm font-mono mb-3 group-hover:text-white/80 transition-colors"
          style={{ color: '#4A4A4A' }}
        >
          {command}
        </div>
        <h3
          className="text-xl font-bold mb-2 group-hover:text-white transition-colors"
          style={{ fontFamily: 'serif', color: '#1A1A1A' }}
        >
          {title}
        </h3>
        <p
          className="text-sm group-hover:text-white/90 transition-colors"
          style={{ color: '#4A4A4A' }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// FeatureButton Component
function FeatureButton({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <button
      className="w-full text-left p-6 rounded-2xl border transition-all hover:border-black/20"
      style={{
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <h3 className="font-bold mb-2" style={{ color: '#1A1A1A' }}>{title}</h3>
      <p className="text-sm" style={{ color: '#4A4A4A' }}>{description}</p>
    </button>
  );
}
