import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import AnimatedMeshBackground from '../components/outils/AnimatedMeshBackground';
import OutilsHero from '../components/outils/OutilsHero';
import FeatureSlider from '../components/outils/FeatureSlider';
import PrivacySection from '../components/outils/PrivacySection';

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
 * Outils Page - The Browser Company (Dia) pixel-perfect design
 * Features: Animated mesh gradient, cycling words, floating search bar, browser mockups, glassmorphism
 */
export default function OutilsPage() {
  const featureSlides = [
    {
      title: 'Mesurer votre impact',
      subtitle: 'Score GEO en temps réel',
      description:
        'Analysez instantanément votre visibilité sur ChatGPT, Claude et Perplexity. Obtenez un score détaillé avec des recommandations actionnables pour améliorer votre présence sur les moteurs IA.',
      ctaText: 'Analyser maintenant',
      ctaHref: '/geo-score',
    },
    {
      title: 'Optimiser votre stratégie',
      subtitle: 'Audit complet et détaillé',
      description:
        'Analyse approfondie de votre stratégie GEO en 5 minutes. Identifiez vos forces, vos opportunités et les axes d\'amélioration pour dominer les résultats des IA conversationnelles.',
      ctaText: 'Obtenir mon audit',
      ctaHref: '/audit-gratuit',
    },
    {
      title: 'Surveiller votre marque',
      subtitle: 'Tracking en temps réel',
      description:
        'Suivez les mentions de votre marque dans les réponses de ChatGPT, Claude et Perplexity. Détectez les opportunités, surveillez votre e-réputation et restez informé des tendances.',
      ctaText: 'Commencer le tracking',
      ctaHref: '/prompt-tracker',
    },
  ];

  return (
    <>
      {/* Site Header */}
      <SiteHeader />

      <main className="relative min-h-screen">
        {/* Animated Mesh Gradient Background */}
        <AnimatedMeshBackground />

        {/* Hero Section */}
        <OutilsHero />

      {/* Feature Slider with Browser Mockups */}
      <FeatureSlider toolName="TANSE" slides={featureSlides} />

      {/* Trust Signals - Dia generous spacing */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-3 text-center">
            <div className="group">
              <div className="text-6xl md:text-7xl font-medium text-black mb-6 transition-all duration-300 group-hover:scale-105" style={{ letterSpacing: '-0.02em' }}>
                30s
              </div>
              <p className="text-gray-600 text-lg md:text-xl">Temps d'analyse</p>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-medium text-black mb-6 transition-all duration-300 group-hover:scale-105" style={{ letterSpacing: '-0.02em' }}>
                100%
              </div>
              <p className="text-gray-600 text-lg md:text-xl">Gratuit & sans engagement</p>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-medium text-black mb-6 transition-all duration-300 group-hover:scale-105" style={{ letterSpacing: '-0.02em' }}>
                1000+
              </div>
              <p className="text-gray-600 text-lg md:text-xl">Sites analysés</p>
            </div>
          </div>
        </div>
      </section>

        {/* Privacy Section with Glassmorphism */}
        <PrivacySection />

        {/* Bottom CTA Section */}
        <section className="relative px-6" style={{ paddingTop: '12rem', paddingBottom: '12rem', background: 'linear-gradient(180deg, #FEFEFE 0%, #FAF9F7 50%, #F5F4F1 100%)' }}>
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium text-black mb-10" style={{ letterSpacing: '-0.02em' }}>
              Besoin d'une stratégie
              <br />
              GEO complète ?
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-2xl mx-auto leading-[1.5]">
              Découvrez nos forfaits d'accompagnement personnalisés pour maximiser votre visibilité sur les moteurs IA.
            </p>
            <a href="/forfaits-geo-seo" className="inline-flex items-center gap-3 rounded-[40px] bg-black px-12 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-2xl shadow-xl">
              Découvrir nos forfaits
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <SiteFooter />
    </>
  );
}
