<template>
  <div class="logo">
    <img :src="setting.logo" alt="">
    <p>{{setting.title}}</p>
  </div>
</template>

<script setup lang="ts">
import setting from "@/setting";
</script>
<script lang="ts">
export default {
name:"Logo"
}
</script>

<style scoped lang="scss">
.logo{
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  padding: 10px;

  img{
    width: 40px;
    height: 40px;
  }
  p{
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }

}
</style>