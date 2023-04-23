import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import './assets/main.css'
import "./assets/iconfont/font/iconfont.css"
// import 'default-passive-events'
import { createPinia } from 'pinia'
import icons from "./utils/icons"
import getDate from './utils/getDate'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
//页面刷新重新获取数据
app.use(getDate)
//全局注册icon组件
app.use(icons)
app.use(router)
app.mount("#app")


