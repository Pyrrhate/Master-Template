"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  sectionOrder: string[];
}

const sectionLabels: Record<string, string> = {
  stack: "Stack",
  services: "Services",
  gallery: "Portfolio",
};

export default function Navbar({ sectionOrder }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileOpen(false);

    const id = href.replace("#", "");
    window.setTimeout(() => {
      if (!id) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.getElementById(id);
      if (!target) {
        window.location.hash = id;
        return;
      }

      const navOffset = 88;
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
      window.history.replaceState(null, "", `#${id}`);
      window.scrollTo({ top, behavior: "smooth" });
    }, 320);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ...sectionOrder.map((s) => ({ label: sectionLabels[s] || s, href: `#${s}` })),
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "nav-blur bg-[hsl(228_28%_7%/0.85)] border-[hsl(var(--border)/0.5)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
        >
          GCanva
          <span className="text-[hsl(var(--primary))]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-[hsl(var(--primary))] group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--glow-primary))] hover:scale-[1.02]"
        >
          Discutons
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--secondary))]"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden nav-blur bg-[hsl(228_28%_7%/0.95)] border-b border-[hsl(var(--border)/0.5)]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleMobileLinkClick(event, link.href)}
                  className="px-4 py-3 text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary)/0.5)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(event) => handleMobileLinkClick(event, "#contact")}
                className="mt-2 flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
              >
                Discutons
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
