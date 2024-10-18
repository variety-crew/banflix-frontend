<template>
  <PageLoadingLayout v-if="!themeDetail" />
  <PageLayout
    v-else
    :title="`[테마] ${themeDetail.name}`"
    btn-role="ALL"
    btn-txt="나도 리뷰 작성할래요!"
    class="container-theme-detail"
    @click-btn="goReviewForm(themeDetail.themeCode)"
  >
    <!-- 매장 -->
    <Button
      :label="themeDetail.storeName"
      text
      icon="pi pi-home"
      class="mb-s"
      @click="clickStore(themeDetail.storeCode)"
    />

    <div class="flex-row gap-20 mb-l items-start">
      <div>
        <!-- 테마 이미지 -->
        <Image :src="themeDetail.posterImage" image-style="width: 440px; flex-shrink: 0; margin-bottom: 16px;" />

        <!-- 좋아요/스크랩 -->
        <div class="flex-row gap-10">
          <Button
            label="좋아요"
            :icon="`pi ${userLiked ? 'pi-heart-fill' : 'pi-heart'}`"
            outlined
            :badge="themeDetail.likeCount.toString()"
            @click="clickLike(themeDetail.themeCode)"
          />
          <Button
            label="스크랩"
            :icon="`pi ${userBookmarked ? 'pi-bookmark-fill' : 'pi-bookmark'}`"
            outlined
            :badge="themeDetail.scrapCount.toString()"
            @click="clickScrap(themeDetail.themeCode)"
          />
        </div>
      </div>

      <!-- 테마 상세 정보 -->
      <Panel header="" class="grow-1">
        <p class="mb-xl">
          {{ themeDetail.story }}
        </p>
        <p>난이도: {{ themeDetail.level }}</p>
        <p>1인당 가격: {{ themeDetail.price.toLocaleString() }}원</p>
        <p>제한시간: {{ themeDetail.timeLimit }}분</p>
      </Panel>
    </div>

    <!-- 리뷰 통계 -->
    <Panel header="" class="area-review-statistics mb-l">
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

    <!-- 리뷰 -->
    <section>
      <div class="flex-row content-between mb-m">
        <div class="flex-row gap-10 items-end">
          <h3>참가자 리뷰</h3>
          <span>(123)</span>
        </div>

        <Select
          v-model="selectedReviewSorting"
          :options="reviewSortingOptions"
          option-label="name"
          placeholder="정렬기준"
          checkmark
          :highlight-on-select="false"
        />
      </div>

      <!-- 리뷰 목록 -->
      <ReviewList :reviews="reviews" />
    </section>
  </PageLayout>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PageLayout from '@/components/layouts/PageLayout.vue';
import Panel from 'primevue/panel';
import Divider from 'primevue/divider';
import Select from 'primevue/select';
import Button from 'primevue/button';
import {
  quizQualityOptions,
  levelOptions,
  interiorOptions,
  activityOptions,
  probabilityOptions,
  scaryOptions,
} from '@/utils/constants';
import ReviewStatisticsItem from '@/components/review/ReviewStatisticsItem.vue';
import ReviewList from '@/components/review/ReviewList.vue';
import { $api } from '@/services/api/api';
import PageLoadingLayout from '@/components/layouts/PageLoadingLayout.vue';
import Image from 'primevue/image';

const router = useRouter();
const route = useRoute();
const { themeId } = route.params;

const themeDetail = ref(null);
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
const selectedReviewSorting = ref({ name: '최신 순', value: 'RECENT' });
const reviewSortingOptions = ref([
  { name: '최신 순', value: 'RECENT' },
  { name: '만족도 높은 순', value: 'SCORE_DESC' },
  { name: '만족도 낮은 순', value: 'SCORE_ASC' },
]);
const reviews = ref([
  {
    reviewCode: 1,
    nickname: '홍길동',
    profileImageUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    createdAt: '2024.10.10 22:00',
    userGenres: '범죄, 공포, 스릴러',
    title: '여기 검은 조직은 진짜 미침',
    desc: '인생 어쩌구 저쩌구 리뷰 이벤트 해서 엠오유가 어쩌구 저쩌구 인테리어가 진짜 내가 방탈출하는 사람이 된거같고 어쩌구 저쩌구 몰입도가 어쩌구 저쩌구 총쏘면 진짜 총 맞는게 단점이고 어쩌구 저쩌구인생 어쩌구 저쩌구 리뷰 이벤트 해서 엠오유가 어쩌구 저쩌구 인테',
    images: [
      'https://primefaces.org/cdn/primevue/images/card-vue.jpg',
      'https://primefaces.org/cdn/primevue/images/card-vue.jpg',
    ],
    likeCnt: 100,
    totalScore: 5,
    time: 60,
    people: 2,
    level: 'ONE',
    quizQuality: 'TWO',
    scary: 'TWO',
    activity: 'THREE',
    interior: 'FIVE',
    probability: 'FIVE',
  },
  {
    reviewCode: 2,
    nickname: '프로방탈출러',
    profileImageUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    createdAt: '2024.10.10 22:00',
    userGenres: '범죄, 스릴러',
    title: '여기 검은 조직은 진짜 미침',
    desc: '인생 어쩌구 저쩌구 리뷰 이벤트 해서 엠오유가 어쩌구 저쩌구 인테리어가 진짜 내가 방탈출하는 사람이 된거같고 어쩌구 저쩌구 몰입도가 어쩌구 저쩌구 총쏘면 진짜 총 맞는게 단점이고 어쩌구 저쩌구인생 어쩌구 저쩌구 리뷰 이벤트 해서 엠오유가 어쩌구 저쩌구 인테',
    images: [],
    likeCnt: 10,
    totalScore: 4,
    time: 60,
    people: 2,
    level: 'ONE',
    quizQuality: 'TWO',
    scary: 'TWO',
    activity: 'THREE',
    interior: 'FIVE',
    probability: 'FIVE',
  },
]);
const userLiked = ref(true);
const userBookmarked = ref(false);

const goReviewForm = themeCode => {
  router.push(`/theme/${themeCode}/create-review`);
};

const clickLike = themeCode => {
  $api.theme.setReactions('like', true, themeCode).then(() => {});
};

const clickScrap = themeCode => {
  $api.theme.setReactions('scrap', true, themeCode).then(() => {});
};

const clickStore = storeCode => {
  router.push(`/store/detail/${storeCode}`);
};

// 테마코드로 조회
watchEffect(() => {
  if (!themeId) return;

  // 테마 정보 조회
  $api.theme.getTheme(themeId).then(theme => {
    themeDetail.value = theme;
  });

  // 리뷰 통계 조회
  $api.review.getStatisticsByThemeCode(themeId).then(statistics => {});

  // 리뷰 목록 조회
  $api.review.getReviewsByThemeCode(themeId).then(reviews => {});
});
</script>

<style scoped>
.container-theme-detail {
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
