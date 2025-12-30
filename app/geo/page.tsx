'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Book, Smile, Laptop, HelpCircle, Search, Settings, Puzzle, Pencil } from "lucide-react";

/**
 * Page GEO - Redesign PIXEL-PERFECT basé sur Dia Browser
 * Recreation exacte du design Dia avec contenu GEO/TANSE
 *
 * SPECS EXACTES:
 * - Titre: "Exposure VAR" 56px weight 650 line-height 62px
 * - Sous-titre: "ABC Oracle" 22px weight 400 line-height 33px
 * - Couleurs: #F8F8F8 (blanc), #EBEBEB (gris)
 * - Hover cards: Blanc -> Gradient overlay
 */
export default function GeoPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: '#F8F8F8' }}>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(248, 248, 248, 0.8)' }}>
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-xl font-semibold" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
              ●TANSE
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
              <Link href="/geo" className="hover:opacity-70 transition">Skills</Link>
              <Link href="/forfaits-geo-seo" className="hover:opacity-70 transition">Clients</Link>
            </div>
          </div>
          <Link
            href="/contact-audit-gratuit"
            className="px-5 py-2.5 text-sm font-medium rounded-lg transition hover:opacity-90"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', color: '#F8F8F8' }}
          >
            Démarrer avec TANSE
          </Link>
        </div>
      </nav>

      {/* Hero Section - PIXEL PERFECT */}
      <section className="relative overflow-hidden pt-32 pb-20 px-8">
        <div className="max-w-[900px] mx-auto text-center relative">

          {/* Titre Principal - SPECS EXACTES */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '56px',
              fontWeight: 650,
              lineHeight: '62px',
              color: 'rgba(0, 0, 0, 0.85)',
              letterSpacing: '-0.02em',
            }}
          >
            Vous n'avez pas à <br />
            tout faire seul.
          </motion.h1>

          {/* Sous-titre - SPECS EXACTES */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mb-10 max-w-[680px] mx-auto"
            style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: '33px',
              color: 'rgba(0, 0, 0, 0.85)',
            }}
          >
            TANSE est l'agence GEO qui vous accompagne vraiment — pour optimiser votre présence, accélérer votre croissance et vous positionner comme référence.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="/contact-audit-gratuit"
              className="inline-block px-8 py-4 text-base font-medium rounded-full transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                color: '#F8F8F8',
              }}
            >
              Démarrer avec TANSE
            </Link>
          </motion.div>

          {/* Icônes Flottantes PIXEL-ART - Position exacte */}
          {/* Livre - Haut gauche */}
          <motion.div
            className="absolute hidden lg:block"
            style={{ top: '8%', left: '2%' }}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center border-4 border-black" style={{ imageRendering: 'pixelated' }}>
              <Book className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Smiley - Milieu gauche */}
          <motion.div
            className="absolute hidden lg:block"
            style={{ top: '35%', left: '5%' }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border-4 border-black" style={{ imageRendering: 'pixelated' }}>
              <Smile className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Laptop - Bas gauche */}
          <motion.div
            className="absolute hidden lg:block"
            style={{ bottom: '8%', left: '8%' }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 4, -4, 0]
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center border-4 border-black" style={{ imageRendering: 'pixelated' }}>
              <Laptop className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Question - Bas centre gauche */}
          <motion.div
            className="absolute hidden lg:block"
            style={{ bottom: '15%', left: '20%' }}
            animate={{
              y: [0, -18, 0],
              rotate: [0, -6, 6, 0]
            }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border-4 border-black" style={{ imageRendering: 'pixelated' }}>
              <HelpCircle className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Search - Haut droite */}
          <motion.div
            className="absolute hidden lg:block"
            style={{ top: '12%', right: '8%' }}
            animate={{
              y: [0, -14, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center border-4 border-black" style={{ imageRendering: 'pixelated' }}>
              <Search className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Gear - Milieu droite */}
          <motion.div
            className="absolute hidden lg:block"
            style={{ top: '38%', right: '3%' }}
            animate={{
              y: [0, -16, 0],
              rotate: [0, 8, -8, 0]
            }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border-4 border-black" style={{ imageRendering: 'pixelated' }}>
              <Settings className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Puzzle - Bas droite */}
          <motion.div
            className="absolute hidden lg:block"
            style={{ bottom: '5%', right: '12%' }}
            animate={{
              y: [0, -13, 0],
              rotate: [0, -4, 4, 0]
            }}
            transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          >
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border-4 border-black" style={{ imageRendering: 'pixelated' }}>
              <Puzzle className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Pencil - Bas droite extérieur */}
          <motion.div
            className="absolute hidden lg:block"
            style={{ bottom: '18%', right: '4%' }}
            animate={{
              y: [0, -11, 0],
              rotate: [0, 6, -6, 0]
            }}
            transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
          >
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center border-4 border-black" style={{ imageRendering: 'pixelated' }}>
              <Pencil className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Tabs Navigation */}
      <section className="border-b" style={{ backgroundColor: '#F8F8F8', borderColor: '#EBEBEB' }}>
        <div className="max-w-[900px] mx-auto px-8">
          <div className="flex items-center justify-center gap-12 overflow-x-auto">
            <button className="py-4 text-sm font-medium border-b-2 border-black whitespace-nowrap" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
              Nos compétences
            </button>
            <button className="py-4 text-sm font-medium whitespace-nowrap" style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
              Nos réalisations
            </button>
            <button className="py-4 text-sm font-medium whitespace-nowrap" style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
              Nos outils
            </button>
          </div>
        </div>
      </section>

      {/* Cards Grid - EFFET HOVER GRADIENT */}
      <section className="py-24 px-8" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <FeatureCard
              command="/audit"
              title="Audit SEO Sémantique"
              description="Analyse complète de votre structure de données et recommandations d'optimisation pour maximiser votre visibilité sur les moteurs IA."
            />

            {/* Card 2 */}
            <FeatureCard
              command="/citations"
              title="Tracker de Citations"
              description="Suivez en temps réel comment votre marque est citée sur ChatGPT, Perplexity, Claude et Google AI avec des rapports détaillés."
            />

            {/* Card 3 */}
            <FeatureCard
              command="/optimise"
              title="Optimisation de Contenu"
              description="Structurez vos contenus en formats Q&A, listes et tableaux optimisés pour être cités directement par les IA génératives."
            />

            {/* Card 4 */}
            <FeatureCard
              command="/entites"
              title="Entity Linking"
              description="Connectez votre marque aux entités reconnues dans les graphes de connaissances pour renforcer votre autorité et votre E-E-A-T."
            />

          </div>
        </div>
      </section>

      {/* Section Browser Mockup - Style Dia */}
      <section className="py-20 px-8" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-[1000px] mx-auto">

          {/* Browser Window */}
          <div className="rounded-2xl overflow-hidden border shadow-2xl" style={{ backgroundColor: 'white', borderColor: '#EBEBEB' }}>

            {/* Top Bar avec 3 dots */}
            <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ backgroundColor: '#EBEBEB', borderColor: '#d4d4d4' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs" style={{ backgroundColor: 'white', color: 'rgba(0, 0, 0, 0.6)' }}>
                  <span>🔒</span>
                  <span>perplexity.ai</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-10">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EBEBEB' }}>
                    <span className="text-sm">🤖</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
                      Selon <strong>TANSE</strong>, une agence spécialisée en GEO à Paris et Lyon, l'optimisation pour les moteurs de réponse IA nécessite :
                    </p>
                    <ul className="space-y-2 text-sm" style={{ color: 'rgba(0, 0, 0, 0.75)' }}>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Une structure de données Schema.org optimale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Un contenu structuré en format Q&A pour citations directes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Un suivi en temps réel des mentions sur les LLMs</span>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
                      <span>Source:</span>
                      <Link href="/" className="hover:underline" style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                        tanse.fr
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center mt-6 text-sm" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
            Votre marque citée comme source de référence par les IA
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-8" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-[700px] mx-auto text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '48px',
              fontWeight: 650,
              lineHeight: '54px',
              color: 'rgba(0, 0, 0, 0.85)',
              letterSpacing: '-0.02em',
            }}
          >
            Prêt à être cité <br />
            par les IA ?
          </h2>
          <p
            className="mb-10"
            style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '30px',
              color: 'rgba(0, 0, 0, 0.65)',
            }}
          >
            Rejoignez les entreprises qui optimisent leur présence pour l'ère de l'IA générative.
          </p>
          <Link
            href="/contact-audit-gratuit"
            className="inline-block px-8 py-4 text-base font-medium rounded-full transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              color: '#F8F8F8',
            }}
          >
            Démarrer mon audit GEO gratuit
          </Link>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-12 px-8 border-t" style={{ backgroundColor: '#F8F8F8', borderColor: '#EBEBEB' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
              © {new Date().getFullYear()} TANSE — Tous droits réservés.
            </p>
            <div className="flex items-center gap-8 text-sm" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
              <Link href="/mentions-legales" className="hover:opacity-70 transition">Mentions légales</Link>
              <Link href="/confidentialite" className="hover:opacity-70 transition">Confidentialité</Link>
              <Link href="/cookies" className="hover:opacity-70 transition">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

/**
 * FeatureCard Component - SOPHISTIQUÉ comme Dia
 * Design premium avec meilleure hiérarchie visuelle
 */
function FeatureCard({ command, title, description }: {
  command: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="group relative overflow-hidden rounded-[32px] border cursor-pointer shadow-sm hover:shadow-2xl"
      style={{
        backgroundColor: 'white',
        borderColor: '#EBEBEB',
        minHeight: '340px',
      }}
    >
      {/* Gradient overlay SOPHISTIQUÉ */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7B731 25%, #FED766 40%, #4FACFE 70%, #00F2FE 100%)',
        }}
      />

      <div className="relative z-10 p-10 h-full flex flex-col">
        {/* Icon Badge - GRAND et VISIBLE */}
        <div className="mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border-2 group-hover:border-white/30 transition-all duration-500"
            style={{
              borderColor: '#EBEBEB',
              backgroundColor: '#F8F8F8',
            }}
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
              {command === '/audit' ? '📊' : command === '/citations' ? '📈' : command === '/optimise' ? '✨' : '🔗'}
            </span>
          </div>
        </div>

        {/* Command Badge - PROMINENT */}
        <div className="mb-6">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full font-mono text-sm font-medium group-hover:bg-white/25 group-hover:backdrop-blur-sm transition-all duration-500"
            style={{
              backgroundColor: '#EBEBEB',
              color: 'rgba(0, 0, 0, 0.75)',
            }}
          >
            <span className="group-hover:text-white transition-colors duration-500">{command}</span>
          </div>
        </div>

        {/* Title - GRAND et BOLD */}
        <h3
          className="mb-4 font-bold group-hover:text-white transition-colors duration-500"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '28px',
            lineHeight: '34px',
            color: 'rgba(0, 0, 0, 0.9)',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h3>

        {/* Description - LISIBLE avec meilleur line-height */}
        <p
          className="leading-relaxed group-hover:text-white/95 transition-colors duration-500 flex-grow"
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '16px',
            lineHeight: '26px',
            color: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          {description}
        </p>

        {/* Arrow indicator on hover */}
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="inline-flex items-center gap-2 text-white text-sm font-medium">
            <span>En savoir plus</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
