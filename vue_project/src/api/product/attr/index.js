//这里书写属性相关的API文件
import request from "../../../utils/request";
//属性管理模块接口地址
var API;
(function (API) {
    //获取一级分类接口地址
    API["C1_URL"] = "/admin/product/getCategory1";
    //获取二级分类接口地址
    API["C2_URL"] = "/admin/product/getCategory2/";
    //获取三级分类接口地址
    API["C3_URL"] = "/admin/product/getCategory3/";
    //获取分类下已有的属性与属性值
    API["ATTR_URL"] = "/admin/product/attrInfoList/";
    //添加或者修改已有的属性的接口
    API["ADDORUPDATEATTR_URL"] = "/admin/product/saveAttrInfo";
    //删除某一个已有的属性
    API["DELETEATTR_URL"] = "/admin/product/deleteAttr/";
})(API || (API = {}));
//获取一级分类的接口方法
export var reqC1 = function () { return request.get(API.C1_URL); };
//获取二级分类的接口方法
export var reqC2 = function (category1Id) { return request.get(API.C2_URL + category1Id); };
//获取三级分类的接口方法
export var reqC3 = function (category2Id) { return request.get(API.C3_URL + category2Id); };
//获取对应分类下已有的属性与属性值接口
export var reqAttr = function (category1Id, category2Id, category3Id) { return request.get(API.ATTR_URL + "".concat(category1Id, "/").concat(category2Id, "/").concat(category3Id)); };
//新增或者修改已有的属性接口
export var reqAddOrUpdateAttr = function (data) { return request.post(API.ADDORUPDATEATTR_URL, data); };
//删除某一个已有的属性业务
export var reqRemoveAttr = function (attrId) { return request.delete(API.DELETEATTR_URL + attrId); };
