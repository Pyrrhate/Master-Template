"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/client";

interface HeroProps {
  title: string;
  subtitle: string;
  mainImage: any;
}

const viewport = { once: true, margin: "-50px" };

const HeroSection = ({ title, subtitle, mainImage }: HeroProps) => {
  const subtitleClean = subtitle
    ?.replace(/je ne construis pas que des sites\.?/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim() || "";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Subtle ambient light orbs */}
      <div
        className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{ background: "hsl(var(--primary) / 0.15)", animation: "glow-float 12s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
        style={{ background: "hsl(var(--accent) / 0.12)", animation: "glow-float 15s ease-in-out infinite 3s" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.015] grid-pattern" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Avatar */}
        {mainImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="mb-10 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-[hsl(var(--primary)/0.4)] rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
              <div className="relative rounded-full p-[2px] bg-gradient-to-b from-[hsl(var(--primary)/0.5)] to-[hsl(var(--border))]">
                <img
                  src={urlFor(mainImage).width(200).url()}
                  alt="Profile"
                  className="rounded-full w-28 h-28 object-cover bg-[hsl(var(--background))]"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-[3px] border-[hsl(var(--background))]" />
            </div>
          </motion.div>
        )}

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border border-[hsl(var(--border))] bg-[hsl(var(--secondary)/0.5)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium tracking-wide text-[hsl(var(--muted-foreground))]">
            Available for projects
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] text-[hsl(var(--foreground))] text-balance"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          {subtitleClean}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#stack"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:shadow-[0_0_32px_hsl(var(--glow-primary))] hover:scale-[1.03]"
          >
            Explorer la forge
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--foreground))] bg-[hsl(var(--secondary)/0.3)] transition-all duration-300 hover:bg-[hsl(var(--secondary)/0.6)] hover:border-[hsl(var(--primary)/0.3)]"
          >
            Voir le portfolio
          </a>
        </motion.div>

        {/* Tech markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-[hsl(var(--muted-foreground)/0.7)]"
        >
          {["Next.js 16", "React 19", "Sanity CMS", "Edge Runtime"].map((tech) => (
            <span key={tech} className="flex items-center gap-2 uppercase tracking-widest font-mono">
              <span className="w-1 h-1 rounded-full bg-[hsl(var(--primary)/0.5)]" />
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#stack"
          className="flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground)/0.4)] hover:text-[hsl(var(--muted-foreground)/0.7)] transition-colors"
          aria-label="Scroll down"
        >
          <span className="hidden text-[10px] uppercase tracking-[0.25em] font-medium sm:block">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-scroll-hint" />
        </a>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
    </section>
  );
};

export default HeroSection;
