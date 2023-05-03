<template>
  <div class="main">
    <MyForm :form-fields="formFields" :colspan="8" ref="formRef" />
    <div class="search">
        <el-button :icon="Search" type="primary" @click="search">搜索</el-button>
        <el-button :icon="RefreshLeft" type="info" @click="resetForm(formRef)"
          >重置</el-button
        >
      </div>
    <MyTable
      :table-fields="tableFields"
      :table-data="filtableData"
      :is-show="false"
    >
      <template #avatar="qsq">
        <div>
          <el-avatar
            :size="50"
            :src="`http://localhost:3000/images/${qsq.stuInfo_photo}`"
          />
        </div>
      </template>
      <template #operation="qsq">
        <el-button
          :icon="Check"
          type="success"
          circle
          @click="check(qsq)"
        ></el-button>
        <el-button :icon="Close" type="danger" circle @click="fail"></el-button>
      </template>
    </MyTable>
    <div class="button">
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, Close } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import {
    Search,
    RefreshLeft,
  } from "@element-plus/icons-vue";
import MyTable from "../MyElComponents/MyTable.vue";
import { getIsApply, getStuInfo, updateUserStatus } from "@/utils/api";
import { elMessage } from "@/utils/myElMessage";
import MyForm from "../MyElComponents/MyForm.vue";
import useResetForm from "@/utils/myUse/useResetForm";
import { tableSearch } from "@/utils/tableSerach";
const tableData = ref<any[]>([]);
  const filtableData = ref<any[]>([]);
  const formRef = ref()
const tableFields = ref<ITableConfig[]>([
  {
    type: "custom",
    prop: "stuInfo_photo",
    label: "学生头像",
    slotName: "avatar",
  },
  {
    type: "normal",
    prop: "user_username",
    label: "用户名",
  },
  {
    type: "normal",
    prop: "stuInfo_name",
    label: "姓名",
  },

  {
    type: "normal",
    prop: "stuInfo_college",
    label: "学院",
  },
  {
    type: "normal",
    prop: "stuInfo_class",
    label: "班级",
  },
  {
    type: "normal",
    prop: "stuInfo_sex",
    label: "性别",
  },
  {
    type: "normal",
    prop: "stuInfo_stu_number",
    label: "学号",
  },
  {
    type: "normal",
    label: "实习方向",
    prop: "internshipApply_position",
  },

  {
    type: "custom",
    label: "操作",
    width: "190px",
    slotName: "operation",
    prop: "operation",
  },
]);
const formFields = ref<IformConfig<m>[]>([
  {
    type: {
      name: "input",
    },
    label: "用户名",
    prop: "user_username",
  },
  {
    type: {
      name: "input",
    },
    label: "姓名",
    prop: "stuInfo_name",
  },
  {
    type: {
      name: "input",
    },
    label: "性别",
    prop: "stuInfo_sex",
  },
  {
    type: {
      name: "input",
    },
    label: "班级",
    prop: "stuInfo_class",
  },
  {
    type: {
      name: "input",
    },
    label: "学院",
    prop: "stuInfo_college",
  },
  
   
]);
const  resetForm = useResetForm()
const check = async (qsq: any) => {
  const res = await updateUserStatus(`/stu_status/${qsq.stu_status_id}`, {
    apply_status: 2,
  });
  if (res.status === 200) {
    tableData.value = tableData.value.filter((item) => {
      return item.stu_status_id !== qsq.stu_status_id;
    });
  }
};
const search = () => {
  const ruleForm: Record<string, any> = formRef.value?.ruleForm;
    filtableData.value = tableSearch(ruleForm, tableData.value);
  };
const fail = (qsq: any) => {
  console.log(qsq);

  // updateUserStatus(`/stu_status/${qsq.stu_status_userId}`,{
  //     apply_status:2,
  //    internship_applyId:0
  // })
  tableData.value = tableData.value.filter((item) => {
    return item.stu_status_userId !== qsq.stu_status_userId;
  });
  elMessage("请说明原因", "info");
};
onMounted(async () => {
  const res = await getIsApply("/stu_status/findIsApply/1");
  if (res.status === 200) {
    tableData.value = res.data;
    console.log(res);
  }
});
</script>

<style></style>
