<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input v-model="searchKey" type="text" placeholder="输入搜索关键词">
      <button @click="handleSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <router-link to="/query/search?key=黑马程序员">黑马程序员</router-link>
      <router-link to="/query/search?key=前端培训">前端培训</router-link>
      <router-link to="/query/search?key=如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchKey = ref('')

const handleSearch = () => {
  if (searchKey.value.trim()) {
    router.push(`/search?key=${encodeURIComponent(searchKey.value)}`)
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.logo-box {
  height: 150px;
  background: url('https://www.itcast.cn/images/logo.png') no-repeat center;
  background-size: contain;
}

.search-box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  margin: 20px auto 0;
  color: #666;
}

.hot-link a {
  margin: 0 5px;
  color: #3498db;
  text-decoration: none;
}

.hot-link a:hover {
  text-decoration: underline;
}
</style>