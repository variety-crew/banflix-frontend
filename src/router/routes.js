import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("@/views/HomeView.vue") },
        { path: "/admin", component: () => import("@/views/AdminView.vue") }
    ]
});

export default router;