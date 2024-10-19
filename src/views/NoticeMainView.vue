<template>
  <PageLayout title="공지사항" btn-txt="공지사항 등록" btn-role="ADMIN" @click-btn="goNoticeForm">
    <template v-if="notices.totalPages > 0">
      <template v-for="(notice, id) in notices.noticePosts" :key="id">
        <NoticePreviewCard :notice="notice" class="notice-card" @click="goDetailNotice(id)"></NoticePreviewCard>
      </template>
    </template>
    <template v-else> 게시글이 존재하지 않습니다. </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import NoticePreviewCard from '@/components/cards/preview/NoticePreviewCard.vue';
import useToastMessage from '@/hooks/useToastMessage';

import { ref, onMounted } from 'vue';
import { $api } from '@/services/api/api';

import router from '@/router/routes';

const { showSuccess } = useToastMessage();
const notices = ref(['']);
// const notices = ref([
//   { id: 0, title: '제목1', createdAt: '2024.10.01', writer: '홍길동 관리자' },
//   { id: 1, title: '제목2', createdAt: '2024.10.02', writer: '용길동 관리자' },
//   { id: 2, title: '제목3', createdAt: '2024.10.03', writer: '홍길할 관리자' },
//   { id: 3, title: '제목4', createdAt: '2024.10.04', writer: '홍길한 관리자' },
//   { id: 4, title: '제목5', createdAt: '2024.10.05', writer: '길동 관리자' },
// ]);

// noticePostCode, createdAt, title, memberCode->작성자 닉네임,

// const notices = ref([]);

const goDetailNotice = id => {
  router.push(`/notice/detail/${id}`);
};
const goNoticeForm = () => {
  router.push(`/notice/form`);
};

onMounted(async () => {
  // 커뮤니티 게시글 목록 조회
  console.log('before get');

  const params = new URLSearchParams();
  params.append('page', 0);

  notices.value = await $api.notice.get('', params.toString());
  console.log('after get');

  console.log(notices.value);
});

// createdAt 배열을 "YYYY-MM-DD" 형식으로 변환
const formatDate = createdAt => {
  if (!createdAt || createdAt.length < 3) return ''; // 데이터가 없거나 배열 길이가 짧을 경우 처리
  const [year, month, day] = createdAt;
  console.log('date: ', `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`; // YYYY-MM-DD 형식으로 변환
};
</script>

<style scoped>
.notice-card {
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
