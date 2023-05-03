<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbItemArray" :key="item.name">
      <template v-if="item.name==='首页'">
        <el-breadcrumb-item 
   ><a href="/home">{{ item.name }}</a></el-breadcrumb-item>
      </template>
    <template v-else>
      <el-breadcrumb-item >{{ item.name }}</el-breadcrumb-item>
    </template>
   </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useMenuStore } from "@/stores/menu";
import { storeToRefs } from "pinia";
import {  ref, watch } from "vue";
import { useRoute } from "vue-router";
const breadcrumbItemArray = ref<any[]>([]);
const route = useRoute();
const { menuList } = storeToRefs(useMenuStore());

watch(
  () => route.path,
  () => {
    breadcrumbItemArray.value=[]
    let currentMenu: any = menuList.value.find(
      (item: IMenu) => item.path === "/"+route.path.split("/")[1]
    );
    const r = (param: IMenu | undefined) => {
      if (param) {
        breadcrumbItemArray.value.unshift({...currentMenu});
        if (param.parent_id !== -1) {
          currentMenu = menuList.value.find(
            (item: IMenu) => item.id === param.parent_id
          );
          r(currentMenu);
        }
      }
    };
    r(currentMenu);
    if(route.path!=="/home") {
      breadcrumbItemArray.value.unshift({name:"首页",path:"/home"});
    }
  },
  
  { deep: true, immediate: true }
  
);
</script>

<style></style>
