<template>
    <Table 
    :options="options" 
    :tableData="tableData"
    :on-apply="handleApplyClick"
    :on-delete="handleDelete"
    :apply="true"
    :cancel="false"
    :delete-show="true"
    :editor="true"
    :width="'220px'"
    />
</template>
    
<script setup lang='ts'>
import { usedraftChange } from '@/stores/draft_change';
import { onActivated, onMounted, ref } from 'vue';
import Table from "@/components/Table/Table.vue"
import { addTesting, getChangeListByRole, updateChange } from '@/utils/api';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useTestStore } from '@/stores/test';
import { dateFormat } from '@/utils/formatTimePlus';
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus';
import { elMessage } from '@/utils/myElMessage';
const {user} = storeToRefs(useUserStore()) 
const draftChangeStore = usedraftChange()
const { testList } = storeToRefs(useTestStore());
const tableData = ref<any[]>([])
const options=ref<any[]>([
  {
    prop: "id",
    label: "编号",
  },
  {
    prop:"initInter",
    label:"原实习单位"
  },
  {
    prop:"changeInter",
    label:"新实习单位"
  },
  {
    prop:"initPosition",
    label:"原实习方向"
  },
  {
    prop:"changePosition",
    label:"新实习方向"
  },
  {
    prop:"reason",
    label:"变更原因"
  }
]) 
const handleApplyClick = async (index: number, row: any) => {
 const res =await updateChange(`/internship-change/${row.id}`,{
    status:1
  })
  if(res.status===200){
    const testres = await addTesting("/test", {
          type_id: row.id,
          test_type: "实习更改",
          status: 1,
        });
        if(testres.status===200){
          testList.value.push({
            ...testres.data,
            created_date:dateFormat(testres.data.created_date)
          });
          ElNotification({
    title: '申请成功',
    message: "请到个人中心查看审核状态",
    type: 'success',
    showClose: false,
  })
        }
  }
};
const handleDelete = ()=>{
  elMessage("您确定要删除这条记录吗?")
}
onActivated(()=>{
  tableData.value = draftChangeStore.draftChangeList
})
onMounted(async ()=>{
 const res =await getChangeListByRole("/internship-change/byRole",{
  isDraft:true,
  userId:user.value?.id,
  status:0
})
 const {status,data} = res
 if(status === 200){
  tableData.value = data
  draftChangeStore.draftChangeList = tableData.value
 }
})
</script>
    
<style lang="less" scoped>
  
</style>