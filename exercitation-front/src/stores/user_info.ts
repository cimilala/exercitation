import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserInfo =defineStore("user_info",()=>{
    const user_info = ref()
   
    return {user_info}
})