<script lang="ts" setup>
const data = { 'name': 'andijaya', 'email': 'andijayawizard@gmail.com' }
</script>

<template>
  <div class="font-light text-sm text-center px-4 py-4">
    <p>
  created and developed by: {{ data.name }}      
    </p>
  more info: {{ data.email }}
  </div>
</template>

<style scoped></style>
