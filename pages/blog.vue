<script lang="ts" setup>
const page = ref(1)
const items = ref(Array(50))
const columns = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'Judul' },
  { key: 'action', label: 'Action' }
]
const listBlog: Blog = await $fetch(`/api/getAllBlog`)
</script>

<template>
  <UCard>
    <template #header>
      <Placeholder class="h-8" />
    </template>
    <Placeholder class="h-32" />
    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>

  <UTable :columns="columns" :rows="listBlog" />
  <UPagination v-model="page" :page-count="5" :total="items.length" />
</template>

<style scoped></style>
