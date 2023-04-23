<template>
  <Table
    :options="options"
    :tableData="tableData"
    :on-apply="handleApplyClick"
    :on-cancel="handleApplyCancel"
    :on-delete="handleDelete"
    :apply="true"
    :cancel="false"
    :delete-show="true"
    :editor="true"
    :width="'220px'"
  >
    <template v-slot:img>
      <el-table-column prop="proveImages" label="相关材料证明" align="center">
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
</template>

<script setup lang="ts">
import { onActivated, onMounted, ref } from "vue";
import Table from "@/components/Table/Table.vue";
import { usedraftLeave } from "@/stores/draft_leave";
import {
  ElMessage,
  ElMessageBox,
  ElNotification,
  type UploadUserFile,
} from "element-plus";
import { addTesting, getLeaveListByRole, updateLeave } from "@/utils/api";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { dateFormat } from "@/utils/formatTimePlus";
import { useTestStore } from "@/stores/test";
import { elMessage } from "@/utils/myElMessage";
const draftLeaveStore = usedraftLeave();
const fileList = ref<UploadUserFile[]>([]);
const tableData = ref<any[]>([]);
const { testList } = storeToRefs(useTestStore());
const { user } = storeToRefs(useUserStore());
const dialogTableVisible = ref(false);
const handleCancel = () => {
  dialogTableVisible.value = false;
  fileList.value = [];
};
const handleApplyClick = async (index: number, row: any) => {
  const res = await updateLeave(`/internship-leave/${row.id}`, {
    status: 1,
  });
  if (res.status === 200) {
    const testres = await addTesting("/test", {
      type_id: row.id,
      test_type: "请假申请",
      status: 1,
    });
    if (testres.status === 200) {
      testList.value.push({
        ...testres.data,
        created_date: dateFormat(testres.data.created_date),
      });
      ElNotification({
        title: "申请成功",
        message: "请到个人中心查看审核状态",
        type: "success",
        showClose: false,
        duration: 1500,
      });
    }
  }
};
const handleApplyCancel = () => {};
const handleDelete = () => {
  elMessage("您确定要删除这条记录吗?")
};
const handleConfirm = () => {
  dialogTableVisible.value = false;
  fileList.value = [];
};
const prove = (row: any) => {
  dialogTableVisible.value = true;
  row.proveImages.split(",").forEach((item: any) => {
    fileList.value.push({
      name: "prove.jpg",
      url: `http://localhost:3000/images/${item}`,
    });
  });
};
const options = ref<any[]>([
  {
    prop: "id",
    label: "编号",
  },
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
onActivated(() => {
  tableData.value = draftLeaveStore.draftLeaveList;
});

onMounted(async () => {
  const res = await getLeaveListByRole("/internship-leave/byRole", {
    isDraft: true,
    userId: user.value?.id,
    status: 0,
  });
  const { status, data } = res;
  if (status === 200) {
    tableData.value = data;
    draftLeaveStore.draftLeaveList = tableData.value;
  }
});
</script>

<style lang="less" scoped></style>
