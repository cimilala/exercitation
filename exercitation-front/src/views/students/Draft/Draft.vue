<template>
  <div class="draft">
    <div class="title">
      <span>草稿箱</span>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="实习变更" name="first">
      <DChange></DChange>
    </el-tab-pane>
    <el-tab-pane label="请假申请" name="second">
      <DLeave/>
    </el-tab-pane>
    <el-tab-pane label="实习日报" name="third">
      <Dnews/>
    </el-tab-pane>
    
  </el-tabs>
  </div>
</template>

<script setup lang="ts">
import DChange from "@/views/students/Draft/DChange/DChange.vue"
import DLeave from "@/views/students/Draft/DLeave/DLeave.vue"
import Dnews from "@/views/students/Draft/Dnews/Dnews.vue"

import type { TabsPaneContext } from 'element-plus';
import { ref } from 'vue';

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
}
</script>
<style lang="less" scoped>
  .draft {
  width: 100%;
  .title {
  height: 40px;
  text-align: center;
  span{
    font-weight: 900;
  font-size: 25px;
  }
  .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
}
}
</style>

