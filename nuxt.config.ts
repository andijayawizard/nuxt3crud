// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrlWP: process.env.apiUrlWP,
      apiUrlLocal: process.env.apiUrlLocal,
      apiKeyLocal: process.env.apiKeyLocal,
      apiUrlLara: process.env.apiUrlLara,
      apiUrlBitu: process.env.apiUrlBitu,
      apiKeyBitu: process.env.apiKeyBitu,
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