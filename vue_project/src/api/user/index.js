//统一管理用户相关的接口
import request from "../../utils/request";
//统一管理接口
var API;
(function (API) {
    API["LOGIN_URL"] = "/admin/acl/index/login";
    API["USERINFO_URL"] = "/admin/acl/index/info";
    API["LOGOUT_URL"] = "/admin/acl/index/logout";
})(API || (API = {}));
//暴露请求函数
//登录接口方法
export var reqLogin = function (data) { return request.post(API.LOGIN_URL, data); };
//获取用户信息接口方法
export var reqUserInfo = function () { return request.get(API.USERINFO_URL); };
//退出登录
export var reqLogout = function () { return request.post(API.LOGOUT_URL); };
