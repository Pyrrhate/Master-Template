import { client } from "@/sanity/client"; 
import HomeDesign from "@/components/HomeDesign"; 

export default async function Page() {
  
  // Récupération des données depuis le schéma homepage
  const data = await client.fetch(`*[_type == "homepage"][0]{
    heroTitle,
    heroSubtitle,
    heroImage,
    stackTitle,
    stackSubtitle,
    stackDescription,
    stackItems[]{
      title,
      description,
      icon,
      span,
      accentClass
    },
    galleryTitle,
    gallerySubtitle,
    galleryDescription,
    projects[]{
      title,
      category,
      image,
      url,
      span
    }
  }`);

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center px-6">
          <p className="text-xl text-foreground mb-4">⚠️ Aucune donnée trouvée !</p>
          <p className="text-sm text-muted-foreground">
            Assure-toi d'avoir créé un document "Page d'Accueil" dans le Studio Sanity et de l'avoir publié.
          </p>
        </div>
      </div>
    );
  }

  // Transmission des données au composant HomeDesign
  return (
    <HomeDesign 
      title={data.heroTitle || "Titre non défini"} 
      subtitle={data.heroSubtitle || "Sous-titre non défini"}
      mainImage={data.heroImage}
      stackTitle={data.stackTitle}
      stackSubtitle={data.stackSubtitle}
      stackDescription={data.stackDescription}
      stackItems={data.stackItems || []}
      galleryTitle={data.galleryTitle}
      gallerySubtitle={data.gallerySubtitle}
      galleryDescription={data.galleryDescription}
      projects={data.projects || []}
    />
  );
}