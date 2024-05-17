<script lang="ts" setup>
const config = useRuntimeConfig()
const route = useRoute()
const id = route.params.id
const params = `/api/api.php/records/menuweb/${id}?include=id,nama,caption,seo,title,keyword,description`
const data = await $fetch(`${params}`, {
  baseURL: `${config.public.apiUrlLocal}`,
  headers: {
    'x-api-key': `${config.public.apiKeyLocal}`
  }
})
</script>

<template>
  <div v-if="pending">loading...</div>
  <div v-else class="font-light text-sm px-4 py-4">
    <p>Nama: {{ data.nama }}</p>
    <p>Caption: {{ data.caption }}</p>
    <p>Slug: {{ data.seo }}</p>
    <p>Title: {{ data.title }}</p>
    <p>Keyword: {{ data.keyword }}</p>
    <p>Description: {{ data.description }}</p>
  </div>
</template>

<style scoped></style>
