<template>
  <div class="side">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      active-color="#001528"
      background-color="#545c64"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <MenuItem :menu-list="menuList"></MenuItem>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {  ref } from "vue";
import { useRouter } from "vue-router";
import menuMap from "@/utils/localmenuMap";
import { useMenuStore } from "@/stores/menu";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const router = useRouter();
const menuList = ref([]);
const menuStore = useMenuStore()
const active = ref("home");

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
    path: `/main${key}`,
    query: str,
  });
};
menuList.value = menuStore.formatMenuList.value
</script>

<style scoped>
.side {
  height: 100%;
}
</style>
