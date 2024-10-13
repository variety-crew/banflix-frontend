<template>
  <div>{{ noticeId }}</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const noticeId = ref(route.params.noticeId);
</script>

<style scoped></style>
