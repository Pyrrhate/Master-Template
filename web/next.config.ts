import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // Ajoute ou vérifie cette section
  transpilePackages: ["lucide-react"],
  logging: {
    fetches: {
      fullUrl: true,
    },
  }
};

export default nextConfig;
