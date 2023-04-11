<template>
  <div class="navbar">
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      size="large"
      class="mx-1"
      :closable="isClosable(tag)"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="handleClick(tag)"
    >
      {{ tag }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import menuMap from "@/utils/localmenuMap";
const dynamicTags = ref(["首页"]);
const isClosable = (tag: string) => {
  if (tag === "首页") {
    return false;
  } else return true;
};
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};
const router = useRouter();
const handleClick = (tag: string) => {
  Object.keys(menuMap).forEach((item) => {
    if (menuMap[item] == tag) {
      router.push({
        path: `/main${item}`,
        query:{
          title:tag
        }
      });
    }
  });
};

//对路由参数进行侦听
const route = useRoute();
watch(
  () => route.query.title as string,
  (newvalue:string) => {
      const isexist = dynamicTags.value.includes(newvalue);
    if (!isexist&&newvalue!==undefined) {
      dynamicTags.value.push(newvalue);
    }
  }
);
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 40px;
}
.mx-1 {
  margin-right: 10px;
  cursor: pointer;
}
</style>
