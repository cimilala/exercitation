import { ref, shallowRef } from "vue"
import type { IEditorConfig } from "@wangeditor/editor";

 // 编辑器实例，必须用 shallowRef
 const editorRef = shallowRef()
 const valueHtml = ref('<p>hello</p>')
const editorConfig: Partial<IEditorConfig> = {   // TS 语法
    MENU_CONF: {
      uploadImage:{
        server: '/upload',
      }
  
    }
  }
  const toolbarConfig = {}
  const handleCreated = (editor:any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
  }
  export {editorConfig,editorRef,toolbarConfig,valueHtml,handleCreated}