import { reqUserInfo } from "@/utils/api";
import type {  User } from "@/utils/type";
import { defineStore } from "pinia";
import {  ref} from "vue";
export const useUserStore = defineStore("user", () => {
  let user = ref<User>({
    apply_status: undefined,
    id: undefined,
    internship_apply_id: undefined,
    name: undefined,
    role_id: undefined,
    sex: undefined,
    stu_number: undefined,
    username: undefined,
    select_id: undefined,
    photo:undefined
  });
  const saveUser = async () => {
    if(localStorage.getItem("token")) {
      const { data,status} = await reqUserInfo("/getUser");
      if(status===200){
      user.value = data;
      }
      
     
    } 
   
   
  };
  return { user, saveUser };
});
