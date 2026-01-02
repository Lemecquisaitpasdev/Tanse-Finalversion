'use client';

import Link from 'next/link';

/**
 * SiteHeader - Header simplifié pour toutes les pages TANSE
 * Sans logo, navigation minimale
 */
export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-tight">Tanse</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Index
          </Link>
          <Link href="/forfaits-geo-seo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Forfaits
          </Link>
          <Link href="/agence-geo-paris-lyon" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Entreprise
          </Link>
          <Link href="/blog-seo-geo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/contact-audit-gratuit" className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors">
            Contactez-nous
          </Link>
        </nav>
      </div>
    </header>
  );
}
