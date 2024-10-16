<template>
  <div class="flex-col gap-20">
    <ReviewItem v-for="review in props.reviews" :key="review.id" :review="review" show-theme />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ReviewItem from '@/components/review/ReviewItem.vue';

const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
