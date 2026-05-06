<template>
  <div class="search">
    <p>搜索关键字: {{ searchKey }}</p>
    <p>搜索结果:</p>
    <ul>
      <li v-for="(item, index) in searchResults" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const searchKey = ref('')

const searchResults = computed(() => {
  if (!searchKey.value) {
    return ['请输入搜索关键词']
  }
  return [
    `${searchKey.value} - 结果1`,
    `${searchKey.value} - 结果2`,
    `${searchKey.value} - 结果3`,
    `${searchKey.value} - 结果4`
  ]
})

onMounted(() => {
  searchKey.value = route.params.words || ''
})
</script>

<style scoped>
.search {
  width: 400px;
  height: 240px;
  padding: 20px;
  margin: 20px auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}

.search p {
  margin: 10px 0;
  color: #333;
}

.search ul {
  padding-left: 20px;
}

.search li {
  margin: 8px 0;
  color: #666;
}
</style>