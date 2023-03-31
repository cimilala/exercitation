<script setup lang="ts">
import Header from "@/components/common/Header/Header.vue";
import Navbar from "@/components/common/Navbar/Navbar.vue";
import Sidebar from "@/components/common/SideBar/Sidebar.vue";
import { onMounted, ref } from "vue";
//控制左边菜单栏的伸缩
let number = ref(3);
const changespan = (value: number) => {
  number.value = value;
};
const a = ref()


</script>

<template>
  <!-- 侧边栏 -->
  <el-row>
    <el-col :span="number" class="side">
      <!-- <div class="grid-content ep-bg-purple" /></el-col> -->
      <Sidebar></Sidebar>
    </el-col>
    <!-- 右边部分 -->
    <el-col :span="24 - number" class="right">
      <!-- 头部 -->
      <el-row span="24" class="header">
        <Header @change="changespan" ref="a"></Header>
       
      </el-row>
      <div class="haha">
      <!-- 导航 -->
      <el-row span="24" class="navbar">
        <Navbar></Navbar>
      </el-row>
      <!-- 内容 -->
     
      <el-row span="24" class="content">
        <router-view v-slot="{Component}">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="less" scoped>
  .side {
  height: 100vh;
}
.right {
  background-color: rgb(244, 246, 248);
  .haha{
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  .content {
  min-height: 100vh;
  /* background-color: aqua; */
}
}
}
</style>

