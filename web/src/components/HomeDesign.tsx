"use client";

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
  // Hero Section
  title: string;
  subtitle: string;
  mainImage: any;
  
  // Stack Section
  stackTitle?: string;
  stackSubtitle?: string;
  stackDescription?: string;
  stackItems: StackItem[];
  
  // Gallery Section
  galleryTitle?: string;
  gallerySubtitle?: string;
  galleryDescription?: string;
  projects: GalleryProject[];
  
  // Services Section
  servicesTitle?: string;
  servicesSubtitle?: string;
  servicesItems: ServiceItem[];
  sectionOrder?: string[];
  
  // Footer & Contact
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
  socialLinks
}: HomeProps) {
  const fallbackOrder = ["stack", "services", "gallery"];
  const allowedSections = new Set(fallbackOrder);
  const configuredOrder = Array.isArray(sectionOrder)
    ? sectionOrder.filter((item) => allowedSections.has(item))
    : [];
  const uniqueConfiguredOrder = [...new Set(configuredOrder)];
  const finalSectionOrder = uniqueConfiguredOrder.length > 0 ? uniqueConfiguredOrder : fallbackOrder;

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <HeroSection 
          title={title} 
          subtitle={subtitle} 
          mainImage={mainImage} 
        />

        {finalSectionOrder.map((section) => {
          if (section === "stack") {
            return (
              <StackSection
                key="stack"
                title={stackTitle}
                subtitle={stackSubtitle}
                description={stackDescription}
                stackItems={stackItems}
              />
            );
          }

          if (section === "services") {
            return (
              <ServicesSection
                key="services"
                title={servicesTitle}
                subtitle={servicesSubtitle}
                servicesItems={servicesItems}
              />
            );
          }

          return (
            <GallerySection
              key="gallery"
              title={galleryTitle}
              subtitle={gallerySubtitle}
              description={galleryDescription}
              projects={projects}
            />
          );
        })}
        
        {/* Footer avec données dynamiques */}
        <FooterSection 
          footerText={footerText}
          email={email}
          socialLinks={socialLinks}
        />
      </main>
    </div>
  );
}