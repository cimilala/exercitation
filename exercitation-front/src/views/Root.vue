<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Menu from "@/components/Menu/Menu.vue"
import { onMounted, ref } from "vue";
//控制左边菜单栏的伸缩
const isCollapse  = ref(false);
const changespan = (value: boolean) => {
  isCollapse.value = value
};
</script>
<template>
 <div class="common-layout">
    <el-container class="container">
       <!-- 侧边栏 -->
      <el-aside  style="background-color:#545c64;" :width="isCollapse ? '60px':'200px'"> 
         <Menu :isCollapse="isCollapse"></Menu>
        </el-aside>
          <!-- 右边部分 -->
    <el-container class="right">
        <!-- 头部 -->
      <el-header> 
         <Header @change="changespan" >
        </Header>
          <!-- 导航 -->
        <Navbar></Navbar>
      </el-header>
        <!-- 内容 -->
      <el-main>
        <router-view v-slot="{Component}">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
    </el-container>
  </div>
  
</template>
<style lang="less" scoped>
  .container{
    min-height: 100vh;
    .right {
  background-color: rgb(244, 246, 248);
  .el-header{
    padding: 0;
    height:90px
  }
}
  }

</style>

