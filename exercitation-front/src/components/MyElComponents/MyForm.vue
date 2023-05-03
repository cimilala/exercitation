<template>
    <div class="haha">
        <el-form
         ref="ruleFormRef"
        label-width="100px"
        label-position="right"
        :rules="rules"
        :model="ruleForm"
        status-icon
        class="demo-ruleForm">
            <el-row :gutter="10">
                <template v-for="item in formFields" :key="item.prop">
                    <el-col :span="colspan">
      <template v-if="item.type.name==='input'">
        <el-form-item :label="item.label" :prop="item.prop">
            <el-input placeholder="Please input" v-model="ruleForm[item.prop]" ></el-input>
        </el-form-item>
      </template>
      <template v-else-if="item.type.name === 'data-picker'">
        <el-form-item :label="item.label" :prop="item.prop">
            <el-date-picker  placeholder="Pick a day" v-model="ruleForm[item.prop]" style="width:100%!"/>
        </el-form-item>
        
      </template>
      <template v-else-if="item.type.name ==='custom'">
        <el-form-item :label="item.label" :prop="item.prop">
           <slot :name="item.type.slotName"></slot>
        </el-form-item>
       
      </template>
      <template v-else-if="item.type.name ==='select'">
        <el-form-item :label="item.label" :prop="item.prop">
            <el-select v-model="ruleForm[item.prop]" class="m-2" placeholder="Select" style="width:100%">
                <template v-for="option in item.type.options">
                    <el-option :label="option.label" :value="option.value" />
                </template>
            </el-select>
        </el-form-item>
      </template>
     
    </el-col>
    </template>
            </el-row>
    
  </el-form>
    </div>
       
</template>
<script setup lang="ts">
import { formToRules } from "@/utils/formRules";
import type { FormInstance} from "element-plus";
import { reactive, ref, watch} from "vue";
// interface ISelectType  {
//     name:"select",
//     options:any[]
// }
// interface ICustom{
// name:"custom",
// slotName:string
// }

// interface IInput {
//     name:"input"
// }
// interface TDatePicker  {
//     name:"data-picker"
// }
// interface IformConfig<T extends ISelectType|ICustom|IInput|TDatePicker> {
//     type:T
//     label:string
//     prop:string
//     value?:any
// }
const ruleFormRef = ref<FormInstance>();
const initForm:Record<string,any>= {}
const porps =defineProps<{
    formFields:IformConfig<m>[],
        colspan:number
}>()
porps.formFields.forEach(item=> {
    initForm[item.prop] = item.value??""
});
const ruleForm = reactive(initForm)
defineExpose({
        ruleFormRef,
        ruleForm
})
const rules =formToRules(ruleForm)
</script>

<style lang="less" scoped>
    .haha{
        margin-top: 10px;
    }
</style>