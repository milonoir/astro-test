import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://milonoir.github.io',
  base: '/astro-test',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hu'],
    routing: {
        prefixDefaultLocale: false,
    },
  },
})
