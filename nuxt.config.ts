import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [],
  modules: ["@nuxt/content"],
  content: {
    documentDriven: {
      layoutFallbacks: ["default"]
    }
  },
  vite: {
    server: {
      hmr: {
        protocol: "ws"
      }
    }
  }
});
