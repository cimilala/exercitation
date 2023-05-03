<template>
  <div class="main">
  
    <MyTable :table-fields="tableFields" :table-data="tableData">
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
      <template #prave="qsq">
        <el-button type="primary" link @click="showDetail(qsq)">详情</el-button>
      </template>
      <template #info="qsq">
        <el-button
          type="primary"
          link
        >点击查看学生信息</el-button>

      </template>
    </MyTable>
    <MyDialog title="相关材料" ref="mydialog">
      <Upload :fileList="fileList" ref="myupload"></Upload>
      <!-- <MyForm :form-fields="formFields" :colspan="24" ref="myForm"></MyForm> -->
    </MyDialog>
  </div>
</template>

<script setup lang="ts">
import { getIsChange, updateSelfStatus } from "@/utils/api";
import { Check, Close } from "@element-plus/icons-vue";
import { nextTick, onMounted, ref } from "vue";
import MyTable from "../MyElComponents/MyTable.vue";
import Upload from "../Upload/Upload.vue";
import MyDialog from "../MyElComponents/MyDialog.vue";
import MyForm from "../MyElComponents/MyForm.vue";
import type { UploadUserFile } from "element-plus";
const tableData = ref<any[]>([]);
const mydialog = ref();
const myupload = ref();
const myForm = ref()
const fileList = ref<UploadUserFile[]>([]);
    const formFields = ref<IformConfig<m>[]>([
    {
      type:{
        name:"input"
      },
      label:"用户名",
      prop:"username",
    },
    {
      type:{
        name:"input",
      },
      label:"姓名",
      prop:"name"
    },
    {
      type:{
        name:"input"
      },
      label:"性别",
      prop:"sex",
    },
    {
      type:{
        name:"input"
      },
      label:"班级",
      prop:"class",
    },
    {
      type:{
        name:"input"
      },
      label:"学院",
      prop:"collage",
    },
    
  ])
const tableFields = ref<ITableConfig[]>([
  {
    type: "custom",
    prop: "stuInfo_photo",
    label: "学生头像",
    slotName: "avatar",
  },
  {
    type: "normal",
    prop: "stuInfo_name",
    label: "姓名",
  },
  {
    type: "normal",
    prop: "stuInfo_class",
    label: "班级",
  },
  {
    type: "normal",
    prop: "user_username",
    label: "用户名",
  },
  {
    type: "normal",
    prop: "self_apply_company_name",
    label: "公司名称",
  },
  {
    type: "normal",
    prop: "self_apply_place",
    label: "公司位置",
  },
  {
    type: "normal",
    prop: "self_apply_position",
    label: "职位名称",
  },
  {
    type: "normal",
    prop: "self_apply_start_time",
    label: "开始时间",
  },

  {
    type: "normal",
    prop: "self_apply_end_time",
    label: "结束时间",
  },

  {
    type: "custom",
    prop: "self_apply_prave",
    slotName: "prave",
    label: "相关材料证明",
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
    type:"custom",
    label:"学生信息",
    prop:"aa",
    slotName:"info"
  },

  {
    type: "custom",
    label: "操作",
    width: "190px",
    slotName: "operation",
    prop: "operation",
    fixed: "right",
  },
]);
const showDetail = (qsq: any) => {
  mydialog.value.dialogVisible = true;
  
  nextTick(() => {
    myupload.value.fileList = [];
    qsq.self_apply_prave.split(",").forEach((item: any) => {
      myupload.value.fileList.push({
        name: "prove.jpg",
        url: `http://localhost:3000/images/${item}`,
      });
    });
    // myForm.value.ruleForm.name = qsq.user_username
  });
  
};
const check = async (qsq: any) => {
  const res = await updateSelfStatus(`/self-apply/${qsq.self_apply_id}`, {
    status: 2,
  });
  if (res.status === 200) {
    tableData.value = tableData.value.filter((item) => {
      return item.self_apply_id !== qsq.self_apply_id;
    });
  }
};

const fail = (qsq: any) => {};
onMounted(async () => {
  const res = await getIsChange("/self-apply/getIsSelf/1");
  if (res.status === 200) {
    tableData.value = res.data;
  }
  console.log(res);
});
</script>

<style></style>
