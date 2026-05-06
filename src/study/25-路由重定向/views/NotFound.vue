<template>
  <div class="not-found">
    <h1>404 - 页面未找到</h1>
    <p>抱歉，您访问的页面不存在</p>
    <router-link to="/home3">返回首页</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 100px 20px;
}

.not-found h1 {
  font-size: 48px;
  color: #ad2a26;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.not-found a {
  display: inline-block;
  padding: 10px 30px;
  background-color: #ad2a26;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
</style>