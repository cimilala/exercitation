import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import './assets/main.css'
import "./assets/iconfont/font/iconfont.css"
import { createPinia } from 'pinia'
import { useUserStore } from "./stores/user";
import {useMenuStore} from "./stores/menu"
import routesMap from "@/utils/routerMap"
import RoutesByRole from './utils/RoutesByRole'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
const userstore = useUserStore()
const menuStore= useMenuStore()
const token = localStorage.getItem("token")
if(token){
  userstore.saveUser()
  menuStore.saveMenuList()
  RoutesByRole(routesMap,"main")
}
app.use(router)
app.mount("#app")

