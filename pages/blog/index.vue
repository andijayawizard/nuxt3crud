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
  return listBlog.records.filter((data: any) => {
    return Object.values(data).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})
const module: string = 'blog'
const title:string='Blog'
useHead({ title: `List ${module}` })
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- /.card -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              <NuxtLink :to="`/${module}/create`" class="btn btn-success btn-sm"><span class="fa fa-plus"></span>
                {{ title }}
              </NuxtLink>
            </h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
              <UInput v-model="q" placeholder="filter data..." />
            </div>
            <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
              <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" />
            </div>
            <UTable :columns="columns" :rows="rows" />
            <UPagination v-model="page" :page-count="pageCount" :total="listBlog.records.length" />
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
  </div>
</template>

<style scoped></style>
