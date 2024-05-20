<script lang="ts" setup>
const config = useRuntimeConfig()
const route = useRoute()
const id = route.params.id
// const { data } = await useFetch(`/api/getDetailsBrand?id=${id}`)
// const item = data.value as Brand

const params = `/api/api.php/records/brand/${id}`
const data = await $fetch(`${params}`, {
  baseURL: `${config.public.apiUrlLocal}`,
  headers: {
    'x-api-key': `${config.public.apiKeyLocal}`
  }
})
</script>

<template>
  <div>
    Nama: {{ data.nama }}
    Ringkasan: {{ data.rgks }}
    <p v-html="data.ktrg"></p>
  </div>
</template>

<style scoped></style>
