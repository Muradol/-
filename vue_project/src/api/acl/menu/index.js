import request from '@/utils/request';
var API;
(function (API) {
    //获取全部菜单与按钮的标识数据
    API["ALLPERMISSTION_URL"] = "/admin/acl/permission";
    //给某一级菜单新增一个子菜单
    API["ADDMENU_URL"] = "/admin/acl/permission/save";
    //更新某一个已有的菜单
    API["UPDATE_URL"] = "/admin/acl/permission/update";
    //删除已有的菜单
    API["DELETEMENU_URL"] = "/admin/acl/permission/remove/";
})(API || (API = {}));
//获取菜单数据
export var reqAllPermisstion = function () { return request.get(API.ALLPERMISSTION_URL); };
//添加与更新菜单的方法
export var reqAddOrUpdateMenu = function (data) {
    if (data.id) {
        return request.put(API.UPDATE_URL, data);
    }
    else {
        return request.post(API.ADDMENU_URL, data);
    }
};
//删除某一个已有的菜单
export var reqRemoveMenu = function (id) { return request.delete(API.DELETEMENU_URL + id); };
