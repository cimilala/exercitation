import type MyForm from "@/components/MyElComponents/MyForm.vue";
const useResetForm = ()=>{
   return (formEl: InstanceType<typeof MyForm>|undefined ) => {
        if (formEl&&!formEl.ruleFormRef) return;
        formEl.ruleFormRef.resetFields();
      };
}
export default useResetForm