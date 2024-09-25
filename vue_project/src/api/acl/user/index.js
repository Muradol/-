//用户管理模块的接口
import request from '@/utils/request';
var API;
(function (API) {
    //获取全部已有用户账号信息
    API["ALLUSER_URL"] = "/admin/acl/user/";
    //添加一个新的用户账号
    API["ADDUSER_URL"] = "/admin/acl/user/save";
    //更新已有的用户账号
    API["UPDATEUSER_URL"] = "/admin/acl/user/update";
    //获取全部职位,当前账号拥有的职位接口
    API["ALLROLEURL"] = "/admin/acl/user/toAssign/";
    //给已有的用户分配角色接口
    API["SETROLE_URL"] = "/admin/acl/user/doAssignRole";
    //删除某一个账号
    API["DELETEUSER_URL"] = "/admin/acl/user/remove/";
    //批量删除的接口
    API["DELETEALLUSER_URL"] = "/admin/acl/user/batchRemove";
})(API || (API = {}));
//获取用户账号信息的接口
//获取用户账号信息的接口
export var reqUserInfo = function (page, limit, username) { return request.get(API.ALLUSER_URL + "".concat(page, "/").concat(limit, "/?username=").concat(username)); };
//添加用户与更新已有用户的接口
export var reqAddOrUpdateUser = function (data) {
    //携带参数有ID更新
    if (data.id) {
        return request.put(API.UPDATEUSER_URL, data);
    }
    else {
        return request.post(API.ADDUSER_URL, data);
    }
};
//获取全部职位以及包含当前用户的已有的职位
export var reqAllRole = function (userId) { return request.get(API.ALLROLEURL + userId); };
//分配职位
export var reqSetUserRole = function (data) { return request.post(API.SETROLE_URL, data); };
//删除某一个账号的信息
export var reqRemoveUser = function (userId) { return request.delete(API.DELETEUSER_URL + userId); };
//批量删除的接口
export var reqSelectUser = function (idList) { return request.delete(API.DELETEALLUSER_URL, { data: idList }); };
