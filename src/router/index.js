import { createRouter, createWebHistory } from 'vue-router'
import HomeTodo from '@/components/Todo/HomeTodo.vue'
import DetailTodo from '@/components/Todo/DetailTodo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeTodo,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailTodo
    },
    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Todo/CreateTodo.vue'),
    },
  ],
})

export default router
