import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/client";

// Interface pour un projet
export interface GalleryProject {
  title: string;
  category: string;
  image: any; // Image Sanity
  url?: string;
  span?: string; // Classes de grid span
}

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  projects: GalleryProject[];
}

const viewport = { once: true, margin: "-100px" };

const gridVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.12,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const GallerySection = ({ 
  title = "The Gallery",
  subtitle = "The Output",
  description = "Selected works from the factory floor. Each piece is engineered to perform.",
  projects
}: GallerySectionProps) => {
  return (
    <section id="gallery" className="relative section-radial px-6 py-24 md:py-32">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header avec style industriel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
            <p className="badge-artisan px-3 py-1.5 font-semibold text-primary">
              {subtitle}
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {/* Gallery Grid avec effets industriels */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={tileVariants}
              transition={{ delay: index * 0.12 }}
              className={`${project.span || 'md:col-span-1'} artisan-card group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl`}
            >
              {/* Image avec effet de zoom */}
              {project.image && (
                <img
                  src={urlFor(project.image).width(800).url()}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Overlay gradient industriel */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent opacity-70 transition-opacity duration-300 ease-out group-hover:opacity-95" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 mix-blend-overlay" />

              {/* Content avec animation */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                  <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/60 transition-colors duration-300 ease-out hover:bg-primary/20"
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </a>
                  )}
                </div>
                
                {/* Bottom accent line */}
                <div className="mt-3 h-px w-full bg-gradient-to-r from-primary via-accent to-transparent" />
              </div>

              {/* Static label badge */}
              <div className="badge-artisan absolute left-4 top-4 border-primary/20 px-3 py-1.5">
                <span className="text-xs font-medium text-foreground/80">
                  {project.category}
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-3xl" />
              
              {/* Bottom corner accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-3xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Industrial decorative element */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
