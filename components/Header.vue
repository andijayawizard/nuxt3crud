<script lang="ts" setup>
const route = useRoute()
const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Menu Website', to: '/menuweb' },
  { label: 'Products', to: '/products' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact-us' }
]
</script>

<template>
  <!-- <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" /> -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0 text-dark">
            {{ route.name }}
          </h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="breadcrumb-item active">
              {{ route.name }}
            </li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- <script src="<?= $abs; ?>/admin-lte/plugins/jquery/jquery.min.js"></script> -->
</template>

<style scoped></style>
