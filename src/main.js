import { createApp } from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/common.css'
import './assets/iconfont/iconfont.css'

import BaseGoodsItem from './components/BaseGoodsItem.vue'
import BaseBrandItem from './components/BaseBrandItem.vue'
import Button from './components/Button.vue'

const app = createApp(App)

app.component('BaseGoodsItem', BaseGoodsItem)
app.component('BaseBrandItem', BaseBrandItem)
app.component('AppButton', Button)

// 全局注册指令 - 在整个应用中都可以使用
app.directive('global-color', {
  beforeMount(el, binding) {
    el.style.backgroundColor = binding.value
    console.log('[全局指令] v-global-color 已绑定')
  },
  updated(el, binding) {
    el.style.backgroundColor = binding.value
  }
})

app.directive('global-bounce', {
  mounted(el) {
    el.style.transition = 'transform 0.3s'
    el.addEventListener('click', () => {
      el.style.transform = 'scale(1.1)'
      setTimeout(() => {
        el.style.transform = 'scale(1)'
      }, 300)
    })
  }
})

// v-focus 指令 - 自动聚焦
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.mount('#app')