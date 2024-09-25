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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//创建用户相关的小仓库
import { defineStore } from 'pinia';
//引入接口
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user';
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token';
//引入路由(常量路由)
import { constantRoute, asnycRoute, anyRoute } from '@/router/routes';
//引入深拷贝方法
//@ts-expect-error
import cloneDeep from 'lodash/cloneDeep';
import router from '@/router';
//用于过滤当前用户需要展示的异步路由
function filterAsyncRoute(asnycRoute, routes) {
    return asnycRoute.filter(function (item) {
        if (routes.includes(item.name)) {
            if (item.children && item.children.length > 0) {
                //硅谷333账号:product\trademark\attr\sku
                item.children = filterAsyncRoute(item.children, routes);
            }
            return true;
        }
    });
}
//创建用户小仓库
var useUserStore = defineStore('User', {
    //小仓库存储数据地方
    state: function () {
        return {
            token: GET_TOKEN(), //用户唯一标识token
            menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
            username: '',
            avatar: '',
            //存储当前用户是否包含某一个按钮
            buttons: [],
        };
    },
    //异步|逻辑的地方
    actions: {
        //用户登录的方法
        userLogin: function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, reqLogin(data)
                            //登录请求:成功200->token
                            //登录请求:失败201->登录失败错误的信息
                        ];
                        case 1:
                            result = _a.sent();
                            //登录请求:成功200->token
                            //登录请求:失败201->登录失败错误的信息
                            if (result.code == 200) {
                                //pinia仓库存储一下token
                                //由于pinia|vuex存储数据其实利用js对象
                                this.token = result.data;
                                //本地存储持久化存储一份
                                SET_TOKEN(result.data);
                                //能保证当前async函数返回一个成功的promise
                                return [2 /*return*/, 'ok'];
                            }
                            else {
                                return [2 /*return*/, Promise.reject(new Error(result.data))];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        //获取用户信息方法
        userInfo: function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, userAsyncRoute;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, reqUserInfo()
                            //如果获取用户信息成功，存储一下用户信息
                        ];
                        case 1:
                            result = _a.sent();
                            //如果获取用户信息成功，存储一下用户信息
                            if (result.code == 200) {
                                this.username = result.data.name;
                                this.avatar = result.data.avatar;
                                this.buttons = result.data.buttons;
                                userAsyncRoute = filterAsyncRoute(cloneDeep(asnycRoute), result.data.routes);
                                //菜单需要的数据整理完毕
                                this.menuRoutes = __spreadArray(__spreadArray(__spreadArray([], constantRoute, true), userAsyncRoute, true), [anyRoute], false);
                                __spreadArray(__spreadArray([], userAsyncRoute, true), [anyRoute], false).forEach(function (route) {
                                    router.addRoute(route);
                                });
                                return [2 /*return*/, 'ok'];
                            }
                            else {
                                return [2 /*return*/, Promise.reject(new Error(result.message))];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        //退出登录
        userLogout: function () {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, reqLogout()];
                        case 1:
                            result = _a.sent();
                            if (result.code == 200) {
                                //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
                                this.token = '';
                                this.username = '';
                                this.avatar = '';
                                REMOVE_TOKEN();
                                return [2 /*return*/, 'ok'];
                            }
                            else {
                                return [2 /*return*/, Promise.reject(new Error(result.message))];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
    },
    getters: {},
});
//对外暴露获取小仓库方法
export default useUserStore;
