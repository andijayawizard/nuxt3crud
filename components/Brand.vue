<script lang="ts" setup>
const config = useRuntimeConfig()
useHead({ title: 'Brand List' })
const route = useRoute()
const data = await $fetch(`/api/getAllBrand`)
const id = route.params.id
const deleteRow = async (id: number) => {
  await $fetch(`/api/api.php/records/brand/${id}`, {
    baseURL: `${config.public.apiUrlLocal}`,
    method: 'delete',
    headers: {
      'x-api-key': `${config.public.apiKeyLocal}`
    }
  })
  refreshNuxtData('data')
}
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
      <tr v-for="(item, index) in data.records" :key="index">
        <td v-text="item.id"></td>
        <td v-text="item.nama"></td>
        <td>
          <NuxtLink :to="`/brand/${item.id}`">Details</NuxtLink>
          <NuxtLink :to="`/brand/edit/${item.id}`">Edit</NuxtLink>
          <button @click="deleteRow(id)" class="btn btn-danger btn-xs">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
