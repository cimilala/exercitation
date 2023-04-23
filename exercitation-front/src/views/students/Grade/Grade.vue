<template>
  <div class="grade" v-if="absentShow">
    <div class="header">
      <div class="left">
        <img :src="url" alt="" />
        <strong style="font-weight: bold">{{ user_info?.name }}</strong>
      </div>
      <div class="right">
        <span style="font-size: 30px"
          >94.4<span style="font-size: 15px">分</span></span
        >
        <el-button round style="color: #75b9ff">综合成绩</el-button>
      </div>
    </div>
    <div class="grid">
      <div class="grid_box">
        <div class="grid_box_header">
          <span>出勤</span>
          <el-button link type="primary" @click="goAbsentInfo"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_conent">
          <div class="grid_left" style="width: 100px">
            <div style="font-size: 20px; margin-top: 50px">
              <span style="font-size: 30px">5</span>/30天
            </div>

            <span>已到</span>
          </div>
          <div class="grid_right" style="width: 100px">
            <el-progress type="circle" :percentage="percentage" :width="100">
              <template #default="{ percentage }">
                <span class="percentage-label">出勤率</span>
                <span class="percentage-value">{{ percentage }}%</span>
              </template>
            </el-progress>
          </div>
        </div>
      </div>
      <div class="grid_box">
        <div class="grid_box_header">
          <span>实习表现</span>
          <el-button link type="primary"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_pingjia">
          <el-progress
            type="circle"
            :percentage="100"
            :width="100"
            status="success"
          >
            <span>优秀</span>
          </el-progress>
        </div>
      </div>
      <div class="grid_box">
        <div class="grid_box_header">
          <span>个人素质</span>
          <el-button link type="primary"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_pingjia">
          <el-progress
            type="circle"
            :percentage="100"
            :width="100"
            status="success"
          >
            <span>优秀</span>
          </el-progress>
        </div>
      </div>
      <div class="grid_box">
        <div class="grid_box_header">
          <span>日报</span>
          <el-button link type="primary" @click="goDayNews"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_conent">
          <div class="grid_left" style="width: 100px">
            <div style="font-size: 20px; margin-top: 50px">
              <span style="font-size: 30px">5</span>/30天
            </div>

            <span>已交</span>
          </div>
          <div class="grid_right" style="width: 100px">
            <el-progress type="circle" :percentage="100" :width="100">
              <template #default="{ percentage }">
                <span class="percentage-label">提交率</span>
                <span class="percentage-value">{{ percentage }}%</span>
              </template>
            </el-progress>
          </div>
        </div>
      </div>
      <div class="grid_box">
        <div class="grid_box_header">
          <span>实习作品</span>
          <el-button link type="primary"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_pingjia">
          <el-progress
            type="circle"
            :percentage="100"
            :width="100"
            status="warning"
          >
            <span>良好</span>
          </el-progress>
        </div>
      </div>
      <div class="grid_box">
        <div class="grid_box_header">
          <span>专业技能</span>
          <el-button link type="primary"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_pingjia">
          <el-progress
            type="circle"
            :percentage="100"
            :width="100"
            status="success"
          >
            <span>优秀</span>
          </el-progress>
        </div>
      </div>
      <div class="grid_box">
        <div class="grid_box_header">
          <span>作业</span>
          <el-button link type="primary"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_conent">
          <div class="grid_left" style="width: 100px">
            <div style="font-size: 20px; margin-top: 50px">
              <span style="font-size: 30px">5</span>/30天
            </div>

            <span>已交</span>
          </div>
          <div class="grid_right" style="width: 100px">
            <el-progress type="circle" :percentage="65" :width="100">
              <template #default="{ percentage }">
                <span class="percentage-label">提交率</span>
                <span class="percentage-value">{{ percentage }}%</span>
              </template>
            </el-progress>
          </div>
        </div>
      </div>
      <div class="grid_box">
        <div class="grid_box_header">
          <span>实习答辩</span>
          <el-button link type="primary"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_pingjia">
          <el-progress
            type="circle"
            :percentage="100"
            :width="100"
            status="exception"
          >
            <span>较差</span>
          </el-progress>
        </div>
      </div>
      <div class="grid_box">
        <div class="grid_box_header">
          <span>实习证书</span>
          <el-button link type="primary"
            >详情
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>
        <div class="grid_pingjia">
          <span>无</span>
        </div>
      </div>
    </div>

   

   
  </div>
  <RouterView v-else></RouterView>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { onActivated, onMounted, reactive, ref, toRefs } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import {useRouter} from "vue-router"
import { storeToRefs } from "pinia";
import { useUserInfo } from "@/stores/user_info";


const percentage = ref(24)
const {user_info} = storeToRefs(useUserInfo())
const url = ref(`http://localhost:3000/images/${user_info.value?.photo}`);
const router = useRouter()
const absentShow= ref(true)
const goAbsentInfo = ()=>{
  absentShow.value = false
  router.push({path:"/grade/grade_absent"})
}
const goDayNews=()=> {
router.push({path:"/grade/dayNews",query:{title:"实习日报"}})
}
onMounted(()=>{
  //获取该学生的请假，缺勤的日期
})
onActivated(()=>{
  console.log("absentShow");
  
  absentShow.value =true
})
</script>
<style lang="less" scoped>
  .grade {
    width: 100%;
  margin-left: 10px;
  margin-right: 10px;

 
  .header {
    width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
  border-radius: 10px;
  .left {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 20px;
  img {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-right: 20px;
}
}
.right {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
}
}
.grid {
  height: 650px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  margin-top: 15px;
  .grid_box {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  .grid_box_header {
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
}
.grid_conent {
  display: flex;
  height: 120px;
  justify-content: space-between;
  .grid_left {
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.grid_right {
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-right: 100px;
  .percentage-value {
  display: block;
  font-size: 25px;
}

.percentage-label {
  display: block;
  font-size: 12px;
}
}
}
.grid_pingjia {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: end;
}
}
}
}
</style>

