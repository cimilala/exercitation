<template>
  <el-button
   
    size="small"
    :icon="Position"
    :type="typeChange(rowData)"
    @click="onApply && onApply(rowData)"
    
    ><span class="isapply" >{{ isapply(rowData) }}</span>
  </el-button>
  <el-button
    type="danger"
    size="small"
    plain
    :icon="CircleCloseFilled"
    @click="onCancel && onCancel(rowData)"
   
    >取消</el-button
  >
</template>

<script setup lang="ts">
import { Position, CircleCloseFilled } from "@element-plus/icons-vue";
defineProps<{
  onApply?: (scope:any) => void;
  onCancel?: (scope:any) => void;
  rowData:any
}>();
const typeChange = (rowData: any) => {
  switch (rowData.operation) {
    case 0:
      return "primary";
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

const isapply = (rowData: any) => {
  switch (rowData.operation) {
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
};
</script>

<style></style>
