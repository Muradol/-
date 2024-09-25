<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="flag"/>
    </transition>
  </router-view>
</template>

<script setup lang="ts">

import useLayOutSettingStore from "@/store/modules/setting";
import {nextTick, ref, watch} from "vue";

let layOutSettingStore = useLayOutSettingStore();
let flag = ref(true);

watch(()=> layOutSettingStore.refsh,()=>{
  flag.value=false;
  nextTick(()=>{
    flag.value=true;
  })
})
</script>
<script lang="ts">
export default {
  name:"Main"
}
</script>


<style scoped lang="scss">

</style>