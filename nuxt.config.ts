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
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'author', content: 'author' },
        { name: 'keywords', content: 'keywords' },
        { name: 'description', content: 'description' },
      ], link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css' },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" },
      ], script: [
        { src: "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js", body: true },
        { src: 'https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js', body: true },
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", body: true },
      ]
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