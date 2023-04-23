import { getRole, getUser, getUserInfo, login} from "@/utils/api";
import { defineStore, storeToRefs } from "pinia";
import {ref} from "vue";
import { useUserInfo } from "./user_info";
import RoutesByRole from "@/utils/RoutesByRole";
import routesMap from "@/utils/routerMap"
import { useMenuStore } from "./menu";
export const useUserStore = defineStore("user", () => {
  const user = ref<User>();
  const {user_info} = storeToRefs(useUserInfo())
  const menuStore =useMenuStore()
  const saveUser = async () => {
    if(localStorage.getItem("token")) {
      const username = localStorage.getItem("username")
      RoutesByRole(routesMap,"/")
      //获取用户登录信息
      const { data,status} = await getUser("/user/getUser",{username});
      if(status===200){
      user.value = data;
      //获取用户详细信息
   const res = await  getUserInfo('/stu_info/getUserInfo',{userId:data.id})
   //获取菜单
   menuStore.saveMenuList()
   //动态注册路由
  
  
   if(res.status===200){
    user_info.value = res.data
   }
      }
    } 
  };
  return { user, saveUser };
});
