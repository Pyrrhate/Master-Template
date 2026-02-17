import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Page d\'Accueil',
  type: 'document',
  fields: [
    // ===== HERO SECTION =====
    defineField({
      name: 'heroTitle',
      title: 'Titre Hero',
      type: 'string',
      description: 'Le titre principal en haut (ex: GCanva)',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),

    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre Hero',
      type: 'text',
      description: 'Le sous-titre ou phrase accroche (ex: Artiste & Intégrateur)',
      rows: 2,
      validation: (Rule) => Rule.required().min(1).max(200),
    }),

    defineField({
      name: 'heroImage',
      title: 'Image de Fond / Wallpaper',
      type: 'image',
      description: 'Image de fond optionnelle pour le hero',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Photo de Profil / Avatar',
      type: 'image',
      description: 'Image de profil circulaire affichée au centre (INDISPENSABLE)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ===== STACK SECTION =====
    defineField({
      name: 'stackTitle',
      title: 'Stack - Titre Principal',
      type: 'string',
      description: 'Titre de la section stack (ex: The Stack)',
      initialValue: 'The Stack',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'stackSubtitle',
      title: 'Stack - Sous-titre',
      type: 'string',
      description: 'Sous-titre au-dessus du titre (ex: The Engine Room)',
      initialValue: 'The Engine Room',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'stackDescription',
      title: 'Stack - Description',
      type: 'text',
      description: 'Description courte de la section stack',
      rows: 2,
      initialValue: 'Every module is purpose-built for speed, scale, and creative freedom.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'stackItems',
      title: 'Technologies de la Stack',
      type: 'array',
      description: 'Ajoute ou modifie les technologies affichées',
      of: [
        {
          type: 'object',
          title: 'Technologie',
          fields: [
            {
              name: 'title',
              title: 'Nom de la Technologie',
              type: 'string',
              description: 'Ex: React / Next.js',
              validation: (Rule) => Rule.required().min(1).max(50),
            },

            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Courte description (une ou deux phrases)',
              rows: 3,
              validation: (Rule) => Rule.required().min(1).max(300),
            },

            {
              name: 'icon',
              title: 'Icône',
              type: 'string',
              description: 'Choisir l\'icône correspondante',
              options: {
                list: [
                  { title: '💻 Code', value: 'code' },
                  { title: '🎨 Palette', value: 'palette' },
                  { title: '🌿 Git', value: 'git' },
                  { title: '🌍 Globe', value: 'globe' },
                  { title: '📄 File', value: 'file' },
                  { title: '🔧 Wrench', value: 'wrench' },
                  { title: '⚙️ CPU', value: 'cpu' },
                  { title: '💾 Database', value: 'database' },
                  { title: '🖥️ Server', value: 'server' },
                  { title: '⚡ Zap', value: 'zap' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },

            {
              name: 'span',
              title: 'Taille de la Carte',
              type: 'string',
              description: 'Contrôle la taille dans la grille bento',
              options: {
                list: [
                  { title: 'Petite (1 colonne)', value: 'col-span-1' },
                  { title: 'Moyenne (2 colonnes)', value: 'col-span-2' },
                  { title: 'Grande (2 cols × 2 lignes)', value: 'col-span-2 row-span-2' },
                ],
              },
              initialValue: 'col-span-1',
            },

            {
              name: 'accentClass',
              title: 'Couleur d\'Accent',
              type: 'string',
              description: 'Couleur de l\'icône et accents',
              options: {
                list: [
                  { title: '🔵 Primary (Bleu)', value: 'text-primary' },
                  { title: '🟦 Secondary (Gris-Foncé)', value: 'text-secondary' },
                  { title: '🟠 Foreground (Clair)', value: 'text-foreground' },
                ],
              },
              initialValue: 'text-primary',
            },
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'icon',
              description: 'description',
            },
            prepare({ title, icon, description }) {
              const iconMap: Record<string, string> = {
                code: '💻',
                palette: '🎨',
                git: '🌿',
                globe: '🌍',
                file: '📄',
                wrench: '🔧',
                cpu: '⚙️',
                database: '💾',
                server: '🖥️',
                zap: '⚡',
              }
              return {
                title: `${iconMap[icon] || '🔹'} ${title}`,
                subtitle: description?.substring(0, 50) + '...',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // ===== GALLERY SECTION =====
    defineField({
      name: 'galleryTitle',
      title: 'Gallery - Titre Principal',
      type: 'string',
      description: 'Titre de la section galerie (ex: The Gallery)',
      initialValue: 'The Gallery',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'gallerySubtitle',
      title: 'Gallery - Sous-titre',
      type: 'string',
      description: 'Sous-titre au-dessus du titre (ex: The Output)',
      initialValue: 'The Output',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'galleryDescription',
      title: 'Gallery - Description',
      type: 'text',
      description: 'Description courte de la section galerie',
      rows: 2,
      initialValue: 'Selected works from the factory floor. Each piece is engineered to perform.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'projects',
      title: 'Projets',
      type: 'array',
      description: 'Ajoute ou modifie tes projets / portfolio',
      of: [
        {
          type: 'object',
          title: 'Projet',
          fields: [
            {
              name: 'title',
              title: 'Nom du Projet',
              type: 'string',
              description: 'Ex: Mon Portfolio, E-commerce App',
              validation: (Rule) => Rule.required().min(1).max(100),
            },

            {
              name: 'category',
              title: 'Catégorie',
              type: 'string',
              description: 'Ex: Web Application, Design System',
              validation: (Rule) => Rule.required().min(1).max(50),
            },

            {
              name: 'image',
              title: 'Image du Projet',
              type: 'image',
              description: 'Screenshot ou image d\'aperçu du projet',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },

            {
              name: 'url',
              title: 'URL du Projet',
              type: 'url',
              description: 'Lien optionnel vers le projet live (avec https://)',
            },

            {
              name: 'span',
              title: 'Taille de la Carte',
              type: 'string',
              description: 'Contrôle la taille dans la grille',
              options: {
                list: [
                  { title: 'Normal (1 colonne)', value: 'md:col-span-1' },
                  { title: 'Large (2 colonnes)', value: 'md:col-span-2' },
                  { title: 'Géant (2 cols × 2 lignes)', value: 'md:col-span-2 md:row-span-2' },
                ],
              },
              initialValue: 'md:col-span-1',
            },
          ],
          preview: {
            select: {
              title: 'title',
              category: 'category',
              media: 'image',
            },
            prepare({ title, category, media }) {
              return {
                title: title,
                subtitle: `📁 ${category}`,
                media: media,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  // ===== PREVIEW =====
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'heroSubtitle',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: 'Page d\'Accueil',
        subtitle: `${title} — ${subtitle}`,
        media: media,
      }
    },
  },
})