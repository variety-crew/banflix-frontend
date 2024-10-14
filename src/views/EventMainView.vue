<template>
  <PageLayout title="이벤트" btn-txt="글 작성" btn-role="ADMIN" @click-btn="goEventForm">
    <template v-if="previewCards.length > 0">
      <template v-for="(card, id) in previewCards" :key="id">
        <EventPreviewCard :card="card" />
      </template>
    </template>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue';
import PageLayout from '@/components/layouts/PageLayout.vue';
import EventPreviewCard from '@/components/cards/preview/EventPreviewCard.vue';
import router from '@/router/routes';

const goEventForm = () => {
  router.push(`/form/event`);
};

const previewCards = ref([
  { title: 'hi' },
  { title: 'hi' },
  { title: 'hi' },
  { title: 'hi' },
  { title: 'hi' },
  { title: 'hi' },
]);
</script>

<style scoped></style>
