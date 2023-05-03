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
            <el-button type="primary" size="small" :icon="View"
              >详情
            </el-button>
            <el-button
              type="danger"
                size="small"
                :icon="Delete"
                @click="handleDelete(scope.index, scope.row)"
                >删除
              </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { onActivated, onMounted, ref } from "vue";
import { View, Delete } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
import { useTestStore } from "@/stores/test";
import { storeToRefs } from "pinia";
import { getTesListByRole} from "@/utils/api";
import { dateFormat } from "@/utils/formatTimePlus";
import { elMessage } from "@/utils/myElMessage";
import { useUserStore } from "@/stores/user";
const { testList } = storeToRefs(useTestStore());
const { user } = storeToRefs(useUserStore());
const tableData = ref<any[]>([]);
  defineProps<{
 isOperation:boolean
}>()
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
const handleDelete = (index:string,row:any)=>{
  elMessage('您确定要删除吗?')
}
onActivated(() => {
  tableData.value=testList.value.filter((item)=>item.status !==1)
});

onMounted(async () => {
  const res = await getTesListByRole("/test/ByRole",{
    status:2,
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
    testList.value.push(item)
  });
  }
});
</script>

<style lang="less" scoped></style>
