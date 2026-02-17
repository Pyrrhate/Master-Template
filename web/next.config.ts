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
  },
  // Si tu utilises Turbopack, cela aide à stabiliser les chemins
  experimental: {
    turbo: {
      root: '..', // Indique que la racine du projet est un dossier au-dessus
    },
  },
};

export default nextConfig;
