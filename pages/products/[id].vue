<script lang="ts" setup>
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/getDetailsProduct?id=${id}`)
const details = data.value as Product
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- /.card -->
        <div class="card">
          <div class="card-header">
            <h4 class="card-title" v-text="data.nama">
            </h4>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="text-sm font-light">
              <p>Nama: {{ details.nama }}</p>
              <p>Brand: {{ details.bid.nama }}</p>
              <p>Keterangan:
              <div v-html="details.ktrg"></div>
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
