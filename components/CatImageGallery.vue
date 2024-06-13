<script lang="ts" setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="overflow-hidden text-gray-700 ">
    <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <!-- <cat-image v-for="image in images" :key="image.id" :alt="image.title" :src="image.src" /> -->
        <CatImage v-for="image in images" :key="image.id" :alt="image.title" :src="image.src" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
