<script setup lang="ts">
const list = await $fetch('/api/getAllSocialMedia')
const page = ref(1)
const pageCount = 10
const columns = [
  { key: 'id', label: 'ID', sortable: true, direction: 'desc' },
  { key: 'nama', label: 'Nama', sortable: true },
  { key: 'link', label: 'Link' },
  // { key: 'acak', label: 'Image' },
  // { key: 'pub', label: 'Published' },
  { key: 'actions' }
]
const rows = computed(() => {
  return list.records.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
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
  <div>
    <UTable :columns="columns" :rows="rows">
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>
  </div>
</template>

<style scoped></style>
