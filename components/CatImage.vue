<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-wrap w-1/4">
    <div class="w-full p-1 md:p-2">
      <NuxtImg class="block object-cover object-center w-full h-full rounded-lg" :alt="alt" format="webp" :src="src" />
      <div>title: {{ title }}</div>
    </div>
  </div>
</template>

<style scoped></style>
