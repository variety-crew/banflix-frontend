import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/rank',
      component: () => import('@/views/RankMainView.vue'),
    },
    {
      path: '/theme',
      component: () => import('@/views/ThemeMainView.vue'),
    },
    {
      path: '/community',
      component: () => import('@/views/CommunityMainView.vue'),
    },
    {
      path: '/event',
      component: () => import('@/views/EventMainView.vue'),
    },
    {
      path: '/notice',
      component: () => import('@/views/NoticeMainView.vue'),
    },
    {
      path: '/notice/form/:noticeId?',
      component: () => import('@/views/notice/NoticeFormView.vue'),
    },
    {
      path: '/admin',
      component: () => import('@/views/AdminMainView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/admin/MemberListView.vue'),
        },
        {
          path: 'stores',
          component: () => import('@/views/admin/StoreListView.vue'),
        },
        {
          path: 'themes',
          component: () => import('@/views/admin/ThemeListView.vue'),
        },
        {
          path: 'genres',
          component: () => import('@/views/admin/GenreListView.vue'),
        },
        {
          path: 'reports',
          component: () => import('@/views/admin/ReportListView.vue'),
        },
      ],
    },
    {
      path: '/mypage',
      component: () => import('@/views/MyPageView.vue'),
    },
    {
      path: '/dm',
      component: () => import('@/views/DMMainView.vue'),
    },
    {
      path: '/notification',
      component: () => import('@/views/NotificationMainView.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginMainView.vue'),
    },
    {
      path: '/register',
      component: () => import('@/views/RegisterMainView.vue'),
    },
  ],
});

export default router;
