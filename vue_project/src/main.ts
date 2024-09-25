import { createApp } from 'vue'
import App from './App.vue'

//引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//配置element-plus国际化
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//获取实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus,{
    locale: zhCn
})
//svg需要的配置代码
import 'virtual:svg-icons-register'

import globalComponent from '@/components';
app.use(globalComponent);

//引入路由
import router from "./router";
app.use(router);

//引入模板的全局的样式
import '@/styles/index.scss'

//引入仓库
import pinia from "./store";
app.use(pinia);

//路由鉴权文件
import './permisstion';

//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'

//引入自定义指令文件
import { isHasButton } from '@/directive/has'
isHasButton(app)

//将应用挂载到挂载点上
app.mount('#app')
