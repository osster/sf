// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  // ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  buildModules: [],
  // robots: {},
  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 0 }],
    configPath: 'tailwind.config.js',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  app: {
    rootClass: 'base-wrapper',
    head: {
      htmlAttrs: {
        class: 'h-full w-full'
      },
      bodyAttrs: {
        class: 'h-full w-full bg-sf-gray',
      },
    },
  },
  runtimeConfig: {
    app: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },
  },
})

//NUXT_APP_BASE_URL
