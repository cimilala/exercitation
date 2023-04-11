<template>
  <div class="draft">
    <div class="title">
      <span>草稿箱</span>
    </div>

    <div class="operation">
      <el-button :icon="Plus" size="small">新增</el-button>
      <el-button :icon="Edit" size="small">修改</el-button>
      <el-button :icon="Delete" size="small">删除</el-button>
      <el-button :icon="View" size="small">详情</el-button>
      <el-button size="small">
        Upload<el-icon class="el-icon--right">
        
        </el-icon>
      </el-button>
    </div>
    <div style="display: flex; justify-content: space-evenly">
      <RouterLink to="/main/draft/draft_change">实习变更</RouterLink>
      <RouterLink to="/main/draft/draft_leave">请假申请</RouterLink>
      <RouterLink to="/main/draft/draft_news">实习日报</RouterLink>
      <RouterLink to="/main/draft/draft_summary">实习总结</RouterLink>
    </div>

    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { Delete, Plus, View, Edit, Upload } from "@element-plus/icons-vue";

import { useRouter } from "vue-router";

const router = useRouter();

const qsq = () => {
  router.push({
    name: "draft_change",
  });
};
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
}
}
</style>

