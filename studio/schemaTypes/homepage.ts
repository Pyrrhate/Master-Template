import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Page d\'Accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Grand Titre (Hero)',
      type: 'string',
      description: 'Le gros titre qui accroche (ex: GCanva)',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre',
      type: 'text',
      description: 'La petite phrase en dessous (ex: Artiste & Intégrateur)',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image de fond',
      type: 'image',
      options: {
        hotspot: true, // Permet de recadrer l'image
      },
    }),
    {
      name: 'mainImage',
      title: 'Image de profil ou Hero',
      type: 'image',
      options: {
        hotspot: true, // Très utile : permet de choisir le centre de l'image pour le recadrage
      },
    },
  ],
})