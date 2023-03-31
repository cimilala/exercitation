<template>
  <div class="addNews">
    <div class="info">
      <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    class="demo-ruleForm"
  >
  <div class="title">
    <el-form-item label="标题" prop="title" class="aa">
      <el-input v-model="ruleForm.title"  />
    </el-form-item>
    
    <el-button  type="success" :icon="Check" >保存草稿箱</el-button>
    <el-button  type="primary" :icon="Position">提交</el-button>
  </div>
  
    <div class="context">
      <el-form-item label="实习单位" prop="unit">
      <el-input v-model="ruleForm.unit"   />
    </el-form-item>
    <el-form-item label="开始时间" prop="start_time">
      <el-date-picker
        v-model="ruleForm.start_time"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :size="size"
      />
    </el-form-item>
    <el-form-item label="结束时间" prop="end_time">
      <el-date-picker
        v-model="ruleForm.end_time"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :size="size"
      />
    </el-form-item>
    <el-form-item label="周次" prop="week">
      <el-date-picker
          v-model="ruleForm.week"
          type="week"
          format="[Week] ww"
          placeholder="Pick a week"
        />
    </el-form-item>
    </div>
   

</el-form>
    </div>
      <div class="editor">
        <span>内容</span>
      <BasicEditor/>
    </div>  

  </div>
</template>
    
<script setup lang='ts'>
import {  reactive, ref, } from "vue";
import {Check,Position} from '@element-plus/icons-vue'
import BasicEditor from "@/components/common/BasicEditor/BasicEditor.vue"
const size = ref<'default' | 'large' | 'small'>('default')
const disabledDate = (time: Date) => {
  return time.getTime() < Date.now()
}
const ruleForm = reactive({
  title: '',
  unit: '',
  start_time: '',
  end_time:'',
  week:""
})
  
</script>
    
<style scoped>
    /* .editor{
  
   text-align: center;
    } */
    .context{
      display: flex;
      justify-content: space-between;
      
    }
    .title {
      display: flex;
     margin-top: 15px;
    }
    .aa {
      flex-grow: 2;
      margin-right: 50px;
    }
</style>