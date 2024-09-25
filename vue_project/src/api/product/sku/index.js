//SKU模块接口管理
import request from '@/utils/request';
//枚举地址
var API;
(function (API) {
    //获取已有的商品的数据-SKU
    API["SKU_URL"] = "/admin/product/list/";
    //上架
    API["SALE_URL"] = "/admin/product/onSale/";
    //下架的接口
    API["CANCELSALE_URL"] = "/admin/product/cancelSale/";
    //获取商品详情的接口
    API["SKUINFO_URL"] = "/admin/product/getSkuInfo/";
    //删除已有的商品
    API["DELETESKU_URL"] = "/admin/product/deleteSku/";
})(API || (API = {}));
//获取商品SKU的接口
export var reqSkuList = function (page, limit) { return request.get(API.SKU_URL + "".concat(page, "/").concat(limit)); };
//已有商品上架的请求
export var reqSaleSku = function (skuId) { return request.get(API.SALE_URL + skuId); };
//下架的请求
export var reqCancelSale = function (skuId) { return request.get(API.CANCELSALE_URL + skuId); };
//获取商品详情的接口
export var reqSkuInfo = function (skuId) { return request.get(API.SKUINFO_URL + skuId); };
//删除某一个已有的商品
export var reqRemoveSku = function (skuId) { return request.delete(API.DELETESKU_URL + skuId); };
