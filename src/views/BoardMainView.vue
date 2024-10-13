<template>
  <PageLayout title="커뮤니티" btn-txt="글 작성" btn-role="ALL" @click-btn="goBoardForm">
    <div class="board-card-container">
      <template v-if="cards && cards.length">
        <template v-for="(card, index) in cards" :key="index">
          <BoardPreviewCard :card="card" :index="index" />
        </template>
      </template>
      <template v-else>게시글이 존재하지 않습니다.</template>
    </div>
  </PageLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PageLayout from '@/components/layouts/PageLayout.vue';
import BoardPreviewCard from '@/components/cards/preview/BoardPreviewCard.vue';

const router = useRouter();

const cards = ref([]);

const goBoardForm = () => {
  router.push('/board/form');
};

onMounted(() => {
  console.log('mounted');
  console.log('cards.value: ', cards.value);
  cards.value.push({ key: 'value' });
});
</script>

<style scoped></style>
