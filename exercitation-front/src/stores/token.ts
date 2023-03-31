import {defineStore} from "pinia"
import { ref } from "vue"
export const useTokenStore = defineStore('token', () => {
    const token = ref<string| null>("")
    function gettoken() {
        token.value = localStorage.getItem("token") 
    }
    return { token, gettoken }})