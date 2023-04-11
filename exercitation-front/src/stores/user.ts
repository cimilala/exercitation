import { getUser} from "@/utils/api";
import { defineStore } from "pinia";
import {ref} from "vue";
export const useUserStore = defineStore("user", () => {
  let user = ref<User>();
  const saveUser = async () => {
    if(localStorage.getItem("token")) {
      const username = localStorage.getItem("username")
      const { data,status} = await getUser("/user/getUser",{username});
      if(status===200){
      user.value = data;
      }
    } 
  };
  return { user, saveUser };
});
