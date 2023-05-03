<template>
    <div class="personapply">
      <StudentSelfApply v-if="showByRole==='student'"/>
             
                  <TeacherSelfApply v-else-if="showByRole==='teacher'"/>
               
                <div v-else-if="showByRole==='admin'">admin</div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue';
import StudentSelfApply from '@/components/selfApply/StudentSelfApply.vue';
import TeacherSelfApply from '@/components/selfApply/TeacherSelfApply.vue';
  const roleName = localStorage.getItem("role_name")
    const showByRole = ref(roleName)
</script>
  
<style>
  
</style>