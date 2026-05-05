<template>
  <section class="main">
    <ul class="todo-list">
      <li 
        v-for="(item, index) in todoList" 
        :key="item.id" 
        class="todo"
      >
        <div class="view">
          <span class="index">{{ index + 1 }}.</span>
          <label :class="{ done: item.done }">{{ item.name }}</label>
          <button class="destroy" @click="handleDelete(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  todoList: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['delete'])

const handleDelete = (id) => {
  emit('delete', id)
}
</script>