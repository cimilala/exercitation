<template>
    <el-dialog
    :model-value="dialogVisible"
    :title="title"
    :width="width"
    @close="dialogVisible=false"
  >
<slot ></slot>
  <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="dialogVisible=false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
const dialogVisible = ref(false)
defineExpose({
  dialogVisible,
})
defineProps<{
  title:string,
  width?:string
}>()

const handleCancel = () => {
  dialogVisible.value = false;
 
};
</script>
    
<style>
    
</style>