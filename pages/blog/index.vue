<script lang="ts" setup>
const page = ref(1)
const pageCount = 5
const rows = computed(() => {
  return listBlog.records.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
const items = ref(Array(50))
const columns = [
  { key: 'id', label: 'ID', sortable: true, direction: 'desc' },
  { key: 'nama', label: 'Judul', sortable: true },
  { key: 'author', label: 'Author' },
  // { key: 'action', label: 'Action' }
]
const listBlog: Blog = await $fetch(`/api/getAllBlog`)
const selectedColumns = ref([...columns])
const q = ref('')
const filteredRows = computed(() => {
  if (!q.value) {
    return listBlog.records
  }
  return listBlog.records.filter((data) => {
    return Object.values(data).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})
</script>

<template>
  <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
    <UInput v-model="q" placeholder="filter data..." />
  </div>
  <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
    <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" />
  </div>
  <UTable :columns="columns" :rows="rows" />
  <UPagination v-model="page" :page-count="pageCount" :total="listBlog.records.length" />
</template>

<style scoped></style>
