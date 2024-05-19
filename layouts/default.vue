<script lang="ts" setup></script>

<template>

  <body
    class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed control-sidebar-slide-open text-sm">
    <div class="wrapper">
      <!-- <Breadcrumb /> -->
      <Navbar />
      <Aside />
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
