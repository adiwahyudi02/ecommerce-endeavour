// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "https://ecommerce-endeavour-api.vercel.app",
      urlBase: "https://ecommerce-endeavour.vercel.app",
      websiteName: "ecommerce endeavour",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          // add global utilities
          additionalData: '@use "~/assets/styles/utilities.sass" as *\n',
        },
      },
    },
  },
  css: [
    // main style
    "@/assets/styles/main.sass",
    // toast
    "vue-toastification/dist/index.css",
  ],
  components: [
    // custom scanner for component auto-import
    { path: "~/components/page", prefix: "" },
    { path: "~/components/common", prefix: "" },

    // It's important that this comes last if you have overrides you wish to apply
    "~/components",
  ],
  modules: ["@nuxt/image", "nuxt-icon", "nuxt-swiper", "@pinia/nuxt"],
  build: { transpile: ["vue-toastification"] },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

    // set global head
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  // set rendering rule
  routeRules: {
    // client rendering
    "/shop": { ssr: false },
  },
});
