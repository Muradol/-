<template>
  <el-card>
   <div class="box">
     <img :src="userStore.avatar" class="avatar">
     <div class="bottom">
       <h3 class="title">{{getTime()}}好呀{{userStore.username}}</h3>
       <p class="subtitle">电商后台管理系统</p>
     </div>
   </div>
  </el-card>
  <div class="bottoms">
    <svg-icon name="welcome" width="450px" height="450px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
import {onMounted} from "vue";
import {getTime} from "../../utils/time";

let userStore = useUserStore();
</script>


<style scoped lang="scss">
.box{
  display: flex;
  align-items: center;
  .avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .bottom{
    margin-left: 20px;

    .title{
      font-size: 25px;
      font-weight: 900;
      margin-bottom: 30px;
    }
    .subtitle{
      font-style: italic;
      color: #a2a0a0;
    }
  }
}

.bottoms{
  display: flex;
  justify-content: center;
}


</style>