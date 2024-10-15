<template>
  <ul class="review-list">
    <li v-for="review in props.reviews" :key="review.reviewCode">
      <ReviewItem :review="review" @click-image="clickImage" />
    </li>
  </ul>

  <!-- 리뷰 사진 크게 -->
  <Galleria
    v-model:visible="displayBigImage"
    :value="bigImages"
    :num-visible="5"
    container-style="max-width: 80vw; max-height: 90vh;"
    :circular="true"
    :full-screen="true"
    :show-item-navigators="true"
    :show-thumbnails="false"
    :show-indicators="true"
    :show-indicators-on-item="true"
  >
    <template #item="slotProps">
      <img :src="slotProps.item" style="width: 100%; display: block" />
    </template>
  </Galleria>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import Galleria from 'primevue/galleria';
import ReviewItem from './ReviewItem.vue';

const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});

const displayBigImage = ref(false);
const bigImages = ref([]);

const clickImage = images => {
  bigImages.value = images;
  displayBigImage.value = true;
};
</script>

<style scoped>
.review-list {
  padding: 0;
  margin: 0;
  list-style-type: none;

  li + li {
    margin-top: 16px;
  }
}
</style>
