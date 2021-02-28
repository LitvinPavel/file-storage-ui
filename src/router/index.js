import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/containers/fs-layout'),
    children: [
      {
        path: '',
        name: 'homePage',
        component: () => import('@/views/home/fs-home-page'),
        meta: {
          label: 'Главная'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
