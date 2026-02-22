"use client";

import { Code2, Layout, Search, Smartphone, Cpu, Shield, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  servicesItems: ServiceItem[];
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="w-5 h-5" />,
  layout: <Layout className="w-5 h-5" />,
  search: <Search className="w-5 h-5" />,
  smartphone: <Smartphone className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
};

const ServicesSection = ({
  title = "Capabilities",
  subtitle = "What I do",
  servicesItems,
}: ServicesSectionProps) => {
  return (
    <section id="services" className="py-24 sm:py-32 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(var(--primary))] mb-4 font-mono">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[hsl(var(--foreground))]">
            {title}
          </h2>
        </motion.div>

        {/* Services List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col"
        >
          {servicesItems.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Top border for first item */}
              {index === 0 && (
                <div className="h-px bg-[hsl(var(--border))]" />
              )}

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 md:py-10 relative">
                {/* Index number */}
                <span className="text-xs font-mono text-[hsl(var(--muted-foreground)/0.4)] tracking-wider shrink-0 w-10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--primary))] group-hover:border-[hsl(var(--primary)/0.3)] group-hover:bg-[hsl(var(--primary)/0.08)] transition-all duration-300">
                  {service.icon && iconMap[service.icon]
                    ? iconMap[service.icon]
                    : <Code2 className="w-5 h-5" />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="shrink-0 w-10 h-10 rounded-full border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100 group-hover:border-[hsl(var(--primary)/0.3)] group-hover:text-[hsl(var(--primary))] transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom border */}
              <div className="h-px bg-[hsl(var(--border))] group-hover:bg-[hsl(var(--primary)/0.15)] transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
