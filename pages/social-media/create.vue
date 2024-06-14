<script lang="ts" setup>
const module: string = 'social-media'
const title: string = 'Social Media'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- /.card -->
        <div class="card">
          <div class="card-header">
            <h4 class="card-title" v-text='`Create ${title}`'>
            </h4>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form enctype="multipart/form-data" id="quickFormSocmed" action="#" method="POST">
              <div class="row">
                <div class="form-group col-md-4">
                  <label>Nama </label>
                  <input type="text" value="nama" class="form-control" name="nama" required>
                  <input type="hidden" value="id" class="form-control" name="id">
                </div>
                <div class="form-group col-md-4">
                  <label>Link</label>
                  <input type="text" value="link" class="form-control" name="link" required>
                </div>
                <div class="form-group col-lg-2 custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" name="pub" id="pub" value="1" checked />
                  <label for="pub" class="custom-control-label">Publish</label>
                </div>
              </div>
              <button class="btn btn-primary btn-sm" name="create"><i class="fa fa-edit"> </i> Submit</button>
              <input type="reset" class="btn btn-danger btn-sm">
            </form>
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
