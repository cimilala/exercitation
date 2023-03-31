<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="150px">
      <div class="updateinfo">
        <div class="left">
          <el-form-item label="头像" prop="avatar">
            <Upload :fileList="fileList" />
          </el-form-item>
          <el-form-item label="地理位置" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="微信" prop="nickname">
            <el-input v-model="form.nickname"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="age">
            <el-input v-model="form.age"></el-input>

          </el-form-item>
          <el-form-item label="电话" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </div>
        <div class="right">
          <el-form-item label="学号" prop="id">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="account">
            <el-input v-model="form.account" disabled></el-input>
          </el-form-item>
          <el-form-item label="学院" prop="area" disabled>
            <el-input v-model="form.area"></el-input>
          </el-form-item>
          <el-form-item label="兴趣爱好" prop="hobby">
            <el-input v-model="form.hobby"></el-input>
          </el-form-item>
          <el-form-item label="个性签名" prop="design">
            <el-input v-model="form.textarea" :rows="5" type="textarea" placeholder="Please input" />
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
import Upload from "@/components/common/Upload/Upload.vue"
import type { UploadUserFile } from "element-plus";
import { useUserStore } from "@/stores/user";
const store = useUserStore()
const { user } = toRefs(store)
const fileList = ref<UploadUserFile[]>([
  {
    name: 'plant-1.png',
    url: `http://localhost:3000/images/${user.value.photo}.jpg`,
  },

])
const form = reactive({
  avatar: "",
  password: "",
  nickname: "",
  age: "",
  email: "",
  mobilePhoneNumber: "",
  id: "",
  account: "",
  area: "",
  hobby: "",
  work: "",
  textarea: ""
});

const rules = reactive({
  //   nickname: [{ required: true, message: "昵称不能为空", trigger: "blur" }],
  //   password: [{ required: true, message: "账号密码不能为空", trigger: "blur" }],
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

