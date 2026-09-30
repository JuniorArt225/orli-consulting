/** Ancre stable et lisible pour une offre : « pack-demarrage », « audit-financier »… */
export const offerAnchor = (prefix: string, title: string) =>
  `${prefix}-${title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')}`;
