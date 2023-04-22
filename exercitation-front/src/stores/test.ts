import { defineStore } from "pinia"
import { ref } from "vue"

export const useTestStore = defineStore("testStore",()=>{
    const testList = ref<any[]>([])
    return {testList}
})