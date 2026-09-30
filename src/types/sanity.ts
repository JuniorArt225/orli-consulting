/** Types du contenu renvoyé par les requêtes GROQ de `src/lib/sanity.ts`. */

export interface SanityImageAsset {
  _type: 'image';
  alt?: string;
  asset: { _ref: string; _type: 'reference' };
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  pole?: 'comptabilite' | 'juridique' | 'audit';
}

/** Projection utilisée par les cartes du blog (pas de `body`). */
export interface PostCard {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  mainImage: SanityImageAsset | null;
  category: Pick<Category, 'title' | 'slug'> | null;
}

/** Projection complète utilisée par la page article. */
export interface Post extends PostCard {
  body: unknown[];
  author?: string;
  seoDescription?: string;
}
