import { defineField, defineType } from 'sanity';

/**
 * Catégorie d'article — affichée en majuscules au-dessus du titre sur les
 * cartes du blog (« FISCALITÉ », « CRÉATION D'ENTREPRISE », …).
 */
export default defineType({
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 60 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pole',
      title: 'Pôle rattaché',
      type: 'string',
      description: 'Permet de filtrer les articles par pôle d’expertise.',
      options: {
        list: [
          { title: 'Comptabilité', value: 'comptabilite' },
          { title: 'Juridique, Social & Paie', value: 'juridique' },
          { title: 'Audit & Immobilisations', value: 'audit' },
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'pole' },
  },
});
