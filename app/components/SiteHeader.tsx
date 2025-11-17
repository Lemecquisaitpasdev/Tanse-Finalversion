"use client";

import Link from "next/link";

export default function SiteHeader() {
  const navLinkBase = "pointer-events-auto rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium min-h-[36px] md:min-h-0 flex items-center justify-center transition-all duration-200";
  const navLinkDefault = "text-[#24243C] hover:bg-white";
  const navLinkPrimary = "text-white bg-[#444684] hover:opacity-90";

  return (
    <div className="pointer-events-none fixed left-1/2 top-4 md:top-6 z-50 -translate-x-1/2 w-full max-w-[calc(100%-2rem)] md:max-w-none">
      <nav className="flex items-center justify-center gap-1 md:gap-2 rounded-full bg-white/80 md:bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5 mx-auto w-fit">
        <Link
          href="/forfaits-geo-seo"
          className={`${navLinkBase} ${navLinkDefault}`}
        >
          Forfaits
        </Link>
        <Link
          href="/agence-geo-paris-lyon"
          className={`${navLinkBase} ${navLinkDefault}`}
        >
          Entreprise
        </Link>
        <Link
          href="/geo"
          className={`${navLinkBase} ${navLinkDefault}`}
        >
          GEO
        </Link>
        <Link
          href="/blog-seo-geo"
          className={`${navLinkBase} ${navLinkDefault}`}
        >
          Blog
        </Link>
        <Link
          href="/contact-audit-gratuit"
          className={`${navLinkBase} ${navLinkPrimary}`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
