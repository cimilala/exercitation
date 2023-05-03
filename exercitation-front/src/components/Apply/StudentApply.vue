<template>
    <div class="apply">
      <div class="title">
        <span>集中实习申请</span>
      </div>
      <div class="search">
        <el-button :icon="Search" type="primary" @click="search">搜索</el-button>
        <el-button :icon="RefreshLeft" type="info" @click="resetForm(formRef)"
          >重置</el-button
        >
      </div>
      
      <my-form :form-fields="formFields" ref="formRef" :colspan="8"></my-form>
      <my-table 
      :table-fields="tableFields"
      :tableData="filtableData" 
      >
    <template #operation="rowData">
      <ApplyAndCancel :rowData="rowData" :on-apply="handleApplyClick" :on-cancel="handleCancelClick"/>
    </template>
    </my-table>
    
    </div>
  </template>
  
  <script setup lang="ts">
  import MyTable from "@/components/MyElComponents/MyTable.vue";
  import MyForm from "@/components/MyElComponents/MyForm.vue";
  import ApplyAndCancel from "@/components/MyElComponents/ApplyAndCancel.vue";
  import {
    Search,
    RefreshLeft,
  } from "@element-plus/icons-vue";
  import { updateUserStatus, IntershipList, getUserStatus, addTesting } from "@/utils/api";
  import {  onMounted, ref} from "vue";
  import { useUserStore } from "@/stores/user";
  import { ElNotification} from "element-plus";
  import { storeToRefs } from "pinia";
  import { useTestStore } from "@/stores/test";
  import { dateFormat } from "@/utils/formatTimePlus";
  import { elMessage } from "@/utils/myElMessage";
  import useResetForm from "@/utils/myUse/useResetForm";
  const {user} =storeToRefs(useUserStore()) ;
  const formRef = ref()
  const apply_status = ref(0);
  const internship_applyId = ref(0);
  let tableData = ref<Apply[]>([]);
  let filtableData = ref<Apply[]>([]);
    const  resetForm = useResetForm()
  const tableFields =ref<ITableConfig[]>([
    {
      type:'normal',
      prop: "id",
      label: "编号",
    },
    {
      type:'normal',
      prop: "position",
      label: "实习方向",
    },
    {
      type:'normal',
      prop: "place",
      label: "实习位置",
    },
    {
      type:"time",
      prop: "start_time",
      label: "开始时间",
    },
    {
      type:"time",
      prop: "end_time",
      label: "结束时间",
    },
    {
      type:'normal',
      prop: "teacher",
      label: "指导老师",
    },
    {
      type:'normal',
      prop: "type",
      label: "实习类型",
    },
    {
      type:'normal',
      prop: "total_number",
      label: "限定人数",
    },
    {
      type:'normal',
      prop: "current_number",
      label: "当前人数",
    },
    {
     
      type:"status",
      label:"状态",
      prop:"status"
    },
    {
      type:"operation",
      label:"操作",
      prop:"operation",
      width:"190px"
    },
    {
      type:"custom",
      label:"操作",
      width:"190px",
      slotName:"operation",
      prop:"operation"
    }
    
    
  ]);
  const selectOptions =ref([
    {
      value: "1",
      label: "是",
    },
    {
      value: "0",
      label: "否",
    },
  ]) ;
  const formFields = ref<IformConfig<m>[]>([
    {
      type:{
        name:"input"
      },
      label:"实习方向",
      prop:"position"
    },
    {
      type:{
        name:"input",
      },
      label:"指导老师",
      prop:"teacher"
    },
    {
      type:{
        name:"input"
      },
      label:"实习位置",
      prop:"place"
    },
    {
      type:{
        name:"select",
        options:selectOptions.value,
      },
      label:"人数是否满",
        prop:"isFull"
    }
  ])
  const search = () => {
    const ruleForm:Record<string,any> = formRef.value?.ruleForm;
  
    //筛选条件如果不为空加入数组
    const filterArray: string[] = [];
    Object.keys(ruleForm).forEach((item: string) => {
      if (ruleForm[item] !== "" && item !== "isFull") {
        filterArray.push(item);
      }
    });
    //根据筛选条件过滤数据
    filtableData.value = filterArray.reduce(
      (pre, key) => {
        return pre.filter((item) => {
          return item[key as enumApply] === ruleForm[key];
        });
      },
      [...tableData.value]
    );
    //判断是否选择isFull
    if (ruleForm.isFull === "0") {
      filtableData.value = filtableData.value.filter((item) => {
        return item.current_number !== 0;
      });
    } else if (ruleForm.isFull === "1") {
      filtableData.value = filtableData.value.filter((item) => {
        return item.current_number === 0;
      });
    }
  };
  
  
  const handleApplyClick = async ( row: any) => {
    const selectobj = tableData.value.find((item: any) => {
      return item.id === row.id;
    });
    if (selectobj) {
      selectobj.status = 1;
      selectobj.operation = 1;
    }
  //修改状态
    updateUserStatus(`/stu_status/${user.value?.id}`, {
      apply_status: 1,
      internship_applyId: row.id,
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
      duration:1500
    })
  
  
  }
  };
  
  const handleCancelClick = (row: any) => {
    elMessage( '您确认要取消申请吗?',"warning",()=>{
      const selectobj = tableData.value.find((item: any) => {
      return item.id === row.id;
    });
    if (selectobj) {
      selectobj.status = 0;
      selectobj.operation = 0;
    }
    updateUserStatus(`/stu_status/${user.value?.id}`, {
      apply_status: 0,
      internship_applyId: 0,
    });
    })
  };
  
  onMounted(async () => {
    const res = await getUserStatus("/stu_status/getOne", {
      userId: user.value?.id,
    });
    if (res.status === 200) {
      internship_applyId.value = res.data?.internship_applyId;
      apply_status.value = res.data?.apply_status;
    }
  });
  onMounted(async () => {
    const list = await IntershipList("/internshipapply");
    if (list.status === 200) {
      tableData.value = list.data.map((item: Apply) => {
        if (item.id === internship_applyId.value) {
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
  