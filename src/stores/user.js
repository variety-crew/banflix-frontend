import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    const userCode = ref(0);
    const nickname = ref('');
    const accessToken = ref('');
    const isAdmin = ref(false);
    const isLoggined = ref(false);

    function login() {
      userCode.value = 1;
      nickname.value = '프로방탈출러';
      accessToken.value = 'fakeaccesstoken';
      isAdmin.value = false;
      isLoggined.value = true;
    }

    function loginByAdmin() {
      userCode.value = 10;
      nickname.value = '나는관리자야';
      accessToken.value = 'fakeadminaccesstoken';
      isAdmin.value = true;
      isLoggined.value = true;
    }

    function logout() {
      userCode.value = 0;
      nickname.value = '';
      accessToken.value = '';
      isAdmin.value = false;
      isLoggined.value = false;
    }

    return { userCode, nickname, accessToken, isAdmin, isLoggined, login, loginByAdmin, logout };
  },
  {
    persist: true,
  },
);
