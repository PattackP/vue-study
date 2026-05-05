<template>
  <footer class="footer">
    <span class="todo-count">
      合 计：<strong>{{ total }}</strong>
    </span>
    <button class="clear-completed" @click="handleClear">
      清空任务
    </button>
  </footer>
</template>

<script setup>
defineProps({
  total: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['clear'])

const handleClear = () => {
  emit('clear')
}
</script>