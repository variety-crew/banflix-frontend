<template>
  <PageLayout title="이벤트" btn-txt="글 작성" btn-role="ADMIN" @click-btn="goEventForm">
    <h3>할인 테마</h3>
    <div class="sub-title">테마 별 할인 정보를 제공합니다. 지금이 제일 저렴할 때!</div>
    <template v-if="discountEvents.length > 0">
      <div class="event-card-container">
        <ThemeCard
          v-for="(event, id) in discountEvents"
          :key="id"
          :theme="event"
          next-page="EVENT"
          @click="goDetailEvent(event.eventPostCode)"
        />
      </div>
    </template>
    <template v-else> 이벤트가 존재하지 않습니다. </template>

    <h3>신규 테마</h3>
    <div class="sub-title">새로운 방탈출 게임을 소개합니다.</div>
    <template v-if="newThemeEvents.length > 0">
      <div class="event-card-container">
        <ThemeCard
          v-for="(event, id) in newThemeEvents"
          :key="id"
          :theme="event"
          next-page="EVENT"
          @click="goDetailEvent(event.eventPostCode)"
        />
      </div>
    </template>
    <template v-else> 이벤트가 존재하지 않습니다. </template>
  </PageLayout>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import PageLayout from '@/components/layouts/PageLayout.vue';
import ThemeCard from '@/components/cards/ThemeCard.vue';
import router from '@/router/routes';
import { $api } from '@/services/api/api';

const goEventForm = () => {
  router.push(`/event/form/`);
};

const goDetailEvent = id => {
  router.push(`/event/detail/${id}`);
};

const events = ref([]);

const discountEvents = computed(() => {
  return events.value.find(category => category.category === 'discount')?.eventList || [];
});

const newThemeEvents = computed(() => {
  return events.value.find(category => category.category === 'newTheme')?.eventList || [];
});

const fetchEvents = async () => {
  const response = await $api.event.getEvents();
  events.value = response;
};

// watch(
//   async () => {
//     await fetchEvents();
//   },
//   { immediate: true },
// );

onMounted(fetchEvents);
</script>

<style scoped>
h3 {
  margin-top: 50px;
}
.sub-title {
  margin-top: 10px;
}
.event-card-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.event-card {
  cursor: pointer;
}
</style>
