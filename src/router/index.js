import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VuexCounter from '../components/VuexCounter.vue'
import VuexEmployees from '../components/VuexEmployees.vue'
import VuexUserList from '../components/VuexUserList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'VuexCounter',
    component: VuexCounter
  },
  {
    path: '/employees',
    name: 'VuexEmployees',
    component: VuexEmployees
  },
  {
    path: '/users',
    name: 'VuexUserList',
    component: VuexUserList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
