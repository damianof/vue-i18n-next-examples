import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/datetime',
    name: 'Datetime',
    component: () =>
      import(/* webpackChunkName: "datetime" */ '../views/Datetime.vue')
  },
  {
    path: '/numbers',
    name: 'Numbers',
    component: () =>
      import(/* webpackChunkName: "numbers" */ '../views/Numbers.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
