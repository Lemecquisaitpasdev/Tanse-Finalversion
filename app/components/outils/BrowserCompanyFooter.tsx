'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * BrowserCompanyFooter - The Browser Company (Dia) style footer
 * Ultra-minimal, spacious footer with uppercase text and clean layout
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
      { label: 'NOS VALEURS', href: '/agence-geo-paris-lyon#method' },
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
    <footer className="relative bg-[#FAFAFA] text-[#3a3a3a] py-16 md:py-20 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Product Column */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.1em] mb-6 text-[#3a3a3a]">
              PRODUCT
            </h3>
            <ul className="space-y-3">
              {footerSections.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#6a6a6a] hover:text-black transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.1em] mb-6 text-[#3a3a3a]">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {footerSections.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#6a6a6a] hover:text-black transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.1em] mb-6 text-[#3a3a3a]">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerSections.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#6a6a6a] hover:text-black transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.1em] mb-6 text-[#3a3a3a]">
              CONNECT
            </h3>
            <ul className="space-y-3">
              {footerSections.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="text-[13px] text-[#6a6a6a] hover:text-black transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex justify-start lg:justify-end items-start">
            <div className="relative w-32 h-32">
              <Image
                src="/brand/tanse-logo.png?v=3"
                alt="TANSE"
                width={128}
                height={128}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#e0e0e0] pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] text-[#6a6a6a] tracking-[0.05em]">
            {/* Copyright */}
            <div>
              <p>COPYRIGHT © {currentYear}</p>
            </div>

            {/* Built by */}
            <div className="flex-1 text-center hidden md:block">
              <p>DESIGNED AND BUILT BY</p>
              <p className="mt-1 font-semibold">TANSE OF PARIS & LYON</p>
            </div>

            {/* Status */}
            <div className="text-left md:text-right">
              <p>CURRENT STATUS: <span className="font-semibold text-green-700">DISPONIBLE</span></p>
            </div>
          </div>

          {/* Mobile Built by */}
          <div className="md:hidden text-center mt-6 text-[11px] text-[#6a6a6a] tracking-[0.05em]">
            <p>DESIGNED AND BUILT BY</p>
            <p className="mt-1 font-semibold">TANSE OF PARIS & LYON</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
