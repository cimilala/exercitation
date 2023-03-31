<template>
  <div class="leave">
    <div class="title">
      <span>请假申请</span>
    </div>

    <div class="operation">

      <el-button type="success" :icon="Check" @click="submitForm(ruleFormRef)">保存草稿箱</el-button>
      <el-button type="primary" :icon="Position">提交</el-button>
      <el-button type="info" :icon="RefreshLeft" @click="resetForm(ruleFormRef)">重置</el-button>
    </div>


    <el-form ref="ruleFormRef" :model="ruleForm" status-icon class="demo-ruleForm" label-width="150px">
      <div class="left">
        <el-form-item label="姓名" prop="pass">
          <el-input v-model="ruleForm.pass" />
        </el-form-item>
        <el-form-item label="学号" prop="age">
          <el-input v-model.number="ruleForm.age" />
        </el-form-item>
        <el-form-item label="请假天数" prop="pass">
          <el-input v-model="ruleForm.pass" />
        </el-form-item>
      </div>

      <div class="center">
        <el-form-item label="性别" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" />
        </el-form-item>
        <el-form-item label="班级" prop="pass">
          <el-input v-model="ruleForm.pass" />
        </el-form-item>
        <el-form-item label="原因" prop="pass">
          <el-input v-model="textarea"  :rows="4" type="textarea" placeholder="Please input" />
        </el-form-item>
      </div>
      <div class="right">
        <el-form-item label="开始时间" prop="pass">
          <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
        </el-form-item>
        <el-form-item label="结束时间" prop="pass">
          <el-date-picker v-model="value2" type="date" placeholder="Pick a day" />
        </el-form-item>
        <el-form-item label="相关材料证明" prop="pass">
          <Upload :fileList="fileList" />

        </el-form-item>
      </div>








    </el-form>

    <div>
      <span>审批流程</span>
      <el-steps :active="active" finish-status="success">
        <el-step title="张三" :icon="User" />
        <el-step title="李四" :icon="Position" />
        <el-step title="王五" :icon="Position" />
        <el-step title="本人确认" :icon="User" />
      </el-steps>

    </div>
  </div>
</template>
  
<script setup lang="ts">
import { User } from "@element-plus/icons-vue";
import type { FormInstance, UploadUserFile, } from "element-plus";
import { reactive, ref } from "vue";
import { Check, Position, RefreshLeft, } from '@element-plus/icons-vue'
import Upload from "@/components/common/Upload/Upload.vue"
const value1 = ref('')
const value2 = ref('')
const textarea = ref('')
const active = ref(1)
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})
const fileList = ref<UploadUserFile[]>([
  {
    name: 'plant-1.png',
    url: 'http://localhost:3000/images/1679633500310.jpg',
  },
  {
    name: 'plant-1.png',
    url: 'http://localhost:3000/images/1679633500310.jpg',
  },

])
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
  
<style scoped>
.leave {
  width: 100%;
}

.operation {
  display: flex;
  justify-content: end;
}

.demo-ruleForm {
  width: 100%;
  display: flex;
  margin-top: 10px;
}

.title {
  height: 40px;
  text-align: center;
}

.title span {
  font-weight: 900;
  font-size: 25px;
}
</style>
  