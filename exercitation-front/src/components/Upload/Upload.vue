<template>
        <div>
            <el-upload v-model:file-list="fileList" :headers="headers" action="http://localhost:3000/upload"
          list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
          :on-success="uploadSuccess"
          :on-error = "uploadError"
          :before-upload="beforeUpload"
         
          ref="uploadRef">
          <el-icon>
            <Plus />
          </el-icon>
        </el-upload> 
        <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
        </div>
</template>
    
<script setup lang='ts'>
import type { UploadFile, UploadFiles, UploadInstance, UploadProps, UploadRawFile, UploadUserFile } from 'element-plus';
import {  reactive, ref } from 'vue';
import { Plus} from '@element-plus/icons-vue'
const uploadRef = ref<UploadInstance>()
  const fileList = ref<UploadUserFile[]>([]);

// const props = defineProps<{
//   fileList?:UploadUserFile[]
// }>()
defineExpose({
  uploadRef,
  fileList
})
const emit =defineEmits<{
  (e: 'imgurl', value:string): void
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
const uploadSuccess=(res:any,uploadFile:UploadFile,uploadFiles:UploadFiles)=>{
  const {status,data} = res
  if(status===200){
    emit('imgurl',data.filename)
  }

// console.log(uploadFile);
// console.log(uploadFiles);
}
const uploadError = (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles)=>{
console.log(error);

}
const beforeUpload = (file:UploadRawFile)=>{
  // 判断图片是否大于2M
  const isLt2M = file.size /1024/1024 < 2;
          // const fileType = file.name.substring(file.name.lastIndexOf('.')+1)
          // 判断图片的类型
          // const isJpg = file.type ==  'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/gif'
          // if(!isJpg){
          //     alert('只能上传jpg, jpeg, png, gif格式的图片！')
          //     return false
          // }
          // if (!isLt2M) {
          //    alert('上传图片大小不能超过 2MB!');
          //     return false
          // }
}
</script>
    
<style lang="" scoped>
    
</style>