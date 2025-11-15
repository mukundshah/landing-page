import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2025-07-15',

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],

  css: ['assets/css/tailwind.css'],

  site: {
    name: 'wricha',
    description: 'AI Engineer',
    defaultLocale: 'en',
    url: 'https://wricha.me',
    identity: { type: 'Person' },
  },

  app: {
    head: {
      titleTemplate: '%s',
    },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
            light: 'github-light',
          },
        },
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
