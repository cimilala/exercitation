<template>
    <el-calendar :range="[new Date(2023, 2, 1), new Date(2023, 2, 31)]" v-model="data">
        <template #date-cell="{ data }">
            <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(1).join('-') }}
                {{ absenceDate.includes(data.day) ?
                 "缺勤" : apply_data.includes(data.day) ? "请假" : '✔️' }}

            </p>
        </template>
    </el-calendar>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
const data = ref()
const absenceDate = ref(["2023-03-04", "2023-03-05", "2023-03-06"])
const apply_data = ref(["2023-03-07"])
</script>
    
<style scoped>
.is-selected {
    color: #1989fa;
}
</style>