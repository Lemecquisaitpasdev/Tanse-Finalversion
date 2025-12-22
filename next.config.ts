import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

// Configure bundle analyzer (enabled with ANALYZE=true)
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // garde la vérif TypeScript si tu veux :
  // typescript: { ignoreBuildErrors: false },

  // Compression Brotli pour optimisation bande passante
  compress: true,

  // Désactiver header X-Powered-By pour sécurité
  poweredByHeader: false,

  // Headers de sécurité HTTP
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // DNS Prefetch activé pour améliorer performance
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // HSTS - Force HTTPS pendant 2 ans
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Protection contre clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Empêche MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Politique de référent
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Désactive fonctionnalités navigateur non utilisées
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          // Content Security Policy - Protection XSS
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://prod.spline.design https://js.stripe.com https://va.vercel-scripts.com https://vercel.live https://www.gstatic.com https://assets.calendly.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://prod.spline.design https://api.stripe.com https://vitals.vercel-insights.com https://unpkg.com https://www.gstatic.com https://fonts.gstatic.com https://calendly.com https://assets.calendly.com",
              "frame-src https://checkout.stripe.com https://js.stripe.com https://vercel.live https://calendly.com",
              "worker-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      }
    ];
  }
};

export default withBundleAnalyzer(nextConfig);