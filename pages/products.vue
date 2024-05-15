<script lang="ts" setup>
const listProducts: Product = await $fetch(`/api/getAllProducts`)
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <td>ID</td>
        <td>Nama</td>
        <!-- <td>Ringkasan</td> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listProducts.records" :key="index">
        <td v-text="item.id"></td>
        <td v-text="item.nama"></td>
        <!-- <td v-text="item.rgks"></td> -->
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
