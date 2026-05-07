<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <p>抱歉，您访问的页面不存在</p>
    <router-link to="/home">返回首页</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px 20px;
}
.not-found h1 {
  color: #ad2a26;
  font-size: 72px;
  margin-bottom: 20px;
}
.not-found p {
  color: #666;
  margin-bottom: 30px;
}
.not-found a {
  text-decoration: none;
  padding: 10px 20px;
  background-color: #ad2a26;
  color: #fff;
  border-radius: 4px;
}
.not-found a:hover {
  background-color: #8b2222;
}
</style>