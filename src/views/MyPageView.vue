<template>
  <PageLayout title="마이페이지">
    <div v-if="userInfo">
      <div class="user-info-container">
        <img :src="userInfo.image" class="profile-image" alt="Image" preview />
        <div class="user-info">
          <h3>{{ userInfo.nickname }}</h3>
          <div>{{ userInfo.point }} P</div>
        </div>
      </div>

      <!-- 구분선 -->
      <Divider type="solid" />

      <!-- Report Section -->
      <div class="report-section">
        <h3>Report</h3>
        <p>방탈러 님의 리뷰 평균 점수는 {{ userReport.point }}점이에요</p>
        <p>방탈러 님이 자주 플레이한 장르는 {{ userReport.genres }} 장르에요</p>
      </div>

      <!-- Review Section -->
      <div class="review-section">
        <h3>Review ({{ reviews.length }})</h3>
        <template v-if="reviews.length > 0">
          <div class="reviews">
            <Card v-for="review in reviews" :key="review.id" class="review-card">
              <template #content>{{ review }} </template>
            </Card>
          </div>
        </template>
        <template v-else> 작성하신 리뷰가 없습니다. </template>
      </div>

      <!-- Post Section -->
      <div class="post-section">
        <h3>작성한 글 ({{ posts.length }})</h3>
        <div class="reviews">
          <Card v-for="post in posts" :key="post.id" class="post-card">
            <template #content>
              {{ posts }}
            </template>
          </Card>
        </div>
      </div>

      <!-- Comment Section -->
      <div class="comment-section">
        <h3>작성한 댓글 ({{ comments.length }})</h3>
        <div class="comments">
          <Card v-for="comment in comments" :key="comment.id" class="comment-card">
            <div class="score">{{ comment.score }}/10.0</div>
            <div class="content">{{ comment.content }}</div>
            <div class="date">{{ comment.date }}</div>
            <div class="likes">{{ comment.likes }} 👍</div>
          </Card>
        </div>
      </div>

      <!-- theme Section -->
      <div class="theme-section">
        <h3>스크랩한 방탈출 ({{ themes.length }})</h3>
        <div class="themes">
          <Card v-for="theme in themes" :key="theme.id" class="theme-card">
            <div class="score">{{ theme.score }}/10.0</div>
            <div class="content">{{ theme.content }}</div>
            <div class="date">{{ theme.date }}</div>
            <div class="likes">{{ theme.likes }} 👍</div>
          </Card>
        </div>
      </div>
    </div>
    <div v-else>
      <PageLoadingLayout />
    </div>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import PageLoadingLayout from '@/components/layouts/PageLoadingLayout.vue';
import { $api } from '@/services/api/api';
import { useUserStore } from '@/stores/user';
import Card from 'primevue/card';
import { onMounted, ref } from 'vue';

const baseServerUrl = `${import.meta.env.VITE_SERVER_URL}`;

const userStore = useUserStore();

const isMe = ref(false);

const userInfo = ref({});
const userReport = ref({});
const reviews = ref([]);
const posts = ref([]);
const comments = ref([]);
const themes = ref([]);

// /user/report

onMounted(async () => {
  // const token = userStore.accessToken;
  // if (token) {
  //   const isMeResponse = await $api.review.get('user/report');
  //   console.log('isMeResponse: ', isMeResponse);
  //   try {
  //     // 사용자 정보 조회
  //     userInfo.value = await $api.user.get('info');
  //     console.log('userInfo.value: ', userInfo.value);
  //     if (userInfo.value) {
  //       userInfo.value.image = baseServerUrl + userInfo.value.image;
  //     } else {
  //       userInfo.value = [];
  //     }
  //     // 사용자 report 조회
  //     userReport.value = await $api.review.get('user/report');
  //     if (userReport.value) {
  //       console.log('userReport.value: ', userReport.value);
  //     } else {
  //       userReport.value = [];
  //     }
  //     // 사용자 review 조회
  //     reviews.value = await $api.review.get('user');
  //     if (reviews.value) {
  //       console.log('reviews.value: ', reviews.value);
  //     } else {
  //       reviews.value = [];
  //     }
  //     // 사용자 post 조회
  //     reviews.value = await $api.posts.get('user');
  //     if (reviews.value) {
  //       console.log('reviews.value: ', reviews.value);
  //     } else {
  //       reviews.value = [];
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch user info:', error);
  //   }
  // } else {
  //   console.log('User is not authenticated.');
  // }
});
</script>

<style scoped>
.user-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
