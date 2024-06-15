<script setup lang="ts">
const list = await $fetch('/api/getAllUsers')
const page = ref(1)
const pageCount = 10
const columns = [
  { key: 'id_login', label: 'ID', sortable: true, direction: 'desc' },
  { key: 'username', label: 'Username', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'nama_pengguna', label: 'Nama' },
  { key: 'level', label: 'Level' },
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
      <template #level-data="{ row }">
        <UBadge :label="`${row.id_level.nama}`" size="sm" variant="outline" :ui="{ rounded: 'rounded-full' }"
          color='primary' />
      </template>
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>
    <UPagination v-model="page" :page-count="pageCount" :total="list.records.length" show-last show-first />
  </div>
</template>

<style scoped></style>
