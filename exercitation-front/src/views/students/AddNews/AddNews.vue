<template>
  <div class="addNews">
    <div class="info">
      <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    class="demo-ruleForm"
    :rules="rules"
  >
  <div class="title">
    <el-form-item label="标题" prop="title" class="aa">
      <el-input v-model.trim="ruleForm.title"  />
    </el-form-item>
    
    <el-button  type="success" :icon="Check" @click="saveDraft(ruleFormRef)">保存草稿箱</el-button>
    <el-button  type="primary" :icon="Position"  @click="submitForm(ruleFormRef)">提交</el-button>
    <el-button type="info" :icon="RefreshLeft" @click="resetForm(ruleFormRef)"
        >重置</el-button
      >
  </div>
  
    <div class="context">
      <el-form-item label="实习单位" prop="unit">
      <el-input v-model.trim="ruleForm.unit"   />
    </el-form-item>
    
    <el-form-item label="时间" prop="time">
      <el-date-picker
        v-model="ruleForm.time"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :size="size"
      />
    </el-form-item>
    <el-form-item label="周次" prop="week">
      <el-input v-model.trim="ruleForm.week" placeholder="Please input" type="number"/>
    </el-form-item>
    </div>
   

</el-form>
    </div>
      <div class="editor">
        <span>内容</span>
      <BasicEditor @valueHtml="valueHtml"/>
    </div>  

  </div>
</template>
    
<script setup lang='ts'>
import {  onDeactivated, reactive, ref, } from "vue";
import {Check,Position,RefreshLeft} from '@element-plus/icons-vue'
import { addNews, addTesting } from "@/utils/api";
import formateTime from "@/utils/formatTime";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { usedraftNews } from "@/stores/draft_news";
import { ElNotification, type FormInstance } from "element-plus";
import { dateFormat } from "@/utils/formatTimePlus";
import { useTestStore } from "@/stores/test";
import { formToRules } from "@/utils/formRules";
const {user} = storeToRefs(useUserStore()) 
const { testList } = storeToRefs(useTestStore());
const ruleForm = reactive({
  title: '',
  unit: '',
  time: '',
  week:""
})
const rules =formToRules(ruleForm)
const size = ref<'default' | 'large' | 'small'>('default')
const disabledDate = (time: Date) => {
  return time.getTime() < Date.now()
}
const ruleFormRef = ref<FormInstance>();
  const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const submitForm=(formEl: FormInstance | undefined)=>{
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      const res = await addNews("/day-news",{...ruleForm,
    time:formateTime(ruleForm.time),
    status:1,
    content:ebitorValue.value,
    isDraft:false,
    operation:1,
    userId:user.value?.id
  })
 
  const {status} = res
  if(status===200){
    const testres = await addTesting("/test", {
          type_id: res.data.id,
          test_type: "新增日报",
          status: 1,
        });
        if(testres.status===200){
          testList.value.push({
            ...testres.data,
            created_date:dateFormat(testres.data.created_date)
          });
          ElNotification({
            title: "申请成功",
            message: "请到个人中心查看审核状态",
            type: "success",
            showClose: false,
            duration:1500
          });
        }
  }
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
}
const ebitorValue = ref("")
const valueHtml =(value:string)=>{
  ebitorValue.value = value
}

const {draftNewsList} =storeToRefs(usedraftNews()) 
const saveDraft = async (formEl: FormInstance | undefined)=>{
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      const res = await addNews("/day-news",{...ruleForm,
    time:formateTime(ruleForm.time),
    status:0,
    content:ebitorValue.value,
    isDraft:true,
    operation:0,
    userId:user.value?.id
  })
 
  const {status,data} = res
  if(status===200){
    draftNewsList.value.push(data)
    ElNotification({
            title: "提交成功",
            message: "请到草稿箱中查看",
            type: "success",
            showClose: false,
            duration:1500
          });
  }
  
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });

}
onDeactivated(()=>{})
</script>
    
<style scoped>
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