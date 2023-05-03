<template>
  <div class="main">
    <div class="title">
      <span>我的实习日报</span>
    </div>
    <div class="daynews" >
      <div class="search">
      <el-button :icon="Search" type="primary" @click="search"
          >搜索</el-button
        >
        <el-button
          :icon="RefreshLeft"
          type="info"
          @click="resetForm(myformRef)"
          >重置</el-button
        >
    </div>
    <my-form
        :form-fields="formFields"
        ref="myformRef"
        :colspan="8"
      >
      </my-form>
    <Table
    :table-data="filtableData"
    :options="options"
    :add="addDayNews"
    :apply="false"
    :cancel="false"
    :delete-show="true"
    :editor="false"
    :on-delete="handleDelete"

    >
    <template v-slot:detail>
      <el-table-column property="content" label="内容" align="center">
          <template #default="scope">
            <el-button link type="primary" @click="content(scope.row)"
              >详情</el-button
            >
          </template>
        </el-table-column>
    </template>
    
  </Table>
    </div>
   
  </div>
  <el-dialog v-model="dialogTableVisible" title="日报内容">
    <el-input
      v-model="textarea"
      :rows="18"
      type="textarea"
      placeholder="Please input"
  /></el-dialog>
</template>

<script setup lang="ts">
import { onActivated, onMounted, reactive, ref } from "vue";
import router from "@/router";
import { Search, RefreshLeft } from "@element-plus/icons-vue";
import {  getDayNewsListByRole } from "@/utils/api";
import { elMessage } from "@/utils/myElMessage";
import { tableSearch } from "@/utils/tableSerach";
import Table from "@/components/Table/Table.vue";
import MyForm from "@/components/MyElComponents/MyForm.vue";
import useResetForm from "@/utils/myUse/useResetForm";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
const tableData = ref<any[]>([]);
const filtableData = ref<Apply[]>([]);
const {user }= storeToRefs(useUserStore())
  const myformRef = ref();
const formFields = ref<
  IformConfig<ISelectType | ICustom | IInput | IDatePicker>[]
>([
  {
    type: {
      name: "input",
    },
    prop: "title",
    label: "标题",
  },
  {
    type: {
      name: "data-picker",
    },
    prop: "time",
    label: "日期",
  },
  {
    type: {
      name: "input",
    },
    prop: "week",
    label: "周次",
  },
 
]);
const options = ref<any[]>([
  {
    prop:"id",
    label:"编号"
  },

  {
    prop: "title",
    label: "标题",
  },
  {
    prop: "unit",
    label: "实习单位",
  },
  {
    prop: "time",
    label: "日期",
  },
  {
    prop: "week",
    label: "周次",
  },
]);
const textarea = ref("");
const ruleForm = reactive({
  week: "",
  time: "",
  title:""
});
const  resetForm = useResetForm()
const dialogTableVisible = ref(false);
const content = (row: any) => {
  dialogTableVisible.value = true;
  textarea.value = row.content;
};
const search = () => {
  filtableData.value = tableSearch(ruleForm, tableData.value);
};
const addDayNews = () => {
  router.push({ path: "/addNews"});
};
const handleDelete = ()=>{
  elMessage('您确定要删除这条记录吗?')
}

// const resetForm = (formEl: InstanceType<typeof MyForm> ) => {
//   if (!formEl.ruleFormRef) return;
//   formEl.ruleFormRef.resetFields();
// };
onMounted(async ()=>{
     const res=  await getDayNewsListByRole("/day-news/byRole",{status:2,userId:user.value?.id})
    const {status,data} = res
    if(status === 200){
      tableData.value = data
      filtableData.value = tableData.value;
    }
     
})

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
.search{
  display: flex;
  justify-content: flex-end;
}
</style>
