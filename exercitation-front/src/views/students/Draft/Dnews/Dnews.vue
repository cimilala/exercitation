<template>
  <Table
    :table-data="tableData"
    :options="options"
  :on-apply="handleApplyClick"
  :on-cancel="handleApplyCancel"
  :on-delete="handleDelete"
  :apply="true"
    :cancel="false"
    :delete-show="true"
    :editor="true"
    :width="'220px'"
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
  <el-dialog v-model="dialogTableVisible" title="日报内容">
    <el-input
      v-model="textarea"
      :rows="18"
      type="textarea"
      placeholder="Please input"
  /></el-dialog>
</template>

<script setup lang="ts">
import { onActivated, onMounted, ref } from "vue";
import Table from "@/components/Table/Table.vue";
import { addTesting, getDayNewsListByRole, updateDayNews } from "@/utils/api";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import { usedraftNews } from "@/stores/draft_news";
import { dateFormat } from "@/utils/formatTimePlus";
import { useTestStore } from "@/stores/test";
import {ElNotification } from "element-plus";
import { elMessage } from "@/utils/myElMessage";
const { user } = storeToRefs(useUserStore());
const { testList } = storeToRefs(useTestStore());
const {draftNewsList} =storeToRefs(usedraftNews()) 
const tableData = ref<any[]>([]);
const dialogTableVisible = ref(false);
const textarea = ref("");
const options = ref<any[]>([
  {
    prop: "id",
    label: "编号",
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
const content = (row: any) => {
  dialogTableVisible.value = true;
  textarea.value = row.content;
};
const handleApplyClick = async (index: number, row: any) => {
  const res =await updateDayNews(`/day-news/${row.id}`,{
    status:1
  })
  if(res.status===200){
    const testres = await addTesting("/test", {
          type_id: row.id,
          test_type: "实习日报",
          status: 1,
        });
        if(testres.status===200){
          testList.value.push({
            ...testres.data,
            created_date:dateFormat(testres.data.created_date)
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
const handleDelete = ()=>{
  elMessage("您确定要删除这条记录吗?")
}
const handleApplyCancel = (index: number, row: Apply) => {

};
onActivated(() => {
  tableData.value =draftNewsList.value;
});
onMounted(async () => {
  const res = await getDayNewsListByRole("/day-news/byRole", {
    isDraft: true,
    userId: user.value?.id,
    status:0
  });
  const { status, data } = res;
  if (status === 200) {
    tableData.value = data;
    draftNewsList.value= tableData.value;
  }
});
</script>

<style lang="less" scoped></style>
