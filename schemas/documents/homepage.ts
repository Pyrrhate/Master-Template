import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Page d\'Accueil',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Titre Hero',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre Hero',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Image de profil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // Stack Section
    defineField({
      name: 'stackTitle',
      title: 'Stack - Titre',
      type: 'string',
      initialValue: 'The Stack',
    }),
    defineField({
      name: 'stackSubtitle',
      title: 'Stack - Sous-titre',
      type: 'string',
      initialValue: 'The Engine Room',
    }),
    defineField({
      name: 'stackDescription',
      title: 'Stack - Description',
      type: 'text',
      rows: 2,
      initialValue: 'Every module is purpose-built for speed, scale, and creative freedom.',
    }),
    defineField({
      name: 'stackItems',
      title: 'Technologies de la Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Nom de la technologie',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icône',
              type: 'string',
              options: {
                list: [
                  { title: 'Code', value: 'code' },
                  { title: 'Palette', value: 'palette' },
                  { title: 'Git', value: 'git' },
                  { title: 'Globe', value: 'globe' },
                  { title: 'File', value: 'file' },
                  { title: 'Wrench', value: 'wrench' },
                ],
              },
            },
            {
              name: 'span',
              title: 'Taille de la carte',
              type: 'string',
              options: {
                list: [
                  { title: 'Petite (1 col)', value: 'col-span-1' },
                  { title: 'Moyenne (2 col)', value: 'col-span-2' },
                  { title: 'Grande (2 col, 2 lignes)', value: 'col-span-2 row-span-2' },
                ],
              },
              initialValue: 'col-span-1',
            },
            {
              name: 'accentClass',
              title: 'Couleur d\'accent',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary (Blue)', value: 'text-primary' },
                  { title: 'Secondary (Dark Blue-Gray)', value: 'text-secondary' },
                  { title: 'Accent (Blue-Gray)', value: 'text-accent' },
                  { title: 'Foreground (Light)', value: 'text-foreground' },
                ],
              },
              initialValue: 'text-primary',
            },
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
            },
            prepare({ title, description }) {
              return {
                title: title,
                subtitle: description,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // Gallery Section
    defineField({
      name: 'galleryTitle',
      title: 'Gallery - Titre',
      type: 'string',
      initialValue: 'The Gallery',
    }),
    defineField({
      name: 'gallerySubtitle',
      title: 'Gallery - Sous-titre',
      type: 'string',
      initialValue: 'The Output',
    }),
    defineField({
      name: 'galleryDescription',
      title: 'Gallery - Description',
      type: 'text',
      rows: 2,
      initialValue: 'Selected works from the factory floor. Each piece is engineered to perform.',
    }),
    defineField({
      name: 'projects',
      title: 'Projets',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Nom du projet',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'category',
              title: 'Catégorie',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL du projet (optionnel)',
              type: 'url',
            },
            {
              name: 'span',
              title: 'Taille de la carte',
              type: 'string',
              options: {
                list: [
                  { title: 'Normal (1 col)', value: 'md:col-span-1' },
                  { title: 'Large (2 col)', value: 'md:col-span-2' },
                  { title: 'Extra Large (2 col, 2 lignes)', value: 'md:col-span-2 md:row-span-2' },
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
                subtitle: category,
                media: media,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare({ title }) {
      return {
        title: 'Page d\'Accueil',
        subtitle: title,
      }
    },
  },
})
