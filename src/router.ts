import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/home',
    name: 'HomePage',
    component: () => import('./home.vue'),
    meta: {
      keepAlive: true,
    },
  }],
  scrollBehavior(to) {

    return { top: 0 }
  },
})

export default router
