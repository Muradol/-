<template>
    <svg :style="{width,height}">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
defineProps({
  //xlink:href属性值前缀
  prefix:{
    type:String,
    default:'#icon-'
  },
  //提供使用的图标名字
  name:String,
  //接受父组件传递颜色
  color:{
    type:String,
    default:''
  },
  //接受父组件传递过来的图标的高宽度
  width:{
    type:String,
    default:'16px'
  },
  height:{
    type:String,
    default:'16px'
  }
})
</script>
