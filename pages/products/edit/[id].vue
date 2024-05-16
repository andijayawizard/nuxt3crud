<script lang="ts" setup>
useHead({ title: 'Edit Product' })
const config = useRuntimeConfig()
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/api.php/records/products/${id}?join=brand&include=*,brand.nama`, {
  baseURL: `${config.public.apiUrlLocal}`,
  headers: {
    'x-api-key': `${config.public.apiKeyLocal}`
  }
})
const product = data.value as Product
// const data: Product = await $fetch(`/api/getDetailsProduct`)
</script>

<template>
  <div>
    Product Name: {{ product.nama }}
    Brand: {{ product.bid.nama }}
  </div>
</template>

<style scoped></style>
