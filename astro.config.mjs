import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(
    {
      applyBaseStyles: false,
    }
  ), mdx(), alpinejs(), sitemap()],
  site: 'https://www.cmsoftdev.com',
  build: {
    assets: 'astro'
  }
});