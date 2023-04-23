<template>
  <div class="change">
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
      :rules="rules"
    >
      <el-form-item label="原实习单位" prop="initInter">
        <el-input v-model.trim="ruleForm.initInter" />
      </el-form-item>
      <el-form-item label="新实习单位" prop="changeInter">
        <el-input v-model.trim="ruleForm.changeInter" />
      </el-form-item>

      <el-form-item label="原实习方向" prop="initPosition">
        <el-input v-model.trim="ruleForm.initPosition" />
      </el-form-item>

      <el-form-item label="新实习方向" prop="changePosition">
        <el-input v-model.trim="ruleForm.changePosition" />
      </el-form-item>
    </el-form>
    <div class="editor">
      <span>原因</span>
      <BasicEditor @valueHtml="valueHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElNotification, type FormInstance} from "element-plus";
import { reactive, ref} from "vue";
import BasicEditor from "@/components/BasicEditor/BasicEditor.vue";
import { Check, Position, RefreshLeft } from "@element-plus/icons-vue";
import { usedraftChange } from "@/stores/draft_change";
import { addChange, addTesting } from "@/utils/api";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { useTestStore } from "@/stores/test";
import { dateFormat } from "@/utils/formatTimePlus";
import { formToRules } from "@/utils/formRules";
const editValue = ref("");
const valueHtml = (valueHtml: string) => {
  editValue.value = valueHtml;
};


const draftChangeStore = usedraftChange();
const { testList } = storeToRefs(useTestStore());
const userStore = useUserStore();
//表单校验
const { user } = storeToRefs(userStore);
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  initInter: "",
  changeInter: "",
  initPosition: "",
  changePosition: "",
});

const rules =formToRules(ruleForm)
const saveDraft = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      console.log("submit!");
      const res = await addChange("internship-change", {
        ...ruleForm,
        status: 0,
        operation: 0,
        reason: editValue.value,
        isDraft: true,
        userId: user.value?.id,
      });
      const { status, data } = res;
      if (status === 200) {
        draftChangeStore.draftChangeList.push(data);
        ElNotification({
            title: "保存成功",
            message: "请到草稿箱中查看",
            type: "success",
            showClose: false,
            duration:1500
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
      const res = await addChange("/internship-change", {
        ...ruleForm,
        status: 1,
        operation: 1,
        reason: editValue.value,
        isDraft: false,
        userId: user.value?.id,
      });
      if (res.status === 200) {
        const testres = await addTesting("/test", {
          type_id: res.data.id,
          test_type: "实习变更",
          status: 1,
        });
        if (testres.status === 200) {
          testList.value.push({
            ...testres.data,
            created_date: dateFormat(testres.data.created_date),
          });
          ElNotification({
            title: "提交成功",
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
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style lang="less" scoped>
.change {
  width: 100%;

  .demo-ruleForm {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
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
}
</style>
