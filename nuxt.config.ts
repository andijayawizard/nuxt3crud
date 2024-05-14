// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrlWP: process.env.apiUrlWP
    }
  },
  colorMode: {
    preference: 'dark'
  },
  // ui: {
  //   icons: ['mdi', 'simple-icons']
  // },
  modules: ["@nuxt/ui"]
})