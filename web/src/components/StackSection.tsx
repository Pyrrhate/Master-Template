"use client";

import { Code2, Palette, GitBranch, Globe, FileText, Wrench, Cpu, Database, Server, Zap } from "lucide-react";
import { motion } from "framer-motion";

export interface StackItem {
  title: string;
  description: string;
  icon?: string;
  span?: string;
  accentClass?: string;
}

interface StackSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stackItems: StackItem[];
}

const viewport = { once: true, margin: "-80px" };

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="w-5 h-5" />,
  palette: <Palette className="w-5 h-5" />,
  git: <GitBranch className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  file: <FileText className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
};

const StackSection = ({
  title = "The Stack",
  subtitle = "The Engine Room",
  description = "Every module is purpose-built for speed, scale, and creative freedom.",
  stackItems,
}: StackSectionProps) => {
  return (
    <section id="stack" className="py-24 sm:py-32 px-6 relative">
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

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`${item.span || "col-span-1"} premium-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden`}
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-[hsl(var(--primary)/0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[hsl(var(--secondary))] text-[hsl(var(--primary))] border border-[hsl(var(--border))] group-hover:border-[hsl(var(--primary)/0.3)] transition-colors duration-300">
                  {item.icon && iconMap[item.icon] ? iconMap[item.icon] : <Wrench className="w-5 h-5" />}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="relative z-10 mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-[hsl(var(--primary)/0.5)] to-transparent transition-all duration-500" />

              {/* Corner glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[hsl(var(--primary)/0.08)] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StackSection;
