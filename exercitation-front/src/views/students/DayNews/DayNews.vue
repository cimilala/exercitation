<template>
  <div class="daynews">
    <div class="title">
      <span>我的实习日报</span>
    </div>

    <div class="operation">
      <el-button :icon="Plus" size="small" @click="addNews">新增</el-button>
      <el-button :icon="Edit" size="small">修改</el-button>
      <el-button :icon="Delete" size="small">删除</el-button>
      <el-button :icon="View" size="small">详情</el-button>
    
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="编号" align="center" />
        <el-table-column prop="position" label="实习方向" align="center" />
        <el-table-column prop="place" label="实习位置" align="center" />
        <el-table-column prop="startTime" label="开始时间" align="center" />
        <el-table-column prop="endTime" label="结束时间" align="center" />
        <el-table-column prop="teacher" label="指导老师" align="center" />
        <el-table-column prop="type" label="实习类型" align="center" />
        <el-table-column prop="totalNumber" label="限定人数" align="center" />
        <el-table-column prop="currentNumber" label="当前人数" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Delete, Plus, View, Edit, Upload } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
let tableData = ref([]);
const router = useRouter();
const addNews = () => {
  router.push({
    path: "/addNews",
    query: {
      title: "新增日报",
    },
  });
};
</script>

<style scoped>
.daynews {
  width: 100%;
}
.title {
  height: 40px;
  text-align: center;
}

.title span {
  font-weight: 900;
  font-size: 25px;
}

.operation {
  padding-left: 10px;
}

.table {
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
}
</style>
