import { defineStore } from "pinia";
import { ref } from "vue";

defineStore("user_info",()=>{
    const user_info = ref()
    const getUserInfo = ()=>{
        
    }
    return {user_info,getUserInfo}
})