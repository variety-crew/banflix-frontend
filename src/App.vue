<template>
  <PageHeader />

  <main>
    <RouterView />
  </main>

  <Toast />
</template>

<script setup>
import { RouterView } from 'vue-router';
import PageHeader from './components/PageHeader.vue';

</script>

<style scoped>

</style>