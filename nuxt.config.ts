// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// import vsharp from 'vite-plugin-vsharp';

// @ts-ignore
import path from 'path'

let nitro = {}
if (process.env.NUXT_APP_OUT_DIR) {
    nitro = {
        output: {
            publicDir: path.join(__dirname, process.env.NUXT_APP_OUT_DIR || '.output/public')
        }
    }
}

// @ts-ignore
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['@/assets/css/main.scss'],
    vite: {
        plugins: [
            // vsharp({
            //   excludePublic: [
            //     "public/*", // Exclude all images in public/test_img
            //   ],
            //   includePublic: [
            //     "/img/*",
            //   ],
            // })
        ],
    },
    nitro,
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device',
    ],
    buildModules: [],
    // robots: {},
    tailwindcss: {
        cssPath: ['@/assets/css/main.scss', {injectPosition: 0}],
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
    // You will need to add this:
    server: {
        host: '0',
        port: '3000' // optional
    }
})

//NUXT_APP_BASE_URL
