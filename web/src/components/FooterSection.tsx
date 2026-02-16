import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: <Github className="w-4 h-4" />, href: "#", label: "GitHub" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: "#", label: "Email" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-foreground">
            GCanva<span className="gradient-text">.</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Digital Artisan & Cloud Architect
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-9 h-9 rounded-full glass glass-hover flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 GCanva. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
