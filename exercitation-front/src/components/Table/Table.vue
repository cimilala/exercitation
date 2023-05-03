<template>
  <div class="qsq">
    <div class="operation" >
      <el-button :icon="Plus" size="small" @click="add && add()"
        >新增</el-button
      >
      <el-button :icon="Edit" size="small">修改</el-button>
      <el-button :icon="Delete" size="small">删除</el-button>
      <el-button :icon="View" size="small">详情</el-button>
      <el-button :icon="Upload" size="small"> Upload</el-button>
    </div>
    <div class="table">
     
      <el-table :data="tableData" border style="width: 100%">
        
          <el-table-column type="selection" width="55" />
        <el-table-column
          v-for="item in options"
          :prop="item.prop"
          :label="item.label"
          align="center"
        ></el-table-column>
        <slot name="img"></slot>
        <slot name="detail"></slot>
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
          :width="width"
        >
          <template #default="scope">
            <div
             
              style="display: flex; justify-content: center"
            >
              <el-button
              v-show="apply"
                :type="typeChange(scope) ?? 'primary'"
                size="small"
                :icon="Position"
               
                @click="onApply && onApply(scope.$index, scope.row)"
                ><span class="isapply">{{ isapply(scope) }}</span>
              </el-button>
              <el-button
              v-show="cancel"
                type="danger"
                size="small"
                plain
                :icon="CircleCloseFilled"
                @click="onCancel && onCancel(scope.$index, scope.row)"
                >取消</el-button
              >
              <el-button type="success" 
              size="small" 
              :icon="Edit"
              v-show="editor"
              @click="onEditor && onEditor(scope.$index, scope.row)"
                ><span class="isapply" >编辑</span></el-button
              >
              <el-button 
              v-show="deleteShow"
              type="danger" 
              size="small" 
              :icon="Delete"
              @click="onDelete && onDelete(scope.$index, scope.row)"
                ><span class="isapply">删除</span></el-button
              >
            </div>
          </template>
        </el-table-column>
        
       
      </el-table>
   
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Delete,
  Plus,
  View,
  Edit,
  Upload,
  Position,
  CircleCloseFilled,
} from "@element-plus/icons-vue";
import { ref } from "vue";
defineProps<{
  options: any[];
  tableData: any[];
  onApply?: (index: number, row: any) => void;
  onCancel?: (index: number, row: any) => void;
  onEditor?: (index: number, row: any) => void;
  onDelete?:(index: number, row: any) => void;
  add?: () => void;
  apply:boolean;
  cancel:boolean;
  deleteShow:boolean;
  editor:boolean;
  width?:string
}>();
const disabled = ref(true)
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
const isapply = (scope: any) => {
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
};
</script>
<style lang="less" scoped>
.qsq {
  width: 100%;
  .table {
    margin-top: 20px;
  }
}

</style>
