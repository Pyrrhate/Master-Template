import { Code2, Layout, Search, Smartphone, Cpu, Shield } from "lucide-react";
import { motion } from "framer-motion";

// Interface pour un élément de service
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

const viewport = { once: true, margin: "-100px" };

const listVariants = {
  hidden: { opacity: 0, y: 24 },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Map des icônes disponibles pour services
const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="w-6 h-6" />,
  layout: <Layout className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
};

const ServicesSection = ({
  title = "Capabilities",
  subtitle = "What I do",
  servicesItems,
}: ServicesSectionProps) => {
  return (
    <section id="services" className="relative section-radial px-6 py-24 md:py-32">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03] grid-pattern" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="badge-artisan px-3 py-1.5 font-semibold text-primary">
              {subtitle}
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesItems.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              transition={{ delay: index * 0.12 }}
              className="artisan-card group relative flex flex-col gap-4 overflow-hidden p-8 hover:scale-[1.02]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 ease-out group-hover:border-primary/40">
                  {service.icon && iconMap[service.icon]
                    ? iconMap[service.icon]
                    : <Code2 className="w-6 h-6" />}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors duration-300 ease-out group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="relative z-10 mt-2 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 h-12 w-12 rounded-tl-2xl bg-gradient-to-tl from-primary/10 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative element */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <div
              className="w-1 h-1 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-1 h-1 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
