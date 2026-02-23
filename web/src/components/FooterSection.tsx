"use client";

import { Github, Twitter, Linkedin, Mail, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
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

const viewport = { once: true, margin: "-80px" };

const getIconForPlatform = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes("github")) return <Github className="w-5 h-5" />;
  if (p.includes("twitter") || p.includes("x")) return <Twitter className="w-5 h-5" />;
  if (p.includes("linkedin")) return <Linkedin className="w-5 h-5" />;
  if (p.includes("mail") || p.includes("email")) return <Mail className="w-5 h-5" />;
  return <MapPin className="w-5 h-5" />;
};

const FooterSection = ({
  email = "contact@example.com",
  footerText = "Built with Next.js 16 & Sanity CMS",
  socialLinks = [],
}: FooterSectionProps) => {
  const validSocialLinks = socialLinks.filter(
    (link) => Boolean(link?.platform?.trim()) && Boolean(link?.url?.trim())
  );

  return (
    <>
      {/* Contact CTA Section */}
      <section id="contact" className="py-20 sm:py-32 px-6 relative scroll-mt-24">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-center"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(var(--primary))] mb-6 font-mono">
              Contact
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[hsl(var(--foreground))] mb-6 text-balance">
              {"Travaillons ensemble"}
            </h2>

            <p className="text-[hsl(var(--muted-foreground))] max-w-md mx-auto mb-10 leading-relaxed">
              {"Discutons de votre projet et forgeons ensemble votre prochain outil numerique."}
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--glow-primary))] hover:scale-[1.03]"
            >
              Envoyer un message
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Social Links */}
            {validSocialLinks.length > 0 && (
              <div className="mt-12 flex items-center justify-center gap-3">
                {validSocialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="group relative w-12 h-12 rounded-xl flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] border border-[hsl(var(--border))] bg-[hsl(var(--secondary)/0.3)] hover:border-[hsl(var(--primary)/0.3)] hover:bg-[hsl(var(--primary)/0.06)] transition-all duration-300"
                    title={link.platform}
                  >
                    {getIconForPlatform(link.platform)}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[hsl(var(--border)/0.5)]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-sm font-semibold text-[hsl(var(--foreground))]">
            GCanva<span className="text-[hsl(var(--primary))]">.</span>
          </span>

          {/* Footer text */}
          <p className="text-xs text-[hsl(var(--muted-foreground)/0.5)] tracking-wide">
            {footerText}
          </p>

          {/* Copyright */}
          <span className="text-xs text-[hsl(var(--muted-foreground)/0.4)]">
            {"2026 Tous droits réservés"}
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
