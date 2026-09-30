// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 100 % static : tout est pré-rendu au build, aucune fonction serveur.
// Le dossier /dist est ensuite poussé tel quel sur l'hébergement mutualisé LWS.
export default defineConfig({
  site: 'https://orli-consulting.com',
  output: 'static',
  integrations: [
    sitemap({
      // La page 404 n'a rien à faire dans le sitemap.
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // LWS sert `/blog/mon-article/index.html` : on garde les URLs avec slash final.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  experimental: {
    // Polices Google téléchargées au build puis servies depuis /_astro :
    // aucune requête vers Google côté visiteur, preload automatique et
    // polices de repli recalées (moins de décalage de mise en page).
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Schibsted Grotesk',
        cssVariable: '--font-schibsted',
        weights: ['400 900'],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Fragment Mono',
        cssVariable: '--font-fragment',
        weights: [400],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    ],
  },
});
