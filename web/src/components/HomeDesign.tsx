"use client";

import HeroSection from "@/components/HeroSection";
import StackSection, { StackItem } from "@/components/StackSection";
import GallerySection, { GalleryProject } from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

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
  projects
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
        
        {/* Stack Section avec données dynamiques */}
        <StackSection 
          title={stackTitle}
          subtitle={stackSubtitle}
          description={stackDescription}
          stackItems={stackItems}
        />
        
        {/* Gallery Section avec données dynamiques */}
        <GallerySection 
          title={galleryTitle}
          subtitle={gallerySubtitle}
          description={galleryDescription}
          projects={projects}
        />
        
        {/* Footer */}
        <FooterSection />
      </main>
    </div>
  );
}