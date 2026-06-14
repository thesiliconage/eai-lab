import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.eailab.site',
  integrations: [sitemap()],
  output: 'static',
});
