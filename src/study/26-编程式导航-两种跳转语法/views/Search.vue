<template>
  <div class="search">
    <h3>搜索结果页</h3>
    <p>【params 参数】搜索关键字: {{ route.params.words || '无' }}</p>
    <p>【query 参数】搜索关键字: {{ route.query.keyword || '无' }}</p>
    <p>搜索结果: </p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log('params:', route.params.words)
console.log('query:', route.query.keyword)
</script>

<style scoped>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
  background-color: #fff;
}
.search p:first-child {
  font-size: 18px;
  color: #ad2a26;
  font-weight: bold;
}
.search ul {
  list-style: none;
  padding: 0;
}
.search li {
  padding: 5px 0;
  border-bottom: 1px dashed #eee;
}
</style>