<script lang="ts" setup>
const config = useRuntimeConfig()
useHead({ title: 'Brand List' })
const route = useRoute()
// const data = await $fetch(`/api/getAllBrand`)
const { data: listBrand, pending, error, refresh } = await useAsyncData(
  'listBrand',
  () => $fetch(`/api/getAllBrand`)
);
const id = route.params.id
const deleteRow = async (id: number) => {
  await $fetch(`/api/api.php/records/brand/${id}`, {
    baseURL: `${config.public.apiUrlLocal}`,
    method: 'delete',
    headers: {
      'x-api-key': `${config.public.apiKeyLocal}`
    }
  })
  refreshNuxtData('listBrand')
}
const currentPage = ref(1)
const itemsPerPage = 3
const onClickHandler = (page: any) => {
  currentPage.value = page
  scrollToTop()
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  scrollToTop()
})
const total = computed(() => {
  if (Array.isArray(listBrand.value)) {
    return listBrand.value.length
  } else {
    return 0
  }
})
const displayed = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return Array.isArray(listBrand.value) ? listBrand.value.slice(startIndex, endIndex) : []
})
</script>

<template>
  <table id="brand" class="table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>#</th>
        <th>Nama</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listBrand.records" :key="index">
        <td v-text="item.id"></td>
        <td v-text="item.nama"></td>
        <td>
          <NuxtLink :to="`/brand/${item.id}`">Details</NuxtLink>
          <NuxtLink :to="`/brand/edit/${item.id}`">Edit</NuxtLink>
          <button @click="deleteRow(item.id)" class="btn btn-danger btn-xs">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="pagination">
    <vue-awesome-paginate :total-items="total" :items-per-page="itemsPerPage" v-model="currentPage" :max-pages-shown="3"
      :on-click="onClickHandler" active-page-class="active" next-button-class="next" />
  </div>
</template>

<style scoped></style>
