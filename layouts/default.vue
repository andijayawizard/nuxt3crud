<script lang="ts" setup>
</script>

<template>
  <UContainer>
    <UPage>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-black-500--">
          <div class="mr-4">
            <NuxtuiAside />
          </div>
        </div>
        <div class="w-full sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-5/6 mb-4 bg-gray-400--">
          <div class="ml-4">
            <Breadcrumb />
            <slot />
          </div>
        </div>
      </div>
      <!-- <Navbar /> -->
    </UPage>
  </UContainer>

  <!-- <body
    class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm control-sidebar-slide-open">
    <div class="wrapper">
      <Navbar />
      <Breadcrumb />
      <Aside />
      <div class="content-wrapper">
        <Header />
        <section class="content">
          <div id="load"></div>
          <slot />
        </section>
      </div>
      <Footer />
    </div>
  </body> -->
</template>

<style scoped></style>
