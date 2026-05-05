<template>
  <button class="global-button">
    <slot>按钮</slot>
  </button>
</template>

<style scoped>
.global-button {
  padding: 10px 20px;
  background-color: #9b59b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.global-button:hover {
  background-color: #8e44ad;
}
</style>