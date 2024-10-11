<template>
    <header>
        <nav class="menu-bar">
            <div class="main-menu">
                <div class="logo">
                    <img src="../assets/logo/bangflix_logo.svg">
                </div>
                <RouterLink to="/">
                    <button class="menu">홈</button>
                </RouterLink>
                <RouterLink to="/rank">
                    <button class="menu">랭킹</button>
                </RouterLink>
                <RouterLink to="/theme">
                    <button class="menu">방탈출 테마</button>
                </RouterLink>
                <RouterLink to="/community">
                    <button class="menu">커뮤니티</button>
                </RouterLink>
                <RouterLink to="/event">
                    <button class="menu">이벤트</button>
                </RouterLink>
                    <RouterLink to="/notice">
                        <button class="menu">공지사항</button>
                    </RouterLink>
                <RouterLink to="/admin">
                    <button class="admin-menu">관리자 전용</button>
                </RouterLink>
            </div>
            <div class="login-menu">
                <div class="welcome">{{ useUserStore.nickname }} 님, 안녕하세요!</div>
                <RouterLink to="/mypage">
                    <button class="mypage"><img src="../assets/header/mypage_button.svg"></button>
                </RouterLink>
                <RouterLink to="/dm">
                    <button class="pi pi-envelope"></button>
                </RouterLink>
                <RouterLink to="/notification">
                    <button class="pi pi-bell"></button>
                </RouterLink>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';

import 'primeicons/primeicons.css'


</script>

<style scoped>
    .menu-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .main-menu {
        display: flex;
        flex-direction: row;
        width: 640px;
        height: 50px;
        justify-content: space-between;
    }

    .logo {
        width: 49px;
        height: 49px;
        padding-right: 10px;
    }

    .menu {
        align-items: center;
        margin: 5px auto;
        height: 32px;
        border: none;
        background: #FFFFFF;
        color: #1E1E1E;

        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        cursor: pointer;
    }

    .admin-menu {
        align-items: center;
        margin: 4px auto;
        height: 32px;

        background: #E5FFD6;
        border-radius: 8px;
        border: none;

        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        cursor: pointer;
    }

    .login-menu {
        display: flex;
        flex-direction: row;
        width: 351px;
        height: 50px;
        justify-content: space-between;
    }

    .welcome {

    }

    .mypage {
        border: none;
        background: #FFFFFF;
    }

    .pi-envelope {
        border: none;
        background: #FFFFFF;
    }

    .pi-bell {
        border: none;
        background: #FFFFFF;
    }
</style>