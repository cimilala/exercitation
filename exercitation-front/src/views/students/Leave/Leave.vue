<template>
  <div class="main">
    <div class="title">
      <span>请假申请</span>
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
        <el-form-item label="请假类型" prop="type">
          <el-input v-model="ruleForm.type" />
        </el-form-item>
        <el-form-item label="开始时间" prop="start_time">
          <el-date-picker
            v-model="ruleForm.start_time"
            type="date"
            placeholder="Pick a day"
            :size="size"
          />
        </el-form-item>
        <el-form-item label="结束时间" prop="end_time">
          <el-date-picker
            v-model="ruleForm.end_time"
            type="date"
            placeholder="Pick a day"
           
            :size="size"
          />
        </el-form-item>
      </el-form>
      <Table
        :options="options"
        :tableData="filtableData"
        :add="addLeave"
        :apply="false"
        :cancel="false"
        :delete-show="true"
        :editor="false"
        :on-delete="handleDelete"
      >
        <template v-slot:img>
          <el-table-column
            prop="proveImages"
            label="相关材料证明"
            align="center"
          >
            <template #default="scope">
              <el-button link type="primary" @click="prove(scope.row)"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </template>
      </Table>
      <el-dialog v-model="dialogTableVisible" title="相关材料证明">
        <Upload :fileList="fileList" />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="handleCancel">取消</el-button>
            <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <div class="router" v-else>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
  <el-dialog v-model="dialogTableVisible" title="相关材料证明">
    <Upload :fileList="fileList" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onActivated, onMounted, reactive, ref } from "vue";
import router from "@/router";
import { Search, RefreshLeft } from "@element-plus/icons-vue";
import { getChangeListByRole } from "@/utils/api";
import { elMessage } from "@/utils/myElMessage";
import type { FormInstance, UploadUserFile } from "element-plus";
import { tableSearch } from "@/utils/tableSerach";
import formateTime from "@/utils/formatTime";
import Table from "@/components/Table/Table.vue";
const tableData = ref<any[]>([]);
const isShow = ref(true);
const fileList = ref<UploadUserFile[]>([]);
const size = ref<"default" | "large" | "small">("default");

const filtableData = ref<Apply[]>([]);
const options = ref<any[]>([
  {
    prop: "start_time",
    label: "开始时间",
  },
  {
    prop: "end_time",
    label: "结束时间",
  },
  {
    prop: "reason",
    label: "请假事由",
  },
  {
    prop: "type",
    label: "请假类型",
  },
]);
const ruleForm = reactive({
  type: "",
  end_time: "",
  start_time: "",
});
const prove = (row: any) => {
  dialogTableVisible.value = true;
  row.proveImages.split(",").forEach((item: any) => {
    fileList.value.push({
      name: "prove.jpg",
      url: `http://localhost:3000/images/${item}`,
    });
  });
};
const handleDelete = () => {
  elMessage("您确定要删除这条记录吗?");
};
const handleCancel = () => {
  dialogTableVisible.value = false;
  fileList.value = [];
};
const handleConfirm = () => {
  dialogTableVisible.value = false;
  fileList.value = [];
};
const dialogTableVisible = ref(false);
const search = () => {
  filtableData.value = tableSearch(
    {...ruleForm,
      end_time:ruleForm.end_time&&formateTime(ruleForm.end_time),
    start_time:ruleForm.start_time&&formateTime(ruleForm.start_time)
    }, 
    tableData.value);
};
const ruleFormRef = ref<FormInstance>();
const addLeave = () => {
  isShow.value = false;
  router.push({ path: "/leave/addLeave" });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
onMounted(async () => {
  const res = await getChangeListByRole("/internship-leave/byRole", {
    status: 2,
  });
  const { status, data } = res;
  if (status === 200) {
    tableData.value = data;
    filtableData.value = tableData.value;
  }
});
onActivated(() => {
  isShow.value = true;
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
}
</style>
