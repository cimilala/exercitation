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
    </MyTable>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Check, Close } from "@element-plus/icons-vue";
import MyTable from "../MyElComponents/MyTable.vue";
import { getIsChange, updateChange } from "@/utils/api";
const tableData = ref<any[]>([]);
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
    prop: "internship_change_initInter",
    label: "原实习单位",
  },
  {
    type: "normal",
    prop: "internship_change_changeInter",
    label: "新实习单位",
  },
  {
    type: "normal",
    prop: "internship_change_initPosition",
    label: "原实习方向",
  },
  {
    type: "normal",
    prop: "internship_change_changePosition",
    label: "新实习方向",
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
    type: "custom",
    label: "操作",
    width: "190px",
    slotName: "operation",
    prop: "operation",
    fixed: "right",
  },
]);
const check = async (qsq: any) => {
 const res = await updateChange(`/internship-change/${qsq.internship_change_id}`, {
    status: 2,
  });
  if(res.status===200){
    tableData.value = tableData.value.filter((item) => {
    return item.internship_change_id !== qsq.internship_change_id;
  });
  }
};

const fail = (qsq: any) => {};
onMounted(async () => {
  const res = await getIsChange("/internship-change/getIsChange/1");
  if (res.status === 200) {
    tableData.value = res.data;
  }
  console.log(res);
});
</script>

<style></style>
