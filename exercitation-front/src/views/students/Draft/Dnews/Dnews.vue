<template>
    <div class="table">
  <el-table :data="filtableData" border style="width: 100%">
    <el-table-column prop="id" label="编号" align="center" />
    <el-table-column prop="position" label="实习方向" align="center" />
    <el-table-column prop="place" label="实习位置" align="center" />
    <el-table-column prop="startTime" label="开始时间" align="center" />
    <el-table-column prop="endTime" label="结束时间" align="center" />
    <el-table-column prop="teacher" label="指导老师" align="center" />
    <el-table-column prop="type" label="实习类型" align="center" />
    <el-table-column prop="totalNumber" label="限定人数" align="center" />
    <el-table-column prop="currentNumber" label="当前人数" align="center" />
    <el-table-column prop="apply_status" label="审核状态" align="center">
      <template #default="scope">
        <el-tag :type="typeChange(scope)"
          ><span >{{ satusChange(scope) }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="opreation" label="操作" align="center">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click="handleApplyClick(scope.$index, scope.row)"
          ><span class="isapply">{{ isapply(scope) }}</span></el-button
        >
        <el-button
          link
          type="primary"
          size="small"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script setup lang='ts'>import { ref } from 'vue';

const typeChange = (scope: any) => {
switch (scope.row.apply_status) {
case 1:
  return "warning";
case 2:
  return "success";
case 3:
  return "danger";
default:
  break;
}
};
const handleDelete = (index:number,row:any)=>{

}
const handleApplyClick = (index: number, row:any) => {


};
const isapply =(scope:any) =>{
switch (scope.row.operation) {
case 0:
  return "申请";
case 1:
  return "正在申请";
case 2:
  return "申请成功";
case 3:
  return "重新申请";
default:
  break;
}
}
const satusChange = (scope: any) => {
switch (scope.row.apply_status) {
case 0:
  return "待审核";
case 1:
  return "审核中";
case 2:
  return "审核成功";
case 3:
  return "审核失败";
default:
  break;
}
};
const filtableData = ref([])
</script>

<style lang="less" scoped>
  
</style>