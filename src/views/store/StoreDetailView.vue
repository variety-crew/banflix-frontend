<template>
  <PageLayout :title="storeName">
    <Button
      v-tooltip="'클릭 시 네이버지도로 이동합니다.'"
      as="a"
      link
      :label="storeAddress"
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener"
      icon="pi pi-map-marker"
    />
    홈페이지 url / 등록된 테마 목록 / 베스트 리뷰 표시
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import { onMounted, ref } from 'vue';

const storeName = ref('');
const storeAddress = ref('');
const storeUrl = ref('');
const themeList = ref([]);
const bestReview = ref({});

onMounted(() => {
  storeName.value = '방플릭스 신촌점';
  storeAddress.value = '서울 강남구 강남대로98길 25 스타애비뉴 1층 황금열쇠 강남타임스퀘어점';
  storeUrl.value = 'http://xn--jj0b998aq3cptw.com/layout/res/home.php?go=main';
  themeList.value = [
    {
      id: 0,
      profileImage: 'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
      themeId: 1,
      theme: '위험한 동굴1',
      store: '그레이트 이스케이프 신촌점',
      location: '서울 동작구 여의대방로 188-11',
      reaction: {
        reviewCount: 1,
        like: {
          liked: false,
          count: 2,
        },
        scrap: {
          scraped: true,
          count: 3,
        },
      },
    },
    {
      id: 1,
      profileImage: 'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
      themeId: 2,
      theme: '위험한 동굴2',
      store: '그레이트 이스케이프 신촌점',
      location: '서울 동작구 여의대방로 188-12',
      reaction: {
        reviewCount: 4,
        like: {
          liked: false,
          count: 5,
        },
        scrap: {
          scraped: false,
          count: 6,
        },
      },
    },
    {
      id: 2,
      profileImage: 'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
      themeId: 3,
      theme: '위험한 동굴3',
      store: '그레이트 이스케이프 신촌점',
      location: '서울 동작구 여의대방로 188-13',
      reaction: {
        reviewCount: 7,
        like: {
          liked: true,
          count: 8,
        },
        scrap: {
          scraped: true,
          count: 9,
        },
      },
    },
    {
      id: 3,
      profileImage: 'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
      themeId: 4,
      theme: '위험한 동굴4',
      store: '그레이트 이스케이프 신촌점',
      location: '서울 동작구 여의대방로 188-14',
      reaction: {
        reviewCount: 10,
        like: {
          liked: false,
          count: 11,
        },
        scrap: {
          scraped: true,
          count: 12,
        },
      },
    },
    {
      id: 4,
      profileImage: 'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
      themeId: 5,
      theme: '위험한 동굴5',
      store: '그레이트 이스케이프 신촌점1',
      location: '서울 동작구 여의대방로 188-142',
      reaction: {
        reviewCount: 110,
        like: {
          liked: false,
          count: 131,
        },
        scrap: {
          scraped: true,
          count: 142,
        },
      },
    },
  ];
  bestReview.value = {
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
  };
});
</script>

<style scoped></style>
