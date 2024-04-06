// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
});
