<script lang="ts" setup>
useHead({ title: 'List Products' })
const listProducts: Product = await $fetch(`/api/getAllProducts`)
</script>

<template>
  <table class="min-w-full text-left text-sm font-light">
    <thead class="border-b font-medium dark:border-white/10">
      <tr>
        <th scope="col" class="px-6 py-4">#</th>
        <th scope="col" class="px-6 py-4">Nama</th>
        <th scope="col" class="px-6 py-4">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listProducts.records" :key="index" class="border-b border-neutral-200 dark:border-white/10">
        <td v-text="item.id" class="whitespace-nowrap px-4 py-4"></td>
        <td v-text="item.nama"></td>
        <!-- <td v-text="item.bid.nama"></td> -->
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
