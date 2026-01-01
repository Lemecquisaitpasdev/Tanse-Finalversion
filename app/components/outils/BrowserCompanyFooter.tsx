'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * BrowserCompanyFooter - The Browser Company (Dia) exact replica
 * Exact typography: ABC Favorit Mono, 13px, weight 400, line-height 16-17px
 */
export default function BrowserCompanyFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    entreprise: [
      { label: 'À PROPOS', href: '/agence-geo-paris-lyon' },
      { label: 'NOTRE MÉTHODE', href: '/agence-geo-paris-lyon#method' },
      { label: 'ÉQUIPE', href: '/agence-geo-paris-lyon#equipe' },
      { label: 'COLLABORATION OKURAI', href: '/collaboration-okurai' },
      { label: 'PARIS & LYON', href: '/agence-geo-paris-lyon' },
    ],
    produits: [
      { label: 'FORFAITS', href: '/forfaits-geo-seo' },
      { label: 'OFFRE 5 PLACES', href: '/offre-5-places' },
      { label: 'AUDIT SEO + GEO OFFERT', href: '/audit-offert' },
      { label: 'GEO - OPTIMISATION IA', href: '/geo' },
      { label: 'BLOG LEAD GENERATION', href: '/blog' },
      { label: 'BLOG SEO & GEO', href: '/blog-seo-geo' },
      { label: 'RÉSULTATS & CHIFFRES', href: '/#stats' },
      { label: 'INSIGHTS TRAFIC', href: '/#insights' },
    ],
    ressources: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'NEWSLETTER', href: '/blog-seo-geo#newsletter' },
      { label: 'CONTACT@TANSE.FR', href: 'mailto:contact@tanse.fr' },
    ],
    legal: [
      { label: 'CGV', href: '/cgv' },
      { label: 'CGU', href: '/conditions' },
      { label: 'CONFIDENTIALITÉ', href: '/confidentialite' },
      { label: 'COOKIES', href: '/cookies' },
      { label: 'MENTIONS LÉGALES', href: '/mentions-legales' },
      { label: 'POLITIQUE IA', href: '/ia' },
    ],
    connect: [
      { label: 'X', href: 'https://x.com/tanse_fr', external: true },
      { label: 'LINKEDIN', href: 'https://www.linkedin.com/company/tanse', external: true },
      { label: 'CONTACT', href: 'mailto:contact@tanse.fr' },
    ],
  };

  return (
    <footer className="relative bg-[#F8F8F8] border-t border-[#E0E0E0] py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Main Grid - 6 colonnes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16 md:mb-20">
          {/* Entreprise Column */}
          <div>
            <h3
              className="mb-5 text-[#1A1A1A]"
              style={{
                fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '17px',
                letterSpacing: '0.08em',
                fontStyle: 'normal',
              }}
            >
              ENTREPRISE
            </h3>
            <ul className="space-y-3">
              {footerSections.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#737373] hover:bg-black hover:text-white transition-all duration-150 px-1 py-0.5 -ml-1 rounded"
                    style={{
                      fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      letterSpacing: '0.01em',
                      fontStyle: 'normal',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produits Column */}
          <div>
            <h3
              className="mb-5 text-[#1A1A1A]"
              style={{
                fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '17px',
                letterSpacing: '0.08em',
                fontStyle: 'normal',
              }}
            >
              PRODUITS
            </h3>
            <ul className="space-y-3">
              {footerSections.produits.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#737373] hover:bg-black hover:text-white transition-all duration-150 px-1 py-0.5 -ml-1 rounded"
                    style={{
                      fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      letterSpacing: '0.01em',
                      fontStyle: 'normal',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources Column */}
          <div>
            <h3
              className="mb-5 text-[#1A1A1A]"
              style={{
                fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '17px',
                letterSpacing: '0.08em',
                fontStyle: 'normal',
              }}
            >
              RESSOURCES
            </h3>
            <ul className="space-y-3">
              {footerSections.ressources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#737373] hover:bg-black hover:text-white transition-all duration-150 px-1 py-0.5 -ml-1 rounded"
                    style={{
                      fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      letterSpacing: '0.01em',
                      fontStyle: 'normal',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3
              className="mb-5 text-[#1A1A1A]"
              style={{
                fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '17px',
                letterSpacing: '0.08em',
                fontStyle: 'normal',
              }}
            >
              LÉGAL
            </h3>
            <ul className="space-y-3">
              {footerSections.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#737373] hover:bg-black hover:text-white transition-all duration-150 px-1 py-0.5 -ml-1 rounded"
                    style={{
                      fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      letterSpacing: '0.01em',
                      fontStyle: 'normal',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3
              className="mb-5 text-[#1A1A1A]"
              style={{
                fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '17px',
                letterSpacing: '0.08em',
                fontStyle: 'normal',
              }}
            >
              CONTACT
            </h3>
            <ul className="space-y-3">
              {footerSections.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="text-[#737373] hover:bg-black hover:text-white transition-all duration-150 px-1 py-0.5 -ml-1 rounded"
                    style={{
                      fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      letterSpacing: '0.01em',
                      fontStyle: 'normal',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo Column - Top Right */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex justify-start lg:justify-end items-start">
            <div className="relative w-36 h-36 opacity-90">
              <Image
                src="/brand/tanse-logo.png?v=3"
                alt="TANSE"
                width={144}
                height={144}
                className="object-contain grayscale-[20%]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#E0E0E0] pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[#737373]">
            {/* Left: Copyright */}
            <div
              className="flex-shrink-0"
              style={{
                fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '16px',
                letterSpacing: '0.05em',
                fontStyle: 'normal',
              }}
            >
              © {currentYear} TANSE — TOUS DROITS RÉSERVÉS
            </div>

            {/* Center: Designed and Built By */}
            <div
              className="flex-1 text-center hidden md:block"
              style={{
                fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '16px',
                letterSpacing: '0.05em',
                fontStyle: 'normal',
              }}
            >
              <div>CONÇU ET DÉVELOPPÉ PAR</div>
              <div className="mt-0.5 font-medium text-[#1A1A1A]">TANSE DE PARIS & LYON</div>
            </div>

            {/* Right: Current Status */}
            <div
              className="flex-shrink-0 text-left md:text-right"
              style={{
                fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '16px',
                letterSpacing: '0.05em',
                fontStyle: 'normal',
              }}
            >
              STATUT ACTUEL: <span className="font-medium text-[#16A34A]">DISPONIBLE</span>
            </div>
          </div>

          {/* Mobile: Designed and Built By */}
          <div
            className="md:hidden text-center mt-6"
            style={{
              fontFamily: '"ABC Favorit Mono", "Roboto Mono", monospace',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '16px',
              letterSpacing: '0.05em',
              fontStyle: 'normal',
              color: '#737373',
            }}
          >
            <div>CONÇU ET DÉVELOPPÉ PAR</div>
            <div className="mt-0.5 font-medium text-[#1A1A1A]">TANSE DE PARIS & LYON</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
