<template>
  <PageLayout title="커뮤니티 게시판" btn-txt="글 작성" btn-role="ALL" @click-btn="goBoardForm">
    공지사항 페이지
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const goBoardForm = () => {
  router.push('/board/form');
};
</script>

<style scoped></style>
