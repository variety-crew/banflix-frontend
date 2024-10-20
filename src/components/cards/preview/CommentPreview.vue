<template>
  <div>
    <Card>
      <template #content>
        <p>{{ props.comment.content }} {{ props.comment.createdAt }}</p>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import { defineProps } from 'vue';

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
