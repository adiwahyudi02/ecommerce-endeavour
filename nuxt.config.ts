// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "https://ecommerce-endeavour-api.vercel.app",
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
  ],
  components: [
    // custom scanner for component auto-import
    { path: "~/components/page", prefix: "" },
    { path: "~/components/common", prefix: "" },

    // It's important that this comes last if you have overrides you wish to apply
    "~/components",
  ],
  modules: ["@nuxt/image", "nuxt-icon", "nuxt-swiper", "@pinia/nuxt"],
});
