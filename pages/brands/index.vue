<script lang="ts" setup>
const module: string = 'brand'
const title: string = 'Brand'
</script>

<template>
  <div class="container-fluid">
    <div class="alert alert-info alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      <h5><i class="icon fas fa-info"></i> Alert!</h5>
      Klik tambah untuk menginput
      {{ title }} baru
    </div>
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
            <Brand />
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
