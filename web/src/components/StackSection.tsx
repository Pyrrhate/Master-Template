import { Code2, Palette, GitBranch, Globe, FileText } from "lucide-react";

interface StackCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  span: string;
  accentClass: string;
}

const stackCards: StackCard[] = [
  {
    title: "React / Next.js",
    description: "Lightning-fast rendering with server components and edge-first architecture. Zero compromise on performance.",
    icon: <Code2 className="w-6 h-6" />,
    span: "col-span-2 row-span-2",
    accentClass: "text-primary",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first design system for pixel-perfect, responsive interfaces.",
    icon: <Palette className="w-5 h-5" />,
    span: "col-span-1 row-span-1",
    accentClass: "text-primary",
  },
  {
    title: "GitHub",
    description: "Version control and CI/CD pipelines powering every deployment.",
    icon: <GitBranch className="w-5 h-5" />,
    span: "col-span-1 row-span-1",
    accentClass: "text-foreground",
  },
  {
    title: "Cloudflare",
    description: "Global edge network with 300+ data centers. Your content, everywhere, instantly.",
    icon: <Globe className="w-5 h-5" />,
    span: "col-span-2 row-span-1",
    accentClass: "text-primary",
  },
  {
    title: "Sanity",
    description: "Structured content platform for real-time collaborative editing.",
    icon: <FileText className="w-5 h-5" />,
    span: "col-span-2 row-span-1",
    accentClass: "text-secondary",
  },
];

const StackSection = () => {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            The Engine Room
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            The Stack
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Every module is purpose-built for speed, scale, and creative freedom.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stackCards.map((card) => (
            <div
              key={card.title}
              className={`${card.span} glass glass-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group`}
            >
              <div>
                <div className={`${card.accentClass} mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-muted`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
