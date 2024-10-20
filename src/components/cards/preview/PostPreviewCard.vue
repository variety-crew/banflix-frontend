<template>
  <div>
    <Card>
      <template #title>{{ post.title }} </template>
      <template #content> {{ post.content }}</template>
      <template #footer> {{ post.createdAt }} </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import { defineProps } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
