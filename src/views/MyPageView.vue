<template>
  <PageLayout title="마이페이지">
    <div v-if="userInfo">
      <div class="card flex justify-center">
        <Image :src="userInfo.image" alt="Image" width="250" preview />
      </div>
      {{ userInfo }}
    </div>
    <div v-else>
      <PageLoadingLayout />
    </div>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import PageLoadingLayout from '@/components/layouts/PageLoadingLayout.vue';
import Image from 'primevue/image';
import { $api } from '@/services/api/api';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';

const baseServerUrl = `${import.meta.env.VITE_SERVER_URL}`;

const userStore = useUserStore();
const userInfo = ref('');

onMounted(async () => {
  const token = userStore.accessToken;
  console.log('token: ', token);

  if (token) {
    try {
      // API 요청을 기다리고 결과를 userInfo에 저장
      userInfo.value = await $api.user.get('info');
      console.log('userInfo.value: ', userInfo.value);
      userInfo.value.image = baseServerUrl + userInfo.value.image;
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  } else {
    console.log('User is not authenticated.');
  }
});
</script>

<style scoped></style>
