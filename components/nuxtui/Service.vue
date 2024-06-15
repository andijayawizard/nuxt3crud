<script setup lang="ts">
const module = 'services'
const list: Service = await $fetch('/api/getAllService')
const page = ref(1)
const pageCount = 10
const columns = [
  { key: 'id', label: 'ID', sortable: true, direction: 'desc' },
  { key: 'nama', label: 'Nama', sortable: true },
  // { key: 'seo', label: 'Slug' },
  // { key: 'acak', label: 'Image' },
  // { key: 'pub', label: 'Published' },
  { key: 'actions' }
]
const rows = computed(() => {
  return list.records.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
const items = (row: any) => [
  [{
    label: 'Details',
    icon: '',
    click: () => {
      // console.log('id ke: ', row.id);
    }
  },
  {
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
  <div>
    <UTable :columns="columns" :rows="rows">
      <template #actions-data="{ row }">
        <ULink :to="`/${module}/${row.id}`" active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Details
        </ULink>
        <UDropdown :items="items(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>
    <UPagination v-model="page" :page-count="pageCount" :total="list.records.length" show-last show-first />
  </div>
</template>

<style scoped></style>
