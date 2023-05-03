<template>
        <div class="index">
                <StudentHome v-if="showByRole==='student'"/>
                <div v-else-if="showByRole==='teacher'">teacher</div>
                <div v-else-if="showByRole==='admin'">admin</div>
        </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
import StudentHome from "@/components/Home/StudentHome.vue"
const roleName = localStorage.getItem("role_name")
    const showByRole = ref(roleName)
</script>
    
<style>
    
</style>