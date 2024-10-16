<template>
  <div class="user-rank">
    <div class="list-123">
      <UserRankCard v-for="user in users.slice(0, 3)" :key="user.id" :rank-user="user" />
    </div>
    <div class="list-remainder">
      <UserRankCard v-for="user in users.slice(3)" :key="user.id" :rank-user="user" />
    </div>
  </div>
</template>

<script setup>
import UserRankCard from '@/components/cards/UserRankCard.vue';
import { ref } from 'vue';

const users = ref([
  {
    id: 1,
    nickname: '홍길동',
    profileUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    point: 30000,
    genres: '공포, 스릴러',
  },
  {
    id: 2,
    nickname: '홍길동',
    profileUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    point: 30000,
    genres: '공포, 스릴러',
  },
  {
    id: 3,
    nickname: '홍길동',
    profileUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    point: 30000,
    genres: '공포, 스릴러',
  },
  {
    id: 4,
    nickname: '홍길동',
    profileUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    point: 30000,
    genres: '공포, 스릴러',
  },
  {
    id: 5,
    nickname: '홍길동',
    profileUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    point: 30000,
    genres: '공포, 스릴러',
  },
  {
    id: 6,
    nickname: '홍길동',
    profileUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    point: 30000,
    genres: '공포, 스릴러',
  },
  {
    id: 7,
    nickname: '홍길동',
    profileUrl: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    point: 30000,
    genres: '공포, 스릴러',
  },
]);
</script>

<style scoped></style>
