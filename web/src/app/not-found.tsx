import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient px-6">
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
        style={{ background: "hsl(var(--primary) / 0.12)", animation: "glow-float 12s ease-in-out infinite" }}
      />
      <div className="absolute inset-0 opacity-[0.015] grid-pattern" />

      <section className="relative z-10 max-w-lg w-full text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(var(--primary))] mb-6 font-mono">
          Erreur 404
        </span>

        <h1 className="text-8xl sm:text-9xl font-bold tracking-[-0.05em] text-[hsl(var(--foreground))]">
          404
        </h1>

        <p className="mt-4 text-lg font-medium text-[hsl(var(--foreground)/0.8)]">
          Page introuvable
        </p>

        <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] max-w-sm mx-auto leading-relaxed">
          {"Cette page n'existe pas ou a ete deplacee. Retournez a l'accueil pour continuer."}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:shadow-[0_0_32px_hsl(var(--glow-primary))] hover:scale-[1.03]"
          >
            <Home className="w-4 h-4" />
            <span>{"Retour a l'accueil"}</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--foreground))] bg-[hsl(var(--secondary)/0.3)] transition-all duration-300 hover:bg-[hsl(var(--secondary)/0.6)] hover:border-[hsl(var(--primary)/0.3)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Revenir
          </Link>
        </div>
      </section>
    </main>
  );
}
