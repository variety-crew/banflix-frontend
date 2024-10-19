<template>
  <PageLayout title="방탈출 테마 추천" class="theme-for-you">
    <AppTypography type="title3">회원님에게 딱 맞는 방탈출 테마 추천해드려요!</AppTypography>
    <AppTypography color="darkgray" class="mb-xl">마음에 드는 포스터를 골라주세요</AppTypography>

    <div class="list-theme">
      <div v-for="theme in themes" :key="theme.themeCode">
        <ThemeCard :theme="theme" :show-footer="false" class="mb-s" />
        <Button
          :label="selectedThemeCodes.includes(theme.themeCode) ? '선택 완료' : '선택'"
          fluid
          :icon="selectedThemeCodes.includes(theme.themeCode) ? 'pi pi-check' : 'pi'"
          :severity="selectedThemeCodes.includes(theme.themeCode) ? 'success' : 'secondary'"
          @click="clickTheme(theme.themeCode)"
        />
      </div>
    </div>

    <div class="area-btn">
      <Button label="새로고침" severity="secondary" icon="pi pi-refresh" :loading="isReloading" @click="reloadThemes" />
      <div class="flex-col items-center">
        <Button
          label="내 취향 방탈출 추천 받기"
          :disabled="selectedThemeCodes.length < minSelectCnt"
          @click="clickRecommend"
        />
        <AppTypography v-if="selectedThemeCodes.length < minSelectCnt" type="caption" color="darkgray" class="mt-xs"
          >{{ minSelectCnt - selectedThemeCodes.length }}개 더 골라주세요! (최소 {{ minSelectCnt }}개 선택
          필요)</AppTypography
        >
        <AppTypography v-else type="caption" color="darkgray" class="mt-xs"
          >많이 고를 수록 더 정확히 추천받을 수 있어요!</AppTypography
        >
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import AppTypography from '@/components/AppTypography.vue';
import PageLayout from '@/components/layouts/PageLayout.vue';
import { $api } from '@/services/api/api';
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
import ThemeCard from '@/components/cards/ThemeCard.vue';

const themes = ref([]);
const selectedThemeCodes = ref([]);
const isReloading = ref(false);

const minSelectCnt = 3;
let currentPage = 0;

const clickTheme = themeCode => {
  if (selectedThemeCodes.value.includes(themeCode)) {
    // 이미 들어있으면 삭제하기
    selectedThemeCodes.value = selectedThemeCodes.value.filter(e => e !== themeCode);
    return;
  }

  // 추가하기
  selectedThemeCodes.value.push(themeCode);
};

const clickRecommend = () => {
  $api.theme.getRecommend(selectedThemeCodes.value).then(() => {});
};

const getThemes = (page = 0) => {
  isReloading.value = true;
  $api.theme.searchThemes().then(themeList => {
    themes.value = themeList;
    isReloading.value = false;
  });
};

const reloadThemes = () => {
  // 다음 페이지의 테마목록 가져오기
  getThemes(currentPage + 1);
  currentPage += 1;
};

onMounted(() => {
  getThemes();
});
</script>

<style scoped>
.theme-for-you {
  .list-theme {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 48px 16px;
  }

  .area-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 48px;

    & > :first-child {
      margin-right: 48px;
    }
  }
}
</style>
