<script lang="ts" setup>
const data = { 'name': 'andijaya', 'email': 'andijayawizard@gmail.com', 'year': '2024' }
</script>

<template>
  <footer class="main-footer">
    <strong>Copyright &copy;
      {{ data.year }}
      <a href="#">
        {{ data.name }} </a>.
    </strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.2.0
    </div>
  </footer>
</template>

<style scoped></style>
