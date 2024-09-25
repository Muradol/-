var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
import router from '@/router';
import setting from './setting';
//@ts-ignore
import nprogress from 'nprogress';
//引入进度条样式
import 'nprogress/nprogress.css';
nprogress.configure({ showSpinner: false });
//获取用户相关的小仓库内部token数据,去判断用户是否登录成功
import useUserStore from './store/modules/user';
import pinia from './store';
var userStore = useUserStore(pinia);
//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(function (to, from, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, username, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                document.title = "".concat(setting.title, " - ").concat(to.meta.title);
                //to:你将要访问那个路由
                //from:你从来个路由而来
                //next:路由的放行函数
                nprogress.start();
                token = userStore.token;
                username = userStore.username;
                if (!token) return [3 /*break*/, 7];
                if (!(to.path == '/login')) return [3 /*break*/, 1];
                next({ path: '/' });
                return [3 /*break*/, 6];
            case 1:
                if (!username) return [3 /*break*/, 2];
                //放行
                next();
                return [3 /*break*/, 6];
            case 2:
                _a.trys.push([2, 4, , 6]);
                //获取用户信息
                return [4 /*yield*/, userStore.userInfo()
                    //放行
                    //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
                ];
            case 3:
                //获取用户信息
                _a.sent();
                //放行
                //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
                next(__assign({}, to));
                return [3 /*break*/, 6];
            case 4:
                error_1 = _a.sent();
                //token过期:获取不到用户信息了
                //用户手动修改本地存储token
                //退出登录->用户相关的数据清空
                return [4 /*yield*/, userStore.userLogout()];
            case 5:
                //token过期:获取不到用户信息了
                //用户手动修改本地存储token
                //退出登录->用户相关的数据清空
                _a.sent();
                next({ path: '/login', query: { redirect: to.path } });
                return [3 /*break*/, 6];
            case 6: return [3 /*break*/, 8];
            case 7:
                //用户未登录判断
                if (to.path == '/login') {
                    next();
                }
                else {
                    next({ path: '/login', query: { redirect: to.path } });
                }
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); });
//全局后置守卫
router.afterEach(function (to, from) {
    nprogress.done();
});
//第一个问题:任意路由切换实现进度条业务 ---nprogress
//第二个问题:路由鉴权(路由组件访问权限的设置)
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)
//用户未登录:可以访问login,其余六个路由不能访问(指向login)
//用户登录成功:不可以访问login[指向首页],其余的路由可以访问
