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
              <el-icon :size="20">
                <Location /> </el-icon
              ><span>湖北商贸</span>
            </div>
            <div>
              <el-icon :size="20">
                <ChatDotRound /> </el-icon
              ><span>1746593891</span>
            </div>
            <div>
              <el-icon :size="20">
                <Phone />
              </el-icon>
              <span>1746593891</span>
            </div>
            <div>
              <el-icon :size="20">
                <Message />
              </el-icon>
              <span>1746593891@qq.com</span>
            </div>
          </div>
        </div>
        <div class="header_center">
          <div style="text-align: center"><span>个人信息</span></div>
          <div class="header_center_info">
            <div>
              <span>姓名:李四</span>
              <span>性别:男</span>
              <span>班级:19计科本四</span>
            </div>
            <div>
              <span>学号:19106080901410</span>
              <span>学院:人工智能学院</span>
            </div>
          </div>
          <!-- <el-divider /> -->
          <hr />
          <div style="text-align: center">
            <span>个性签名</span>
            <el-input
              v-model="textarea"
              :rows="5"
              type="textarea"
              placeholder="Please input"
            />
          </div>
        </div>
      </div>

      <div class="person_right">
        <Echarts :option="option" style="width: 100%; height: 100%" />
      </div>
    </div>
    <div class="context">
      <div><span>正在进行的任务</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import {
  Message,
  ChatDotRound,
  Phone,
  Location,
} from "@element-plus/icons-vue";
import Echarts from "@/components/Echarts/Echarts.vue";
const textarea = ref("");
const url = ref("");
const store = useUserStore();
const { user } = storeToRefs(store);
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
        { value: 1048, name: "学习" },
        { value: 735, name: "运动" },
        { value: 580, name: "娱乐" },

        { value: 300, name: "购物" },
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
    url.value = `http://localhost:3000/images/${user.value?.photo}.jpg`;
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
  background-color: deepskyblue;
}
</style>
