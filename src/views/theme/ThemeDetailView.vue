<template>
  <PageLayout title="검은 조직" btn-role="ALL" btn-txt="나도 리뷰 작성할래요!" @click-btn="goReviewForm"></PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { themeId } = route.params;

const goReviewForm = () => {
  router.push(`/theme/${themeId}/create-review`);
};
</script>

<style scoped></style>
