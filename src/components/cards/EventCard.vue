<template>
  <Card @click="goEventDetail(card.id)">
    <template #content>
      <div class="content-container">
        <img class="theme-tumb" :src="props.card.profileImage" alt="테마 프로필 이미지" />
        <h3 class="theme">{{ props.card.theme }}</h3>
        <div class="partner">{{ props.card.partner }}</div>
        <div class="location">{{ props.card.location }}</div>
        <div class="reaction-container">
          <ReviewIcon :count="props.card.reaction.reviewCount" />
          <Like :like="props.card.reaction.like" />
          <Scrap :scrap="props.card.reaction.scrap" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import Card from 'primevue/card';
import ReviewIcon from '../common/reaction/ReviewIcon.vue';
import Like from '../common/reaction/Like.vue';
import Scrap from '../common/reaction/Scrap.vue';
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  // card object
  // {
  //   id: 2,
  //   profileImage: 'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
  //   theme: '위험한 동굴3',
  //   partner: '그레이트 이스케이프 신촌점',
  //   location: '서울 동작구 여의대방로 188-13',
  //   reaction: {
  //     reviewCount: 7,
  //     like: {
  //       liked: false,
  //       count: 8,
  //     },
  //     scrap: {
  //       scraped: true,
  //       count: 9,
  //     },
  //   },
  // },
  isLoggined: {
    type: Boolean,
    required: true,
  },
});

const goEventDetail = id => {
  console.log(id);
};
</script>

<style scoped>
.p-card {
  width: 245px;
}

.content-container {
  display: flex;
  flex-direction: column;
}

.theme-tumb {
  margin: 0 auto;
  /* align-self: center; */
  width: 200px;
  height: 200px;
}
.theme {
  margin-top: 20px;
  font-weight: bolder;
}
.partner {
  margin-top: 10px;
}
.location {
  margin-top: 10px;
}

.reaction-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
