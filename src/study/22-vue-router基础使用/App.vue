<template>
  <div id="app">
    <h1>Vue Router 基础示例</h1>

    <!-- 【扩展1】配置路由链接 - 声明式导航 -->
    <nav class="navigation">
      <!-- router-link 会渲染为 <a> 标签，to 属性指定路由路径 -->
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我们</router-link>
      <router-link to="/news">新闻</router-link>
      <!-- 动态路由参数示例 -->
      <router-link to="/user/1">用户1</router-link>
      <router-link to="/user/2">用户2</router-link>
    </nav>

    <!-- 【步骤5】配置路由视图 - 显示路由对应的组件 -->
    <!-- router-view 是一个"占位符"，路由匹配到的组件会渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
/**
 * 扩展1：路由链接
 * - 使用 <router-link> 创建导航链接
 * - 点击链接会触发路由切换，但不刷新页面
 * - router-link-active 类名会在当前路由匹配时自动添加
 *
 * 扩展2：路由跳转（编程式导航）
 * - 在组件中可以使用 this.$router.push() 跳转到指定路由
 * - 或者使用 useRouter() 组合式 API
 *
 * 示例：
 * import { useRouter } from 'vue-router'
 * const router = useRouter()
 * router.push('/about')  // 跳转到关于页
 */
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

.navigation {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.navigation a {
  text-decoration: none;
  color: #3498db;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.3s;
}

.navigation a:hover {
  background-color: #3498db;
  color: white;
}

/* 路由激活状态样式 - 当前路由匹配时自动添加 */
.navigation a.router-link-active {
  background-color: #2ecc71;
  color: white;
}
</style>
