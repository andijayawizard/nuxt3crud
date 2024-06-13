<script lang="ts" setup>
const client = useSupabaseClient()
const { data: images } = await useAsyncData('images', async () => client.from('todo').select('*').order('created_at'), { transform: result => result.data })
// const { data: restaurant } = await useAsyncData('restaurant', async () => {
//   const { data } = await client.from('todo').select('title').eq('name', 'My Restaurant Name').single()
//   return data
// })
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- /.card -->
        <CatImageGallery :images="images" />
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
  </div>
</template>

<style scoped></style>
