<template>
    <div class="change">
        <div class="title">
      <span>自主实习申请</span>
    </div>
      <div class="operation">
       
        <el-button
          type="primary"
          :icon="Position"
          @click="submitForm(myformRef)"
          v-if="!isPersonApply.length"
          >提交</el-button
        >
        <el-button type="success" disabled v-else>已提交</el-button>
        <el-button type="info" :icon="RefreshLeft" @click="resetForm(myformRef)"
          >重置</el-button
        >
      </div>
      <MyForm :colspan="8" :form-fields="formFields"  ref="myformRef">
    <template #upload>
        <Upload :fileList="fileList" @imgurl="imgurlEvent" ref="uploadRef"/>
    </template>
    </MyForm>
     
    </div>
  </template>
  
  <script setup lang="ts">
  import { ElNotification,  type UploadUserFile} from "element-plus";
  import { onMounted, reactive, ref} from "vue";
  import {  Position, RefreshLeft } from "@element-plus/icons-vue";
  import {  addPersonApply, addTesting, getPseronApplyByRole } from "@/utils/api";
  import { useUserStore } from "@/stores/user";
  import { storeToRefs } from "pinia";
  import { useTestStore } from "@/stores/test";
  import { dateFormat } from "@/utils/formatTimePlus";
  import MyForm from "@/components/MyElComponents/MyForm.vue";
  import Upload from "@/components/Upload/Upload.vue";
import useResetForm from "@/utils/myUse/useResetForm";
import formateTime from "@/utils/formatTime";
 const isPersonApply = ref<any[]>([])
  const fileList = ref<UploadUserFile[]>([]);
  const resetForm = useResetForm()
  const uploadRef = ref()
  const myformRef = ref<InstanceType<typeof MyForm>>();
  const imgurlEvent = (value: string) => {
  myformRef.value?.ruleForm.prave.push(value)
};
  const formFields = ref<IformConfig<m>[]>([
    {
        type:{
            name:"input"
        },
        label:"公司名称",
        prop:"company_name"
    },
  {
    type:{
      name:"input"
    },
    label:"实习种类",
    prop:"position"
  },
  {
    type:{
      name:"input"
    },
    label:"公司位置",
    prop:"place"
  },
  {
    type:{
      name:"data-picker",
    },
    label:"开始时间",
    prop:"start_time"
  },
  
  {
    type:{
      name:"input",
    },
    label:"辅导老师",
    prop:"teacher"
  },
  {
    type:{
      name:"input",
    },
    label:"实习类型",
    prop:"type",
    value:"自主实习"
  },
  {
    type:{
      name:"data-picker",
    },
    label:"结束时间",
    prop:"end_time"
  },
  {
    type:{
        name:"custom",
        slotName:"upload"
    },
    label:"相关材料证明",
    prop:"prave",
    value:[]
  }
])
  const { testList } = storeToRefs(useTestStore());
  const { user } = storeToRefs(useUserStore());
  //表单校验

  const submitForm = (formEl: InstanceType<typeof MyForm> | undefined) => {
    if (!formEl?.ruleFormRef) return;
    uploadRef.value.uploadRef.submit()
    formEl.ruleFormRef?.validate(async (valid) => {
      if (valid) {
        const res = await addPersonApply("/self-apply", {
          ...myformRef.value?.ruleForm,
          status: 1,
          start_time:formateTime(myformRef.value?.ruleForm.start_time),
          end_time:formateTime(myformRef.value?.ruleForm.end_time),
          userId: user.value?.id,
          prave:String(myformRef.value?.ruleForm.prave)
        });
        if (res.status === 200) {
          const testres = await addTesting("/test", {
            type_id: res.data.id,
            test_type: "自主实习申请",
            status: 1,
          });
          if (testres.status === 200) {
            testList.value.push({
              ...testres.data,
              created_date: dateFormat(testres.data.created_date),
            });
            ElNotification({
              title: "提交成功",
              message: "请到个人中心查看审核状态",
              type: "success",
              showClose: false,
              duration:1500
            });
          }
        }
        console.log("submit!");
      } else {
        console.log("error submit!");
        return false;
      }
    });
  };
 onMounted(async ()=>{
 const res =  await getPseronApplyByRole("/self-apply/byRole",{
        userId:user.value?.id
    })
    const {status,data} = res
    if(status===200){
        if(data.length){
            isPersonApply.value.push(data)
        }
        
    }
 })
  </script>
  <style lang="less" scoped>
  .change {
    width: 100%;
  
    .demo-ruleForm {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      margin-top: 20px;
    }
  
    .title {
      height: 40px;
      text-align: center;
  
      span {
        font-weight: 900;
        font-size: 25px;
      }
    }
  
    .operation {
      display: flex;
      justify-content: end;
    }
  }
  </style>
  