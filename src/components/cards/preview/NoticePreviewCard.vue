<template>
  <Card>
    <template #content>
      <div class="notice-header-container">
        <div class="title">{{ notice.title }}</div>
        <div class="writer">{{ notice.nickname }}</div>
      </div>
      <div class="content">{{ formatDate(notice.createdAt) }}</div>
    </template>
  </Card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  notice: {
    type: Object,
    required: true,
  },
});

// createdAt 배열을 "YYYY-MM-DD" 형식으로 변환
const formatDate = createdAt => {
  if (!createdAt || createdAt.length < 3) return '';
  const [year, month, day] = createdAt;
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};
</script>

<style scoped>
.notice-header-container {
  display: flex;
  justify-content: space-between;
}
.title {
  color: black;
  font-size: 20px;
  font-weight: bold;
}
.content {
  font-size: 13px;
  margin-top: 10px;
}
</style>
