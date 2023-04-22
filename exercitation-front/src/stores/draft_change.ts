import { defineStore } from "pinia";
import { ref } from "vue";
import { useUserStore } from "./user";
import { getChangeListByRole } from "@/utils/api";

export const usedraftChange = defineStore("draftChangeList",()=>{
    const draftChangeList = ref<any[]>([])
    const  getChangeList = async ()=>{
        if(localStorage.getItem("token")) {
            const userStore = useUserStore();
            const { data, status } =   await getChangeListByRole("/intership-change",{
                roleId: userStore.user?.roleId,
            })
            if (status === 200) {
                draftChangeList.value = data;
              }
          } 
    }
    return {draftChangeList,getChangeList}
})