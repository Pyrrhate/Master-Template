import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: <Github className="w-4 h-4" />, href: "#", label: "GitHub" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: "#", label: "Email" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-primary/10 py-12 px-6 relative overflow-hidden">
      {/* Background gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-30" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] grid-pattern" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top decorative line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-foreground mb-1">
              GCanva<span className="gradient-text glow-text">.</span>
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Digital Forge • Cloud Architect
            </p>
            <div className="mt-2 flex items-center gap-2 justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Status: Online
              </span>
            </div>
          </div>

          {/* Social links avec effet industriel */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group relative w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 border border-primary/10 hover:border-primary/40 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">{s.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright avec accent */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              © 2026 <span className="text-primary font-semibold">GCanva</span>
            </p>
            <p className="text-[10px] text-muted-foreground/60 mt-1 uppercase tracking-wider">
              All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom tech signature */}
        <div className="mt-8 pt-6 border-t border-primary/10">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-muted-foreground/60 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-primary/50" />
              Built with Next.js 16
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-secondary/50" />
              Powered by Sanity
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-primary/50" />
              Deployed on Edge
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
