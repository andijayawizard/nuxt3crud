<script lang="ts" setup>
const module: string = 'social-media'
const title: string = 'Social Media'
const list: SocialMedia = await $fetch(`/api/getAllSocialMedia`)
useHead({ title: `${title} List` })
const deleteRow = async (id: number) => {
  await $fetch(`/api/api.php/records/${module}/${id}`, {
    baseURL: `${config.public.apiUrl}`,
    method: 'delete',
    headers: {
      'x-api-key': `${config.public.apiKey}`
    }
  })
  refreshNuxtData('listBrand')
}
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
            <LazyNuxtuiSocialMedia />
            <!-- <table id="brand" class="table- table-striped- table-bordered- min-w-full text-left text-sm font-light"
              cellspacing="0" width="100%">
              <thead class="border-b font-medium dark:border-white/10">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">Image</th>
                  <th scope="col" class="px-6 py-4">Nama</th>
                  <th scope="col" class="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list.records" :key="index"
                  class="border-b border-neutral-200 dark:border-white/10">
                  <td v-text="item.id" class="whitespace-nowrap px-4 py-4"></td>
                  <td v-text="item.acak"></td>
                  <td v-text="item.nama"></td>
                  <td>
                    <NuxtLink :to="`/${module}/${item.id}`">Details</NuxtLink> |
                    <NuxtLink :to="`/${module}/edit/${item.id}`">Edit</NuxtLink> |
                    <button @click="deleteRow(item.id)" class="btn btn-danger btn-xs">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table> -->
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
