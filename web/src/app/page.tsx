import { client } from "@/sanity/client"; 
import HomeDesign from "@/components/HomeDesign"; 

export default async function Page() {
  
  // 1. LA REQUÊTE : On demande TOUTES les images possibles (heroImage ET mainImage)
  const data = await client.fetch(`*[_type == "homepage"][0]{
    heroTitle,
    heroSubtitle,
    heroImage,   // Image de fond (définie dans ton schéma)
    mainImage,   // Image de profil (définie dans ton schéma) - JE L'AI AJOUTÉE ICI !
    
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

  // 2. LA VÉRIFICATION
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

  // 3. LA LIVRAISON
  return (
    <HomeDesign 
      title={data.heroTitle || "Titre non défini"} 
      subtitle={data.heroSubtitle || "Sous-titre non défini"}
      
      // 👇 LA LOGIQUE BLINDÉE :
      // On prend mainImage (profil) en priorité. 
      // Si elle n'existe pas, on prend heroImage (fond).
      // Si aucune n'existe, ça envoie null (et le composant gère).
      mainImage={data.mainImage || data.heroImage} 
      
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