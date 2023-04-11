<template>
       <div id="myEcharts" :style="style"></div> 
       
</template>
    
<script setup lang='ts'>
import * as echarts from "echarts";
import { onMounted,  watch,  type StyleValue } from "vue";
const props = defineProps<{
    style:StyleValue | undefined,
    option:any
}>()
  let echart = echarts;

const  initChart = ()=>{
   
    let chart = echart.init(document.getElementById("myEcharts")!, "dark");
    
      // 把配置和数据放这里
      chart.setOption(props.option);
      window.onresize = function() {
        //自适应大小
        chart.resize();
      };



}
watch(props.option,(oldValue,newValue)=>{
    if(document.getElementById("myEcharts")===null){
        return 
    }
   echart.dispose(document.getElementById("myEcharts")!)
    initChart();
})

onMounted(() => {
  initChart();
});
</script>
    
<style lang="" scoped>
    
</style>