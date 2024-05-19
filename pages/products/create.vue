<script lang="ts" setup>
// import z from 'zod'
useHead({ title: 'Add New Product' })
// const schema = z.object({
//   nama: z.string()
// })
// type Schema = z.output<typeof schema>
const state = reactive({
  nama: undefined
})
// async function onSubmit(event: FormSubmitEvent<Schema>) {
//   console.log(event.data);
// }
</script>

<template>
  <UForm>
    <UFormGroup label="Nama" name="nama">
      <UInput />
    </UFormGroup>
    <UButton type="submit">Submit</UButton>
  </UForm>

  <div class="mx-auto block max-w-sm">
    <form>
      <div class="relative mb-12" data-twe-input-wrapper-init>
        <input type="text" name="nama" id="nama" placeholder="Nama"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0" />
        <label for="nama">Nama</label>
        <small>input nama produk</small>
      </div>
      <button class="inline-block rounded bg-primary px-6">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>
