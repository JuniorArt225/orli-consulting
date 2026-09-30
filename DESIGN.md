---
name: ORLI Consulting
description: Site of an Abidjan accounting consultancy, told as the client's five-step journey. A navy ledger ruled in hairlines, with gold only for what moves forward.
colors:
  navy: "#0a192f"
  navy-800: "#112240"
  navy-700: "#1b3157"
  gold: "#eab308"
  gold-hover: "#f2c229"
  gold-600: "#ca9a04"
  gold-700: "#a16207"
  white: "#ffffff"
  gray-light: "#f3f4f6"
  hairline: "rgb(10 25 47 / 0.12)"
  hairline-on-navy: "rgb(255 255 255 / 0.12)"
  danger: "#b42318"
typography:
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 1.35rem + 3.3vw, 4.05rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.95rem, 1.35rem + 2.2vw, 3.1rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  item:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.375
  lead:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  prose:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
  control:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 500
    lineHeight: 1.5
  button:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
  tag:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
  mono:
    fontFamily: "Fragment Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  wordmark:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(7rem, 31vw, 27rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.04em"
rounded:
  lg: "8px"
  "2xl": "16px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  gutter-lg: "32px"
  row: "20px"
  card: "20px"
  card-sm: "28px"
  grid-gap: "40px"
  grid-gap-lg: "48px"
  section: "80px"
  section-sm: "96px"
  section-lg: "112px"
  journey-lg: "128px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "48px"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
  button-gold-compact:
    padding: "0 16px"
    height: "44px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "48px"
  button-navy-hover:
    backgroundColor: "{colors.navy-700}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "48px"
  button-line-light:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "48px"
  field-input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "0 14px"
    height: "48px"
  tag-free:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.tag}"
    rounded: "{rounded.full}"
    padding: "1px 8px"
  tag-free-on-navy:
    textColor: "{colors.white}"
  chip:
    backgroundColor: "transparent"
    textColor: "rgb(255 255 255 / 0.85)"
    typography: "{typography.control}"
    rounded: "{rounded.full}"
    padding: "0.45rem 0.95rem"
    height: "40px"
  chip-selected:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
  nav-link:
    textColor: "rgb(255 255 255 / 0.78)"
    typography: "{typography.control}"
    rounded: "{rounded.lg}"
    padding: "0.6rem 0.8rem"
  nav-link-active:
    textColor: "{colors.white}"
  header-bar:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    height: "72px"
  form-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.card-sm}"
  router-panel:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.2xl}"
    padding: "40px"
  rail-track:
    backgroundColor: "rgb(10 25 47 / 0.1)"
    width: "2px"
  rail-fill:
    backgroundColor: "{colors.gold}"
    width: "2px"
  rail-dot:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: "12px"
  rail-dot-reached:
    backgroundColor: "{colors.gold}"
  chapter-marker:
    backgroundColor: "{colors.white}"
    textColor: "rgb(10 25 47 / 0.7)"
    rounded: "{rounded.full}"
    size: "32px"
  chapter-marker-reached:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
  ruled-row:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    padding: "20px 0"
  double-rule:
    backgroundColor: "{colors.gold}"
    height: "max(2px, 0.055em)"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.gold-700}"
    rounded: "10px"
    padding: "0.85rem 1.6rem 0.95rem"
  cta-band:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    padding: "64px 0"
  footer-wordmark:
    textColor: "{colors.navy-800}"
    typography: "{typography.wordmark}"
---

# Design System: ORLI Consulting

## Overview

**Creative North Star: "The Ledger That Moves Forward"**

The site reads like a well-kept ledger that someone walks you through. Navy is the binding and the ink, white and paper grey are the pages, hairline rules hold the rows, and a single gold thread, the journey rail, advances with the reader from first contact to long-term follow-up. The identity comes from the accounting trade's own marks: the double rule that closes a verified total, the dated "Reçu" stamp, reference figures set in a monospaced face. Every gold mark means "you are here" or "this is the next step"; nothing else is gold.

The voice is confident, precise and unhurried. Headings are Schibsted Grotesk set heavy and tight; reading text is plain and generous; Fragment Mono is held back for the figures a finance reader checks: step numbers, durations, dates, references. Density is moderate. Long hairline-ruled rows replace card grids, sections breathe on an 80–128px rhythm, and one 12-column grid carries every page. Surfaces change by chapter, not by decoration. Navy carries the brand chapters (header, heroes, the needs router, footer), white carries the reading, paper grey holds FAQs and recaps, and a gold band closes each page with its one call to action.

Motion is authored once per surface: the page-hero entrance, the rail filling as you read, the double rule drawing under a key word, the stamp landing when the form is sent. Everything else is interaction feedback on one house curve (ease-out-expo). The system rejects the stock accounting-firm showcase (hero, three service cards, key-figure counters, testimonials) and rejects eyebrow labels over headings.

**The One Moment Rule.** Each surface gets at most one authored motion moment: the page-hero entrance, the journey rail, the double rule, or the "Reçu" stamp. Everything else is interaction state (hover, press, open, select, copy), and there are no scroll-reveal staggers. Page-to-page view transitions (160ms out, 360ms in) are navigation, not a moment. Under reduced motion, entrances, view transitions and the stamp animation are off, and the double rule appears without drawing. Content stays visible without JavaScript.

**Key Characteristics:**
- A pinned client palette: the navy family, one gold, one paper grey. New tones are only alphas of navy or white.
- Gold is spent only on forward motion: the rail, the current step, the double rule, the primary action, the active page, the stamp, the logo.
- Hairline-ruled rows instead of cards; containers appear only when they do work.
- Schibsted Grotesk 400–900 for all text; Fragment Mono only for measured figures.
- The five-step journey rail organizes the home page and every pôle page.
- French typography is handled in code: non-breaking spaces and pronoun hyphens.
- One authored motion moment per surface; everything respects reduced motion.

## Colors

The palette is pinned by the client: a deep navy family that binds and inks every page, one gold that only ever points forward, and white and grey pages ruled with navy hairlines.

### Primary
- **Ledger Navy** (#0a192f): the ink of all text on light surfaces and the ground of the brand chapters (header, heroes, needs router, footer, 404). It is also the primary button on light surfaces and the browser theme color.
- **Chapter Navy** (#112240): the raised layer inside navy chapters (the hover of the pôle index tiles, the blog cover fallback) and the tone-on-tone footer wordmark.
- **Lamplight Navy** (#1b3157): the hover state of navy buttons and the soft radial light behind hero forms (a closest-side radial gradient at 85–90% fading out by 70%). Also the scrollbar thumb.

### Secondary
- **Forward Gold** (#eab308): the journey rail fill, reached and current steps, the double rule, the gold button, the active nav underline and the current page in the mobile menu, the selected situation chip, text selection, the skip link, the blog reading-progress bar, the closing CTA band, and the logo's "CONSULTING". On navy it reads at 9.2:1; on white it is 1.9:1, so there it only appears as fills and rules.
- **Lit Gold** (#f2c229): the hover state of the gold button, and nothing else.
- **Deep Gold** (#ca9a04): part of the pinned client palette, with no standalone role in the build. It is too light for text on white (2.6:1), so small gold text uses Stamp Ochre.
- **Stamp Ochre** (#a16207): the only gold for small text or thin marks on light surfaces (4.9:1 on white). Used for the current step number on the rail, chapter numbers and the "Reçu" stamp.

### Neutral
- **Sheet White** (#ffffff): the default page, the surface of forms floating on navy, and text on navy.
- **Paper Grey** (#f3f4f6): the second reading surface (FAQ sections, the method recap, the legal page hero, the mobile table of contents) and the hover fill of ruled rows and dropdown items.
- **Ledger Rule** (rgb(10 25 47 / 0.12)): hairline rows and dividers on light surfaces. Section seams drop to 8–10%; column heads rise to 15%.
- **Night Rule** (rgb(255 255 255 / 0.12)): hairlines on navy. Header, footer and menu chrome use 10%.
- **Correction Red** (#b42318): errors only, meaning the invalid field border and its message (6.6:1 on white).

Text tones are alphas of the ink. On light surfaces: navy for headings, 75% for leads (7.9:1), 70% for descriptions (6.6:1), 60% for metadata and placeholders (4.7:1). On navy: white, then 75%, 70% and 60% (6.9:1). Decorative icons sit at 55–60%.

### Named Rules
**The Forward Gold Rule.** Gold (#eab308) is reserved for what moves the visitor forward: the journey rail and current step, the accounting double rule, primary calls to action, the active page or selection, the "Reçu" stamp, and the logo. Icons, tags (including "Gratuit"), metadata and link underlines are navy or white. If a gold mark does not advance, confirm, or say "you are here", it is not gold.

**The Gold-on-Navy Rule.** The gold button lives only on navy surfaces; on white, grey or gold, the primary action is the navy button. On the gold band the double rule turns navy.

**The Small-Gold Rule.** On light surfaces, gold text and thin gold marks use Stamp Ochre (#a16207, 4.9:1). Forward Gold appears on white only as fills and rules: the rail fill, rail dots, step markers, the table-of-contents segment.

## Typography

**Display Font:** Schibsted Grotesk (with ui-sans-serif, system-ui, sans-serif). Variable 400–900, self-hosted from Google Fonts at build time with a metric-matched fallback.
**Body Font:** Schibsted Grotesk (same family)
**Label/Mono Font:** Fragment Mono 400 (with ui-monospace, SFMono-Regular, monospace)

**Character:** A sturdy, newsy grotesk, set heavy and tight for headings and plain for reading. The mono reads like figures on a statement: rare, and every use says "this is a measured fact". Negative tracking belongs to headings only (−0.01 to −0.032em, tighter as the size grows); everything from item titles down is set at normal tracking. Headings balance their lines, and paragraphs and list items wrap pretty. Figures that must align (phone numbers, counts, durations inside headings) use tabular lining numerals.

### Hierarchy
- **Display** (800, clamp(2.3rem, 1.35rem + 3.3vw, 4.05rem), 1.04, −0.032em): the page h1 in heroes, one per page. On short desktop screens the home hero caps it at 3.45rem so the rail stays in the first viewport.
- **Headline** (800, clamp(1.95rem, 1.35rem + 2.2vw, 3.1rem), 1.06, −0.028em): section h2s and journey chapter titles.
- **Title** (700, 1.5rem, 1.33, −0.02em): pôle names in ruled rows (28px from 640px), audience and block headings.
- **Title Small** (700, 1.25rem, 1.4, −0.02em): value names, next-step headings, the form's confirmation line, and form and router headings below 640px (they step to Title above).
- **Item** (600, 17px, 18px from 640px, 1.375): offer names, FAQ questions, router offers. Small group subheads inside chapters use 18px at 700.
- **Lead** (400, 17px, 18px from 640px, 1.625): the paragraph under a display or headline, capped at 42rem.
- **Body** (400, 16px, 1.625): running text in chapters and rows.
- **Body Small** (400, 15px, 1.625): offer details, contact rows, footer lists, the needs-router intro.
- **Prose** (400, 16.5px, 1.75, max 68ch): legal pages and articles. Its h2 is 24px/700/−0.02em and its h3 is 18px/700; lists use a short navy dash instead of bullets.
- **Label** (500, 13px): field labels. Metadata lines and breadcrumbs use the same size at 400, pôle group labels at 600.
- **Control** (500, 14.5px): header nav links and situation chips.
- **Button** (600, 15px; 14px in the compact header and footer buttons): all buttons. Labels never wrap.
- **Tag** (600, 0.75rem): the "Gratuit" tag.
- **Mono** (Fragment Mono 400, 13px): step numbers (12.5px on the rail, 17px with 0.02em beside chapter titles, 11.5px in mobile markers), the hero fact line (13.5px, line-height 1.9), dates and reading times (12px), the stamp date (0.8rem, 0.12em), "Erreur 404".
- **Wordmark** (900, clamp(7rem, 31vw, 27rem), 0.8, −0.04em): the footer signature "ORLI", tone-on-tone.

### Named Rules
**The Measured-Figure Rule.** Fragment Mono is only for journey step numbers, durations, dates, reference codes and the single hero fact line. Never for labels, tags, headings, buttons or navigation.

**The Named-Pôle Rule.** Pôles are named in full words ("Comptabilité", "Juridique, Social & Paie", "Audit & Immobilisations"); the only pôle numbering is the client's "Pôle 01–03" label on the home cards. Offers are never numbered and keep the client's exact wording ("Pack Démarrage — régime fiscal, immatriculation, plan SYSCOHADA").

**The Client-Text Rule.** The client's approved mockup is the source of truth for all visible copy on the home page, header and footer: section eyebrows ("Nos pôles", "Notre méthode", "Le blog", "Ils nous font confiance", the hero's "Cabinet de conseil en comptabilité · Abidjan"), "Pôle 01–03" card labels and "Étape 1–5" are set exactly as written, as eyebrows in Fragment Mono 12px, 0.2em tracking, uppercase, Stamp Ochre on light and Forward Gold on navy. Never reword, shorten or add copy to these surfaces.

**The French Spacing Rule.** Visible French text gets a non-breaking space (U+00A0) before ; : ! ? » and after «, and a non-breaking hyphen (U+2011) before a trailing pronoun, in inversions ("sommes‑nous") and pronoun imperatives ("Écrivez‑nous"). Content strings pass through `typo()` / `fr()` in src/lib/typo.ts instead of being hand-spaced.

## Layout

One centered container (max 1240px) with a 16px gutter on phones, 24px from 640px and 32px from 1024px. From 1024px a 12-column grid (40–48px gaps) sets the recurring splits: 7/5 for hero copy and its form, 3/9 for the sticky journey rail and its chapters, 4/8 for a section heading beside its content, 5/7 for a pôle's pitch beside its offers, and 3/8 (starting at column 5) for the legal table of contents and its text. Below 1024px everything is one column. The rail becomes a left-edge timeline, the hero form drops directly under the title and facts, and the header shrinks to 64px.

Sections breathe on a fixed vertical rhythm: 80px of padding on phones, 96px from 640px, 112px from 1024px. The journey and the cabinet mission open to 128px, and journey chapters sit 80px apart on phones and 128px on desktop. Inside a section, ruled rows keep a 20px rhythm (28–36px for pôle rows). Reading widths are capped: leads at 42rem, row descriptions at 36rem, prose at 68ch.

Surfaces alternate by chapter: navy for brand chapters, white for the journey and reading, Paper Grey for FAQs, recaps and the legal hero, and the gold band as the last section before the footer. Sticky elements share offsets: the header on top, the rail and the table of contents 112px down, and anchor targets clearing the header with 96px of scroll padding. On wide but short screens (at least 1024px wide, at most 860px tall), the home hero tightens its title and spacing so the five-step rail stays in the first viewport.

**The Single Container Rule.** Every section's content sits in the one 1240px container on the 12-column grid. Only surfaces run full-bleed (bands, heroes, header, footer and its wordmark), and the only thing that crosses into the gutter is a ruled row's hover fill, never beyond the screen edge.

## Elevation & Depth

Flat by default. Depth comes from light and layering rather than from shadow. Navy chapters get a soft radial lamp of Lamplight Navy behind the hero form; light sections stay flat, separated by hairlines and the white/grey alternation. Shadows appear in only three places: when a white object floats over navy, when the header detaches on scroll, and as a small lift under the two filled buttons.

### Shadow Vocabulary
- **Floating form** (`box-shadow: 0 40px 80px -40px rgb(0 0 0 / 0.75), 0 2px 8px rgb(0 0 0 / 0.18)`): the white diagnostic card over the navy home hero. The pôle and contact asides use the first layer only.
- **Dropdown** (`box-shadow: 0 30px 60px -24px rgb(3 10 22 / 0.55), 0 2px 6px rgb(3 10 22 / 0.12)`): the "Nos pôles" panel under the header.
- **Detached header** (`box-shadow: 0 14px 30px -18px rgb(3 10 22 / 0.85)`): the sticky header once the page has scrolled 8px.
- **Gold button lift** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.35), 0 8px 18px -10px rgb(3 10 22 / 0.55)`): a lit top edge and a tight drop.
- **Navy button lift** (`box-shadow: 0 10px 24px -14px rgb(10 25 47 / 0.8)`): a soft drop under the navy button.

### Named Rules
**The Lift-Over-Navy Rule.** Beyond the two filled buttons' small lift, a shadow means one of two things: this white object sits above a navy chapter (form cards, the dropdown), or the header has detached. Light-on-light surfaces never cast shadows.

## Shapes

Two radii and a pill. Controls are gently rounded (8px: buttons, fields, nav links, icon buttons). Containers are softly rounded (16px: form cards, the needs router, the dropdown, blog cards). Tags, chips, rail dots, step markers and arrow discs are full pills or circles. Nested shapes step down: dropdown items and the stamp take 10px, row hover fills and the mobile table of contents take 14px.

Borders are 1px hairlines. Rings on dots and discs are drawn as 1–2px inset shadows so they never shift layout, and the focus ring is a 2px outline at a 3px offset. The double rule is two strokes of max(2px, 0.055em), set 0.06em and 0.2em below the word. The stamp has a 3px double border and is tilted −8°. Icons are a house set on a 24px grid with a 1.75 stroke, round caps and joins, inheriting the text color. They are always decorative; the link or button label carries the meaning.

**The Ruled-Row Rule.** Lists of offers, pôles, contacts, questions and links are hairline-ruled rows, not cards: Ledger Rule on light, Night Rule on navy, 20px vertical padding, text flush with the rule. A container is allowed only when it does work: a form, a tab widget with its own navy ground, an overlay, a media card, an empty-state drop zone, or the three client-specified pôle cards on the home page (white, 16px radius, navy 10% border, pastel dot, gold bullet list, lift 3px on hover).

**The Two-Radius Rule.** Use 8px for things you press or type into and 16px for things that hold them. Everything round is a full pill or circle.

## Components

Components are quiet and tactile. Solid fills are only for the primary action, hairlines cover everything else, and states answer in 120–320ms on the house curve (ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)).

**The Focus Follows the Surface Rule.** Every focusable element gets a 2px outline at a 3px offset in its surface's focus color: navy on white, grey and gold surfaces, gold on navy and Chapter Navy. The color is inherited from the nearest surface, so any new surface declares its own (the white dropdown declares navy inside the navy header).

### Buttons
- **Shape:** gently rounded (8px), 48px minimum height (44px for the compact variant in the header and footer), 20px side padding (16px compact), 10px icon gap. Labels never wrap; supply a shorter mobile label instead.
- **Gold (primary on navy):** Forward Gold fill, Ledger Navy text at 15px/600, with the gold button lift. The trailing arrow slides 3px right on hover.
- **Navy (primary on light):** Ledger Navy fill, white text, with the navy button lift.
- **Hover / Focus / Press:** gold turns to Lit Gold and navy to Lamplight Navy (180ms). Focus follows the surface. A press sinks 1px and scales to 0.985 (120ms).
- **Outline (secondary):** transparent with a 1px hairline. On light: navy 20% border and navy text, hovering to a navy 60% border with a 3% wash. On navy: white 25% border and white text, hovering to white 60% with a 5% wash. On the gold band, the call button is a navy 35% inset outline.
- **Pairing:** a surface shows at most one filled button. The secondary action is an outline button, often the phone number as a call button.

### Chips
- **Style:** the situation selector of the needs router, on navy only. Full pills, 40px tall, a 1px white 20% border, white 85% text at 14.5px/500.
- **State:** hover gives a white 55% border and white text. Selected (an ARIA tab) takes a Forward Gold fill and border with navy 600 text; a press scales to 0.97. Arrow keys, Home and End move between chips, and the panel below fades up 8px in 380ms.

### Tags
- **"Gratuit":** an outline pill with a 1px navy 30% border (white 40% on navy), 0.75rem/600, 1px × 8px padding, navy or white text. Never gold, never filled.
- **« à compléter »:** a dashed navy 40% outline on Paper Grey, 0.9em/500 navy text, marking client data still missing on the legal pages. Temporary; never gold, never mono.

### Cards / Containers
- **Corner Style:** softly rounded (16px).
- **Diagnostic form card:** white over navy with the floating-form shadow, 20px padding (28px from 640px). Its heading is Title Small, followed by the "Sans engagement" note at 14px in navy 70%.
- **Needs router:** a Ledger Navy panel placed on a light section, padded 20 / 32 / 40px by breakpoint. It holds the chips and a ruled list of offers, closed by a gold button.
- **Dropdown:** a white panel with 8px padding, 14px below its trigger. Its three pôle items (10px radius) fill with Paper Grey on hover, and it opens from a 0.985 scale with a 6px drop (320ms).
- **Shadow Strategy:** only over navy (see Elevation & Depth).
- **Border:** none on filled containers. Blog cards carry a navy 10% hairline that darkens to 30% on hover while the cover zooms 1.035.
- **Internal Padding:** 20px on phones, 28–40px above 640px.

### Inputs / Fields
- **Style:** the label sits above at 13px/500 in navy 80%, with an optional "facultatif" note right-aligned at 400 in navy 60%. The field is white, gently rounded (8px), 48px tall, with 14px side padding, 15px text, and a 1px navy 50% border (3.4:1 on white, the WCAG minimum for a field boundary) that darkens to 75% on hover. Placeholders are navy 60%. The select uses a navy chevron with a 1.75 stroke; the textarea starts at 128px and resizes vertically.
- **Focus:** the border turns solid navy with a soft 3px navy ring at 12% (navy on light, per the focus rule). The text caret is navy.
- **Error / Disabled:** a Correction Red border with a faint red halo (4px at 10%) and a 13px/500 red message below. Errors appear only after a first interaction (blur with a value, or submit) and are written in French; submit focuses the first invalid field. While sending, the submit arrow gives way to a spinner (0.9s linear, aria-busy), and success replaces the form with the "Reçu" stamp.

### Navigation
- **Header:** a sticky navy bar, 64px tall (72px from 1024px), with a white 10% hairline below. It hides when scrolling down past 240px and returns on scroll up (420ms), and takes the detached-header shadow after 8px.
- **Links:** 14.5px/500 in white 78%. Hover turns them white with a white 45% underline growing from the center (320ms). The current page is white with a 2px Forward Gold underline. "Nos pôles" opens the dropdown on click, or on hover after 90ms (closing after 220ms); Esc closes it.
- **Action:** the compact gold button "Diagnostic gratuit" sits at the right from 768px.
- **Mobile:** 44px call and menu buttons (a two-line burger that crosses into ×). The menu is a full-screen navy panel under the bar with 1.6rem/700 links separated by Night Rules, the current page in Forward Gold, and the gold and outline pair at the bottom. The rest of the page goes inert.
- **Breadcrumbs:** 13px, with slash separators at 35% and the current page at full strength.
- **Reading progress (blog articles):** a 3px Forward Gold bar fixed to the top edge that fills as the article is read: the rail's "you are here" meaning, applied to reading.
- **Table of contents (legal pages):** a left hairline with 14px links in navy 68%. The section in view turns navy 600 and gets a 2px gold segment on the line. Sticky at 112px on desktop, a Paper Grey panel on mobile.

### Journey Rail (signature)
The five steps (Prise de contact, Diagnostic gratuit, Proposition sur-mesure, Réalisation, Suivi dans la durée) organize the home page and each pôle page.
- **Desktop:** a sticky rail in 3 columns (top 112px) beside 9 columns of chapters. Each 56px row has a 12px dot, a mono number and a 15px/600 title. The 2px track (navy 10%) fills with gold as the reader advances, interpolating between steps from a reading point at 42% of the viewport height.
- **States:** reached steps have gold dots. The current step has a gold dot with a white gap ring and a gold outer ring, scaled 1.1, its number in Stamp Ochre and its title in navy. Upcoming steps have white dots with a navy 18% ring and navy 62% text. Links jump to their chapters and carry aria-current="step".
- **Chapters:** a Headline title, prefixed on desktop by its number in Stamp Ochre mono (17px), then a lead, then content. Chapters sit 128px apart.
- **Mobile:** a 2px timeline along the left edge fills continuously, and each chapter carries a 32px mono marker that turns gold (navy text) once reached.
- **Hero preview:** the home hero ends with the same five steps laid out horizontally on a white 14% rule, numbers in gold. Step 01 lights with a 2px gold segment that grows on arrival, and hovering any step lights it.
- **Motion:** the fill runs a 160ms linear transform and dot states change in 260ms. The computation runs only while the journey is on screen.

### Double Rule (signature)
Two strokes under one key word: "performance" in the home hero (the word itself also in gold) and "30 minutes" in the gold band (strokes in navy there). They draw left to right (700ms, the second stroke 140ms later) when the word enters the viewport; in the hero they follow the title's entrance (620 / 760ms). The logo draws a small version under "ORLI" on hover and focus. Use one per surface.

### "Reçu" Stamp (signature)
The form's confirmation. It sets "REÇU" (2rem/900, 0.14em, uppercase), today's date in mono (0.8rem, 0.12em, for example "27 SEPT. 2026") and "ORLI CONSULTING" (0.62rem, 0.24em) in Stamp Ochre, inside a 3px double border with a 10px radius, tilted −8°. It lands in 520ms, from 1.9× scale, −18° and a 6px blur to rest, and then "Merci, votre demande est bien arrivée." takes focus.

### Ruled Rows (signature)
- **Pôle rows:** full-width link rows. The pôle name is set in Title (28px from 640px), followed by the description, the offer count, and the "Gratuit" tag with its free offer. A 44px arrow disc (navy 18% ring) fills navy with a white arrow and slides 4px on hover while a Paper Grey fill (14px radius) bleeds 12–20px into the gutter. The whole row is the link's hit area; only the link takes focus.
- **Offer rows:** an Item title, an optional detail in Body Small, and the "Gratuit" tag right-aligned. An offer reached through a situation link flashes a navy 6% wash for 1.6s.
- **Contact table:** definition rows with a 9rem label column (Formulaire, Téléphone, Email, Adresse), icons in navy 55%, and values in 600 with drawn underlines. Copy buttons (36px) swap to a check for 1.8s and announce the copy to screen readers.
- **FAQ:** a native details accordion with one answer open at a time. Questions use Item weight; a 36px plus disc rotates 45° into × and fills navy on open, and the height eases open in 380ms where the browser supports it.
- **Links:** text links draw a 1px currentColor underline from left to right on hover and focus (320ms). Inline prose links carry a permanent navy 35% underline that goes solid on hover. Arrows after links slide 2–4px.

### Logo, Wordmark and Closing Band
- **Logo lockup:** "ORLI" at 22px/900/−0.03em in white, with "CONSULTING" at 11px/600, 0.22em, uppercase in Forward Gold, baseline-aligned. Hover and focus draw a small gold double rule under "ORLI".
- **Footer wordmark:** "ORLI" in Wordmark type, Chapter Navy on Ledger Navy, bleeding off the bottom of the page. Decorative (aria-hidden).
- **CTA band:** a full-width Forward Gold band before the footer (56–64px vertical padding). It holds one extrabold sentence (clamp(1.7rem, 1.15rem + 2vw, 2.7rem)) with the navy double rule, the navy button "Prendre rendez-vous", and the phone number as an outline call button.
- **Trust band:** "Ils nous font confiance" and four partner logos, shown in grayscale at 70% opacity and in full color on hover. The logos in public/logos/ are client-provided placeholders awaiting the official files; their artwork is not part of the design system.

## Do's and Don'ts

### Do:
- **Do** reserve Forward Gold (#eab308) for the journey rail and current step, the double rule, primary calls to action, the active page or selection, the "Reçu" stamp and the logo.
- **Do** put the gold button on navy only, and use the navy button as the primary action on white, grey and gold.
- **Do** use Stamp Ochre (#a16207) for any gold text or thin gold mark on a light surface.
- **Do** build lists as hairline-ruled rows (navy 12% on light, white 12% on navy) with 20px vertical padding, and give every card a functional reason.
- **Do** name pôles in full words: "Comptabilité", "Juridique, Social & Paie", "Audit & Immobilisations".
- **Do** keep Fragment Mono for step numbers, durations, dates, reference codes and the hero fact line, and set phone numbers and counts in tabular lining figures.
- **Do** give each surface one authored motion moment on ease-out-expo, keep every animation optional under prefers-reduced-motion, and keep content visible without JavaScript.
- **Do** let focus follow the surface: a 2px outline at a 3px offset, navy on light and gold on navy, with every new surface declaring its focus color.
- **Do** route French strings through `typo()` / `fr()` so ; : ! ? » get non-breaking spaces and trailing-pronoun hyphens never break.
- **Do** keep one primary action per surface (the free diagnostic), with the phone call as the alternative.

### Don't:
- **Don't** use gold for icons, tags, metadata, missing-data markers or link underlines.
- **Don't** put a gold button, or gold text in #eab308, on a white or grey surface.
- **Don't** number offers, or pôles outside the home cards' "Pôle 01–03" labels.
- **Don't** invent eyebrows or reword the client's: only the mockup's labels are used.
- **Don't** set labels, tags, buttons, navigation or headings in Fragment Mono.
- **Don't** build the stock accounting-firm showcase of hero, three service cards, key-figure counters and testimonials.
- **Don't** wrap a list in a card unless the container does work (a form, a tab panel, an overlay, media), and don't cast shadows on light-on-light surfaces.
- **Don't** add scroll-reveal staggers or a second authored animation to a surface.
- **Don't** introduce new hues. Beyond the pinned palette (navy #0a192f / #112240 / #1b3157, gold #eab308 / #ca9a04, grey #f3f4f6), the system allows only Stamp Ochre, Lit Gold and Correction Red, plus alphas of navy and white.
- **Don't** design around the placeholder partner logos in public/logos/; they are provisional client assets.
