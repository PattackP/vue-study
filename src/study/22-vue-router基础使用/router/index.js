/**
 * Vue Router 5+2 步骤说明：
 *
 * 【步骤1】安装 vue-router（命令行：npm install vue-router）
 * 【步骤2】创建路由组件（创建 components/ 下的各个 .vue 文件）
 *
 * 【步骤3】创建路由配置文件
 * - 导入路由组件
 * - 定义 routes 路由规则数组
 */

// ========== 步骤3：创建路由配置文件 ==========

// 从 vue-router 包中导入创建路由的方法
import { createRouter, createWebHistory } from 'vue-router'

// 【步骤2】导入路由组件（这些是要在路由中展示的页面）
import Home from '../components/Home.vue'      // 首页组件
import About from '../components/About.vue'    // 关于组件
import News from '../components/News.vue'      // 新闻组件
import User from '../components/User.vue'      // 用户组件

/**
 * 【步骤3】定义路由规则数组
 * - 每个对象对应一个路由规则
 * - path: 路由路径（URL）
 * - name: 路由名称（用于编程式导航）
 * - component: 对应的路由组件
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    // 动态路由参数：:id 会捕获 URL 中的 id 值
    path: '/user/:id',
    name: 'User',
    component: User
  }
]

/**
 * 【步骤4】创建 router 实例并导出
 * - history: 路由模式（createWebHistory = HTML5 History API 模式）
 * - routes: 路由规则数组
 */
const router = createRouter({
  // 使用 history 模式，URL 美观（/home、/about），无 #
  // 替代方案：createWebHashHistory() 使用 hash 模式（/#/about），无需服务器配置
  history: createWebHistory(),
  // 路由规则数组
  routes
})

// 导出 router 实例供 main.js 使用
export default router

/**
 * 【步骤5】在 main.js 中注册路由
 * - app.use(router) 注册路由插件
 * - 注册后所有组件都能访问 this.$router 和 this.$route
 *
 * 【扩展1】配置路由链接
 * - <router-link to="/path"> 显示为可点击链接
 * - <router-view> 显示路由对应的组件
 *
 * 【扩展2】路由跳转
 * - 声明式：<router-link to="/about">
 * - 编程式：this.$router.push('/about')
 */
