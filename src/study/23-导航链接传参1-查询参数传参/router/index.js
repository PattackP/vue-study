import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/query/home', component: Home },
    { path: '/query/search', component: Search }
  ]
})

export default router