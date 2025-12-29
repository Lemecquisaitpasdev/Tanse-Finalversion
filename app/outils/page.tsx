import type { Metadata } from 'next';
import OutilsHero from '../components/outils/OutilsHero';
import BentoSection from '../components/outils/BentoSection';

export const metadata: Metadata = {
  title: 'Outils GEO Gratuits | TANSE - Optimisez votre Visibilité IA',
  description:
    'Testez votre visibilité sur ChatGPT, Claude et Perplexity gratuitement. Outils GEO : Score GEO, Audit Gratuit, Prompt Tracker. Analyse instantanée en 30 secondes.',
  keywords: [
    'outils GEO',
    'score GEO',
    'audit GEO gratuit',
    'visibilité IA',
    'ChatGPT',
    'Claude',
    'Perplexity',
    'TANSE',
    'Generative Engine Optimization',
  ],
  openGraph: {
    title: 'Outils GEO Gratuits | TANSE',
    description: 'Mesurez votre visibilité sur les moteurs IA en 30 secondes',
    type: 'website',
    url: 'https://www.tanse.fr/outils',
  },
};

/**
 * Outils Page - EXACT diabrowser.com pixel-perfect design
 * Features: Bento box layout, large rounded frames (60-80px), colorful gradients, generous spacing (160px)
 */
export default function OutilsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <OutilsHero />

      {/* Bento Sections - diabrowser "Dia is for X" style */}
      <div style={{ background: 'linear-gradient(180deg, #F5F4F1 0%, #FEFEFE 50%, #FAF9F7 100%)' }}>
        <BentoSection
          title="Score GEO"
          subtitle="TANSE est pour"
          description="Évaluez instantanément votre visibilité sur ChatGPT, Claude et Perplexity. Obtenez un score détaillé avec des recommandations personnalisées pour optimiser votre présence."
          ctaText="Analyser mon score"
          ctaHref="/geo-score"
          gradientFrom="rgba(255,200,87,0.8)"
          gradientTo="rgba(255,107,168,0.7)"
          index={0}
        />

        <BentoSection
          title="Audit Complet"
          subtitle="TANSE est pour"
          description="Analyse complète de votre stratégie GEO en 5 minutes. Identifiez vos forces, faiblesses et opportunités d'optimisation pour dominer les moteurs IA."
          ctaText="Obtenir mon audit"
          ctaHref="/audit-gratuit"
          gradientFrom="rgba(139,92,246,0.8)"
          gradientTo="rgba(255,107,168,0.7)"
          index={1}
        />

        <BentoSection
          title="Prompt Tracking"
          subtitle="TANSE est pour"
          description="Suivez en temps réel les prompts qui mentionnent votre marque sur ChatGPT, Claude et Perplexity. Détectez les opportunités et surveillez votre e-réputation."
          ctaText="Tracker ma marque"
          ctaHref="/prompt-tracker"
          gradientFrom="rgba(59,130,246,0.8)"
          gradientTo="rgba(139,92,246,0.7)"
          index={2}
        />
      </div>

      {/* Trust Signals - diabrowser generous spacing */}
      <section className="relative px-6 bg-white" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-20 md:grid-cols-3 text-center">
            <div className="group">
              <div className="text-7xl md:text-8xl font-[800] text-black mb-8 transition-all duration-300 group-hover:scale-105" style={{ letterSpacing: '-0.04em' }}>
                30s
              </div>
              <p className="text-gray-600 text-xl md:text-2xl">Temps d'analyse</p>
            </div>
            <div className="group">
              <div className="text-7xl md:text-8xl font-[800] text-black mb-8 transition-all duration-300 group-hover:scale-105" style={{ letterSpacing: '-0.04em' }}>
                100%
              </div>
              <p className="text-gray-600 text-xl md:text-2xl">Gratuit & sans engagement</p>
            </div>
            <div className="group">
              <div className="text-7xl md:text-8xl font-[800] text-black mb-8 transition-all duration-300 group-hover:scale-105" style={{ letterSpacing: '-0.04em' }}>
                1000+
              </div>
              <p className="text-gray-600 text-xl md:text-2xl">Sites analysés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - diabrowser generous spacing */}
      <section className="relative px-6" style={{ paddingTop: '12rem', paddingBottom: '12rem', background: 'linear-gradient(180deg, #FEFEFE 0%, #FAF9F7 50%, #F5F4F1 100%)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-[800] text-black mb-10" style={{ letterSpacing: '-0.04em' }}>
            Besoin d'une stratégie
            <br />
            GEO complète ?
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-2xl mx-auto leading-[1.5]">
            Découvrez nos forfaits d'accompagnement personnalisés pour maximiser votre visibilité sur les moteurs IA.
          </p>
          <a href="/forfaits-geo-seo" className="inline-flex items-center gap-3 rounded-full bg-black px-12 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-2xl shadow-xl">
            Découvrir nos forfaits
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="relative py-20 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-base text-gray-500">
            © 2025 TANSE. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  );
}
