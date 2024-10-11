<template>
  <PageLayout title="공지사항" btn-txt="글 작성" btn-role="ALL" @click-btn="goNoticeForm"> 공지사항 페이지 </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import useToastMessage from '@/hooks/useToastMessage';

const { showSuccess } = useToastMessage();

const goNoticeForm = () => {
  showSuccess('글 작성 페이지로 이동!', '이동!!');
};
</script>

<style scoped></style>
