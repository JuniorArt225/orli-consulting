/**
 * Typographie française : espace insécable avant « ; : ! ? » et à l'intérieur
 * des guillemets, trait d'union insécable dans les inversions (« est-il »),
 * pour qu'aucune ponctuation ni pronom ne tombe seul en début de ligne.
 */
const NBSP = ' ';
const NB_HYPHEN = '‑';

export const fr = (text: string): string =>
  text
    .replace(/ ([;:!?»])/g, `${NBSP}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/(\p{L})-(je|tu|il|elle|on|nous|vous|ils|elles)(?![\p{L}-])/gu, `$1${NB_HYPHEN}$2`);

/** Clés techniques à ne jamais retoucher (URLs, identifiants, clés de recherche). */
const RAW_KEYS = new Set(['href', 'slug', 'url', 'mapsUrl', 'email', 'pole', 'id', 'logo']);

/** Applique `fr()` à toutes les chaînes d'un objet de contenu, en profondeur. */
export function typo<T>(value: T): T {
  if (typeof value === 'string') return fr(value) as T;
  if (Array.isArray(value)) return value.map((item) => typo(item)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, RAW_KEYS.has(key) ? item : typo(item)]),
    ) as T;
  }
  return value;
}
