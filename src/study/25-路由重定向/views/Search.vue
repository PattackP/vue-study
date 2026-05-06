<template>
  <div class="search">
    <p>搜索关键字: {{ route.params.words || '暂无' }}</p>
    <p>搜索结果:</p>
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

// Vue 2 写法对比：
// export default {
//   created() {
//     console.log(this.$route.params.words)
//   }
// }
</script>

<style scoped>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>