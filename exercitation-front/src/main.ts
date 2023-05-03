import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import './assets/main.css'
import 'virtual:svg-icons-register'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import "./assets/iconfont/font/iconfont.css"
import 'nprogress/nprogress.css'
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue"
import 'virtual:svg-icons-register'
// import 'default-passive-events'
import { createPinia } from 'pinia'
import getDate from './utils/getDate'
import icons from './utils/icons'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
//页面刷新重新获取数据
app.use(getDate)
app.component("svg-icon",SvgIcon)
app.use(icons)
app.use(router)
app.mount("#app")


