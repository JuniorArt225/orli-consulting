# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Créateurs d'entreprise et dirigeants de TPE/PME ivoiriennes** : ils doivent immatriculer leur société, tenir leur comptabilité, déclarer, payer leurs salariés — sans service comptable interne. Ils cherchent un interlocuteur fiable et joignable, souvent depuis un téléphone.
- **Moyennes et grandes entreprises** (DG, DAF, responsables administratifs) : audit financier, révisions comptables, évaluation du contrôle interne, manuel de procédures, inventaire physique des immobilisations avec étiquetage RFID / QR.

Cibles confirmées par l'utilisateur le 2026-09-27.

## Product Purpose

Site vitrine d'ORLI Consulting, cabinet de conseil en comptabilité installé à Angré (Abidjan). Il présente trois pôles d'expertise et transforme la visite en **demande de diagnostic gratuit** (formulaire) ou en **appel**. Succès : une demande qualifiée (entreprise, email, téléphone, pôle concerné) débouchant sur un premier échange de 30 minutes.

## Positioning

Une maison, trois pôles — Comptabilité ; Juridique, Social & Paie ; Audit & Immobilisations — tenus par la même exigence de fiabilité. La porte d'entrée est sans risque : un diagnostic gratuit et sans engagement, restitué sous 5 à 10 jours, suivi d'une proposition en packs adaptés à la taille, au secteur et au budget. Ancrage local (le quotidien des entreprises ivoiriennes) et référentiels OHADA / SYSCOHADA.

## Operating Context

- Parcours client : prise de contact → diagnostic gratuit (5 à 10 j) → proposition sur mesure → réalisation → suivi dans la durée (relances aux échéances, diagnostic d'un autre pôle si utile).
- Réponse d'un consultant sous 48 h après une demande ; premier échange de 30 minutes.
- Documents du métier : statuts, RCCM, PV d'AGO / AGE, plan SYSCOHADA, états financiers annuels, déclarations fiscales et sociales, bulletins de paie.
- Canaux directs : 00225 05 64 08 14 02, 27 22 39 61 04, info@orli-consulting.com — Angré, Rue L020, Abidjan. **Pas de WhatsApp** (confirmé).

## Capabilities and Constraints

- Astro 5 100 % statique, Tailwind CSS v4, aucun framework JS côté client ; déployé par FTP sur un mutualisé LWS via GitHub Actions. Aucun code serveur.
- Formulaires : endpoint externe (`PUBLIC_FORM_ENDPOINT`, Formspree / Web3Forms), repli `mailto:` sinon.
- Blog alimenté par Sanity au build. La section sera implémentée plus tard : **ne rien inventer** (aucun article, catégorie, auteur ou date fictifs).
- Site en français uniquement.

## Brand Commitments

- Palette imposée : navy `#0a192f` (nuances `#112240`, `#1b3157`), or `#eab308` (`#ca9a04`), gris clair `#f3f4f6`. Ne pas s'en éloigner.
- Nom : « ORLI Consulting ». Valeurs : Fiabilité, Transparence, Innovation, Proximité.
- Polices issues de Google Fonts (demande de l'utilisateur).

## Evidence on Hand

- Contenu réel : `src/lib/content.ts` — pôles et packs, méthode en 5 étapes, valeurs, chiffres clés (« 3 pôles », « 5–10 j », « OHADA »), coordonnées.
- `public/logos/` : logos partenaires **provisoires** (CCI, OEC, APDCI, Ministère du Commerce), à remplacer par les fichiers officiels.
- Absents, à ne jamais fabriquer : équipe (noms, photos, rôles), année de création, nombre de clients ou de missions, témoignages, études de cas, tarifs, horaires d'ouverture, données sociétaires (forme juridique, capital, RCCM, NCC, directeur de publication — à signaler « à compléter »), image Open Graph (`public/og-default.jpg`).

## Product Principles

1. La confiance se prouve par la précision : chaque affirmation vient du contenu réel ; ce qui manque est signalé, jamais inventé.
2. Une porte d'entrée sans risque : le diagnostic gratuit est l'action principale partout, l'appel téléphonique l'alternative.
3. Lisible par un dirigeant pressé, sur mobile : l'offre, le délai et la prochaine étape, sans jargon.
4. Une maison, trois pôles : une identité commune, des parcours pensés par besoin.

## Accessibility & Inclusion

Déduit du code existant (lien d'évitement, focus visibles, `prefers-reduced-motion`) : viser WCAG 2.1 AA, mobile d'abord, connexions variables.
