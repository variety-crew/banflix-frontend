<template>
  <PageHeader />

  <main>
    <RouterView />
  </main>

  <Toast position="top-center" />
</template>

<script setup>
import { RouterView } from 'vue-router';
import PageHeader from './components/PageHeader.vue';
import Toast from 'primevue/toast';
</script>

<style scoped>
main {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
