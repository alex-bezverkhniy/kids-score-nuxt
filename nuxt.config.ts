// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content'
    ],
    css: [
        'vuetify/lib/styles/main.sass',
        'mdi/css/materialdesignicons.min.css',
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    nitro: {
        storage: {
            'redis': {
                driver: 'redis',
                /* redis connector options */
                port: 6379, // Redis port
                host: "127.0.0.1", // Redis host
                username: "", // needs Redis >= 6
                password: "",
                db: 0 // Defaults to 0
            }
        }
    }
})

