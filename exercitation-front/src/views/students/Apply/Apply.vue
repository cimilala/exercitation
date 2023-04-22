<template>
  <div class="apply">
    <div class="title">
      <span>我的实习申请</span>
    </div>
    <div class="search">
      <el-button :icon="Search" type="primary" @click="search">搜索</el-button>
      <el-button :icon="RefreshLeft" type="info" @click="resetForm(ruleFormRef)"
        >重置</el-button
      >
    </div>

    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      class="demo-ruleForm"
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
    <Table
      :table-data="filtableData"
      :options="props"
      :on-apply="handleApplyClick"
      :on-cancel="handleCancelClick"
      :apply="true"
      :cancel="true"
      :delete-show="false"
      :editor="false"
      :width="'180px'"
    />
   
  </div>
</template>

<script setup lang="ts">
import {
  Search,
  RefreshLeft,
} from "@element-plus/icons-vue";
import { updateUserStatus, IntershipList, getUserStatus, addTesting } from "@/utils/api";
import { onMounted, reactive, ref } from "vue";
import { useUserStore } from "@/stores/user";
import {  ElMessageBox, ElNotification, type FormInstance } from "element-plus";
import { storeToRefs } from "pinia";
import { useTestStore } from "@/stores/test";
import { dateFormat } from "@/utils/formatTimePlus";
import { elMessage } from "@/utils/myElMessage";
const store = useUserStore();
let tableData = ref<Apply[]>([]);
let filtableData = ref<Apply[]>([]);
const props = ref<any[]>([
  {
    prop: "id",
    label: "编号",
  },
  {
    prop: "position",
    label: "实习方向",
  },
  {
    prop: "place",
    label: "实习位置",
  },
  {
    prop: "startTime",
    label: "开始时间",
  },
  {
    prop: "endTime",
    label: "结束时间",
  },
  {
    prop: "teacher",
    label: "指导老师",
  },
  {
    prop: "type",
    label: "实习类型",
  },
  {
    prop: "totalNumber",
    label: "限定人数",
  },
  {
    prop: "currentNumber",
    label: "当前人数",
  },
]);
const apply_status = ref(0);
const select_id = ref(0);

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
    (pre, key) => {
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
const handleApplyClick = async (index: number, row: any) => {
  const selectobj = tableData.value.find((item: any) => {
    return item.id === row.id;
  });
  if (selectobj) {
    selectobj.status = 1;
    selectobj.operation = 1;
  }
//修改状态
  updateUserStatus(`/stu_status/${store.user?.id}`, {
    apply_status: 1,
    select_id: row.id,
  });
  //增加任务列表
 const res =await addTesting("/testing",{
  type_id:row.id,
  test_type:'实习申请',
  status:2

})
if(res.status===200){
  const {testList} = storeToRefs(useTestStore())
  testList.value.push({
    ...res.data,
    created_date:dateFormat(res.data.created_date)
  })
  ElNotification({
    title: '申请成功',
    message: "请到个人中心查看审核状态",
    type: 'success',
    showClose: false,
  })


}
};

const handleCancelClick = (index: number, row: Apply) => {
  elMessage( '您确认要取消申请吗?',()=>{
    const selectobj = tableData.value.find((item: any) => {
    return item.id === row.id;
  });
  if (selectobj) {
    selectobj.status = 0;
    selectobj.operation = 0;
  }
  updateUserStatus(`/stu_status/${store.user?.id}`, {
    apply_status: 0,
    select_id: 0,
  });
  })
};

onMounted(async () => {
  const res = await getUserStatus("/stu_status/getOne", {
    userId: store.user?.id,
  });
  if (res.status === 200) {
    select_id.value = res.data.select_id;
    apply_status.value = res.data.apply_status;
  }
});
onMounted(async () => {
  const list = await IntershipList("/internshipapply");
  if (list.status === 200) {
    tableData.value = list.data.map((item: Apply) => {
      if (item.id === select_id.value) {
        return {
          ...item,
          status: apply_status.value,
          operation: apply_status.value,
        };
      } else {
        return { ...item, status: 0, operation: 0 };
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
  .search {
    display: flex;
    justify-content: flex-end;
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
