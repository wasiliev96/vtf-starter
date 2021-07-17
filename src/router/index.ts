import { createWebHistory, createRouter } from 'vue-router'
import Home                               from '@/views/Home.vue'
import About                              from '@/views/About.vue'
import DefaultTemplate                    from '@/layout/default.vue'
import Login                              from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: DefaultTemplate },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: DefaultTemplate },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { layout: DefaultTemplate },
  },
]

const router = createRouter( {
  history: createWebHistory(),
  routes,
} )

export default router
