<script lang="ts" setup></script>

<template>

  <body
    class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm control-sidebar-slide-open">
    <div class="wrapper">
      <Navbar />
      <Breadcrumb />
      <!-- <Aside /> -->
      <div class="content-wrapper">
        <Header />
        <section class="content">
          <div id="load"></div>
          <slot />
          <!--/. container-fluid -->
        </section>
      </div>
      <Footer />
    </div>
  </body>
</template>

<style scoped></style>
