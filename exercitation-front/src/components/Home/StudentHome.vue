<template>
    <div class="app-container">
  <div class="dashboard-editor-container">
    <el-card class="border-radius8 mb10">
      <el-row>
        <el-col :span="3">
          <el-avatar :src="avatar" :size="99" class="mt10"></el-avatar>
        </el-col>
        <el-col :span="14">
          <el-row style="margin-top: 25px">
            <span style="font-size: 24px;" >你已经选择集中实习</span>
          </el-row>
          <!-- <el-row class="mt10">
            <span style="font-size: 22px;" >haha</span>
          </el-row> -->
        </el-col>
        <el-col :span="7">
          <el-row>
            <el-divider content-position="left">快捷导航</el-divider>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-button type="primary" plain >撰写周记</el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="danger" plain >实习申请</el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="success" plain >论文题库</el-button>
            </el-col>
          </el-row>
          <el-row class="mt5">
            <el-col :span="8">
              <el-button type="primary" plain >撰写总结</el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="danger" plain >单位变更</el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="success" plain >开题报告</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <el-row :gutter="16" class="mb10" style="margin-top: 8px;">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card style="border-radius: 8px;height: 400px">
              <template #header>
    <div class="card-header">
    <svg-icon name="notice" :size="'1.5em'"  /><span class="el-icon-bell mr5">最新动态</span>
     
    </div>
  </template>
            
          <el-timeline >
            <el-timeline-item
              v-for="(item, index) in activities"
              :key="index"
              :timestamp="item.timestamp">
              {{item.content}}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card style="border-radius: 8px;height: 400px">
              <template #header>
    <div class="card-header">
      <svg-icon name="task" :size="'1.5em'"  /><span class="el-icon-bell mr5">我的任务</span>
     
    </div>
    </template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-scrollbar height="250px" >
 

      <el-tab-pane label="正在进行的任务" name="first">
        <Testing :is-operation="false" />
      </el-tab-pane>
      <el-tab-pane label="已经完成的任务" name="second">
        <Tested :is-operation="false" />
      </el-tab-pane>
</el-scrollbar>
    </el-tabs>
        </el-card>
      </el-col>
      <!-- <el-col :xs="24" :sm="24" :lg="12">
        <el-card style="border-radius: 8px;height: 400px">
          <div slot="header">
            <span><span class="el-icon-s-flag mr5"></span>我的任务</span>
          </div>
          <el-table
            :data="taskList"
            style="width: 100%">
            <el-table-column label="类型" prop="processType" :formatter="processTypeFormat"/>
            <el-table-column prop="endTime" align="center" label="截止日期">
              <template slot-scope="scope">
                <span>{{ parseTime(scope.row.endTime, '{y}-{m}-{d}') }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="taskName" align="center" label="进度" width="200px">
              <template slot-scope="scope">
                <el-progress :percentage="parseInt(scope.row.schedule)" :stroke-width="8" :color="customColorMethod"></el-progress>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col> -->
     <!-- <el-col :xs="24" :sm="24" :lg="8">
        <el-card style="border-radius: 8px;height: 400px">
          <div slot="header">
            <span><span class="el-icon-s-opportunity mr5"></span>我的目标</span>
          </div>
          <el-row class="text-center mt20">
            <el-progress type="dashboard" :width="216" :percentage="100" ></el-progress>
          </el-row>
          <el-row class="text-center mb20">
            <span>恭喜，本月目标已达标！</span>
          </el-row>
        </el-card>
      </el-col> -->
    </el-row>
   <!-- <panel-group @handleSetLineChartData="handleSetLineChartData" />-->
    
  </div>
</div>
</template>
  
<script setup lang='ts'>
import { useUserInfo } from '@/stores/user_info';
import type { TabsPaneContext } from 'element-plus';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import Testing from "@/components/Testing/Testing.vue";
import Tested from "@/components/Tested/Tested.vue";
const {user_info} =storeToRefs(useUserInfo()) 
const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
// console.log(tab, event)
};



const avatar = ref(`http://localhost:3000/images/${user_info.value.photo}`)
const activities = [
{
  content: 'Event start',
  timestamp: '2018-04-15',
},
{
  content: 'Approved',
  timestamp: '2018-04-13',
},
{
  content: 'Success',
  timestamp: '2018-04-11',
},
]

</script>
  
<style>
  
</style>