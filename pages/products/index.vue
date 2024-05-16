<script lang="ts" setup>
useHead({ title: 'List Products' })
const listProducts: Product = await $fetch(`/api/getAllProducts`)
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <td>ID</td>
        <td>Nama</td>
        <td>Brand</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listProducts.records" :key="index">
        <td v-text="item.id"></td>
        <td v-text="item.nama"></td>
        <td v-text="item.bid.nama"></td>
        <td>
          <NuxtLink :to="`/products/${item.id}`">Details</NuxtLink> |
          <NuxtLink :to="`/products/edit/${item.id}`">Edit</NuxtLink> |
          <NuxtLink :to="`/products/edit/${item.id}`">Delete</NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
