<template>
  <div class="todo-app">
    <TodoHeader @add="handleAdd" />
    <TodoMain :todoList="todoList" @delete="handleDelete" />
    <TodoFooter v-if="total > 0" :total="total" @clear="handleClear" />
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="todo-app">
    <TodoHeader @add="handleAdd" />
    <TodoMain :todoList="todoList" @delete="handleDelete" />
    <TodoFooter v-if="total > 0" :total="total" @clear="handleClear" />
  </div>
</template>

<script>
import TodoHeader from './todoHeader.vue'
import TodoMain from './todoMain.vue'
import TodoFooter from './toduFooter.vue'
export default {
  components: { TodoHeader, TodoMain, TodoFooter },
  data() {
    return {
      todoList: [
        { id: 1, name: '学习 vue' },
        { id: 2, name: '学习 js' },
        { id: 3, name: '学习 css' }
      ]
    }
  },
  computed: {
    total() {
      return this.todoList.length
    }
  },
  methods: {
    handleAdd(name) {
      this.todoList.unshift({ id: Date.now(), name })
    },
    handleDelete(id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    handleClear() {
      this.todoList = []
    }
  },
  watch: {
    todoList: {
      handler(newList) {
        localStorage.setItem('todo-list', JSON.stringify(newList))
      },
      deep: true
    }
  },
  mounted() {
    const data = localStorage.getItem('todo-list')
    if (data) this.todoList = JSON.parse(data)
  }
}
</script>
-->

<script setup>
import TodoHeader from './todoHeader.vue'
import TodoMain from './todoMain.vue'
import TodoFooter from './toduFooter.vue'
import './index.css'
import { ref, computed, watch, onMounted } from 'vue'

const STORAGE_KEY = 'todo-list'

const defaultTodoList = [
  { id: 1, name: '学习 vue' },
  { id: 2, name: '学习 js' },
  { id: 3, name: '学习 css' }
]

// 从 localStorage 读取数据
const getTodoList = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : defaultTodoList
}

// 保存数据到 localStorage
const saveTodoList = (list) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

// 初始化数据
const todoList = ref(getTodoList())

// 计算总数
const total = computed(() => todoList.value.length)

// 添加任务
const handleAdd = (name) => {
  const newTodo = {
    id: Date.now(),
    name
  }
  todoList.value.unshift(newTodo)
}

// 删除任务
const handleDelete = (id) => {
  todoList.value = todoList.value.filter(item => item.id !== id)
}

// 清空所有任务
const handleClear = () => {
  todoList.value = []
}

// 监听数据变化，自动保存到 localStorage
watch(
  todoList,
  (newList) => {
    saveTodoList(newList)
  },
  { deep: true }
)

// 页面加载时也可以手动读取一次（确保数据最新）
onMounted(() => {
  todoList.value = getTodoList()
})
</script>