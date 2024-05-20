<script lang="ts" setup>
const config = useRuntimeConfig()
const router = useRouter();
const title: string = 'Brand'
useHead({ title: `Add New ${title}` })
const nama = ref('')
const rgks = ref('')
const ktrg = ref('')
const file = ref('')
const errors: any = ref({})
const handleFileChange = (e: any) => {
  file.value = e.target.files[0]
}
const store = async () => {
  let formData = new FormData()
  formData.append('nama', nama.value)
  formData.append('rgks', rgks.value)
  formData.append('ktrg', ktrg.value)
  formData.append('file', file.value)
  const params = `/api/api.php/records/brand`
  await $fetch(`${params}`, {
    method: 'post',
    body: formData,
    baseURL: `${config.public.apiUrlLocal}`,
    headers: {
      'x-api-key': `${config.public.apiKeyLocal}`
    }
  }).then(() => {
    router.push({ path: '/brand' })
  }).catch((error) => {
    errors.value = error.data
  })
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- /.card -->
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">
              Add New
            </h4>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form @submit.prevent="store()">
              <div class="row">
                <div class="form-group col-md-4">
                  <label>Nama </label>
                  <input type="text" value="" class="form-control" name="nama" required>
                  <input type="hidden" value="" class="form-control" name="id">
                </div>
                <div class="form-group col-lg-2 custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" name="pub" id="pub" value="1" />
                  <label for="pub" class="custom-control-label">Publish</label>
                </div>
              </div>
              <div class="form-group">
                <label>Summary</label>
                <textarea name="rgks" class="" placeholder="Place some text here"
                  style="width: 100%; height: 80px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea name="ktrg" class="textarea" placeholder="Place some text here"
                  style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
              </div>
              <div class="row">
                <div class="form-group col-md-3">
                  <img src="" height="40">
                  <img src="" height="40">
                  <label for="file">Images
                    ke sekian </label>
                  <div class="input-group">
                    <div class="custom-file">
                      <input type="file" class="custom-file-input-" id="file" name="file"
                        @change="handleFileChange($event)">
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
