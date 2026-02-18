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

const renderArtisanTitle = (text: string) => {
  const artisanRegex = /(artisan)/gi;
  const parts = text.split(artisanRegex);

  return parts.map((part, index) =>
    part.toLowerCase() === "artisan" ? (
      <span key={`${part}-${index}`} className="gradient-text">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
};

const HeroSection = ({ title, subtitle, mainImage }: HeroProps) => {
  return (
    <section className="relative section-radial min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Animated mesh gradient - handled by ::before pseudo-element */}
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animation: 'glow-float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animation: 'glow-float 10s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animation: 'glow-float 12s ease-in-out infinite 4s' }} />

      {/* Industrial grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.01] grid-pattern"
      />

      {/* Animated scanlines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
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
          className="badge-artisan mb-8 inline-flex items-center gap-2 px-5 py-2"
        >
          <Zap className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span className="text-xs font-medium text-foreground/80">
            Powered by Next.js 16 • Edge Runtime
          </span>
        </motion.div>

        {/* Heading with gradient and glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
          className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-foreground">{renderArtisanTitle(title)}</span>
          <span className="mt-4 block text-xl font-sans font-light text-muted-foreground sm:text-2xl md:text-3xl">
            {subtitle}
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
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#stack"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)]"
          >
            <span className="relative z-10">Explore the Forge</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          </a>
          <a
            href="#gallery"
            className="badge-artisan inline-flex items-center gap-2 border-primary/30 px-8 py-4 text-sm font-medium text-foreground transition-all duration-500 ease-out hover:border-primary/60"
          >
            View Portfolio
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          </a>
        </motion.div>

        {/* Tech stats - pour un effet industriel */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
          className="mt-16 flex items-center justify-center gap-8 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-wider">Edge Optimized</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="uppercase tracking-wider">Real-time CMS</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-wider">Type-safe</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade with subtle glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;