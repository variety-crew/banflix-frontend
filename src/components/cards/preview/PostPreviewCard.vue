<template>
  <div>
    <Card>
      <template #title>
        <h2>
          {{ post.title }}
        </h2>
      </template>
      <template #content>
        {{
          props.post.content.length > 130 ? props.post.content.slice(0, 130) + '...(더보기)' : props.post.content
        }}</template
      >
      <template #footer> {{ post.createdAt.slice(0, 3).join('.') }} </template>
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
