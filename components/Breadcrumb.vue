<script lang="ts" setup>
const links = [{
  label: 'Home', icon: 'i-heroicons-home', to: '/'

}, { label: 'Products', to: '/products' }]
</script>

<template>
  <div>
    <UBreadcrumb :links="links" class="px-4 py-4" />
  </div>
</template>

<style scoped></style>
