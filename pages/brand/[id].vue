<script lang="ts" setup>
const config = useRuntimeConfig()
const route = useRoute()
const id = route.params.id
// const { data } = await useFetch(`/api/getDetailsBrand?id=${id}`)
// const item = data.value as Brand

const params = `/api/api.php/records/brand/${id}`
const data = await $fetch(`${params}`, {
  baseURL: `${config.public.apiUrlLocal}`,
  headers: {
    'x-api-key': `${config.public.apiKeyLocal}`
  }
})
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
            <div>
              <p>Published: {{ data.pub == 1 ? "yes" : "no" }}</p>
              <p>Ringkasan: {{ data.rgks }}</p>
              <p v-html="data.ktrg"></p>
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
