<template>
  <div class="change">
    <div class="title">
      <span>实习变更申请</span>
    </div>
    <div class="operation">

      <el-button type="success" :icon="Check" @click="saveDraft(ruleFormRef)">保存草稿箱</el-button>
      <el-button type="primary" :icon="Position" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button type="info" :icon="RefreshLeft" @click="resetForm(ruleFormRef)">重置</el-button>

    </div>

    <el-form ref="ruleFormRef" 
    :model="ruleForm" 
    status-icon 
    class="demo-ruleForm"  
    label-width="100px"
   :rules="rules"
    >
      <div style="width: 300px;">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="ruleForm.sex" />
        </el-form-item>

        <el-form-item label="班级" prop="class">
          <el-input v-model="ruleForm.class" />
        </el-form-item>
        <el-form-item label="学号" prop="stu_nember">
          <el-input v-model="ruleForm.stu_nember" />
        </el-form-item>
      </div>
      <div style="width: 300px;">
        <el-form-item label="原实习单位" prop="initInter">
          <el-input v-model="ruleForm.initInter" />
        </el-form-item>
        <el-form-item label="新实习单位" prop="changeInter">
          <el-input v-model="ruleForm.changeInter" />
        </el-form-item>

        <el-form-item label="原实习方向" prop="initPosition">
          <el-input v-model="ruleForm.initPosition" />
        </el-form-item>

        <el-form-item label="新实习方向" prop="changePosition">
          <el-input v-model="ruleForm.changePosition" />
        </el-form-item>
      </div>




    </el-form>
    <div class="editor">
      <span>原因</span>
      <BasicEditor @valueHtml="valueHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormItemRule } from "element-plus";
import {  reactive, ref, toRaw, } from "vue";
import BasicEditor from "@/components/BasicEditor/BasicEditor.vue"
import { Check, Position, RefreshLeft, } from '@element-plus/icons-vue'
import mitt from "@/utils/mitt";
import type { Arrayable } from "element-plus/es/utils/typescript";
const valueHtml = (valueHtml: string)=>{
console.log(valueHtml);
}
//表单校验

const ruleFormRef = ref<FormInstance>()
const ruleForm= reactive({
  name: '',
  sex: '',
  age: '',
  class: '',
  initInter: '',
  changeInter: '',
  initPosition: '',
  changePosition: '',
  stu_nember:''
})

const ruleFormMap:Record<string,string|any[]>= Object.assign({},toRaw(ruleForm))
Object.keys(ruleFormMap).forEach((item)=>{
  ruleFormMap[item] = [ { required: true, message: '请输入', trigger: 'blur' }]
  }
 
)
const rules = ruleFormMap as Partial<Record<string, Arrayable<FormItemRule>>>
const saveDraft = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      mitt.emit("tableList",ruleForm)
    } else {
      console.log('error submit!')
      return false
    }
  })

}
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style lang="less" scoped>
.change {
  width: 100%;

  .demo-ruleForm {
    display: flex;
    flex-wrap: wrap;
    justify-content:start;
    margin-top: 20px;
  }

  .title {
    height: 40px;
    text-align: center;

    span {
      font-weight: 900;
      font-size: 25px;
    }
  }

  .operation {
    display: flex;
    justify-content: end;
  }
}</style>
