<template>
  <div class="person_center">
    <div class="header">
      <div class="person_left">
        <div class="header_left">
          <div class="header_touxiang">
            <img :src="url" alt="" />
          </div>
          <div>{{ user?.username }}</div>
          <div class="header_info">
            <div>
              <el-icon :size="20"> <Location /> </el-icon><span>{{ user_info?.college }}</span>
            </div>
            <div>
              <el-icon :size="20"> <ChatDotRound /> </el-icon
              ><span>{{ user_info?.wechat }}</span>
            </div>
            <div>
              <el-icon :size="20">
                <Phone />
              </el-icon>
              <span>{{ user_info?.phone }}</span>
            </div>
            <div>
              <el-icon :size="20">
                <Message />
              </el-icon>
              <span>{{ user_info?.email }}</span>
            </div>
          </div>
        </div>
        <div class="header_center">
          <div style="text-align: center"><span>个人信息</span></div>
          <div class="header_center_info">
            <div>
              <span>姓名:{{ user_info?.name }}</span>
              <span>性别:{{ user_info?.sex }}</span>
              <span>班级:{{ user_info?.class }}</span>
            </div>
            <div>
              <span>学号:{{ user_info?.stu_number }}</span>
              <span>学院:{{ user_info?.college }}</span>
            </div>
          </div>
          <!-- <el-divider /> -->
          <hr />
          <div style="text-align: center">
            <span>个性签名</span>
            <el-input
            :value="user_info.per_signature"
              :rows="5"
              type="textarea"
              placeholder="Please input"
              readonly
            />
          </div>
        </div>
      </div>

      <div class="person_right">
        <echarts :option="option" :style="style" />
      </div>
    </div>
    <div class="context">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="正在进行的任务" name="first">
          <Testing />
        </el-tab-pane>
        <el-tab-pane label="已经完成的任务" name="second">
          <Tested />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import {
  Message,
  ChatDotRound,
  Phone,
  Location,
} from "@element-plus/icons-vue";
import echarts from "@/components/Echarts/Echarts.vue";
import Testing from "@/components/Testing/Testing.vue";
import Tested from "@/components/Tested/Tested.vue";
import type { TabsPaneContext } from "element-plus";
import { useUserInfo } from "@/stores/user_info";
const style = reactive({
   width: '100%',
   height: '100%'
})
const url = ref("");
const { user } = storeToRefs(useUserStore());
const activeName = ref("first");
const {user_info} = storeToRefs(useUserInfo())
const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
};
const option = ref({
  title: {
    text: "课外时间分配",
    subtext: "",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 10, name: "学习" },
        { value:30, name: "运动" },
        { value: 20, name: "娱乐" },
        { value: 40, name: "购物" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
watch(
  user,
  () => {
    url.value = `http://localhost:3000/images/${user_info.value?.photo}`;
  },
  { immediate: true }
);
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 350px;

  display: flex;
  justify-content: space-between;

  .person_left {
    display: flex;
    background-color: rgb(255, 255, 255);
    .header_left {
      height: 100%;
      width: 324px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: 2px solid rgb(244, 246, 248);
      padding-top: 50px;
      .header_touxiang {
        img {
          width: 60px;
          height: 60px;
          border-radius: 40px;
        }
      }
    }
    .header_center {
      height: 100%;
      /* width: 660px; */
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 50px;
      .header_info {
        & > div {
          padding-left: 20px;
          margin-top: 10px;
        }
      }
      span {
        margin-right: 20px;
      }
    }
  }

  .person_right {
    width: 500px;
    margin-left: 30px;
  }
}
.context {
  width: 100%;
  height: 500px;
  margin-top: 30px;
  // background-color: deepskyblue;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
