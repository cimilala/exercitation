<template>
  <div class="side">
    <el-menu :default-active="active" class="el-menu-vertical-demo" :collapse="isCollapse" active-color="#001528"
      @open="handleOpen" @close="handleClose" @select="handleSelect">
      <!-- 首页 -->
      <el-menu-item index="home">
        <el-icon>
          <HomeFilled />
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <!-- 实习管理 -->
      <el-sub-menu index="2">
        <template #title>
          <i class="iconfont icon-shixishengguanli
    " style="font-size: 25px;"></i>
          <span>实习管理</span>
        </template>
        <el-menu-item index="apply">
          <i class="iconfont icon-custom-apply" style="font-size: 25px;"></i>
          <template #title>实习申请</template>
        </el-menu-item>
        <el-menu-item index="change">
          <i class="iconfont icon-change" style="font-size: 25px;"></i>
          <template #title>实习变更</template>
        </el-menu-item>
      </el-sub-menu>

      <!-- 实习考核 -->
      <el-sub-menu index="3">
        <template #title>
          <i class="iconfont icon-SCORE_SET" style="font-size: 25px;"></i>
          <span>实习考核</span>
        </template>
        <el-menu-item index="dayNews">
          <i class="iconfont icon-news" style="font-size: 25px;"></i>
          <template #title>
            <span>实习日报</span>
          </template>
        </el-menu-item>
        <el-menu-item index="summary">
          <i class="iconfont icon-loan_summary" style="font-size: 25px;"></i>

          <template #title>
            实习总结
          </template>
        </el-menu-item>

        <el-menu-item index="grade">
          <i class="iconfont icon-SCORE_SET" style="font-size: 25px;"></i>
          <template #title>
            实习成绩
          </template>
        </el-menu-item>
      </el-sub-menu>



      <!-- 请假管理 -->
      <el-sub-menu index="4">
        <template #title>
          <i class="iconfont icon-faculty-leave" style="font-size: 25px;"></i>
          <span>请假管理</span>
        </template>
        <el-menu-item index="leave">
          <i class="iconfont icon-faculty-leave" style="font-size: 20px;"></i>
          <template #title>
            请假申请
          </template>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="5">
        <template #title>
          <i class="iconfont icon-user" style="font-size: 25px;"></i>
          <!-- 个人中心 -->
          <span>关于我的</span>
        </template>
        <el-menu-item index="person_center">
          <i class="iconfont icon-user" style="font-size: 20px;"></i>
          <template #title>
            个人中心
          </template>
        </el-menu-item>
        <el-menu-item index="self_edit">
          <i class="iconfont icon-bianjiziliao
    " style="font-size: 20px;"></i>
          <template #title>
            编辑资料
          </template>
        </el-menu-item>
      </el-sub-menu>
      <!-- 草稿箱 -->
      <el-menu-item index="draft">
        <i class="iconfont icon-caogaoxiang-

    " style="font-size: 20px;"></i>
        <template #title>草稿箱</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  HomeFilled,
} from "@element-plus/icons-vue";
import mitt from "@/utils/mitt"
import { useRouter } from "vue-router"
import menuMap from "@/utils/localmenuMap"
const active = ref("home")

const router = useRouter()
//菜单栏伸缩
let isCollapse = ref(false);
//header组件传来的事件并携带是否伸缩的参数
let m = (collapse: any) => {
  isCollapse.value = collapse
}
mitt.on("isCollapse", m)
//菜单栏模块展开回调函数
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
//菜单栏模块收缩回调函数
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
//点击菜单
const handleSelect = (key: string, keyPath: string[]) => {
  const str = { title: menuMap[key] }
  router.push({
    path: `/${key}`,
    query: str
  })
}
</script>

<style scoped>
.side {
  height: 100%;
}
</style>
