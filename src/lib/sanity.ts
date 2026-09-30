import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Post, PostCard, SanityImageAsset } from '@/types/sanity';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

/**
 * Le site est généré statiquement : toutes ces requêtes tournent au build,
 * jamais dans le navigateur. `useCdn: true` suffit donc largement.
 */
export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token: import.meta.env.SANITY_READ_TOKEN || undefined,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** URL d'image optimisée ; `null` si Sanity n'est pas configuré ou image absente. */
export function urlForImage(
  source: SanityImageAsset | null | undefined,
  width = 800,
  height = 450,
): string | null {
  if (!builder || !source?.asset) return null;
  return builder.image(source).width(width).height(height).fit('crop').auto('format').url();
}

const CARD_FIELDS = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readingTime,
  mainImage,
  "category": category->{ title, "slug": slug.current }
`;

/**
 * Les N derniers articles publiés (3 par défaut, comme sur la page d'accueil).
 * Renvoie un tableau vide si Sanity n'est pas encore branché, pour que
 * `npm run build` passe même sans CMS — utile en CI sur une nouvelle machine.
 */
export async function getLatestPosts(limit = 3): Promise<PostCard[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<PostCard[]>(
    /* groq */ `*[_type == "post" && defined(slug.current) && publishedAt <= now()]
      | order(publishedAt desc)[0...$limit]{ ${CARD_FIELDS} }`,
    { limit },
  );
}

export async function getAllPosts(): Promise<PostCard[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<PostCard[]>(
    /* groq */ `*[_type == "post" && defined(slug.current) && publishedAt <= now()]
      | order(publishedAt desc){ ${CARD_FIELDS} }`,
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch<Post | null>(
    /* groq */ `*[_type == "post" && slug.current == $slug][0]{
      ${CARD_FIELDS}, body, author, seoDescription
    }`,
    { slug },
  );
}

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}
