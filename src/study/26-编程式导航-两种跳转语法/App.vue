<template>
  <div id="app">
    <div class="link">
      <router-link to="/home4">首页</router-link>
      <router-link to="/search4">搜索页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
#app {
  padding: 8px;
}
.link {
  height: 50px;
  line-height: 50px;
  background-color: #495150;
  display: flex;
  margin-bottom: 50px;
  padding: 0 8px;
}
.link a {
  display: block;
  text-decoration: none;
  background-color: #ad2a26;
  width: 100px;
  text-align: center;
  margin-right: 5px;
  color: #fff;
  border-radius: 5px;
}
.link a:hover {
  background-color: #8b2222;
}
.link a.router-link-active {
  background-color: #3498db;
}
</style>