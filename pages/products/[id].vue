<script lang="ts" setup>
const route = useRoute()
const id = route.params.id
const { details: Product } = await useFetch(`/api/getDetailsProduct?id=${id}`)
</script>

<template>
  <div>
    Product Details
    {{ details.nama }}
  </div>
</template>

<style scoped></style>
