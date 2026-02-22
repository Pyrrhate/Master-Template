"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StackSection, { StackItem } from "@/components/StackSection";
import GallerySection, { GalleryProject } from "@/components/GallerySection";
import ServicesSection, { ServiceItem } from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";

interface SocialLink {
  platform: string;
  url: string;
}

interface HomeProps {
  title: string;
  subtitle: string;
  mainImage: any;
  stackTitle?: string;
  stackSubtitle?: string;
  stackDescription?: string;
  stackItems: StackItem[];
  galleryTitle?: string;
  gallerySubtitle?: string;
  galleryDescription?: string;
  projects: GalleryProject[];
  servicesTitle?: string;
  servicesSubtitle?: string;
  servicesItems: ServiceItem[];
  sectionOrder?: string[];
  footerText?: string;
  email?: string;
  socialLinks: SocialLink[];
}

export default function HomeDesign({
  title,
  subtitle,
  mainImage,
  stackTitle,
  stackSubtitle,
  stackDescription,
  stackItems,
  galleryTitle,
  gallerySubtitle,
  galleryDescription,
  projects,
  servicesTitle,
  servicesSubtitle,
  servicesItems,
  sectionOrder,
  footerText,
  email,
  socialLinks,
}: HomeProps) {
  const fallbackOrder = ["stack", "services", "gallery"];
  const allowedSections = new Set(fallbackOrder);
  const configuredOrder = Array.isArray(sectionOrder)
    ? sectionOrder.filter((item) => allowedSections.has(item))
    : [];
  const uniqueConfiguredOrder = [...new Set(configuredOrder)];
  const finalSectionOrder =
    uniqueConfiguredOrder.length > 0 ? uniqueConfiguredOrder : fallbackOrder;

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] noise-overlay relative">
      <Navbar sectionOrder={finalSectionOrder} />

      <main>
        <HeroSection
          title={title}
          subtitle={subtitle}
          mainImage={mainImage}
        />

        {finalSectionOrder.map((section, index) => {
          const showDivider = index > 0;

          return (
            <div key={section}>
              {showDivider && (
                <div className="max-w-5xl mx-auto px-6">
                  <div className="section-divider" />
                </div>
              )}

              {section === "stack" && (
                <StackSection
                  title={stackTitle}
                  subtitle={stackSubtitle}
                  description={stackDescription}
                  stackItems={stackItems}
                />
              )}

              {section === "services" && (
                <ServicesSection
                  title={servicesTitle}
                  subtitle={servicesSubtitle}
                  servicesItems={servicesItems}
                />
              )}

              {section === "gallery" && (
                <GallerySection
                  title={galleryTitle}
                  subtitle={gallerySubtitle}
                  description={galleryDescription}
                  projects={projects}
                />
              )}
            </div>
          );
        })}

        <div className="max-w-5xl mx-auto px-6">
          <div className="section-divider" />
        </div>

        <FooterSection
          footerText={footerText}
          email={email}
          socialLinks={socialLinks}
        />
      </main>
    </div>
  );
}
