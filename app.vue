<script setup lang="ts">
const user = useSupabaseUser()
const layout='default'
// definePageMeta({
//   layout: `${layout}`
// })
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtLoadingIndicator />
    <div class="container" style="padding: 50px 0 100px 0">
      <Account v-if="user" />
      <Auth v-else />
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>
