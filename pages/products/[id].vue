<script lang="ts" setup>
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/getDetailsProduct?id=${id}`)
const details = data.value as Product
</script>

<template>
  <div class="text-sm font-light">
    <p>Nama: {{ details.nama }}</p>
    <p>Brand: {{ details.bid.nama }}</p>
    <p>Keterangan:
    <div v-html="details.ktrg"></div>
    </p>
  </div>
</template>

<style scoped></style>
