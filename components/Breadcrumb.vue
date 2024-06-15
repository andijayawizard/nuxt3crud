<script lang="ts" setup>
const route = useRoute();
const module = route.name
const links = [
  { label: 'Home', icon: 'i-heroicons-home', to: '/' },
  { label: `${module}`, to: `/${module}` },
  { label: 'Add New', to: `/${module}/create` }
]
</script>

<template>
  <div>
    <UBreadcrumb :links="links" class="px-4 py-4" />
  </div>
</template>

<style scoped></style>
