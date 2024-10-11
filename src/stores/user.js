import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const userCode = ref(0);
    const nickname = ref("");
    const accessToken = ref("");
    const isAdmin = ref(false);
    
    function login() {
        userCode.value = 1;
        nickname.value = "프로방탈출러";
        accessToken.value = "fakeaccesstoken";
    }

    return { userCode, nickname, isAdmin, login }
});