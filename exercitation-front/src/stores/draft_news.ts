import { defineStore } from "pinia";
import { ref } from "vue";

export const usedraftNews = defineStore("draftNewsList",()=>{
    const draftNewsList = ref<any[]>([])
    return {draftNewsList}
})