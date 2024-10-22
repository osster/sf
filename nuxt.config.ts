// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // '@nuxtjs/robots',
    // '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/i18n',
  ],
  // i18n: {
  //   locales: [
  //     {
  //       code: 'de', name: 'Deutsch', iso: 'en-US', file: 'de.js'
  //     },
  //     {
  //       code: 'en', name: 'English', iso: 'de-CH', file: 'en.js'
  //     },
  //   ],
  //   defaultLocale: 'de',
  //   strategy: 'prefix_except_default',
  //   langDir: 'languages',
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: 'i18n_redirected',
  //     redirectOn: 'root',  // recommended
  //   },
  // },
  buildModules: [],
  // robots: {},
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
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
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },
  },
})

//NUXT_APP_BASE_URL
