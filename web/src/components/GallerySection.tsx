"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/client";

export interface GalleryProject {
  title: string;
  category: string;
  image: any;
  url?: string;
  span?: string;
}

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  projects: GalleryProject[];
}

const viewport = { once: true, margin: "-80px" };

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const GallerySection = ({
  title = "The Gallery",
  subtitle = "The Output",
  description = "Selected works from the factory floor. Each piece is engineered to perform.",
  projects,
}: GallerySectionProps) => {
  return (
    <section id="gallery" className="py-24 sm:py-32 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(var(--primary))] mb-4 font-mono">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[hsl(var(--foreground))] mb-4">
            {title}
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project) => {
            const Wrapper = project.url ? "a" : "div";
            const wrapperProps = project.url
              ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={project.title}
                variants={tileVariants}
              >
                <Wrapper
                  {...(wrapperProps as any)}
                  className="block group relative overflow-hidden rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] transition-all duration-500 hover:border-[hsl(var(--primary)/0.3)] hover:shadow-[0_8px_40px_hsl(var(--glow-primary))]"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {project.image && (
                      <img
                        src={urlFor(project.image).width(900).url()}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[hsl(var(--background)/0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                      {project.url && (
                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[hsl(var(--background)/0.8)] text-[hsl(var(--foreground)/0.9)] border border-[hsl(var(--border)/0.5)] backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom info bar */}
                  <div className="px-6 py-5 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.url && (
                      <ExternalLink className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300" />
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
