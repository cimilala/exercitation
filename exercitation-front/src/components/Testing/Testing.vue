<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="编号" />
      <el-table-column prop="created_date" label="提交时间" />
      <el-table-column prop="test_type" label="任务类型" />
      <el-table-column prop="status" label="审核状态" align="center">
        <template #default="scope">
          <el-tag :type="typeChange(scope)"
            ><span class="check">{{ satusChange(scope) }}</span>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作"
        align="center"
        width="180px"
        v-if="isOperation"
      >
        <template #default="scope">
          <div style="display: flex; justify-content: center">
            <el-button 
            type="primary"
             size="small" 
             :icon="View"
             @click="detailClick(scope.index, scope.row)"
              >详情
            </el-button>
            <el-button
              type="danger"
              size="small"
              :icon="CircleCloseFilled"
              @click="handleApplyCancel(scope.index, scope.row)"
              >取消
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <MyDialog 
  title="haha"
  ref="myDialog"></MyDialog>
</template>

<script setup lang="ts">
import { onActivated, onMounted, ref } from "vue";
import { View, CircleCloseFilled, User } from "@element-plus/icons-vue";
import { useTestStore } from "@/stores/test";
import { storeToRefs } from "pinia";
import { getChangeById, getDayNewsById, getLeaveById, getTesListByRole } from "@/utils/api";
import { dateFormat } from "@/utils/formatTimePlus";
import { elMessage } from "@/utils/myElMessage";
import MyDialog from "../MyElComponents/MyDialog.vue";
import { useUserStore } from "@/stores/user";
const myDialog = ref()
const tableData = ref<any[]>([]);
  const { user } = storeToRefs(useUserStore());
const handleApplyCancel = (index: number, row: any) => {
  elMessage('您确定要取消申请吗?')
};
 defineProps<{
 isOperation:boolean
}>()
const detailClick = async (index:string,row:any)=>{
  // console.log(row);
  
  if(row.test_type==="请假申请"){
    myDialog.value.dialogVisible = true
   const res =await getLeaveById(`/internship-leave/${row.type_id}`)
   console.log(res.data);
   
  
  }else if(row.test_type==="实习变更"){
    const res =await getChangeById(`/internship-change/${row.type_id}`)
    
  }
  else if(row.test_type==="新增日报"){
    const res= await getDayNewsById(`/day-news/${row.type_id}`)
    
  }


}
const typeChange = (scope: any) => {
  switch (scope.row.status) {
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
const satusChange = (scope: any) => {
  switch (scope.row.status) {
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
const { testList } = storeToRefs(useTestStore());
onActivated(() => {
  tableData.value = testList.value.filter((item) => item.status === 1);
});

onMounted(async () => {
  const res = await getTesListByRole("/test/ByRole",{
    status:1,
    userId:user.value?.id
  });
  const formatDate = res.data.map((item: any) => {
    return {
      ...item,
      created_date: dateFormat(item.created_date),
    };
  });
  if (res.status === 200) {
    tableData.value = formatDate;
    formatDate.forEach((item: any) => {
      testList.value.push(item);
    });
  }
});
</script>

<style lang="less" scoped></style>
