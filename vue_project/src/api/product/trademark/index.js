//书写品牌管理模块接口
import request from "../../../utils/request";
var API;
(function (API) {
    //获取已有品牌的接口
    API["TRADEMARK_URL"] = "/admin/product/baseTrademark/";
    //添加品牌
    API["ADDTRADEMARK_URL"] = "/admin/product/baseTrademark/save";
    //修改已有品牌
    API["UPDATETRADEMARK_URL"] = "/admin/product/baseTrademark/update";
    //删除已有品牌
    API["DELETE_URL"] = "/admin/product/baseTrademark/remove/";
})(API || (API = {}));
//获取已有品牌的接口方法
//page:获取第几页 ---默认第一页
//limit:获取几个已有品牌的数据
export var reqHasTrademark = function (page, limit) { return request.get(API.TRADEMARK_URL + "".concat(page, "/").concat(limit)); };
//添加与修改已有品牌接口方法
export var reqAddOrUpdateTrademark = function (data) {
    //修改已有品牌的数据
    if (data.id) {
        return request.put(API.UPDATETRADEMARK_URL, data);
    }
    else {
        //新增品牌
        return request.post(API.ADDTRADEMARK_URL, data);
    }
};
//删除某一个已有品牌的数据
export var reqDeleteTrademark = function (id) {
    return request.delete(API.DELETE_URL + id);
};
