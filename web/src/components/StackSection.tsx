import { Code2, Palette, GitBranch, Globe, FileText, Wrench, Cpu, Database, Server, Zap } from "lucide-react";
import { motion } from "framer-motion";

// Interface pour un élément de la stack
export interface StackItem {
  title: string;
  description: string;
  icon?: string; // Nom de l'icône (optionnel)
  span?: string; // Classes de grid span
  accentClass?: string;
}

interface StackSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stackItems: StackItem[];
}

const viewport = { once: true, margin: "-100px" };

const sectionVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Map des icônes disponibles
const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="w-6 h-6" />,
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
  stackItems 
}: StackSectionProps) => {
  return (
    <section id="stack" className="relative section-radial px-6 py-24 md:py-32">
      {/* Background grid effect */}
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
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="badge-artisan px-3 py-1.5 font-semibold text-primary">
              {subtitle}
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {/* Bento Grid avec effet glow - Grille 3 colonnes centrée */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3"
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`${item.span || 'col-span-1'} artisan-card group relative flex flex-col justify-between overflow-hidden p-6 hover:scale-[1.02]`}
              transition={{ delay: index * 0.12 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className={`${item.accentClass || 'text-primary'} mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors duration-300 ease-out group-hover:border-primary/40`}>
                  {item.icon && iconMap[item.icon] ? iconMap[item.icon] : <Wrench className="w-5 h-5" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors duration-300 ease-out group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Bottom glow line */}
              <div className="relative z-10 mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Industrial decorative element */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default StackSection;
