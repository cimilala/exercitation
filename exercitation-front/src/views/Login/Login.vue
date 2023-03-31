<script setup lang="ts">
import { h, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { User, Unlock } from '@element-plus/icons-vue'
import { reqStuLogin } from "@/utils/api"
import { useUserStore } from "@/stores/user"
import { useRouter } from 'vue-router'
import { useTokenStore } from '@/stores/token'
import { ElNotification,} from 'element-plus'
import 'element-plus/es/components/notification/style/css'
const store = useUserStore()//获取userStore中的信息
const store1 = useTokenStore()
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
//获取用户输入的表单数据
const ruleForm = reactive({
  username: "",
  password: "",
  role_id: "3"
})
//获取登录角色类别
const radio = ref("")
//表单校验
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],


})
//登录按钮
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
     
      //学生登录
      if (ruleForm.role_id === "3") {
        console.log('submit!');
      const user = {
        username: ruleForm.username,
        password: ruleForm.password,
        role: ruleForm.role_id,
      }

        reqStuLogin("/login", user).then((data) => {
          if (data.status === 200) {
            router.push({
              name: "home"
            })
            store.saveUser()
            store1.gettoken()
          } else {
            if (data.message === "用户不存在") {
              ElNotification.error({
                title: '消息',
                message:h("i",{style:"color:red"},'用户名不存在') ,
                showClose: false,
              })
            }
            if (data.message === "密码错误") {
              ElNotification.error({
                title: '消息',
                message: '密码错误 ',
                showClose: false,
               
              })
            }
          }

        }).catch(err => { console.log(err); })




      }


    } else {
      console.log('error submit!')
      return false
    }
  })
}
//重置按钮
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<template >
  <!-- <img src="@/assets/image/loginbg.jpg" /> -->
  <div class="background">
    <div class="login">
      <div class="title"><span style="color:black">实习管理系统</span></div>
      <el-form ref="ruleFormRef" class="demo-ruleForm" :model="ruleForm" status-icon :rules="rules">
        <el-form-item prop="username" class="item">
          <el-input type="text" v-model="ruleForm.username" :prefix-icon="User" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password" class="item">
          <el-input type="password" v-model="ruleForm.password" :prefix-icon="Unlock" autocomplete="off"
            placeholder="请输入密码" />

        </el-form-item>
        <el-form-item class="item role" prop="role" label="角色">
          <el-radio-group v-model="ruleForm.role_id">
            <el-radio label="1">管理员</el-radio>
            <el-radio label="2">老师</el-radio>
            <el-radio label="3">学生</el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item class="item">
          <el-button :plain="true" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
        <el-form-item class="item">
          <el-button link style="color:white">注册学生</el-button>
          <el-button link style="color:white">注册教师</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>

<style scoped >
img {
  width: 100vw;
  height: 100vh;
  position: absolute
}

.title {
  text-align: center;

}

.background {
  overflow: hidden;

  display: flex;
  width: 100%;
  justify-content: end;


}

.login {
  width: 400px;
  height: 400px;
  margin-top: 180px; 
  margin-right: 80px;
  
 

}

.item {
  width: 280px;
}

.demo-ruleForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>