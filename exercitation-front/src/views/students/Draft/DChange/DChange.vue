<template>
        <div class="table">
      <el-table :data="filtableData" border style="width: 100%">
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column prop="sex" label="性别" align="center" />
        <el-table-column prop="class" label="班级" align="center" />
        <el-table-column prop="initInter" label="原实习单位" align="center" />
        <el-table-column prop="changeInter" label="新实习单位" align="center" />
        <el-table-column prop="initPosition" label="原实习方向" align="center" />
        <el-table-column prop="changePosition" label="现实习方向" align="center" />
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
    
<script setup lang='ts'>
import mitt from '@/utils/mitt';
import { onDeactivated, onMounted, ref } from 'vue';
   const filtableData= ref<any>([
  
   ])
 
    mitt.on("tableList",(value)=>{
    filtableData.value.push(value)
   console.log(value);
   
    
   })

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
onDeactivated(()=>{
  mitt.all.clear()
})

</script>
    
<style lang="less" scoped>
  
</style>