<template>
    <template v-for="item in menuList" :key="item.id">
          <el-sub-menu v-if="item.children.length>0" :index="item.id+''" >
            <template #title>
              <el-icon >
                <svg-icon name="search"  size="20em" class="mr5"  />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
                <!-- 递归 -->
                <MenuItem :menu-list="item.children"></MenuItem>
          </el-sub-menu>
          <el-menu-item v-else :index="item.path">
            <el-icon>
              <svg-icon name="draft"  size="20em" class="mr5"  />
              </el-icon>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
      </template>
</template>

<script setup lang='ts'>

    defineProps<{
  menuList:any[]
}>()
</script>
    
<style>
    
</style>