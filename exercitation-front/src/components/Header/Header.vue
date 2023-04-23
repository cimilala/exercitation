<template>
        <div class="header" >
        <div class="left">
          <el-button link @click="controllerMenu">
            <el-icon size="20px" >
              <Expand v-if="isCollapse"/>
              <Fold v-else/>
            </el-icon>
          </el-button>
          <MyBreadcrumb/>
        </div>
        <div class="right">
          <el-dropdown>
    <el-button class="el-dropdown-link" link>
     
      <img :src="url"  alt=""  >
     
     <span style="margin-left:15px;">嗨,{{ user?.username}}</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
     
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="personCenter">个人中心</el-dropdown-item>
        <el-dropdown-item>布局设置</el-dropdown-item>
        <el-dropdown-item @click="updatePassword">修改密码</el-dropdown-item>
        <el-dropdown-item @click="exit">退出</el-dropdown-item>
        
      </el-dropdown-menu>
    </template>
  </el-dropdown>
        </div>
        <Dialog/>
      </div> 
</template>
    
<script setup lang='ts'>import {  ref, watch, type Ref} from 'vue';
import mitt from "@/utils/mitt"
import Dialog from '../Dialog/Dialog.vue';
import MyBreadcrumb from '../MyBreadcrumb/MyBreadcrumb.vue';
import {
  Expand,ArrowDown,Fold,
} from "@element-plus/icons-vue";
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { useUserInfo } from '@/stores/user_info';
import { useUserStore } from '@/stores/user';


    //控制左边菜单栏的伸缩
    const emit = defineEmits<{
  (e: 'change', isCollapse: boolean): void
}>()
const router = useRouter()
const updatePassword = ()=>{
  mitt.emit("dialogVisible",true)
  
}
const exit = ()=>{
  localStorage.clear()
  router.replace({path:"/login"})
}
const personCenter = () =>{
  router.push({path:"/main/person_center",query:{title:"个人中心"}})
}

const {user} = storeToRefs(useUserStore())
const {user_info} = storeToRefs(useUserInfo())
const url = ref("")
watch(user_info,()=>{
  url.value= `http://localhost:3000/images/${user_info.value?.photo}`
},{immediate:true})

const isCollapse = ref(false)
const controllerMenu = ()=> {
  isCollapse.value = !isCollapse.value
  emit("change",isCollapse.value)
 
}

</script>
    
<style scoped>
.header {
  width: 100%;
height: 50px;
background-color:rgb(255, 255, 255);
display: flex;
justify-content: space-between;
align-items: center;

}


img{
  width: 40px;
  height: 40px;
  border-radius: 40px;
}
</style>