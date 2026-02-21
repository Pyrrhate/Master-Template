import { ArrowRight, Zap, CircuitBoard } from "lucide-react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/client";

// Interface définissant les props du composant
interface HeroProps {
  title: string;
  subtitle: string;
  mainImage: any;
}

const viewport = { once: true, margin: "-100px" };

const getFormattedSubtitle = (subtitle: string) => {
  const withoutDeprecatedSentence = subtitle
    .replace(/je ne construis pas que des sites\.?/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  return withoutDeprecatedSentence.replace(/approche artisanale\s+du code/gi, "approche artisanale\ndu code");
};

const HeroSection = ({ title, subtitle, mainImage }: HeroProps) => {
  const formattedSubtitle = getFormattedSubtitle(subtitle || "");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Animated mesh gradient - handled by ::before pseudo-element */}

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animation: 'glow-float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animation: 'glow-float 10s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animation: 'glow-float 12s ease-in-out infinite 4s' }} />

      {/* Industrial grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.01] grid-pattern"
        style={{
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated scanlines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Profile Image with Industrial Border */}
        {mainImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75 group-hover:opacity-100 blur animate-glow transition duration-1000" />
              <img 
                src={urlFor(mainImage).width(200).url()} 
                alt="Profile" 
                className="relative rounded-full w-32 h-32 object-cover border-2 border-primary/50 ring-2 ring-background"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                <CircuitBoard className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Badge with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 border border-primary/20"
        >
          <Zap className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span className="text-xs font-medium tracking-wider text-foreground/80 uppercase">
            Powered by Next.js 16 • Edge Runtime
          </span>
        </motion.div>

        {/* Heading with gradient and glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="block text-foreground">{title}</span>
          <span className="block text-accent mt-4 text-lg sm:text-xl md:text-2xl leading-tight">
            {formattedSubtitle.split("\n").map((line, index, lines) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < lines.length - 1 && <br />}
              </span>
            ))}
          </span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.22 }}
          className="my-8 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </motion.div>

        {/* CTA Buttons with industrial style */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#stack"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold overflow-hidden rounded-lg bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(87,131,187,0.5)]"
          >
            <span className="relative z-10">Explorer la forge</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-lg glass glass-hover border border-primary/30 text-foreground transition-all duration-300 hover:border-primary/60"
          >
            Voir le portfolio
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          </a>
        </motion.div>

        {/* Tech stats - pour un effet industriel */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-wider">Edge Optimized</span>
          </div>
          <div className="hidden sm:block w-px h-3 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="uppercase tracking-wider">Real Time CMS</span>
          </div>
          <div className="hidden sm:block w-px h-3 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-wider">Type Safe</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade with subtle glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;