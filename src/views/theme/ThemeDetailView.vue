<template>
  <PageLayout
    title="검은 조직"
    btn-role="ALL"
    btn-txt="나도 리뷰 작성할래요!"
    class="container-theme-detail"
    @click-btn="goReviewForm"
  >
    <div class="flex-row gap-20">
      <!-- 테마 이미지 -->
      <Galleria
        :value="themeImages"
        :responsive-options="responsiveOptions"
        :circular="true"
        container-style="width: 440px; flex-shrink: 0;"
        :show-item-navigators="true"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="display: block; width: 100px" />
        </template>
      </Galleria>

      <!-- 테마 상세 정보 -->
      <Panel header="테마 상세 정보" class="area-theme-desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Panel>

      <!-- 리뷰 통계 -->
      <Panel header="리뷰 통계" class="area-review-statistics">
        <div class="top">
          <div>
            <h3 class="mb-s">평균 만족도</h3>
            <h1>4.11 / 5</h1>
          </div>
          <Divider layout="vertical" />
          <div>
            <ReviewStatisticsItem :data="totalScoreStatisticsData" />
          </div>
        </div>

        <Divider />

        <div class="bottom">
          <ReviewStatisticsItem label="문제구성" :data="quizQualityStatisticsData" />
          <ReviewStatisticsItem label="난이도" :data="levelStatisticsData" />
          <ReviewStatisticsItem label="공포도" :data="scaryStatisticsData" />
          <ReviewStatisticsItem label="활동성" :data="activityStatisticsData" />
          <ReviewStatisticsItem label="인테리어" :data="interiorStatisticsData" />
          <ReviewStatisticsItem label="개연성" :data="probabilityStatisticsData" />
        </div>
      </Panel>
    </div>
  </PageLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PageLayout from '@/components/layouts/PageLayout.vue';
import Galleria from 'primevue/galleria';
import Panel from 'primevue/panel';
import Divider from 'primevue/divider';
import {
  quizQualityOptions,
  levelOptions,
  interiorOptions,
  activityOptions,
  probabilityOptions,
  scaryOptions,
} from '@/utils/constants';
import ReviewStatisticsItem from '@/components/review/ReviewStatisticsItem.vue';

const router = useRouter();
const route = useRoute();
const { themeId } = route.params;

const themeImages = ref([]);
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
  },
]);
const totalScoreStatisticsData = ref([
  { label: '1점', percent: 1 },
  { label: '2점', percent: 2 },
  { label: '3점', percent: 10 },
  { label: '4점', percent: 25 },
  { label: '5점', percent: 62 },
]);
const quizQualityStatisticsData = ref(quizQualityOptions.map((e, i) => ({ ...e, percent: 10 * (i + 1) })));
const levelStatisticsData = ref(levelOptions.map((e, i) => ({ ...e, percent: 10 * (i + 1) })));
const scaryStatisticsData = ref(scaryOptions.map((e, i) => ({ ...e, percent: 10 * (i + 1) })));
const activityStatisticsData = ref(activityOptions.map((e, i) => ({ ...e, percent: 10 * (i + 1) })));
const interiorStatisticsData = ref(interiorOptions.map((e, i) => ({ ...e, percent: 10 * (i + 1) })));
const probabilityStatisticsData = ref(probabilityOptions.map((e, i) => ({ ...e, percent: 10 * (i + 1) })));

const goReviewForm = () => {
  router.push(`/theme/${themeId}/create-review`);
};

onMounted(() => {
  themeImages.value = [
    { src: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg', alt: '' },
    { src: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg', alt: '' },
    { src: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg', alt: '' },
    { src: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg', alt: '' },
    { src: 'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg', alt: '' },
  ];
});
</script>

<style scoped>
.container-theme-detail {
  .area-theme-desc {
    width: 300px;
    flex-shrink: 0;
  }

  .area-review-statistics {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .top {
      display: grid;
      grid-template-columns: 0.7fr 0.2fr 2fr;
    }

    .bottom {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }
}
</style>
