<template>
    <el-icon style="margin-right: 10px" @click="changeIcon">
      <component :is="LayOutSettingStore.fold?'Fold':'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span style="margin: 0 5px;">{{item.meta.title}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import {ref} from "vue";
import useLayOutSettingStore from "@/store/modules/setting";

let LayOutSettingStore = useLayOutSettingStore();
//点击切换图标的方法
const changeIcon=()=>{
  LayOutSettingStore.fold=!LayOutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name:"Breadcrumb"
}
</script>


<style scoped lang="scss">

</style>