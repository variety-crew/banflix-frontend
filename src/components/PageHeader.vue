<template>
    <header>
        <nav>
            <RouterLink to="/">홈</RouterLink>
            <RouterLink to="/admin">관리자 전용</RouterLink>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';
</script>

<style scoped>

</style>