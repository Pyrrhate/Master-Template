import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"],
  /* Si tu as d'autres options, garde-les, mais vire la partie 'experimental: { turbo: ... }' */
};

export default nextConfig;