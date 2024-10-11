<template>
  <FormPageLayout title="공지사항 등록/수정" @click-save="saveNotice"> 공지사항 등록/수정 폼 </FormPageLayout>
</template>

<script setup>
import FormPageLayout from '@/components/layouts/FormPageLayout.vue';
import useToastMessage from '@/hooks/useToastMessage';

const { showSuccess } = useToastMessage();

const saveNotice = () => {
  showSuccess('저장', '저장 눌렀지롱');
};
</script>

<style scoped></style>
