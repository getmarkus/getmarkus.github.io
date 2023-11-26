import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), alpinejs(), sitemap()],
  site: 'https://www.christophermarkus.com',
  outDir: './docs',
  build: {
    assets: 'astro'
  }
});