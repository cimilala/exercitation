import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import './assets/main.css'
import "./assets/iconfont/font/iconfont.css"
// import 'default-passive-events'
import { createPinia } from 'pinia'
import { useUserStore } from "./stores/user";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const pinia = createPinia()
const app = createApp(App)
const token = localStorage.getItem("token")
app.use(pinia)
const userstore = useUserStore()
if(token){
  userstore.saveUser()
}
app.use(router)
app.mount("#app")
// 注册全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
