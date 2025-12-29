import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import AnimatedMeshBackground from '../components/outils/AnimatedMeshBackground';
import OutilsHero from '../components/outils/OutilsHero';
import FeatureSlider from '../components/outils/FeatureSlider';
import PrivacySection from '../components/outils/PrivacySection';
import DiaFooter from '../components/outils/DiaFooter';

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

        {/* Dia Footer with Massive Text */}
        <DiaFooter toolName="TANSE" ctaText="Commencer gratuitement" ctaHref="/geo-score" />
      </main>

      {/* Site Footer */}
      <SiteFooter />
    </>
  );
}
