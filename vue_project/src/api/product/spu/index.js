//SPU管理模块的接口
import request from '@/utils/request';
var API;
(function (API) {
    //获取已有的SPU的数据
    API["HASSPU_URL"] = "/admin/product/";
    //获取全部品牌的数据
    API["ALLTRADEMARK_URL"] = "/admin/product/baseTrademark/getTrademarkList";
    //获取某个SPU下的全部的售卖商品的图片数据
    API["IMAGE_URL"] = "/admin/product/spuImageList/";
    //获取某一个SPU下全部的已有的销售属性接口地址
    API["SPUHASSALEATTR_URL"] = "/admin/product/spuSaleAttrList/";
    //获取整个项目全部的销售属性[颜色、版本、尺码]
    API["ALLSALEATTR_URL"] = "/admin/product/baseSaleAttrList";
    //追加一个新的SPU
    API["ADDSPU_URL"] = "/admin/product/saveSpuInfo";
    //更新已有的SPU
    API["UPDATESPU_URL"] = "/admin/product/updateSpuInfo";
    //追加一个新增的SKU地址
    API["ADDSKU_URL"] = "/admin/product/saveSkuInfo";
    //查看某一个已有的SPU下全部售卖的商品
    API["SKUINFO_URL"] = "/admin/product/findBySpuId/";
    //删除已有的SPU
    API["REMOVESPU_URL"] = "/admin/product/deleteSpu/";
})(API || (API = {}));
//获取某一个三级分类下已有的SPU数据
export var reqHasSpu = function (page, limit, category3Id) { return request.get(API.HASSPU_URL + "".concat(page, "/").concat(limit, "?category3Id=").concat(category3Id)); };
//获取全部的SPU的品牌的数据
export var reqAllTradeMark = function () { return request.get(API.ALLTRADEMARK_URL); };
//获取某一个已有的SPU下全部商品的图片地址
export var reqSpuImageList = function (spuId) { return request.get(API.IMAGE_URL + spuId); };
//获取某一个已有的SPU拥有多少个销售属性
export var reqSpuHasSaleAttr = function (spuId) { return request.get(API.SPUHASSALEATTR_URL + spuId); };
//获取全部的销售属性
export var reqAllSaleAttr = function () { return request.get(API.ALLSALEATTR_URL); };
//添加一个新的SPU的
//更新已有的SPU接口
//data:即为新增的SPU|或者已有的SPU对象
export var reqAddOrUpdateSpu = function (data) {
    //如果SPU对象拥有ID,更新已有的SPU
    if (data.id) {
        return request.post(API.UPDATESPU_URL, data);
    }
    else {
        return request.post(API.ADDSPU_URL, data);
    }
};
//添加SKU的请求方法
export var reqAddSku = function (data) { return request.post(API.ADDSKU_URL, data); };
//获取SKU数据
export var reqSkuList = function (spuId) { return request.get(API.SKUINFO_URL + spuId); };
//删除已有的SPU
export var reqRemoveSpu = function (spuId) { return request.delete(API.REMOVESPU_URL + spuId); };
