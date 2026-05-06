<template>
  <div id="app">
    <div class="link">
      <router-link to="/query/home">首页</router-link>
      <router-link to="/query/search?key=测试">搜索页</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  if (!router.currentRoute.value.path.startsWith('/query')) {
    router.push('/query/home')
  }
})
</script>

<style scoped>
.link {
  height: 50px;
  line-height: 50px;
  background-color: #495150;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin: -20px -20px 20px;
}

.link a {
  display: block;
  text-decoration: none;
  background-color: #ad2a26;
  width: 120px;
  text-align: center;
  margin: 0 5px;
  color: #fff;
  border-radius: 5px;
}

.link a.router-link-active {
  background-color: #f1c40f;
}
</style>