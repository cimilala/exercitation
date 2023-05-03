import { getRole, getStuInfo, getTeacherInfo, getUser, login} from "@/utils/api";
import { defineStore, storeToRefs } from "pinia";
import {ref} from "vue";
import { useUserInfo } from "./user_info";
import RoutesByRole from "@/utils/RoutesByRole";
import routesMap from "@/utils/routerMap"
import { useMenuStore } from "./menu";
export const useUserStore = defineStore("user", () => {
  const user = ref<User>();
  const {user_info} = storeToRefs(useUserInfo())
  const saveUser = async () => {
    if(localStorage.getItem("token")) {
      const username = localStorage.getItem("username")
      const menuStore =useMenuStore()
      RoutesByRole(routesMap,"/")
      //获取用户登录信息
      const { data,status} = await getStuInfo("/user/getUser",{username});
      if(status===200){
      user.value = data;
      //获取用户详细信息
      const roleName = localStorage.getItem("role_name")
      if(roleName==="student"){
        const res = await  getStuInfo('/stu_info/getStuInfoBy',{userId:data.id})
        if(res.status===200){
          user_info.value = res.data
         }
      }else if(roleName==="teacher"){
        const res = await  getTeacherInfo('/teacher-info/getTeacherInfo',{userId:data.id})
        if(res.status===200){
          user_info.value = res.data
         }
      }
  
   //获取菜单
   menuStore.saveMenuList()
   //动态注册路由
  
      }
    } 
  };
  return { user, saveUser };
});
