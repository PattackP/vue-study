<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
  // ============================================
  // Props 类型检查的完整配置
  // ============================================

  // 【基础写法】- 仅类型检查
  // w: Number

  // 【完整写法】- 类型、必填、默认值、验证 ✅
  w: {
    type: Number,           // 类型检查：必须是数字类型
    required: true,        // 必填检查：不传会报错
    default: 0,             // 默认值：没传时使用
    
    // 自定义验证器
    validator(val) {
      // val 是传入的值
      // console.log('验证值：', val)
      
      if (val >= 100 || val <= 0) {
        // 返回 false 表示验证失败，会在控制台报警告
        console.error('❌ 传入的范围必须是 0-100 之间，当前值：', val)
        return false
      }
      
      console.log('✅ 验证通过：', val)
      return true
    }
  }
})

// ============================================
// Props 类型检查总结
// ============================================
// type: String, Number, Boolean, Array, Object, Function, Date, Symbol
// required: true/false
// default: 值 或 函数 () => 值
// validator: (value) => boolean
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}

.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
  transition: width 0.3s ease;
}

.inner span {
  position: absolute;
  right: 0;
  top: 26px;
  color: #379bff;
  font-weight: bold;
}
</style>