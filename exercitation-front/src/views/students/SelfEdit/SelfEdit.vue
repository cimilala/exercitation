<template>
  <div>
    <el-form :model="ruleForm" ref="form" label-width="150px">
      <div class="updateinfo">
        <div class="left">
          <el-form-item label="头像" prop="photo">
            <Upload :fileList="fileList" />
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-input v-model="ruleForm.sex"></el-input>
          </el-form-item>
          <el-form-item label="微信" prop="wechat">
            <el-input v-model="ruleForm.wechat"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>

          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </div>
        <div class="right">
          <el-form-item label="学号" prop="stu_number">
            <el-input v-model="ruleForm.stu_number" disabled></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="class">
            <el-input v-model="ruleForm.class" disabled></el-input>
          </el-form-item>
          <el-form-item label="学院" prop="college" >
            <el-input v-model="ruleForm.college" disabled></el-input>
          </el-form-item>
          <el-form-item label="兴趣爱好" prop="hobby">
            <el-input v-model="ruleForm.hobby"></el-input>
          </el-form-item>
          <el-form-item label="个性签名" prop="per_signature">
            <el-input v-model="ruleForm.textarea" :rows="5" type="textarea" placeholder="Please input" />
          </el-form-item>

        </div>
      </div>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submit">修改</el-button>
    </span>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
import Upload from "@/components/Upload/Upload.vue"
import type { UploadUserFile } from "element-plus";
import { useUserStore } from "@/stores/user";
import { useUserInfo } from "@/stores/user_info";
import { storeToRefs } from "pinia";
const { user } = toRefs(useUserStore())
const {user_info} = storeToRefs(useUserInfo())
const fileList = ref<UploadUserFile[]>([
  {
    name: 'plant-1.png',
    url: `http://localhost:3000/images/${user.value?.photo}.jpg`,
  },

])
const ruleForm = reactive({
  sex: user_info.value?.sex,
  wechat: user_info.value?.wechat,
  phone: user_info.value?.phone,
  email:user_info.value?.email,
  stu_number: user_info.value?.stu_number,
  class: user_info.value?.class,
  college: user_info.value?.college,
  hobby: user_info.value?.hobby,
  textarea:user_info.value?.per_signature
});
const submit = () => { };
const handleClose = () => { };


</script>
<style lang="less" scoped>
  .updateinfo {
  margin-top: 20px;
  height: 350px;
  .left {
  /* width: 330px; */
  float: left;
}
.right {
  overflow: hidden;
}
}
</style>

