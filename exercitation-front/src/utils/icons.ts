import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'
// 注册全局组件
const icons= (app:App<Element>)=>{
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
}
export default icons
