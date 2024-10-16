<template>
  <PageLayout title="랭킹">
    <Tabs value="0">
      <TabList>
        <Tab value="0">주간 베스트 리뷰 TOP5</Tab>
        <Tab value="1">베스트 리뷰 TOP5</Tab>
        <Tab value="2">유저 랭킹 TOP100</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel value="1">
          <BestReviewView :reviews="reviews" />
          <a href="https://www.flaticon.com/free-icons/medal" title="medal icons"
            >Medal icons created by Freepik - Flaticon</a
          >
        </TabPanel>
        <TabPanel value="2">
          <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus.
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Tab from 'primevue/tab';
import PageLayout from '@/components/layouts/PageLayout.vue';
import BestReviewView from './rank/BestReviewView.vue';

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
    rank: 1,
    theme: {
      id: 1,
      title: '검은방',
      storeName: '그레이트 이스케이프 신촌점',
    },
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
    rank: 2,
    theme: {
      id: 1,
      title: '검은방',
      storeName: '그레이트 이스케이프 신촌점',
    },
  },
  {
    reviewCode: 3,
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
    rank: 3,
    theme: {
      id: 1,
      title: '검은방',
      storeName: '그레이트 이스케이프 신촌점',
    },
  },
  {
    reviewCode: 4,
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
    theme: {
      id: 1,
      title: '검은방',
      storeName: '그레이트 이스케이프 신촌점',
    },
  },
  {
    reviewCode: 5,
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
    theme: {
      id: 1,
      title: '검은방',
      storeName: '그레이트 이스케이프 신촌점',
    },
  },
]);
</script>

<style scoped></style>
