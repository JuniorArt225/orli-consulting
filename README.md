# ORLI Consulting — site vitrine + blog

Site 100 % statique (Astro) avec blog piloté depuis Sanity, déployé par FTP sur
un hébergement mutualisé LWS via GitHub Actions.

```
orli-consulting/
├── src/
│   ├── components/      # Composants .astro (aucun framework JS)
│   ├── layouts/         # BaseLayout (SEO, polices, header/footer, données structurées)
│   ├── lib/             # content.ts (contenu), sanity.ts (GROQ), typo.ts, anchors.ts
│   ├── pages/           # voir « Pages » ci-dessous
│   ├── scripts/         # site.ts (en-tête, menus, formulaires, apparitions), announce.ts
│   ├── styles/global.css# Tokens Tailwind v4 (@theme) + composants maison
│   └── types/sanity.ts  # Interfaces TypeScript du contenu Sanity
├── public/              # favicon, image de partage, logos, .htaccess (Apache LWS)
├── sanity/              # Studio Sanity (package npm séparé)
└── .github/workflows/   # deploy.yml — build + FTP
```

## Démarrer

```bash
npm install
cp .env.example .env     # renseigner PUBLIC_SANITY_PROJECT_ID
npm run dev              # http://localhost:4321
```

Le site se construit même sans Sanity configuré : les requêtes renvoient un
tableau vide et la section blog affiche son état vide.

## Pages

| URL | Contenu |
| --- | --- |
| `/` | Hero + formulaire de diagnostic, puis le parcours en 5 étapes (rail collant) |
| `/poles/` | Les trois pôles, leurs offres, « Par où commencer ? » (situation → offres) |
| `/poles/comptabilite/`, `/poles/juridique/`, `/poles/audit/` | Une page par pôle (générées depuis `poles` dans `content.ts`) |
| `/cabinet/` | Qui sommes-nous : mission, publics, valeurs, méthode, localisation |
| `/contact/` | Formulaire complet, coordonnées copiables, étapes qui suivent la demande |
| `/mentions-legales/`, `/confidentialite/` | Pages légales avec sommaire |
| `/blog/`, `/blog/[slug]/` | Articles Sanity (rien n'est inventé : état vide tant qu'il n'y a pas d'article) |
| `/404` | Page introuvable (servie par Apache via `public/.htaccess`) |

Tout le contenu éditorial vit dans `src/lib/content.ts`. Les chaînes y passent par
`typo()` (espaces insécables de la typographie française).

## Design

- **Palette** inchangée : navy `#0a192f` / `#112240` / `#1b3157`, or `#eab308` / `#ca9a04`,
  gris `#f3f4f6`. `#a16207` sert uniquement au petit texte doré sur fond clair (contraste AA).
- **Polices** Google : *Schibsted Grotesk* (tout le texte) et *Fragment Mono* (numéros
  d'étape, délais, références). Elles sont téléchargées au build par l'API Fonts
  d'Astro (`experimental.fonts` dans `astro.config.mjs`) puis servies depuis `/_astro/` :
  aucune requête vers Google côté visiteur, préchargement et polices de repli calibrées.
  Le build a donc besoin d'un accès réseau (c'est le cas sur GitHub Actions).
- **Signature** : le rail du parcours (filet or qui avance avec la lecture), le double
  trait comptable sous les mots clés, le cachet « Reçu » daté du jour à l'envoi du formulaire.
- **Animations** : une entrée CSS jouée une fois par page, le rail qui suit la lecture,
  le double trait qui se trace, transitions entre pages (View Transitions natives) et
  micro-interactions (menus, boutons, liens, accordéons, copie). Tout respecte
  `prefers-reduced-motion` et le contenu reste visible sans JavaScript.
- **L'or** est réservé à ce qui fait avancer : rail et étape en cours, double trait,
  action principale. Icônes, étiquettes et métadonnées restent en navy ou en blanc.

## Formulaires

Les formulaires postent vers `PUBLIC_FORM_ENDPOINT` (Formspree, Basin…) en `fetch`, avec
validation en français et message de confirmation sur place. Le service doit répondre en
2xx à une requête `Accept: application/json` (c'est le cas de Formspree). Pour Web3Forms,
ajouter le champ caché `access_key` dans `DiagnosticForm.astro`.
Sans endpoint configuré, le formulaire bascule sur un `mailto:`.

Le pôle peut être présélectionné par l'URL : `/contact/?pole=audit#diagnostic`.

## Breakpoints

| Palier | Largeur | Comportement |
| --- | --- | --- |
| mobile | < 768px | menu plein écran, bouton d'appel dans l'en-tête, formulaire sous le titre, ligne de temps verticale |
| `md:` tablette | ≥ 768px | bouton « Diagnostic gratuit » dans l'en-tête, grilles à 2 colonnes |
| `lg:` desktop | ≥ 1024px | navigation complète + menu « Nos pôles », hero en 2 colonnes, rail du parcours collant |

## Studio Sanity

```bash
cd sanity && npm install && npm run dev
```

Puis `npx sanity deploy` pour donner au client une URL d'administration.

## Déploiement

`main` (ou un webhook Sanity) déclenche `.github/workflows/deploy.yml` : build
puis synchronisation FTPS du dossier `dist/`.

`public/.htaccess` déclare la page 404 et la compression ; `public/_astro/.htaccess`
met en cache long les fichiers versionnés (CSS, JS, polices). Les deux blocs sont
protégés par `<IfModule>` et sans effet si le module n'est pas disponible.

### Secrets GitHub à créer

| Secret | Rôle |
| --- | --- |
| `FTP_SERVER` | hôte FTP LWS (ex. `ftp.orli-consulting.com`) |
| `FTP_USERNAME` / `FTP_PASSWORD` | identifiants FTP LWS |
| `FTP_SERVER_DIR` | racine web, souvent `/www/` ou `/htdocs/` (slash final obligatoire) |
| `PUBLIC_SANITY_PROJECT_ID` | id du projet Sanity |
| `PUBLIC_SANITY_DATASET` | `production` |
| `PUBLIC_SANITY_API_VERSION` | `2024-10-01` |
| `PUBLIC_FORM_ENDPOINT` | endpoint du formulaire (Formspree / Web3Forms) |
| `SANITY_READ_TOKEN` | uniquement si le dataset est privé |

### Webhook Sanity → rebuild

Dans **sanity.io/manage → API → Webhooks** :

- URL : `https://api.github.com/repos/<owner>/<repo>/dispatches`
- Méthode : `POST`
- Headers : `Authorization: Bearer <PAT repo>`, `Accept: application/vnd.github+json`
- Body : `{"event_type":"sanity-publish"}`
- Déclencheurs : `create`, `update`, `delete` sur `_type == "post"`

## Reste à faire avant la mise en ligne

- Remplacer les logos partenaires de `public/logos/` par les vrais fichiers.
- Compléter les champs signalés « à compléter » :
  - `/mentions-legales/` : forme juridique, capital, RCCM, NCC, directeur de la publication ;
  - `/confidentialite/` : prestataire d'envoi des formulaires, durée de conservation.
- Faire relire les deux pages légales par le cabinet.
- `public/og-default.jpg` (1200×630) est fourni ; le remplacer si le cabinet a un visuel officiel.
