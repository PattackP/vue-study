<template>
  <div v-if="visible" class="dialog-overlay">
    <div class="dialog">
      <div class="dialog-header">
        <h3>{{ title }}</h3>
        <button @click="close">×</button>
      </div>
      <div class="dialog-body">
        <p>{{ content }}</p>
      </div>
      <div class="dialog-footer">
        <button @click="close">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
  title: String,
  content: String
})

const emit = defineEmits(['update:visible'])

const close = () => {
  emit('update:visible', false)
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog {
  background: #2c3e50;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dialog-header h3 {
  margin: 0;
  color: #ffd700;
  font-size: 18px;
}

.dialog-header button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.dialog-header button:hover {
  color: #ffd700;
}

.dialog-body {
  padding: 20px;
  color: white;
}

.dialog-body p {
  margin: 0;
  line-height: 1.6;
}

.dialog-footer {
  padding: 15px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: right;
}

.dialog-footer button {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  background: #ffd700;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.dialog-footer button:hover {
  background: #ffaa00;
}
</style>