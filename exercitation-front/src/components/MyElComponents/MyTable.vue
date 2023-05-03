<template>
    <div class="mytable">
        <div class="operation" v-show="isShow??true">
            <el-button :icon="Plus" size="small" type="primary" @click="add">新增</el-button>
            <el-button :icon="Edit" size="small" type="success">修改</el-button>
            <el-button :icon="Delete" size="small" type="danger">删除</el-button>
            <el-button :icon="View" size="small" type="info">详情</el-button>
            <el-button :icon="Upload" size="small"> Upload</el-button>
        </div>
        <div class="table">
            <el-table :data="tableData" border style="width: 100%">
                <template v-for="item in tableFields" :key="item.prop">
                    <template v-if="item.type === 'selection'">
                        <el-table-column :type="item.type"  width="55"  align="center"></el-table-column>
                    </template>
                    <template v-if="item.type === 'normal'">
                        <el-table-column :prop="item.prop" :label="item.label" align="center"></el-table-column>
                    </template>
                    <template v-else-if="item.type === 'status'">
                        <el-table-column :prop="item.prop" :label="item.label" align="center">
                            <template #default="scope">
                                <el-tag :type="typeChange(scope.row[item.prop])"><span class="check">{{
                                    statusChange(scope.row[item.prop]) }}</span>
                                </el-tag>
                            </template>
                        </el-table-column>
                    </template>
                    <template v-else-if="item.type === 'custom'" >
                        <el-table-column :prop="item.prop" :fixed="item.fixed??false" :label="item.label" align="center" :width="item.width">
                            <template #default="scope">
                                <slot :name="item.slotName" v-bind="scope.row"></slot>
                            </template>
                        </el-table-column>
                    </template>
                    <template v-else-if="item.type === 'time'" >
                        <el-table-column :prop="item.prop" :label="item.label" align="center">
                            <template #default="scope">
                                {{ scope.row[item.prop] }}
                            </template>
                        </el-table-column>
                    </template>
                    

                </template>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
    small
    background
    layout="prev, pager, next"
    :total="20"
    class="mt-4"
  />
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    Delete,
    Plus,
    View,
    Edit,
    Upload,
   
} from "@element-plus/icons-vue";
defineProps<{
    tableFields: ITableConfig[],
    tableData: any[],
    add?:()=>void,
    isShow?:boolean
}>();

const typeChange = (scope: any) => {
    switch (scope) {
        case 1:
            return "warning";
        case 2:
            return "success";
        case 3:
            return "danger";
        default:
            break;
    }
};
const statusChange = (scope: any) => {
    switch (scope) {
        case 0:
            return "待审核";
        case 1:
            return "审核中";
        case 2:
            return "审核成功";
        case 3:
            return "审核失败";
        default:
            break;
    }
};

</script>
<style lang="less" scoped>
.table {
    margin-top: 20px;
}
</style>


    

    
