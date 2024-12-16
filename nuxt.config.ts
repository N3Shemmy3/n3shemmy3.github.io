// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    buildAssetsDir: "/app/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://api.iconify.design/ph:terminal-window.svg?color=%23888888",
        },
      ],
    },
  },
  css: ["@/assets/css/tailwind.css"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
  },
});
