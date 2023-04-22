import { defineStore } from "pinia";
import { ref } from "vue";

export const usedraftLeave = defineStore("draftLeaveList",()=>{
    const draftLeaveList = ref<any[]>([])
    return {draftLeaveList}
})