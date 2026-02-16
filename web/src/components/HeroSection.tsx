import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            Powered by Next.js 16 Edge Runtime
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
          <span className="text-foreground">Digital Artisan</span>
          <br />
          <span className="gradient-text">&amp; Cloud Architect</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up-delay-2 mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting immersive digital experiences at the intersection of 
          artistic vision and industrial-grade infrastructure.
        </p>

        {/* CTA */}
        <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#stack"
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 animate-glow"
          >
            Explore the Engine
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full glass glass-hover px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
