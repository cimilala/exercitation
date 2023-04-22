import type { FormItemRule } from "element-plus";
import type { Arrayable } from "element-plus/es/utils";
import { toRaw } from "vue";
  const formToRules = (ruleForm:any)=>{
    const ruleFormMap: Record<string, string | any[]> = Object.assign(
        {},
        toRaw(ruleForm)
      );
      Object.keys(ruleFormMap).forEach((item) => {
        ruleFormMap[item] = [{ required: true, message: "请输入", trigger: "blur" }];
      });
      return ruleFormMap as Partial<Record<string, Arrayable<FormItemRule>>>
  }
  export {formToRules}