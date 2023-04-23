const tableSearch = (ruleForm:Pick<string,any>,tableData:Array<any>)=>{
     //筛选条件如果不为空加入数组
   const filterArray: string[] = [];
   Object.keys(ruleForm).forEach((item: string) => {
     if (ruleForm[item] !== "") {
       filterArray.push(item);
     }
   });
   //根据筛选条件过滤数据
  return filterArray.reduce(
     (pre, key) => {
       return pre.filter((item) => {
         return item[key] === ruleForm[key];
       });
     },
     [...tableData]
   );
}
export {tableSearch}