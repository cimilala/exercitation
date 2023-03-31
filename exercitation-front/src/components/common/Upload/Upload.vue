<template>
        <div>
            <el-upload v-model:file-list="props.fileList" :headers="headers" action="http://localhost:3000/upload"
          list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <el-icon>
            <Plus />
          </el-icon>
        </el-upload> 
        </div>
</template>
    
<script setup lang='ts'>
import type { UploadProps, UploadUserFile } from 'element-plus';
import { reactive, ref } from 'vue';
import { Plus} from '@element-plus/icons-vue'
const props = defineProps<{
  fileList:UploadUserFile[]
}>()

    const token = ref(localStorage.getItem("token"))
const headers = reactive({
  Authorization: `Bearer ${token.value}`
})
const dialogImageUrl = ref('')
const dialogVisible = ref(false);
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
</script>
    
<style lang="" scoped>
    
</style>