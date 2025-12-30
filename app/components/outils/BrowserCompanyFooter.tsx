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
    product: [
      { label: 'FOR WORK', href: '/forfaits-geo-seo' },
      { label: 'GEO', href: '/geo' },
      { label: 'OFFRE 5 PLACES', href: '/offre-5-places' },
      { label: 'AUDIT OFFERT', href: '/audit-offert' },
      { label: 'BLOG GEO', href: '/blog-seo-geo' },
      { label: 'BLOG LEADS', href: '/blog' },
    ],
    resources: [
      { label: 'HELP', href: '/#faq' },
      { label: 'PRIVACY', href: '/confidentialite' },
      { label: 'TERMS OF USE', href: '/conditions' },
      { label: 'SECURITY', href: '/cgv' },
      { label: 'NEWSLETTER', href: '/blog-seo-geo#newsletter' },
    ],
    company: [
      { label: 'ABOUT US', href: '/agence-geo-paris-lyon' },
      { label: 'NOS VALEURS', href: '/valeurs' },
      { label: 'ÉQUIPE', href: '/agence-geo-paris-lyon#equipe' },
      { label: 'OKURAI', href: '/collaboration-okurai' },
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
        {/* Main Grid - Exactly like TBC */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16 md:mb-20">
          {/* Product Column */}
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
              PRODUCT
            </h3>
            <ul className="space-y-3">
              {footerSections.product.map((link) => (
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

          {/* Resources Column */}
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
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {footerSections.resources.map((link) => (
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

          {/* Company Column */}
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
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerSections.company.map((link) => (
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
              CONNECT
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
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex justify-start lg:justify-end items-start">
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

        {/* Bottom Section - Exactly like TBC */}
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
              COPYRIGHT © {currentYear}
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
              <div>DESIGNED AND BUILT BY</div>
              <div className="mt-0.5 font-medium text-[#1A1A1A]">TANSE OF PARIS & LYON</div>
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
              CURRENT STATUS: <span className="font-medium text-[#16A34A]">DISPONIBLE</span>
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
            <div>DESIGNED AND BUILT BY</div>
            <div className="mt-0.5 font-medium text-[#1A1A1A]">TANSE OF PARIS & LYON</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
