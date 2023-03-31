<script setup lang="ts">
import {  onMounted,  } from "vue";
import { useTokenStore } from "./stores/token";
import { useUserStore } from "./stores/user";
const tokenstore = useTokenStore();
const userstore = useUserStore()
onMounted(() => {
  tokenstore.gettoken();
  userstore.saveUser()
});

</script>

<template>
  <RouterView ></RouterView>
</template>

<style lang="less" scoped>
  
</style>
