<script lang="ts" setup>
const title: string = 'users'
useHead({ title: `List ${title}` })
const list: User = await $fetch(`/api/getAllUsers`)
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- /.card -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              <NuxtLink :to="`/${title}/create`" class="btn btn-success btn-sm"><span class="fa fa-plus"></span>
                {{ title }}
              </NuxtLink>
            </h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <LazyNuxtuiUsers />
            <!-- <table id="brand" class="table- table-striped- table-bordered- min-w-full text-left text-sm font-light"
              cellspacing="0" width="100%">
              <thead class="border-b font-medium dark:border-white/10">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">Username</th>
                  <th scope="col" class="px-6 py-4">Email</th>
                  <th scope="col" class="px-6 py-4">Nama</th>
                  <th scope="col" class="px-6 py-4">Level</th>
                  <th scope="col" class="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list.records" :key="index"
                  class="border-b border-neutral-200 dark:border-white/10">
                  <td v-text="item.id_login" class="whitespace-nowrap px-4 py-4"></td>
                  <td v-text="item.username"></td>
                  <td v-text="item.email"></td>
                  <td v-text="item.nama_pengguna"></td>
                  <td v-text="item.id_level.nama"></td>
                  <td>
                    <NuxtLink :to="`/${title}/${item.id_login}`">Details</NuxtLink> |
                    <NuxtLink :to="`/${title}/edit/${item.id_login}`">Edit</NuxtLink> |
                    <NuxtLink :to="`/${title}/edit/${item.id_login}`">Delete</NuxtLink>
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
