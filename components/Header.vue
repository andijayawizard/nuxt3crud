<script lang="ts" setup>
const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Products', to: '/products' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact-us' }
]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

<style scoped></style>
