<script lang="ts" setup>
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/getDetailsUser?id=${id}`)
const details = data.value as User
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- /.card -->
        <div class="card">
          <div class="card-header">
            <h4 class="card-title" v-text="data.username">
            </h4>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="text-sm font-light">
              <p>Username: {{ details.username }}</p>
              <p>Email: {{ details.email }}</p>
              <p>Nama Lengkap: {{ details.nama }}</p>
              <p>Level: {{ details.id_level.nama }}</p>
              <p>Telepon: {{ details.telepon }}</p>
              <p>Alamat:
              <div v-html="details.alamat"></div>
              </p>
            </div>
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
