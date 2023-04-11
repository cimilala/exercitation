<script setup lang="ts">
// import {  onMounted,  } from "vue";
// import { useUserStore } from "./stores/user";
// import {useMenuStore} from "./stores/menu"
// const userstore = useUserStore()
// const menuStore= useMenuStore()
// onMounted(()=>{
//   userstore.saveUser()
//   menuStore.saveMenuList()
// })
  
</script>

<template>
  <div class="app">
    <RouterView ></RouterView>
  </div>
  
</template>

<style lang="less" scoped>
  .app{
    width: 100vw;
    min-height: 100vh;
  }
</style>
