import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    const userCode = ref(0);
    const nickname = ref('');
    const accessToken = ref('');
    const isAdmin = ref(false);

    function login() {
      userCode.value = 1;
      nickname.value = '프로방탈출러';
      accessToken.value = 'fakeaccesstoken';
      isAdmin.value = false;
    }

    function loginByAdmin() {
      userCode.value = 10;
      nickname.value = '나는관리자야';
      accessToken.value = 'fakeadminaccesstoken';
      isAdmin.value = true;
    }

    function logout() {
      userCode.value = 0;
      nickname.value = '';
      accessToken.value = '';
      isAdmin.value = false;
    }

    return { userCode, nickname, isAdmin, login, loginByAdmin, logout };
  },
  {
    persist: true,
  },
);
