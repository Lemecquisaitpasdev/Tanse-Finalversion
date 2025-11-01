import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Redirections 301 permanentes pour migration URLs SEO
const REDIRECTS_301: Record<string, string> = {
  // Pages principales renommées
  '/forfaits': '/forfaits-geo-seo',
  '/entreprise': '/agence-geo-paris-lyon',
  '/about': '/agence-geo-paris-lyon',
  '/contact': '/contact-audit-gratuit',
  '/blog': '/blog-seo-geo',

  // Anciennes URLs blog (si elles existaient)
  '/actualites': '/blog-seo-geo',
  '/news': '/blog-seo-geo',

  // FAQ redirige vers section homepage
  '/faq': '/#faq',
  '/faq/': '/#faq',

  // Support des URLs avec/sans trailing slash
  '/forfaits/': '/forfaits-geo-seo',
  '/entreprise/': '/agence-geo-paris-lyon',
  '/about/': '/agence-geo-paris-lyon',
  '/contact/': '/contact-audit-gratuit',
  '/blog/': '/blog-seo-geo',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vérifier si l'URL nécessite une redirection 301
  const destination = REDIRECTS_301[pathname];
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;

    // Redirection 301 permanente pour le SEO
    return NextResponse.redirect(url, {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
