import { Github, Twitter, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLink {
  platform: string;
  url: string;
}

interface FooterSectionProps {
  email?: string;
  footerText?: string;
  socialLinks?: SocialLink[];
}

const viewport = { once: true, margin: "-100px" };

const getIconForPlatform = (platform: string) => {
  const platformLower = platform.toLowerCase();
  if (platformLower.includes("github")) return <Github className="w-4 h-4" />;
  if (platformLower.includes("twitter")) return <Twitter className="w-4 h-4" />;
  if (platformLower.includes("linkedin")) return <Linkedin className="w-4 h-4" />;
  if (platformLower.includes("mail") || platformLower.includes("email")) return <Mail className="w-4 h-4" />;
  return <MapPin className="w-4 h-4" />;
};

const FooterSection = ({
  email = "contact@example.com",
  footerText = "Built with Next.js 16 • Powered by Sanity • Deployed on Edge",
  socialLinks = [],
}: FooterSectionProps) => {
  const validSocialLinks = socialLinks.filter(
    (link) => Boolean(link?.platform?.trim()) && Boolean(link?.url?.trim())
  );

  return (
    <footer className="py-10 px-6 relative overflow-hidden bg-secondary/35 border-t border-border/70">
      {/* Background gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent opacity-40" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] grid-pattern" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header - comme les autres sections */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Let's Connect
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Discutons de votre projet et forgeons ensemble votre prochain outil numérique.
          </p>

          {/* CTA Contact Button */}
          <a
            href={`mailto:${email}`}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold overflow-hidden rounded-lg bg-primary text-primary-foreground border border-primary/40 shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(87,131,187,0.5)]"
          >
            <span className="relative z-10">Contact</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          </a>
        </motion.div>

        {/* Social links */}
        {validSocialLinks.length > 0 && (
          <div className="flex items-center justify-center gap-3 mb-10">
            {validSocialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="group relative w-12 h-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 border border-primary/10 hover:border-primary/40 overflow-hidden"
                title={link.platform}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">{getIconForPlatform(link.platform)}</span>
              </a>
            ))}
          </div>
        )}

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Bottom copyright and tech signature */}
        <div className="text-center space-y-3">
          <div className="text-xs text-muted-foreground">
            © 2026 <span className="text-primary font-semibold">GCanva</span> • All rights reserved
          </div>
          <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">
            {footerText}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
