<template>
  <div class="summary">
    <div class="title">
      <span>实习总结</span>
    </div>
    <div class="operation">
      <el-button  type="success" :icon="Check">保存草稿箱</el-button>
      <el-button  type="primary" :icon="Position" >提交</el-button>
    </div>
    <div class="card">
      <div class="card_box">
        <span>实习基本信息</span>
        <textarea rows="10" class="textarea" placeholder="请输入"></textarea>
      </div>
      <div class="card_box">
        <span>实习内容介绍</span>
        <textarea rows="10" class="textarea" ></textarea>
      </div>
      <div class="card_box">
        <span>实习收获总结</span>
      <textarea rows="10" class="textarea" ></textarea>
      </div>
      <div class="card_box">
        <span>实习经验总结</span>
        <textarea rows="10" class="textarea" ></textarea>
      </div>
      <div class="card_box">
        <span>实习建议和意见</span>
        <textarea rows="10" class="textarea" ></textarea>
      </div>
      <div class="card_box">
        <span>实习成果展示</span>
        <textarea rows="10" class="textarea" ></textarea>
      </div>
      <div class="card_box">
        <span>实习评价和反馈</span>
        <textarea rows="10" class="textarea" ></textarea>
      </div>
      <div class="card_box">
        <span>实习表现评价</span>
        <textarea rows="10" class="textarea" ></textarea>
      </div>
    </div>
    <div>实习基本信息：包括学生姓名、学号、实习单位、实习岗位、实习时间等基本信息</div>
    <div>实习内容介绍：对实习过程中参与的具体工作、项目或任务进行介绍，并附上相关的文档或资料。</div>
    <div>实习收获总结：学生对实习过程中的收获进行总结和反思，包括技能、知识、态度等方面。</div>
    <div>实习经验分享：学生对实习过程中的经验进行分享，包括遇到的问题、解决的方法、感悟等。</div>
    <div>实习建议和意见：学生对实习单位和实习管理方面提出建议和意见，帮助改进实习管理和实习质量</div>
    <div>实习成果展示：学生可以展示实习期间完成的作品、成果、项目等，以便实习单位和管理员进行评价和分享</div>
    <div>实习评价和反馈：实习单位和管理员对学生的实习进行评价和反馈，帮助学生更好地了解自己的表现和提高实习水平</div>
    
  </div>
</template>

<script setup lang="ts">
import {Check,Position} from '@element-plus/icons-vue'
import { ref } from 'vue';
const textarea = ref('')
const CSSProperties = {
  background:"#c9d5e0",
  border:"2px soild pink",
  width:"230px"

}
</script>

<style scoped>
.textarea {
  width: 230px;
  height: 200px;
  background-color: #c9d5e0;
 border: none;
 line-height: 25px;
  letter-spacing: 3px;
}
.textarea:focus {
  outline:none;
}
.operation{
  display: flex;
  justify-content: end;
  padding-right: 30px;
}
.card {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* background-color: #acbaca; */
  align-content: space-around;
}
.card_box{
  width: 270px;
  height: 270px;
  background-color:#c9d5e0;
  border-radius: 50px;
  box-shadow: 30px 30px 30px -10px rgba(0, 0, 0, 0.15),
              inset 15px 15px 10px rgba(255,255,255, 0.75),
              -15px -15px 35px rgba(255,255,255, 0.55),
              inset -1px -1px 10px rgba(0, 0, 0, 0.2);
   text-align: center; 
   padding-top: 20px;          
}
.card_box>span{
  display: block;
}
.summary {
  width: 100%;
}
.title {
  height: 40px;
  text-align: center;
}
.title span {
  font-weight: 900;
  font-size: 25px;
}
</style>
