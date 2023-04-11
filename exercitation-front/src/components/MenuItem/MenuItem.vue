<template>
         <template v-for="item in menuList" :key="item.id">
        <template v-if="item.children!==null">
          <el-sub-menu :index="item.path">
            <template #title>
              <i
                :class="item.icon"
                style="font-size: 25px"
              ></i>
              <span>{{ item.name }}</span>
            </template>
            <template
              v-for="childrenItem in item.children"
              :key="childrenItem.id"
            >
              <template v-if="childrenItem.children!==null">
                <!-- 递归 -->
                <MenuItem :menu-list="childrenItem.children"></MenuItem>
              </template>
              <template v-else>
                <el-menu-item :index="childrenItem.path">
                  <i
                    :class="childrenItem.icon"
                    style="font-size: 25px"
                  ></i>

                  <template #title>{{ childrenItem.name }}</template>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path">
            <i
              :class="item.icon"
              style="font-size: 25px"
            ></i>

            <template #title>{{ item.name }}</template>
          </el-menu-item>
        </template>
      </template>
</template>
    
<script setup lang='ts'>
    defineProps<{
  menuList:any[]
}>()
</script>
    
<style>
    
</style>