<template>
  <div>
    <Button label="일반 유저 로그인" @click="login()" />
    <Button label="관리자 로그인" severity="secondary" @click="loginByAdmin()" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const goHome = () => {
  router.replace('/');
};

const login = () => {
  userStore.login();
  goHome();
};

const loginByAdmin = () => {
  userStore.loginByAdmin();
  goHome();
};
</script>

<style scoped></style>
