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
  footerText,
  email,
  socialLinks
}: HomeProps) {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <HeroSection 
          title={title} 
          subtitle={subtitle} 
          mainImage={mainImage} 
        />
        
        {/* Gallery Section - Les projets d'abord */}
        <GallerySection 
          title={galleryTitle}
          subtitle={gallerySubtitle}
          description={galleryDescription}
          projects={projects}
        />
        
        {/* Services Section - Le Workshop / Capabilities ensuite */}
        <ServicesSection 
          title={servicesTitle}
          subtitle={servicesSubtitle}
          servicesItems={servicesItems}
        />
        
        {/* Stack Section - La section Artisan/Philosophie avant le footer */}
        <StackSection 
          title={stackTitle}
          subtitle={stackSubtitle}
          description={stackDescription}
          stackItems={stackItems}
        />
        
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