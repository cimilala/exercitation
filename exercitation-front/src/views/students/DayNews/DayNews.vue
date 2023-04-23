<template>
  <div class="main">
    <div class="title">
      <span>我的实习日报</span>
    </div>
    <div class="daynews" v-if="isShow">
      <div class="search">
      <el-button :icon="Search" type="primary" @click="search"
          >搜索</el-button
        >
        <el-button
          :icon="RefreshLeft"
          type="info"
          @click="resetForm(ruleFormRef)"
          >重置</el-button
        >
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      class="demo-ruleForm"
     
    >
    <el-form-item label="日期" prop="time">
        <el-input v-model="ruleForm.time" />
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" />
      </el-form-item>
      <el-form-item label="周次" prop="week">
        <el-input v-model="ruleForm.week" />
      </el-form-item>
    </el-form>
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
    <div class="router" v-else >
      <router-view v-slot="{Component}">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
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
import type { FormInstance } from "element-plus";
import { tableSearch } from "@/utils/tableSerach";
const tableData = ref<any[]>([]);
const filtableData = ref<Apply[]>([]);
const isShow = ref(true)
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
const dialogTableVisible = ref(false);
const content = (row: any) => {
  dialogTableVisible.value = true;
  textarea.value = row.content;
};
const search = () => {
  filtableData.value = tableSearch(ruleForm, tableData.value);
};
const ruleFormRef = ref<FormInstance>();
const addDayNews = () => {
  isShow.value = false
  router.push({ path: "/dayNews/addNews"});
};
const handleDelete = ()=>{
  elMessage('您确定要删除这条记录吗?')
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
onMounted(async ()=>{
     const res=  await getDayNewsListByRole("/day-news/byRole",{status:2})
    const {status,data} = res
    if(status === 200){
      tableData.value = data
      filtableData.value = tableData.value;
    }
     
})
onActivated(()=>{
  
  isShow.value=true
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
