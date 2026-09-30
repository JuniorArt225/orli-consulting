/**
 * Contenu éditorial statique du site (hors blog, qui vient de Sanity).
 *
 * Règle : tout ce qui est affiché vient de ce que le cabinet a fourni.
 * Ce qui manque (équipe, chiffres, données sociétaires…) n'est jamais inventé.
 */

import { typo } from '@/lib/typo';

export type PoleSlug = 'comptabilite' | 'juridique' | 'audit';

export type Offer = {
  /** Libellé exact fourni par le cabinet (maquette validée par le client). */
  title: string;
  /** Porte d'entrée gratuite (diagnostic flash, check-up). */
  free?: boolean;
};

export type Pole = {
  slug: PoleSlug;
  /** « Pôle 01 », tel qu'écrit sur la maquette. */
  number: string;
  /** Pastille de couleur de la carte (maquette). */
  dot: 'blue' | 'gold' | 'green';
  title: string;
  /** Libellé court pour les menus. */
  navLabel: string;
  description: string;
  offers: readonly Offer[];
  /** Situations concrètes, chacune renvoyant à une offre du pôle (par son titre). */
  situations: readonly { label: string; offer: string }[];
  /** Question propre au pôle, ajoutée à la FAQ commune. */
  faq: { q: string; a: string };
  href: string;
};

export const poles: readonly Pole[] = typo([
  {
    slug: 'comptabilite',
    number: '01',
    dot: 'blue',
    title: 'Comptabilité',
    navLabel: 'Comptabilité',
    description: 'Suivi comptable, déclarations fiscales, états financiers.',
    offers: [
      { title: 'Diagnostic comptable flash gratuit', free: true },
      { title: 'Pack Démarrage — régime fiscal, immatriculation, plan SYSCOHADA' },
      { title: 'Pack Suivi mensuel / trimestriel' },
      { title: 'Pack États financiers annuels' },
    ],
    situations: [
      { label: 'Vous lancez votre activité et devez choisir votre régime fiscal', offer: 'Pack Démarrage — régime fiscal, immatriculation, plan SYSCOHADA' },
      { label: 'Vous voulez une comptabilité suivie tout au long de l’année', offer: 'Pack Suivi mensuel / trimestriel' },
      { label: 'Vous devez produire vos états financiers de fin d’exercice', offer: 'Pack États financiers annuels' },
      { label: 'Vous voulez savoir où en sont vos comptes', offer: 'Diagnostic comptable flash gratuit' },
    ],
    faq: {
      q: 'Quel référentiel comptable appliquez-vous ?',
      a: 'Le plan comptable SYSCOHADA, mis en place dès le Pack Démarrage.',
    },
    href: '/poles/comptabilite/',
  },
  {
    slug: 'juridique',
    number: '02',
    dot: 'gold',
    title: 'Juridique, Social & Paie',
    navLabel: 'Juridique, Social & Paie',
    description: "Constitution d'entreprise, vie sociale, paie et obligations sociales.",
    offers: [
      { title: "Pack Constitution d'entreprise — statuts, RCCM" },
      { title: "Pack Vie sociale — PV d'AGO et d'AGE" },
      { title: 'Check-up conformité sociale gratuit', free: true },
      { title: 'Pack Paie externalisée' },
    ],
    situations: [
      { label: 'Vous créez votre société', offer: "Pack Constitution d'entreprise — statuts, RCCM" },
      { label: 'Vous devez tenir vos assemblées générales', offer: "Pack Vie sociale — PV d'AGO et d'AGE" },
      { label: 'Vous voulez confier la paie de vos salariés', offer: 'Pack Paie externalisée' },
      { label: 'Vous voulez vérifier que vous êtes en règle côté social', offer: 'Check-up conformité sociale gratuit' },
    ],
    faq: {
      q: "Vous occupez-vous de l'immatriculation au RCCM ?",
      a: "Oui : le Pack Constitution d'entreprise couvre la rédaction des statuts et l'immatriculation au RCCM.",
    },
    href: '/poles/juridique/',
  },
  {
    slug: 'audit',
    number: '03',
    dot: 'green',
    title: 'Audit & Immobilisations',
    navLabel: 'Audit & Immobilisations',
    description: 'Audit, inventaire et gestion de votre patrimoine immobilisé',
    offers: [
      { title: 'Audit financier' },
      { title: 'Inventaire physique, réconciliation, étiquetage RFID / QR' },
      { title: 'Révisions comptables' },
      { title: 'Évaluation du contrôle interne' },
      { title: 'Manuel de procédures' },
      { title: 'Revue organisationnelle, financière et comptable' },
    ],
    situations: [
      { label: 'Vous voulez faire réviser vos comptes', offer: 'Révisions comptables' },
      { label: 'Vous voulez un regard extérieur sur votre organisation', offer: 'Revue organisationnelle, financière et comptable' },
      { label: 'Vous voulez mesurer la solidité de votre contrôle interne', offer: 'Évaluation du contrôle interne' },
      { label: 'Vous voulez formaliser vos façons de faire', offer: 'Manuel de procédures' },
      { label: 'Vous avez besoin d’un audit financier', offer: 'Audit financier' },
      { label: 'Vous voulez savoir précisément ce que possède votre entreprise', offer: 'Inventaire physique, réconciliation, étiquetage RFID / QR' },
    ],
    faq: {
      q: "Que comprend l'inventaire des immobilisations ?",
      a: 'Un inventaire physique de vos actifs, leur réconciliation avec vos registres comptables et leur étiquetage par RFID ou QR code.',
    },
    href: '/poles/audit/',
  },
]);

export const getPole = (slug: PoleSlug): Pole => poles.find((pole) => pole.slug === slug)!;

/** « Par où commencer ? » : une situation → les offres qui y répondent, tous pôles confondus. */
export const needs: readonly { id: string; label: string; offers: readonly { pole: PoleSlug; title: string }[] }[] = typo([
  {
    id: 'creer',
    label: 'Je crée mon entreprise',
    offers: [
      { pole: 'juridique', title: "Pack Constitution d'entreprise — statuts, RCCM" },
      { pole: 'comptabilite', title: 'Pack Démarrage — régime fiscal, immatriculation, plan SYSCOHADA' },
    ],
  },
  {
    id: 'comptes',
    label: 'Je veux des comptes tenus à jour',
    offers: [
      { pole: 'comptabilite', title: 'Pack Suivi mensuel / trimestriel' },
      { pole: 'comptabilite', title: 'Pack États financiers annuels' },
    ],
  },
  {
    id: 'salaries',
    label: "J'emploie des salariés",
    offers: [
      { pole: 'juridique', title: 'Pack Paie externalisée' },
      { pole: 'juridique', title: 'Check-up conformité sociale gratuit' },
    ],
  },
  {
    id: 'assemblees',
    label: 'Je tiens mes assemblées',
    offers: [{ pole: 'juridique', title: "Pack Vie sociale — PV d'AGO et d'AGE" }],
  },
  {
    id: 'organisation',
    label: 'Je veux fiabiliser mon organisation',
    offers: [
      { pole: 'audit', title: 'Évaluation du contrôle interne' },
      { pole: 'audit', title: 'Manuel de procédures' },
      { pole: 'audit', title: 'Revue organisationnelle, financière et comptable' },
    ],
  },
  {
    id: 'audit',
    label: 'Je dois faire auditer mes comptes',
    offers: [
      { pole: 'audit', title: 'Audit financier' },
      { pole: 'audit', title: 'Révisions comptables' },
    ],
  },
  {
    id: 'actifs',
    label: 'Je dois inventorier mes actifs',
    offers: [{ pole: 'audit', title: 'Inventaire physique, réconciliation, étiquetage RFID / QR' }],
  },
]);

/** Retrouve une offre à partir de son pôle et de son titre (source unique : `poles`). */
export const findOffer = (slug: PoleSlug, title: string): Offer =>
  getPole(slug).offers.find((offer) => offer.title === title)!;

export type NavItem = { label: string; href: string; children?: readonly Pole[] };

export const nav: readonly NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Qui sommes-nous', href: '/cabinet/' },
  { label: 'Comptabilité', href: '/poles/comptabilite/' },
  { label: 'Juridique & Paie', href: '/poles/juridique/' },
  { label: 'Audit & Immo.', href: '/poles/audit/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const heroStats = [
  { value: '3', label: "pôles d'expertise" },
  { value: '5–10 j', label: 'pour votre diagnostic' },
  { value: 'OHADA', label: "zone d'intervention" },
] as const;

/** Partenaires de la maquette. Logos provisoires : remplacer les fichiers par les logos officiels. */
export const partners = [
  { name: 'CCI Côte d’Ivoire', logo: '/logos/cci.svg' },
  { name: 'Office Ivoirien des Chargeurs', logo: '/logos/oic.svg' },
  { name: 'AFOR — Agence Foncière Rurale', logo: '/logos/afor.svg' },
  { name: 'Groupe scolaire Les Étoiles de Bingerville', logo: '/logos/etoiles-bingerville.svg' },
] as const;

export const methodSteps = typo([
  {
    title: 'Prise de contact',
    description: 'Un premier échange pour comprendre votre activité et votre besoin.',
  },
  {
    title: 'Diagnostic gratuit',
    description: 'Un audit flash sans engagement, restitué sous 5 à 10 jours.',
  },
  {
    title: 'Proposition sur-mesure',
    description: 'Un pack adapté à votre taille, votre secteur et votre budget.',
  },
  {
    title: 'Réalisation',
    description: 'Méthodes éprouvées, planification rigoureuse, restitutions claires.',
  },
  {
    title: 'Suivi dans la durée',
    description: 'Relances aux échéances clés et, si utile, un diagnostic sur un autre pôle.',
  },
] as const);

export const values = typo([
  {
    title: 'Fiabilité',
    description: 'Des livrables précis, conformes aux normes comptables, fiscales et sociales en vigueur.',
  },
  {
    title: 'Transparence',
    description: 'Un suivi détaillé et compréhensible à chaque étape de la mission.',
  },
  {
    title: 'Innovation',
    description: 'Des outils performants pour optimiser la gestion des actifs, des comptes et de la paie.',
  },
  {
    title: 'Proximité',
    description: 'Une équipe qui connaît le quotidien des entreprises ivoiriennes.',
  },
] as const);

/** Questions communes aux trois pôles : chaque réponse reprend un engagement déjà publié. */
export const faq = typo([
  {
    q: 'Le diagnostic est-il vraiment gratuit ?',
    a: 'Oui. C’est un audit flash sans engagement, restitué sous 5 à 10 jours. Vous décidez ensuite, librement, de la suite.',
  },
  {
    q: 'Sous quel délai un consultant me répond-il ?',
    a: 'Sous 48 h après votre demande.',
  },
  {
    q: 'Comment se passe le premier échange ?',
    a: 'Trente minutes pour comprendre votre activité et votre besoin : c’est suffisant pour savoir où vous en êtes.',
  },
  {
    q: 'Les packs s’adaptent-ils à ma structure ?',
    a: 'Oui. Chaque proposition est un pack sur mesure, calibré selon votre taille, votre secteur et votre budget.',
  },
  {
    q: 'Où intervenez-vous ?',
    a: 'Le cabinet est installé à Angré (Rue L120, Abidjan) et intervient dans l’espace OHADA.',
  },
  {
    q: 'Puis-je faire appel à plusieurs pôles ?',
    a: 'Oui. Les trois pôles partagent la même exigence de fiabilité ; au fil du suivi, nous vous proposons si utile un diagnostic sur un autre pôle.',
  },
] as const);

/** Les deux publics du cabinet (confirmés par ORLI), avec les offres qui les concernent. */
export const audiences = typo([
  {
    title: 'Créateurs, TPE et PME',
    description: 'Vous lancez ou développez votre activité sans service comptable interne.',
    offers: [
      { pole: 'juridique', title: "Pack Constitution d'entreprise — statuts, RCCM" },
      { pole: 'comptabilite', title: 'Pack Démarrage — régime fiscal, immatriculation, plan SYSCOHADA' },
      { pole: 'comptabilite', title: 'Pack Suivi mensuel / trimestriel' },
      { pole: 'juridique', title: 'Pack Paie externalisée' },
    ],
  },
  {
    title: 'Moyennes et grandes entreprises',
    description: 'Vous avez besoin d’un regard indépendant sur vos comptes, vos procédures et vos actifs.',
    offers: [
      { pole: 'audit', title: 'Audit financier' },
      { pole: 'audit', title: 'Évaluation du contrôle interne' },
      { pole: 'audit', title: 'Manuel de procédures' },
      { pole: 'audit', title: 'Inventaire physique, réconciliation, étiquetage RFID / QR' },
    ],
  },
] as const satisfies readonly { title: string; description: string; offers: readonly { pole: PoleSlug; title: string }[] }[]);

const address = 'Rue L120, Angré, Abidjan, Côte d’Ivoire';

export const company = typo({
  name: 'ORLI Consulting',
  tagline: 'Cabinet de consulting en comptabilité — Angré, Rue L120, Abidjan, Côte d’Ivoire.',
  address: { street: 'Rue L120', district: 'Angré', city: 'Abidjan', country: 'Côte d’Ivoire' },
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  /** Numéros au format ivoirien à 10 chiffres ; 05 = mobile, 27 = fixe. */
  phones: [
    { label: 'Mobile', display: '00225 05 64 08 14 02', href: 'tel:+2250564081402' },
    { label: 'Fixe', display: '27 22 39 61 04', href: 'tel:+2252722396104' },
  ],
  email: 'infos@orli-consulting.com',
} as const);

/** Hébergeur (README : déploiement FTP sur LWS). Informations publiées sur lws.fr. */
export const host = {
  name: 'LWS (Ligne Web Services)',
  form: 'SAS au capital de 500 000 €',
  address: '10, rue Penthièvre, 75008 Paris, France',
  registration: 'RCS Paris 851 993 683',
  url: 'https://www.lws.fr',
} as const;
