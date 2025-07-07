import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/posts'
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users.vue'),
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/Albums.vue'),
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../views/Comments.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts.vue'),
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/Todos.vue'),
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/Photos.vue'),
    },
  ],
})

export default router
