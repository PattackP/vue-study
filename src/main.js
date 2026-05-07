import { createApp } from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/common.css'
import './assets/iconfont/iconfont.css'

import BaseGoodsItem from './components/BaseGoodsItem.vue'
import BaseBrandItem from './components/BaseBrandItem.vue'
import Button from './components/Button.vue'

import { createRouter, createWebHistory } from 'vue-router'
/*
Vue 2 写法：
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue 3 写法：
import { createRouter, createWebHistory } from 'vue-router'
*/
import Home from './study/22-vue-router基础使用/components/Home.vue'
import About from './study/22-vue-router基础使用/components/About.vue'
import News from './study/22-vue-router基础使用/components/News.vue'
import User from './study/22-vue-router基础使用/components/User.vue'
import QueryHome from './study/23-导航链接传参1-查询参数传参/views/Home.vue'
import QuerySearch from './study/23-导航链接传参1-查询参数传参/views/Search.vue'
import DynamicHome from './study/24-导航链接传参2-动态路由传参/views/Home.vue'
import DynamicSearch from './study/24-导航链接传参2-动态路由传参/views/Search.vue'
import RedirectHome from './study/25-路由重定向/views/Home.vue'
import RedirectSearch from './study/25-路由重定向/views/Search.vue'
import ProgrammaticHome from './study/26-编程式导航-两种跳转语法/views/Home.vue'
import ProgrammaticSearch from './study/26-编程式导航-两种跳转语法/views/Search.vue'
import NotFound from './study/25-路由重定向/views/NotFound.vue'
import Layout from './study/27-面经基础版本/views/Layout.vue'
import Article from './study/27-面经基础版本/views/Article.vue'
import Collect from './study/27-面经基础版本/views/Collect.vue'
import Like from './study/27-面经基础版本/views/Like.vue'
import MianjingUser from './study/27-面经基础版本/views/User.vue'
import ArticleDetail from './study/27-面经基础版本/views/ArticleDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /*
    Vue 2 写法：
    const router = new VueRouter({
      mode: 'history',
      routes: [
        ...
        { path: '*', component: NotFound }
      ]
    })

    Vue 3 写法：
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        ...
        { path: '/:pathMatch(.*)*', component: NotFound }
      ]
    })
    */
    { path: '/', redirect: '/article' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/user/:id', component: User },
    { path: '/query/home', component: QueryHome },
    { path: '/query/search', component: QuerySearch },
    { path: '/home2', component: DynamicHome },
    { path: '/search2/:words', component: DynamicSearch },
    { path: '/home3', component: RedirectHome },
    { path: '/search3/:words?', component: RedirectSearch },
    { path: '/home4', component: ProgrammaticHome },
    { path: '/search4/:words?', component: ProgrammaticSearch, name: 'search' },

    // 面经项目 - 一级路由（根路径）
    {
      path: '/',
      component: Layout,
      children: [
        { path: 'article', component: Article },
        { path: 'collect', component: Collect },
        { path: 'like', component: Like },
        { path: 'user', component: MianjingUser }
      ]
    },
    { path: '/detail/:id', component: ArticleDetail },

    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

const app = createApp(App)

app.component('BaseGoodsItem', BaseGoodsItem)
app.component('BaseBrandItem', BaseBrandItem)
app.component('AppButton', Button)

app.use(router)

app.directive('global-color', {
  beforeMount(el, binding) {
    el.style.backgroundColor = binding.value
  },
  updated(el, binding) {
    el.style.backgroundColor = binding.value
  }
})

app.directive('global-bounce', {
  mounted(el) {
    el.style.transition = 'transform 0.3s'
    el.addEventListener('click', () => {
      el.style.transform = 'scale(1.1)'
      setTimeout(() => {
        el.style.transform = 'scale(1)'
      }, 300)
    })
  }
})

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.mount('#app')