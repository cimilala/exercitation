<template>
  <div class="main">
    <div class="title">
      <span>实习变更</span>
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
    :table-data="tableData"
    :options="options"
    :add="addDayNews"
    :apply="false"
    :cancel="false"
    :delete-show="true"
    :editor="false"
    :on-delete="handleDelete"
    >
    <template v-slot:detail>
      <el-table-column property="reason" label="原因" align="center">
          <template #default="scope">
            <el-button link type="primary" @click="reason(scope.row)"
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
  <el-dialog v-model="dialogTableVisible" title="原因">
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
import {  getChangeListByRole} from "@/utils/api";
import { elMessage } from "@/utils/myElMessage";
import type { FormInstance } from "element-plus";
const tableData = ref<any[]>([]);
const isShow = ref(true)
const options = ref<any[]>([
  {
    prop:"id",
    label:"编号"
  },

  {
    prop: "initInter",
    label: "原实习单位",
  },
  {
    prop: "changeInter",
    label: "新实习单位",
  },
  {
    prop: "initPosition",
    label: "原实习方向",
  },
  {
    prop: "changePosition",
    label: "新实习方向",
  },
]);
const textarea = ref("");
const ruleForm = reactive({
  week: "",
  time: "",
  title:""
});
const dialogTableVisible = ref(false);
const reason = (row: any) => {
  dialogTableVisible.value = true;
  textarea.value = row.reason;
};
const search = () => {};
const ruleFormRef = ref<FormInstance>();
const addDayNews = () => {
  isShow.value = false
  router.push({ path: "/change/addChange"});
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const handleDelete = ()=>{
  elMessage('您确定要删除这条记录吗?')
}
onMounted(async ()=>{
     const res=  await getChangeListByRole("/internship-change/byRole",{status:2})
    const {status,data} = res
    if(status === 200){
      tableData.value = data
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
