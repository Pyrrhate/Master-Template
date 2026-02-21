import Link from "next/link";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient px-6">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animation: "glow-float 8s ease-in-out infinite" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animation: "glow-float 10s ease-in-out infinite 2s" }} />
      <div className="absolute inset-0 opacity-[0.02] grid-pattern" />

      <section className="relative z-10 max-w-2xl w-full text-center glass rounded-2xl border border-primary/20 p-8 sm:p-10">
        <div className="inline-flex items-center gap-2 mb-5">
          <AlertTriangle className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Erreur 404</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-foreground">404</h1>
        <p className="mt-3 text-xl sm:text-2xl font-semibold text-accent-foreground">Page introuvable</p>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Cette page n&apos;existe pas ou a été déplacée. Retourne à l&apos;accueil pour continuer la navigation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold overflow-hidden rounded-lg bg-primary text-primary-foreground border border-primary/40 shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(87,131,187,0.5)]"
          >
            <Home className="relative z-10 w-4 h-4" />
            <span className="relative z-10">Retour à l&apos;accueil</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-lg glass glass-hover border border-primary/30 text-foreground transition-all duration-300 hover:border-primary/60"
          >
            <ArrowLeft className="w-4 h-4" />
            Revenir
          </Link>
        </div>
      </section>
    </main>
  );
}
