<script lang="ts" setup>
const config = useRuntimeConfig()
const route = useRoute();
const id = route.params.id
const params = `/api/api.php/records/brand/${id}`
const { data, pending, error, refresh } = await useFetch(`${params}`, {
  baseURL: `${config.public.apiUrlLocal}`,
  headers: {
    'x-api-key': `${config.public.apiKeyLocal}`
  }
})
const nama = ref(data.value.nama)
const rgks = ref(data.value.rgks)
const ktrg = ref(data.value.ktrg)
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- /.card -->
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">
              Edit {{ route.name }} / {{ data.nama }}
            </h4>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form enctype="multipart/form-data" id="quickForm"
              action="<?= $abs; ?>/backend/pages/brand/crud.php?act=<?= $_GET['act']; ?>" method="POST">
              <div class="row">
                <div class="form-group col-md-4">
                  <label>Nama </label>
                  <input v-html="data.value.nama" type="text" class="form-control" name="nama" required />
                  <input v-html="data.id" type="text" class="form-control" name="id" />
                </div>
                <div class="form-group col-lg-2 custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" name="pub" id="pub" value="1" />
                  <label for="pub" class="custom-control-label">Publish</label>
                </div>
              </div>
              <div class="form-group">
                <label>Summary</label>
                <textarea v-html="data.ktrg" name="rgks" class="" placeholder="Place some text here"
                  style="width: 100%; height: 80px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea v-html="data.ktrg" name="ktrg" class="textarea" placeholder="Place some text here"
                  style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
              </div>
              <div class="row">
                <div class="form-group col-md-3">
                  <img src="" height="40">
                  <img src="" height="40">
                  <label for="file">Images
                  </label>
                  <div class="input-group">
                    <div class="custom-file">
                      <input type="file" class="custom-file-input-" id="file" name="file">
                      <!-- <label class="custom-file-label" for="file<?= $i; ?>">Choose file</label> -->
                    </div>
                    <!-- <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                      </div> -->
                  </div>
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
