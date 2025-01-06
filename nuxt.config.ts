// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],

  routeRules: {
    "/": { prerender: true },
  },

  app: {
    head: {
      title: "Мониторинг на модернистичко наследство",
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
      link: [
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
      ],
    },
  },

  compatibilityDate: "2024-12-09",
});
