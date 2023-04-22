<template>
  <div class="leave">
    <div class="operation">
      <el-button type="success" :icon="Check" @click="saveDraft(ruleFormRef)"
        >保存草稿箱</el-button
      >
      <el-button
        type="primary"
        :icon="Position"
        @click="submitForm(ruleFormRef)"
        >提交</el-button
      >
      <el-button type="info" :icon="RefreshLeft" @click="resetForm(ruleFormRef)"
        >重置</el-button
      >
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      class="demo-ruleForm"
      label-width="150px"
      :rules="rules"
    >
      <el-form-item label="请假类型" prop="type">
        <el-select v-model="ruleForm.type" class="m-2" placeholder="Select">
          <el-option value="事假" label="事假" />
          <el-option value="病假" label="病假" />
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间" prop="start_time">
        <el-date-picker
          v-model="ruleForm.start_time"
          type="date"
          placeholder="Pick a day"
        />
      </el-form-item>
      <el-form-item label="结束时间" prop="end_time">
        <el-date-picker
          v-model="ruleForm.end_time"
          type="date"
          placeholder="Pick a day"
        />
      </el-form-item>
      <el-form-item label="请假天数" prop="days">
        <el-input v-model="ruleForm.days" type="number" />
      </el-form-item>

      <el-form-item label="请假事由" prop="reason">
        <el-input
          v-model="ruleForm.reason"
          :rows="8"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
      <el-form-item label="相关材料证明" prop="prove">
        <Upload :fileList="fileList" @imgurl="imgurlEvent" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ElNotification, type FormInstance, type UploadUserFile } from "element-plus";
import { reactive, ref } from "vue";
import { Check, Position, RefreshLeft } from "@element-plus/icons-vue";
import Upload from "@/components/Upload/Upload.vue";
import { usedraftLeave } from "@/stores/draft_leave";
import { addLeave, addTesting } from "@/utils/api";
import formateTime from "@/utils/formatTime";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import { useTestStore } from "@/stores/test";
import { dateFormat } from "@/utils/formatTimePlus";
import { formToRules } from "@/utils/formRules";
const active = ref(1);
const imgurl = ref("");
const { user } = storeToRefs(useUserStore());
const draftLeaveStore = usedraftLeave();
const { testList } = storeToRefs(useTestStore());
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  start_time: "",
  end_time: "",
  proveImages: [] as Array<string>,
  days: "",
  reason: "",
  type: "",
});
const rules =formToRules(ruleForm)
const fileList = ref<UploadUserFile[]>([]);

const imgurlEvent = (value: string) => {
  imgurl.value = value;
  ruleForm.proveImages.push(value);
};
const saveDraft = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      console.log("submit!");
      const leave = {
        ...ruleForm,
        start_time: formateTime(ruleForm.start_time),
        end_time: formateTime(ruleForm.end_time),
        days: Number(ruleForm.days),
        status: 0,
        isDraft: true,
        operation: 0,
        proveImages: String(ruleForm.proveImages),
        userId: user.value?.id,
      };
      const res = await addLeave("/internship-leave", leave);
      const { status, data } = res;
      if (status === 200) {
        draftLeaveStore.draftLeaveList.push(data);
        ElNotification({
            title: "保存成功",
            message: "请到草稿箱中查看",
            type: "success",
            showClose: false,
          });
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      const leave = {
        ...ruleForm,
        start_time: formateTime(ruleForm.start_time),
        end_time: formateTime(ruleForm.end_time),
        days: Number(ruleForm.days),
        status: 0,
        isDraft: true,
        operation: 0,
        proveImages: String(ruleForm.proveImages),
        userId: user.value?.id,
      };
      const res = await addLeave("/internship-leave", {
        ...leave,
        status: 1,
        operation: 1,
      });
      if (res.status === 200) {
        const testres = await addTesting("/test", {
          type_id:res.data.id,
          test_type:"请假申请",
          status: 1,
        });
        if(testres.status === 200) {
          testList.value.push({
            ...testres.data,
            created_date: dateFormat(testres.data.created_date),
          });
          ElNotification({
            title: "提交成功",
            message: "请到个人中心查看审核状态",
            type: "success",
            showClose: false,
          });
        }
      }
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
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
  /* display: flex; */
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
.el-input {
  width: 219.27px;
}
.el-textarea {
  width: 219.27px;
}
</style>
