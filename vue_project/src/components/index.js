//引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue';
import Category from './Category/index.vue';
//全局对象
var components = { SvgIcon: SvgIcon, Category: Category };
//引入element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
//对外暴露插件对象
export default {
    //务必叫做install方法
    install: function (app) {
        //注册项目全部的全局组件
        Object.keys(components).forEach(function (key) {
            //注册为全局组件
            app.component(key, components[key]);
        });
        for (var _i = 0, _a = Object.entries(ElementPlusIconsVue); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], component = _b[1];
            app.component(key, component);
        }
    }
};
