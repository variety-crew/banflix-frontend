<template>
  <PageLayout title="방탈출 테마 추천" class="theme-for-you">
    <AppTypography type="title3">회원님에게 딱 맞는 방탈출 테마 추천해드려요!</AppTypography>
    <AppTypography color="darkgray">마음에 드는 포스터를 골라주세요</AppTypography>

    <div class="list-theme">
      <div v-for="theme in themes" :key="theme.themeCode">
        <Button label="선택" @click="clickTheme(theme.themeCode)" />
      </div>
    </div>

    <Button label="추천 받기" @click="clickRecommend" />
  </PageLayout>
</template>

<script setup>
import AppTypography from '@/components/AppTypography.vue';
import PageLayout from '@/components/layouts/PageLayout.vue';
import { $api } from '@/services/api/api';
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
import useToastMessage from '@/hooks/useToastMessage';

const { showWarning } = useToastMessage();

const themes = ref([]);

const selectedTheme = new Set();

const clickTheme = themeCode => {
  selectedTheme.add(themeCode);
};

const clickRecommend = () => {
  if (selectedTheme.size < 3) {
    showWarning('최소 3개 이상 선택해주세요!');
    return;
  }

  $api.theme.getRecommend(Array.from(selectedTheme)).then(() => {});
};

onMounted(() => {
  $api.theme.searchThemes().then(themeList => {
    themes.value = themeList;
  });
});
</script>

<style scoped>
.theme-for-you {
  .list-theme {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }
}
</style>
