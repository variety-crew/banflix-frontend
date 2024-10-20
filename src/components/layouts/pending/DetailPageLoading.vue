<!-- LoadingSpinner.vue -->
<template>
  <div class="loading-container">
    <ProgressSpinner />
    <p class="loading-message">{{ props.pendingTarget }} 불러오고 있습니다.</p>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';

// 로딩 메시지를 부모 컴포넌트에서 전달받을 수 있도록 설정
const props = defineProps({
  pendingTarget: {
    type: String,
    default: 'Loading...',
  },
});
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 페이지 전체를 차지하도록 설정 */
  background-color: rgba(255, 255, 255, 0.8); /* 반투명 배경 */
}

.loading-message {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #333;
}
</style>
