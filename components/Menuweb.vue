<script lang="ts" setup>
useHead({ title: 'List Menu Website' })
const route = useRoute()
const id = route.params.id
const listMenuweb: Menuweb = await $fetch(`/api/getAllMenuweb`)
</script>

<template>
  <table class="min-w-full text-left text-sm text-surface font-light">
    <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
      <tr>
        <th class="px-4 py-4">#</th>
        <th>Nama</th>
        <th>Caption</th>
        <th>Slug</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listMenuweb.records" :key="index" class="border-b dark:border-white/10">
        <td v-text="item.id" class="px-4 py-4"></td>
        <td v-text="item.nama"></td>
        <td v-text="item.caption"></td>
        <td v-text="item.seo"></td>
        <td>
          <NuxtLink :to="`/menuweb/${item.id}`">Details</NuxtLink>
          Edit
          Delete
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
