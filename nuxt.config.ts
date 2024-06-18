// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrlWP: process.env.apiUrlWP,
      apiUrl: process.env.apiUrl,
      apiKey: process.env.apiKey,
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
        // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css' },
        // { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" },
        // { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" },
        // { rel: "stylesheet", href: "/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css" },
        // { rel: "stylesheet", href: "/plugins/datatables-responsive/css/responsive.bootstrap4.min.css" },
        // { rel: "stylesheet", href: "/plugins/fontawesome-free/css/all.min.css" },
        // { rel: "stylesheet", href: "/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" },
        // { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/css/adminlte.min.css" },
        // { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" },
        // { rel: "stylesheet", href: "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" },
        // { rel: "stylesheet", href: "/plugins/icheck-bootstrap/icheck-bootstrap.min.css" },
        // { rel: "stylesheet", href: "/plugins/select2/css/select2.min.css" },
        // { rel: "stylesheet", href: "/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css" },
        // { rel: "stylesheet", href: "/plugins/summernote/summernote-bs4.css" },
        // { rel: "stylesheet", href: "/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css" },
        // { rel: "stylesheet", href: "/plugins/toastr/toastr.min.css" },
      ], script: [
        // { src: "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js", body: true },
        // { src: 'https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js', body: true },
        // { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", body: true },
        // { src: "/plugins/jquery/jquery.min.js", body: true },
        // { src: "/plugins/bootstrap/js/bootstrap.bundle.min.js", body: true },
        // { src: "/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js", body: true },
        // { src: "https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js", body: true },
        // { src: "/plugins/datatables/jquery.dataTables.min.js", body: true },
        // { src: "/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js", body: true },
        // { src: "/plugins/datatables-responsive/js/dataTables.responsive.min.js", body: true },
        // { src: "/plugins/datatables-responsive/js/responsive.bootstrap4.min.js", body: true },
        // { src: "/plugins/select2/js/select2.full.min.js", body: true },
        // { src: "/plugins/jquery-validation/jquery.validate.min.js", body: true },
        // { src: "/plugins/jquery-validation/additional-methods.min.js", body: true },
        // { src: "/plugins/summernote/summernote-bs4.min.js", body: true },
        // { src: "/plugins/sweetalert2/sweetalert2.min.js", body: true },
        // { src: "/plugins/toastr/toastr.min.js", body: true },
        // { src: "/plugins/ekko-lightbox/ekko-lightbox.min.js", body: true },
        // { src: "/plugins/filterizr/jquery.filterizr.min.js", body: true },
        // { src: "/plugins/bs-custom-file-input/bs-custom-file-input.min.js", body: true },
        // { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js", body: true },
      ]
    }
  },
  colorMode: {
    preference: 'system'
  },
  // ui: {
  //   icons: ['mdi', 'simple-icons']
  // },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/supabase",
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  supabase: {
    redirect: false
  }
})