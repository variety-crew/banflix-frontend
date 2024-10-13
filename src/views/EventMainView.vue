<template>
  <FormPageLayout>
    <template v-if="previewCards.length > 0">
      <template v-for="(card, id) in previewCards" :key="id">
        <EventPreviewCard :card="card" />
      </template>
    </template>
  </FormPageLayout>
</template>

<script setup>
import { ref } from 'vue';
import FormPageLayout from '@/components/layouts/FormPageLayout.vue';
import EventPreviewCard from '@/components/cards/preview/EventPreviewCard.vue';

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
