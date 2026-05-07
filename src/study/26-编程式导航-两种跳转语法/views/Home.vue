<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input type="text" v-model="keyword" placeholder="输入搜索关键字" />
      <button @click="goSearchByParams">params 方式搜索</button>
      <button @click="goSearchByQuery">query 方式搜索</button>
    </div>
    <div class="hot-link">
      热门搜索（params 方式）：
      <router-link to="/search4/黑马程序员">黑马程序员</router-link>
      <router-link to="/search4/前端培训">前端培训</router-link>
      <router-link to="/search4/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
    <div class="hot-link">
      热门搜索（query 方式）：
      <router-link to="/search4?keyword=黑马程序员">黑马程序员</router-link>
      <router-link to="/search4?keyword=前端培训">前端培训</router-link>
      <router-link to="/search4?keyword=如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const keyword = ref('')

// params 方式：通过动态路由参数传参
const goSearchByParams = () => {
  // 方式1：通过路径跳转（简写）
  // router.push('/search4/' + (keyword.value || '前端培训'))

  // 方式2：通过路径跳转（完整写法）
  // router.push({
  //   path: '/search4/' + (keyword.value || '前端培训')
  // })

  // 方式3：通过命名路由跳转（需要给路由起名字），适合长路径
  router.push({
    name: 'search',
    params: {
      words: keyword.value || '前端培训'
    }
  })
}

// query 方式：通过查询参数传参
const goSearchByQuery = () => {
  // 方式1：通过路径跳转（简写）
  // router.push('/search4?keyword=' + (keyword.value || '前端培训'))

  // 方式2：通过路径跳转（完整写法），推荐使用
  router.push({
    path: '/search4',
    query: {
      keyword: keyword.value || '前端培训'
    }
  })

  // 方式3：通过命名路由 + query（需要路由支持）
  // router.push({
  //   name: 'search',
  //   query: {
  //     keyword: keyword.value || '前端培训'
  //   }
  // })
}
</script>

<style scoped>
.logo-box {
  height: 150px;
  background: url('@/assets/images/logo.png') no-repeat center;
  background-size: auto 100%;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
  padding: 0 10px;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
  color: #ad2a26;
  text-decoration: none;
}
.hot-link a:hover {
  text-decoration: underline;
}
</style>