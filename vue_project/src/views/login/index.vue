<template>
  <div class="login_container">
    <el-row>
      <el-col :span="13" :xs="0"></el-col>
      <el-col :span="11" :xs="24">
      <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
        <h1>Hello</h1>
        <h2>欢迎来到电商后台服务</h2>
        <div class="login_input">
        <el-form-item prop="username">
          <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
        </el-form-item>
          <el-form-item>
            <el-button class="login_button" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </div>

      </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {User,Lock} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import useUserStore from "@/store/modules/user";
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
import {getTime} from "@/utils/time";

//获取路由器
let $router =useRouter();
//获取表单元素
let loginForms = ref();
//引入用户相关的小仓库
let useStore = useUserStore();
//收集账号与密码数据
let loginForm = reactive({username:'admin' , password:'111111'})
//登录按钮的回调
const login = async ()=>{
  //保证全部表单校验通过再发请求
   await loginForms.value.validate();

  try{
    await useStore.userLogin(loginForm);
    $router.push('/');
    ElNotification({
      type:'success',
      message:'欢迎回来',
      title:`Hi,${getTime()}好！`
    })
  }catch (error){
    ElNotification({
      type:'error',
      message: (error as Error).message
    })
  }
}
//自定义校验规则函数
const validatorUserName = (rule:any,value:any,callback:any)=>{
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error('账号长度至少五位'));
  }
}
const validatorPassword = (rule:any,value:any,callback:any)=>{
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 6) {
    callback();
  } else {
    callback(new Error('密码长度至少六位'));
  }
}
//定义表单校验需要配置对象
const rules ={
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username:[
    {trigger:'change',validator:validatorUserName}
  ],
  password:[
    {trigger:'change',validator:validatorPassword}
  ]
}

</script>

<style scoped ="sass">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  overflow: auto;
}

.login_form{
  position: relative;
  width: 85%;
  top:27vh;
  background-color: rgba(255, 255, 255, 15%);
  border-radius: 20px;
  padding: 40px;
  h1{
    color: white;
    font-size: 40px;
  }
  h2{
    color: white;
    font-size: 20px;
    margin: 20px 0;
  }
}

.login_input{
  width: 90%;
  margin: 0 auto;
}

.login_button{
  width: 100%;
}
</style>