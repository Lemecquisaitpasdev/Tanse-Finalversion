import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint activé pendant le build pour garantir la qualité du code
  eslint: { ignoreDuringBuilds: false },
  // TypeScript strict checking activé
  typescript: { ignoreBuildErrors: false },
  // Optimisations d'images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;