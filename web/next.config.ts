import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;