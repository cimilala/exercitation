<template>
    <div class="main">
      <div class="title">
        <span>自主实习变更</span>
      </div>
      <div class="change" >
        <div class="search">
          <el-button :icon="Search" type="primary" @click="search"
            >搜索</el-button
          >
          <el-button :icon="RefreshLeft" type="info" @click="resetForm(myformRef)"
            >重置</el-button
          >
        </div>
        <my-form
          :form-fields="formFields"
          ref="myformRef"
          :colspan="8"
        >
        </my-form>
        <my-table
          :table-data="filtableData"
          :table-fields="tableFields"
          :add="addDayNews"
        >
          <template #detail="rowData">
            <el-button link type="primary" @click="reason(rowData)"
              >查看</el-button
            >
          </template>
          <template #operation="rowData">
            <el-button type="primary" size="small" :icon="View" @click="detailClick(rowData)">详情</el-button>
            <el-button type="danger" size="small" :icon="Delete" @click="deleteClick">删除</el-button>
          </template>
        </my-table>
      </div>
    <MyDialog :title="title" :width="dialogWidth" ref="mydialog">
      <template v-if="title==='变更原因'">
        <el-input type="textarea" :rows="3" v-model="textarea" />
      </template>
      <template v-else-if="title==='变更详情'">
        <my-form
        :form-fields="formFields"
        ref="myformRefDialog"
        :colspan="24"
      >
      </my-form>
    </template>
    </MyDialog>
  </div>
  </template>
  
  <script setup lang="ts">
  import { nextTick, onActivated, onMounted, ref } from "vue";
  import { View, Delete } from "@element-plus/icons-vue";
  import router from "@/router";
  import MyDialog from "@/components/MyElComponents/MyDialog.vue";
  import { Search, RefreshLeft } from "@element-plus/icons-vue";
  import { getChangeListByRole } from "@/utils/api";
  import { elMessage } from "@/utils/myElMessage";
  import MyForm from "@/components/MyElComponents/MyForm.vue";
  import MyTable from "@/components/MyElComponents/MyTable.vue";
  import { tableSearch } from "@/utils/tableSerach";
  import useResetForm from "@/utils/myUse/useResetForm";
  
  const title = ref("");
  const tableData = ref<any[]>([]);
  const filtableData = ref<any[]>([]);
  const textarea = ref("");
  const myformRef = ref();
  const myformRefDialog = ref()
  const mydialog = ref();
  const dialogWidth = ref("");
  const  resetForm = useResetForm()
  const tableFields = ref<ITableConfig[]>([
    {
      type: "selection",
      prop: "selection",
    },
    {
      type: "normal",
      label: "原实习单位",
      prop: "initInter",
    },
    {
      type: "normal",
      label: "新实习单位",
      prop: "changeInter",
    },
    {
      type: "normal",
      label: "原实习方向",
      prop: "initPosition",
    },
    {
      type: "normal",
      label: "新实习方向",
      prop: "changePosition",
    },
    {
      type: "custom",
      slotName: "detail",
      prop: "reason",
      label: "原因",
    },
    {
      type:"status",
      prop:"status",
      label:"状态"
    },
    {
      type: "custom",
      slotName: "operation",
      label: "操作",
      prop: "operation",
    },
  ]);
  const formFields = ref<
    IformConfig<ISelectType | ICustom | IInput | IDatePicker>[]
  >([
    {
      type: {
        name: "input",
      },
      prop: "initInter",
      label: "原实习单位",
    },
    {
      type: {
        name: "input",
      },
      prop: "changeInter",
      label: "新实习单位",
    },
    {
      type: {
        name: "input",
      },
      prop: "initPosition",
      label: "原实习方向",
    },
    {
      type: {
        name: "input",
      },
      prop: "changePosition",
      label: "新实习方向",
    },
  ]);
  
  const reason = (row: any) => {
    title.value = "变更原因";
    dialogWidth.value = "30%";
    mydialog.value.dialogVisible = true;
    textarea.value = row.reason;
  };
  const search = () => {
    const ruleForm: Record<string, any> = myformRef.value?.ruleForm;
    filtableData.value = tableSearch(ruleForm, tableData.value);
  };
  const addDayNews = () => {
    router.push("/addChange");
  };
  
  const deleteClick = () => {
    elMessage("您确定要删除这条记录吗?");
  };
  const detailClick = (rowData:any)=>{
    console.log(rowData);
    title.value = "变更详情";
    dialogWidth.value = "40%";
    mydialog.value.dialogVisible = true;
   
    console.log( Object.keys(rowData));
    
    nextTick(()=>{
      console.log(myformRefDialog.value?.ruleForm.changeInter);
      Object.keys(rowData).forEach((key:string)=>{
        myformRefDialog.value.ruleForm[key]  = rowData[key]
      })
     
    })
    
    
  }
  onMounted(async () => {
    const res = await getChangeListByRole("/internship-change/byRole", {
      status: 2,
    });
    const { status, data } = res;
    if (status === 200) {
      tableData.value = data;
      filtableData.value = tableData.value;
    }
  });
  
  
  </script>
  
  <style scoped>
  .main {
    width: 100%;
  }
  .title {
    height: 40px;
    text-align: center;
  }
  
  .title span {
    font-weight: 900;
    font-size: 25px;
  }
  .table {
    margin-top: 20px;
  }
  .demo-ruleForm {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .search {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  </style>
  