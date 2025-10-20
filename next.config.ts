import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // garde la vérif TypeScript si tu veux :
  // typescript: { ignoreBuildErrors: false },
};

export default nextConfig;