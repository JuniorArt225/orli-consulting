import { defineField, defineType } from 'sanity';

/**
 * Article de blog. Les champs reprennent exactement ce qui est visible sur
 * les cartes de la maquette : catégorie, date, titre, extrait, temps de lecture.
 */
export default defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'meta', title: 'Métadonnées' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Deux lignes maximum : c’est le texte affiché sur la carte.',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Paragraphe', value: 'normal' },
            { title: 'Titre 2', value: 'h2' },
            { title: 'Titre 3', value: 'h3' },
            { title: 'Citation', value: 'blockquote' },
          ],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lien',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  { name: 'blank', type: 'boolean', title: 'Ouvrir dans un nouvel onglet' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Texte alternatif' }],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'meta',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Temps de lecture (minutes)',
      type: 'number',
      group: 'meta',
      description: 'Affiché à droite du lien « Lire l’article » (ex. 4 min).',
      validation: (rule) => rule.required().integer().min(1).max(60),
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      group: 'meta',
      initialValue: 'ORLI Consulting',
    }),
    defineField({
      name: 'featured',
      title: 'Mettre en avant',
      type: 'boolean',
      group: 'meta',
      initialValue: false,
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta description',
      type: 'text',
      rows: 2,
      group: 'seo',
      validation: (rule) => rule.max(160),
    }),
  ],
  orderings: [
    {
      title: 'Date de publication, récent en premier',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category.title', media: 'mainImage' },
  },
});
