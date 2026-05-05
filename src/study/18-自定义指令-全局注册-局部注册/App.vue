<template>
  <div class="directive-demo">
    <h2>Vue 3 自定义指令</h2>

    <div class="section">
      <h3>一、全局注册指令（main.js）</h3>
      <p>在 main.js 中注册，整个应用都能用</p>

      <div class="code-box">
        <code>// main.js</code>
        <code>app.directive('global-color', &#123;</code>
        <code>  beforeMount(el, binding) &#123;</code>
        <code>    el.style.backgroundColor = binding.value</code>
        <code>  &#125;</code>
        <code>&#125;)</code>
      </div>

      <div class="demo">
        <p>使用：v-global-color="'red'"</p>
        <div v-global-color="'lightblue'" class="box">全局指令 - 蓝色</div>
        <div v-global-color="'lightgreen'" class="box">全局指令 - 绿色</div>
        <div v-global-bounce class="box bounce-box">点击我弹跳</div>
      </div>
    </div>

    <div class="section">
      <h3>二、局部注册指令（组件内）</h3>
      <p>在 script setup 中定义，只在当前组件使用</p>

      <div class="code-box">
        <code>// script setup</code>
        <code>const vFocus = &#123;</code>
        <code>  beforeMount(el) &#123; el.focus() &#125;</code>
        <code>&#125;</code>
        <code>defineExpose(&#123; vFocus &#125;)</code>
      </div>

      <div class="demo">
        <p>使用：v-focus</p>
        <input v-focus type="text" placeholder="自动聚焦">
        <div v-local-color="'pink'" class="box">局部指令 - 粉色</div>
      </div>
    </div>

    <div class="section">
      <h3>三、全局 vs 局部 对比</h3>

      <div class="compare-table">
        <div class="compare-row header">
          <span>特性</span>
          <span>全局注册</span>
          <span>局部注册</span>
        </div>
        <div class="compare-row">
          <span>注册位置</span>
          <span>main.js</span>
          <span>组件内部</span>
        </div>
        <div class="compare-row">
          <span>作用范围</span>
          <span>整个应用</span>
          <span>当前组件</span>
        </div>
        <div class="compare-row">
          <span>语法</span>
          <span>app.directive('name', {...})</span>
          <span>const vName = {...}</span>
        </div>
        <div class="compare-row">
          <span>使用方式</span>
          <span>v-name</span>
          <span>v-name（自动转换）</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 局部指令 - 只在当前组件可用
const vFocus = {
  mounted(el) {
    el.focus()
  }
}

const vLocalColor = {
  beforeMount(el, binding) {
    el.style.backgroundColor = binding.value
  }
}

defineExpose({
  vFocus,
  vLocalColor
})
</script>

<style scoped>
.directive-demo {
  padding: 20px;
  color: white;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.section {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

h3 {
  margin: 0 0 10px;
  color: #ffd700;
}

.section > p {
  margin: 0 0 15px;
  opacity: 0.8;
}

.code-box {
  background: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.code-box code {
  display: block;
  font-size: 13px;
  color: #67c23a;
  font-family: monospace;
  margin-bottom: 5px;
}

.demo {
  margin-top: 15px;
}

.demo p {
  margin: 0 0 10px;
  font-size: 14px;
}

.box {
  padding: 15px 25px;
  border-radius: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
}

.bounce-box {
  cursor: pointer;
  transition: transform 0.3s;
}

input {
  padding: 12px 15px;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  outline: none;
  margin-right: 10px;
}

input:focus {
  border-color: #409EFF;
}

.compare-table {
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 8px;
}

.compare-row {
  display: flex;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.compare-row:last-child {
  border-bottom: none;
}

.compare-row.header {
  font-weight: bold;
}

.compare-row span {
  min-width: 140px;
  font-size: 14px;
}

.compare-row.header span {
  color: #ffd700;
}
</style>