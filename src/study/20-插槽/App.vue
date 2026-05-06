<template>
  <div class="slot-demo">
    <h2>Vue 3 插槽</h2>

    <div class="section">
      <h3>一、默认插槽</h3>
      <p>最基本的插槽，没有指定名称的插槽内容会落入默认插槽</p>

      <div class="code-box">
        <code>// 父组件</code>
        <code>&lt;Child&gt;这是默认插槽的内容&lt;/Child&gt;</code>
        <code></code>
        <code>// 子组件 Child.vue</code>
        <code>&lt;slot&gt;备用内容&lt;/slot&gt;</code>
      </div>

      <div class="demo">
        <Child>
          <p>父组件传入的默认插槽内容</p>
        </Child>
      </div>
    </div>

    <div class="section">
      <h3>二、具名插槽</h3>
      <p>使用 v-slot 指令或 # 简写指定插槽名称</p>

      <div class="code-box">
        <code>// 父组件</code>
        <code>&lt;Child&gt;</code>
        <code>  &lt;template v-slot:header&gt;</code>
        <code>    &lt;h3&gt;这是 header 插槽&lt;/h3&gt;</code>
        <code>  &lt;/template&gt;</code>
        <code>  &lt;template #footer&gt;</code>
        <code>    &lt;p&gt;这是 footer 插槽（简写）&lt;/p&gt;</code>
        <code>  &lt;/template&gt;</code>
        <code>&lt;/Child&gt;</code>
        <code></code>
        <code>// 子组件</code>
        <code>&lt;slot name="header"&gt;&lt;/slot&gt;</code>
        <code>&lt;slot name="footer"&gt;&lt;/slot&gt;</code>
      </div>

      <div class="demo">
        <NamedSlot>
          <template #header>
            <h3 class="demo-header">具名插槽 - 头部</h3>
          </template>
          <template #footer>
            <p class="demo-footer">具名插槽 - 底部</p>
          </template>
        </NamedSlot>
      </div>
    </div>

    <div class="section">
      <h3>三、作用域插槽</h3>
      <p>子组件数据传递给父组件，父组件决定如何渲染</p>

      <div class="code-box">
        <code>// 父组件 - 接收子组件传来的数据</code>
        <code>&lt;Child v-slot="&#123; item &#125;"&gt;</code>
        <code>  &lt;p&gt;&#123;&#123; item &#125;&#125;&lt;/p&gt;</code>
        <code>&lt;/Child&gt;</code>
        <code></code>
        <code>// 子组件 - 传递数据</code>
        <code>&lt;slot :item="data"&gt;&lt;/slot&gt;</code>
      </div>

      <div class="demo">
        <ScopeSlot>
          <template #default="{ item, index }">
            <div class="scope-item">
              <span class="index">{{ index + 1 }}</span>
              <span class="name">{{ item.name }}</span>
              <span class="age">{{ item.age }}岁</span>
            </div>
          </template>
        </ScopeSlot>
      </div>
    </div>

    <div class="section">
      <h3>四、Vue 2 vs Vue 3 插槽对比</h3>

      <div class="compare-table">
        <div class="compare-row header">
          <span>特性</span>
          <span>Vue 2</span>
          <span>Vue 3</span>
        </div>
        <div class="compare-row">
          <span>默认插槽</span>
          <span>&lt;slot&gt;&lt;/slot&gt;</span>
          <span>&lt;slot&gt;&lt;/slot&gt;</span>
        </div>
        <div class="compare-row">
          <span>具名插槽</span>
          <span>&lt;slot name="header"&gt;</span>
          <span>&lt;slot name="header"&gt;</span>
        </div>
        <div class="compare-row">
          <span>插槽内容</span>
          <span>&lt;template slot="header"&gt;</span>
          <span>&lt;template v-slot:header&gt;</span>
        </div>
        <div class="compare-row">
          <span>简写</span>
          <span>无</span>
          <span>#header</span>
        </div>
        <div class="compare-row">
          <span>作用域插槽</span>
          <span>slot-scope</span>
          <span>v-slot="&#123;&#123; data &#125;&#125;"</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Child from './DefaultSlot.vue'
import NamedSlot from './NamedSlot.vue'
import ScopeSlot from './ScopeSlot.vue'

defineExpose({
  Child,
  NamedSlot,
  ScopeSlot
})
</script>

<style scoped>
.slot-demo {
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
  font-size: 12px;
  color: #67c23a;
  font-family: monospace;
  margin-bottom: 4px;
}

.demo {
  margin-top: 15px;
}

.demo-header {
  margin: 0;
  padding: 10px;
  background: #409EFF;
  border-radius: 8px 8px 0 0;
}

.demo-footer {
  margin: 0;
  padding: 10px;
  background: #67c23a;
  border-radius: 0 0 8px 8px;
}

.scope-item {
  display: flex;
  gap: 15px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 8px;
}

.scope-item .index {
  background: #409EFF;
  padding: 2px 10px;
  border-radius: 4px;
}

.scope-item .name {
  flex: 1;
}

.scope-item .age {
  color: #ffd700;
}

.compare-table {
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 8px;
}

.compare-row {
  display: flex;
  gap: 15px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 13px;
}

.compare-row:last-child {
  border-bottom: none;
}

.compare-row.header {
  font-weight: bold;
}

.compare-row span {
  flex: 1;
  min-width: 120px;
}

.compare-row.header span {
  color: #ffd700;
}
</style>