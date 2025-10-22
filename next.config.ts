import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // ESLint activé pendant le build pour garantir la qualité du code
  eslint: { ignoreDuringBuilds: false },
  // TypeScript strict checking activé
  typescript: { ignoreBuildErrors: false },
  // Optimisations d'images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Production optimizations (swcMinify removed - enabled by default in Next.js 15)
  compress: true,
  poweredByHeader: false,
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts'],
  },
};

export default withBundleAnalyzer(nextConfig);