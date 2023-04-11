import { defineStore } from "pinia";
import { ref } from "vue";

defineStore("user_status",()=>{
    const user_status = ref()
    const getUserStatus = ()=>{
    }
    return {user_status,getUserStatus}
})