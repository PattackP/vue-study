<template>
  <div class="news">
    <h2>新闻列表</h2>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newsList = ref([
  { id: 1, title: 'Vue 3.3 正式发布' },
  { id: 2, title: 'Vue Router 4.x 新特性' },
  { id: 3, title: 'Pinia 状态管理库介绍' }
])
</script>

<style scoped>
.news {
  padding: 20px;
}
.news h2 {
  color: #f39c12;
  margin-bottom: 15px;
}
.news ul {
  list-style: none;
  padding: 0;
}
.news li {
  padding: 10px;
  margin: 5px 0;
  background-color: #ecf0f1;
  border-radius: 4px;
  cursor: pointer;
}
.news li:hover {
  background-color: #d5dbdb;
}
</style>
