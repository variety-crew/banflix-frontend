<template>
  <div class="container-review-item flex-row">
    <!-- 왼쪽 부분 -->
    <div class="grow-1">
      <div class="flex-row gap-10 items-center mb-m">
        <Avatar :image="props.review.profileImageUrl" size="large" shape="circle" />
        <AppTypography type="body1" color="darkgray">{{ props.review.nickname }}</AppTypography>
        <AppTypography type="body2" color="gray">{{ props.review.createdAt }}</AppTypography>
        <AppTypography type="body2" color="gray">선호 장르: {{ props.review.userGenres }}</AppTypography>
      </div>

      <div class="flex-row gap-10 mb-s">
        <div class="grow-1">
          <AppTypography type="title3" class="mb-s">{{ props.review.title }}</AppTypography>
          <AppTypography type="body1">{{ props.review.desc }}</AppTypography>
        </div>

        <!-- 이미지 있는 경우 표시 -->
        <img
          v-if="props.review.images.length > 0"
          :src="props.review.images[0]"
          width="150"
          height="150"
          @click="emit('clickImage', props.review.images)"
        />
      </div>

      <!-- 좋아요 버튼 -->
      <Like :like="{ liked: false, count: props.review.likeCnt }" />
    </div>

    <!-- 구분선 -->
    <Divider layout="vertical" />

    <!-- 상세 평가항목(오른쪽) -->
    <div class="shrink-0 flex-row gap-10">
      <div class="flex-col content-between">
        <div>
          <AppTypography type="body1" class="mb-xs">만족도</AppTypography>
          <AppTypography type="title1">{{ props.review.totalScore }}.0</AppTypography>
        </div>
        <div>
          <ReviewTag label="참가인원" :value="props.review.people.toString()" type="PEOPLE" />
          <ReviewTag label="소요시간" :value="props.review.time.toString()" type="TIME" />
        </div>
      </div>

      <div class="flex-col gap-5">
        <ReviewTag label="문제구성" :value="props.review.quizQuality" type="QUIZ" />
        <ReviewTag label="난이도" :value="props.review.level" type="LEVEL" />
        <ReviewTag label="공포도" :value="props.review.scary" type="SCARY" />
        <ReviewTag label="활동성" :value="props.review.activity" type="ACTIVITY" />
        <ReviewTag label="인테리어" :value="props.review.interior" type="INTERIOR" />
        <ReviewTag label="개연성" :value="props.review.probability" type="PROBABILITY" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
import AppTypography from '@/components/AppTypography.vue';
import ReviewTag from '@/components/review/ReviewTag.vue';
import Like from '../common/reaction/Like.vue';

const props = defineProps({
  review: {
    type: Object,
    /* 
    {
        reviewCode: 1,
        nickname: "홍길동",
        profileImageUrl: "http://",
        createdAt: "2024.10.10 22:00",
        userGenres: "범죄, 공포, 스릴러",
        title: "리뷰 제목",
        desc: "리뷰 내용",
        images: [
            "http://image.url",
            "http://image.url"
        ],
        likeCnt: 10,
        totalScore: 5,
        time: 70,
        people: 2,
        level: 'ONE',
        quizQuality: 'TWO',
        scary: 'TWO',
        activity: 'THREE',
        interior: 'FIVE',
        probability: 'FIVE'
    }
     */
    required: true,
  },
});

const emit = defineEmits(['clickImage']);
</script>

<style scoped>
.container-review-item {
  background-color: white;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  padding: 20px;

  img {
    object-fit: cover;
  }
}
</style>
