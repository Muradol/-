//角色管理模块的的接口
import request from '@/utils/request';
var API;
(function (API) {
    //获取全部的职位接口
    API["ALLROLE_URL"] = "/admin/acl/role/";
    //新增岗位的接口地址
    API["ADDROLE_URL"] = "/admin/acl/role/save";
    //更新已有的职位
    API["UPDATEROLE_URL"] = "/admin/acl/role/update";
    //获取全部的菜单与按钮的数据
    API["ALLPERMISSTION"] = "/admin/acl/permission/toAssign/";
    //给相应的职位分配权限
    API["SETPERMISTION_URL"] = "/admin/acl/permission/doAssign/?";
    //删除已有的职位
    API["REMOVEROLE_URL"] = "/admin/acl/role/remove/";
})(API || (API = {}));
//获取全部的角色
export var reqAllRoleList = function (page, limit, roleName) { return request.get(API.ALLROLE_URL + "".concat(page, "/").concat(limit, "/?roleName=").concat(roleName)); };
//添加职位与更新已有职位接口
export var reqAddOrUpdateRole = function (data) {
    if (data.id) {
        return request.put(API.UPDATEROLE_URL, data);
    }
    else {
        return request.post(API.ADDROLE_URL, data);
    }
};
//获取全部菜单与按钮权限数据
export var reqAllMenuList = function (roleId) { return request.get(API.ALLPERMISSTION + roleId); };
//给相应的职位下发权限
export var reqSetPermisstion = function (roleId, permissionId) { return request.post(API.SETPERMISTION_URL + "roleId=".concat(roleId, "&permissionId=").concat(permissionId)); };
//删除已有的职位
export var reqRemoveRole = function (roleId) { return request.delete(API.REMOVEROLE_URL + roleId); };
