import { createRouter, createWebHistory } from 'vue-router'
import HomeTodo from '@/components/Todo/HomeTodo.vue'
import DetailTodo from '@/components/Todo/DetailTodo.vue'
import CreateTodo from '@/components/Todo/CreateTodo.vue'

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
      component: CreateTodo
    },
    {
      path: '/update/:id',
      name : 'update',
      component: CreateTodo
    },
  ],
})

export default router
