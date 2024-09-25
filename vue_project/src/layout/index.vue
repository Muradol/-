<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{fold:LayOutSettingStore.fold}">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu :collapse="LayOutSettingStore.fold" :default-active="$route.path" background-color="#001529" text-color="white">
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{fold:!!LayOutSettingStore.fold}">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区 -->
    <div class="layout_main" :class="{fold:!!LayOutSettingStore.fold}">
     <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from "@/store/modules/user";
import {useRoute} from "vue-router";
import useLayOutSettingStore from "@/store/modules/setting";

let userStore = useUserStore();
let $route = useRoute();
let LayOutSettingStore = useLayOutSettingStore();
</script>
<script lang="ts">
export default {
  name:"Layout"
}
</script>


<style scoped lang="scss">
.layout_container{
  width: 100%;
  height: 100vh;

  .layout_slider{
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    white-space: nowrap;
    transition: all 0.5s ease; // 延长到 0.5 秒


    .scrollbar{
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu{
        border-right: none;
      }
    }

    &.fold{
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar{
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top:0;
    left: $base-menu-width;
    transition: all 0.5s ease; // 延长到 0.5 秒
    border: 1px black;

    &.fold{
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main{
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left:$base-menu-width;
    top:$base-tabbar-height;
    overflow: auto;
    padding: 20px;
    transition: all 0.5s ease; // 延长到 0.5 秒

    &.fold{
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

}
</style>