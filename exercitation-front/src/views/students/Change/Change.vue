<template>
    <div class="change">
      <StudentChange v-if="showByRole==='student'"/>
      <TeacherChange v-else-if="showByRole==='teacher'"/>
                
    </div>
</template>
  
<script setup lang='ts'>
  import StudentChange from '@/components/Change/StudentChange.vue';
  import TeacherChange from '@/components/Change/TeacherChange.vue';
import { ref } from 'vue';
  const roleName = localStorage.getItem("role_name")
    const showByRole = ref(roleName)
</script>
  
<style>
  
</style>