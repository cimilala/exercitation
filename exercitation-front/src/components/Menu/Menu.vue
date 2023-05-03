<template>
   <el-scrollbar height="100vh">
  <div class="main-menu" >
    <Logo :collapse="isCollapse"/>

  <div class="side">
      <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      active-color="#001528"
      background-color="#545c64"
      text-color="#f4f6f8"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <MenuItem :menu-list="menuStore.formatMenuList"></MenuItem>
    </el-menu>

   
  </div>
  </div>
</el-scrollbar>
</template>
<script setup lang="ts">
import {  ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import menuMap from "@/utils/localmenuMap";
import { useMenuStore } from "@/stores/menu";
import MenuItem from "../MenuItem/MenuItem.vue";
import Logo from "../Header/Logo.vue";
const router = useRouter();
const menuStore = useMenuStore()
const route = useRoute()
const active = ref("/"+route.path.split("/")[1]);
//菜单栏伸缩
 defineProps<{
  isCollapse:boolean
}>()
//header组件传来的事件并携带是否伸缩的参数


//菜单栏模块展开回调函数
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
//菜单栏模块收缩回调函数
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
//点击菜单
const handleSelect = (key: string, keyPath: string[]) => {
  const str = { title: menuMap[key] };
  router.push({
    path: `${key}`,
    query: str,
  });
};


</script>

<style scoped>

.side {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
 
}

</style>
