<template>
  <div class="apply">
    <StudentApply v-if="showByRole === 'student'" />
    <TeacherApply v-else-if="showByRole === 'teacher'"></TeacherApply >
    <div v-else-if="showByRole === 'admin'">admin</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import StudentApply from "@/components/Apply/StudentApply.vue";
import TeacherApply from "@/components/Apply/TeacherApply.vue"
const roleName = localStorage.getItem("role_name");
const showByRole = ref(roleName);
</script>

<style></style>
