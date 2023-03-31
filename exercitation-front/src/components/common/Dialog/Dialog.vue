<template>
  <el-dialog
    v-model="dialogVisible"
    title="修改密码"
    width="30%"
    :before-close="handleClose"
    draggable
  >
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
      status-icon
      :rules="rules"
      class="demo-ruleForm"
    >
      <el-form-item label="原密码" prop="password">
        <el-popover
          placement="top-start"
          :width="200"
          :visible="passwordVisible"
          content="原密码不正确"
        >
          <template #reference>
            <el-input type="password" v-model="formLabelAlign.password" />
          </template>
        </el-popover>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="formLabelAlign.newPassword" />
      </el-form-item>
      <el-form-item label="确认新密码" prop="sure">
        <el-popover
          placement="top-start"
          :width="200"
          :visible="sureVisible"
          content="密码不一致"
        >
          <template #reference>
            <el-input type="password" v-model="formLabelAlign.sure" />
          </template>
        </el-popover>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
          :plain="true"
          type="primary"
          @click="updatePassword(ruleFormRef)"
        >
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { h, nextTick, reactive, ref, toRefs } from "vue";
import { ElMessageBox, ElNotification, type FormInstance } from "element-plus";
import mitt from "@/utils/mitt";
import { reqStuLogin, UpdateInfo } from "@/utils/api";
import { useUserStore } from "@/stores/user";
import "element-plus/es/components/notification/style/css";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useUserStore();
const { user } = toRefs(store);
const dialogVisible = ref(false);
const ruleFormRef = ref<FormInstance>();
const passwordVisible = ref(false);


const sureVisible = ref(false);
//表单校验
const rules = reactive({
  sure: [{ required: true, message: "请再次输入新密码", trigger: "blur" }],
  password: [{ required: true, message: "请输入原密码", trigger: "blur" }],
  newPassword: [{ required: true, message: "请输入新密码", trigger: "blur" }],
});

const updatePassword = (formEl: FormInstance | undefined) => {
  console.log(formEl);
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      const userParam = {
        username: user.value.username,
        password: formLabelAlign.password,
      };
      reqStuLogin("/login", userParam).then((data) => {
        if (data.status == 200) {
          if (formLabelAlign.newPassword === formLabelAlign.sure) {
            const updateParam = {
              password: formLabelAlign.newPassword,
            };
            UpdateInfo(`/stuUpdate/${user.value.id}`, updateParam).then(
              (data) => {
                if (data.status === 200) {
                  ElNotification({
                    title: "通知",
                    message: h("i", { style: "color: green" }, "修改成功"),
                    showClose: false,
                  });
                  localStorage.removeItem("token")
                  router.replace("/login");
                  dialogVisible.value = false;
                }
              }
            );
          } else {
            sureVisible.value = true;
            setTimeout(() => {
              sureVisible.value = false;
            }, 2000);
          }
        } else {
          passwordVisible.value = true;

          setTimeout(() => {
            passwordVisible.value = false;
          }, 2000);
        }
      });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
const formLabelAlign = reactive({
  password: "",
  newPassword: "",
  sure: "",
});
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
mitt.on("dialogVisible", (value) => {
  dialogVisible.value = value as boolean;
  nextTick(()=>{
    ruleFormRef.value?.resetFields()
  })
  
});

</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
