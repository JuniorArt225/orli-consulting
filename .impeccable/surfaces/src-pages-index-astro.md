---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/poles","src/pages/cabinet","src/pages/contact"]
---

# Surface brief — site vitrine ORLI (accueil, pôles, cabinet, contact)

Mode : **Persuade** (accueil, pôles, cabinet, contact) ; les pages légales et le blog sont en mode **Read**.
Public : créateurs et dirigeants de TPE/PME ivoiriennes ; DG/DAF de moyennes et grandes entreprises (voir PRODUCT.md).
Action : demander le diagnostic gratuit (formulaire), sinon appeler. Preuves disponibles : offres et packs réels, méthode en 5 étapes, délais publiés (5–10 j, 48 h, 30 min), zone OHADA, logos partenaires provisoires. Rien d'autre.
Contraintes : palette imposée, aucun contenu inventé, blog laissé tel quel (Sanity), site statique sans framework.

## Direction contract

THESIS — Le site raconte le parcours du client (prise de contact → diagnostic gratuit → proposition → réalisation → suivi), pas l'organigramme du cabinet. Il refuse la vitrine type du conseil comptable : hero + trois cartes services + chiffres clés + témoignages.

OWN-WORLD — Navy #0a192f / #112240 pour les chapitres de marque, blanc et #f3f4f6 pour lire, or #eab308 réservé à ce qui avance : rail, étape active, double trait comptable, action principale (#a16207 pour l'or en petit texte sur clair). Schibsted Grotesk 400–900 serrée (-0.02 à -0.032em) pour tout le texte ; Fragment Mono seulement pour numéros d'étape, délais, références. Filets fins plutôt que cartes, rayons 8–16 px, icônes au trait 1,75, aucun sur-titre.

STORY — En un écran, le dirigeant comprend ce que fait ORLI et que le premier pas est gratuit. En descendant le long du rail, il voit ce qui se passe à chaque étape : ce que le diagnostic examine dans les trois pôles, les packs qui répondent à sa situation, la façon de travailler, le suivi. Il demande son diagnostic ou appelle.

FIRST VIEWPORT — Hero navy plein écran. Colonne gauche (7/12) : titre existant en Schibsted 800 ~4.6rem max, « performance » en or souligné d'un double trait comptable qui se trace à l'arrivée ; phrase des trois pôles ; une ligne de faits en Fragment Mono (diagnostic 5–10 j · réponse 48 h · Angré, Abidjan · espace OHADA). Colonne droite (5/12) : formulaire blanc, action principale. Pied du hero : le rail 01→05 à l'horizontale, étapes nommées et cliquables, 01 allumée en or. Mobile : titre, faits, lien d'appel, puis le formulaire directement dessous.

FORM — « Le parcours en 5 étapes », n°5 de ma liste ordonnée de 7 structures, distribué en tête par le tirage (seed 511717b1), confirmé par l'utilisateur. Interaction signature : le rail du parcours — rail vertical collant (desktop) dont le filet or se remplit avec le défilement et allume l'étape en cours ; ligne de temps verticale sur mobile. Même grammaire sur les pages pôles (le parcours appliqué au pôle).

FINISH — unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Moment mémorable
Le filet or qui avance avec le lecteur le long des cinq étapes, et le cachet « Reçu » daté du jour qui valide l'envoi du formulaire.

## Décisions ouvertes
- Logos partenaires officiels à fournir ; image Open Graph à valider.
- Données sociétaires des mentions légales (forme, capital, RCCM, NCC, directeur de publication) à compléter.
