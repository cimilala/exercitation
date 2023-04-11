<template>
  <div class="apply">
    <div class="title">
      <span>我的实习申请</span>
    </div>

    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      class="demo-ruleForm"
      label-width="100px"
    >
      <el-form-item label="实习方向" prop="position">
        <el-input v-model="ruleForm.position" />
      </el-form-item>
      <el-form-item label="指导老师" prop="teacher">
        <el-input v-model="ruleForm.teacher" />
      </el-form-item>
      <el-form-item label="实习位置" prop="place">
        <el-input v-model="ruleForm.place" />
      </el-form-item>
      <el-form-item>
        <el-button :icon="Search" type="primary" @click="search"
          >搜索</el-button
        >
        <el-button
          :icon="RefreshLeft"
          type="info"
          @click="resetForm(ruleFormRef)"
          >重置</el-button
        >
      </el-form-item>
      <el-form-item label="人数是否满" prop="isFull">
        <el-select v-model="ruleForm.isFull" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>

    <div class="operation">
      <el-button :icon="Plus" size="small">新增</el-button>
      <el-button :icon="Edit" size="small">修改</el-button>
      <el-button :icon="Delete" size="small">删除</el-button>
      <el-button :icon="View" size="small">详情</el-button>
      <el-button :icon="Upload" size="small"> Upload</el-button>
       
    </div>
    <div class="table">
      <el-table :data="filtableData" border style="width: 100%">
        <el-table-column prop="id" label="编号" align="center" />
        <el-table-column prop="position" label="实习方向" align="center" />
        <el-table-column prop="place" label="实习位置" align="center" />
        <el-table-column prop="startTime" label="开始时间" align="center" />
        <el-table-column prop="endTime" label="结束时间" align="center" />
        <el-table-column prop="teacher" label="指导老师" align="center" />
        <el-table-column prop="type" label="实习类型" align="center" />
        <el-table-column prop="totalNumber" label="限定人数" align="center" />
        <el-table-column prop="currentNumber" label="当前人数" align="center" />
        <el-table-column prop="apply_status" label="审核状态" align="center">
          <template #default="scope">
            <el-tag :type="typeChange(scope)"
              ><span class="check">{{ satusChange(scope) }}</span>
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="opreation" label="操作" align="center">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="handleApplyClick(scope.$index, scope.row)"
              ><span class="isapply">{{ isapply(scope) }}</span></el-button
            >
            <el-button
              link
              type="primary"
              size="small"
              @click="handleApplyCancel(scope.$index, scope.row)"
              >取消</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Delete,
  Plus,
  View,
  Edit,
  Upload,
  Search,
  RefreshLeft,
} from "@element-plus/icons-vue";
import { updateUserStatus, IntershipList, getUserStatus } from "@/utils/api";
import { onMounted, reactive, ref, toRaw } from "vue";
import { useUserStore } from "@/stores/user";
import type { FormInstance } from "element-plus";
const store = useUserStore();
let tableData = ref<Apply[]>([]);
let filtableData = ref<Apply[]>([]);
const apply_status = ref(0)
const select_id = ref(0)
const typeChange = (scope: any) => {
  switch (scope.row.apply_status) {
    case 1:
      return "warning";
    case 2:
      return "success";
    case 3:
      return "danger";
    default:
      break;
  }
};
const satusChange = (scope: any) => {
  switch (scope.row.apply_status) {
    case 0:
      return "待审核";
    case 1:
      return "审核中";
    case 2:
      return "审核成功";
    case 3:
      return "审核失败";
    default:
      break;
  }
};
const isapply = (scope: any) => {
  switch (scope.row.operation) {
    case 0:
      return "申请";
    case 1:
      return "正在申请";
    case 2:
      return "申请成功";
    case 3:
      return "重新申请";
    default:
      break;
  }
};
const options = [
  {
    value: "1",
    label: "是",
  },
  {
    value: "0",
    label: "否",
  },
];
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  position: "",
  teacher: "",
  place: "",
  isFull: "",
});
const search = () => {
  //筛选条件如果不为空加入数组
  const filterArray: string[] = [];
  Object.keys(ruleForm).forEach((item: string) => {
    if (ruleForm[item as keyType] !== "" && item !== "isFull") {
      filterArray.push(item);
    }
  });
  //根据筛选条件过滤数据
  filtableData.value = filterArray.reduce(
    (pre,key) => {
      return pre.filter((item) => {
        return item[key as enumApply] === ruleForm[key as keyType];
      });
    },
    [...tableData.value]
  );
  //判断是否选择isFull
  if (ruleForm.isFull === "0") {
    filtableData.value = filtableData.value.filter((item) => {
      return item.currentNumber !== 0;
    });
  } else if (ruleForm.isFull === "1") {
    filtableData.value = filtableData.value.filter((item) => {
      return item.currentNumber === 0;
    });
  }
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const handleApplyClick = (index: number, row: any) => {
  const selectobj = tableData.value.find((item: any) => {
    return item.id === row.id;
  });
  if (selectobj) {
    selectobj.apply_status = 1;
    selectobj.operation = 1;
  }

  updateUserStatus(`/stu_status/${store.user?.id}`, {
    apply_status: 1,
    select_id: row.id,
  });
};
const handleApplyCancel = (index: number, row: Apply) => {
  const selectobj = tableData.value.find((item: any) => {
    return item.id === row.id;
  });
  if (selectobj) {
    selectobj.apply_status = 0;
    selectobj.operation = 0;
  }
  updateUserStatus(`/stu_status/${store.user?.id}`, {
    apply_status: 0,
    select_id: 0,
  });
};

onMounted(async ()=>{
  const res = await getUserStatus("/stu_status/getOne",{userId:store.user?.id})
  if(res.status===200){
    select_id.value =  res.data.select_id
    apply_status.value = res.data.apply_status
  }
})
onMounted(async () => {
  const list = await IntershipList("/internshipapply");
  if (list.status === 200) {
    tableData.value = list.data.map((item: Apply) => {
      if (item.id === select_id.value) {
        return { ...item, apply_status:apply_status.value, operation: apply_status.value };
      } else {
        return { ...item, apply_status: 0, operation: 0 };
      }
    }) as Apply[];
    filtableData.value = tableData.value;
  }
});
</script>
<style lang="less" scoped>
.apply {
  width: 100%;

  .title {
    height: 40px;
    text-align: center;

    span {
      font-weight: 900;
      font-size: 25px;
    }
  }

  .demo-ruleForm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }

  .table {
    margin-top: 20px;
  }
}
</style>
