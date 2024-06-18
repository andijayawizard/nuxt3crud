<script setup lang="ts">
const list: Menuweb = await $fetch('/api/getAllMenuweb')
const page = ref(1)
const pageCount = 10
const rows = computed(() => {
  return list.records.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
const columns = [
  { key: 'id', label: 'ID', sortable: true, direction: 'desc' },
  { key: 'nama', label: 'Nama', sortable: true },
  { key: 'caption', label: 'Caption' },
  { key: 'seo', label: 'Slug' },
  { key: 'actions' }
]
const items = (row: any) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]
</script>

<template>
  <UTable :columns="columns" :rows="rows">
    <!-- <template #name-data="{ row }">
      <span :class="[selected.find(person => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{
        row.name }}</span>
    </template> -->

    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
      </UDropdown>
    </template>
  </UTable>
  <UPagination v-model="page" :page-count="pageCount" :total="list.records.length" show-last show-first />
</template>

<style scoped></style>
