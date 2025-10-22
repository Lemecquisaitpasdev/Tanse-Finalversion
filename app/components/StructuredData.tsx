/**
 * Composant pour ajouter des données structurées Schema.org JSON-LD
 * Améliore le SEO et l'affichage dans les rich snippets Google
 */

type StructuredDataProps = {
  type?: 'Organization' | 'LocalBusiness' | 'WebSite' | 'Service' | 'FAQPage';
};

export default function StructuredData({ type = 'Organization' }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tanse.io';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TANSE',
    description: 'Optimisation SEO et GEO pour PME - Visibilité locale et moteurs de réponse IA',
    url: baseUrl,
    logo: `${baseUrl}/brand/tanse-logo.png`,
    image: `${baseUrl}/brand/tanse-logo.png`,
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'Paris & Lyon',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@tanse.io',
      contactType: 'Customer Service',
      availableLanguage: ['French'],
    },
    sameAs: [
      'https://twitter.com/tanse',
      'https://linkedin.com/company/tanse',
      'https://github.com/tanse',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': baseUrl,
    name: 'TANSE',
    description: 'Agence SEO local et GEO - Optimisation Google Business Profile',
    url: baseUrl,
    telephone: '+33-X-XX-XX-XX-XX',
    email: 'hello@tanse.io',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressRegion: 'Île-de-France',
      addressLocality: 'Paris',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8566',
      longitude: '2.3522',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TANSE',
    url: baseUrl,
    description: 'Rendre votre offre immanquable au moment d\'intention',
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'SEO & GEO Optimization',
    provider: {
      '@type': 'Organization',
      name: 'TANSE',
      url: baseUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services SEO & GEO',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO + GEO - PME',
            description: 'Optimisation Google Business Profile et référencement local',
            price: '1490',
            priceCurrency: 'EUR',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GEO Express',
            description: 'Fiche Google Business optimisée et campagnes locales',
            price: '1890',
            priceCurrency: 'EUR',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Stack GEO',
            description: 'Solution complète multi-sites avec IA et reporting',
            price: '3900',
            priceCurrency: 'EUR',
          },
        },
      ],
    },
  };

  const schemas: Record<typeof type, object> = {
    Organization: organizationSchema,
    LocalBusiness: localBusinessSchema,
    WebSite: websiteSchema,
    Service: serviceSchema,
    FAQPage: {}, // Will be populated on FAQ page
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[type]) }}
    />
  );
}
