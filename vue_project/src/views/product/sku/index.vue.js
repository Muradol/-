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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { onMounted, ref } from "vue";
import { reqCancelSale, reqRemoveSku, reqSaleSku, reqSkuInfo, reqSkuList } from "@/api/product/sku";
import { ElMessage } from "element-plus";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var pageNo = ref(1);
//每一页展示几条数据
var pageSize = ref(10);
var total = ref(0);
var skuArr = ref([]);
//控制抽屉显示与隐藏的字段
var drawer = ref(false);
var skuInfo = ref({});
//组件挂载完毕
onMounted(function () {
    getHasSku();
});
var getHasSku = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (pager) {
        var result;
        if (pager === void 0) { pager = 1; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //当前分页器的页码
                    pageNo.value = pager;
                    return [4 /*yield*/, reqSkuList(pageNo.value, pageSize.value)];
                case 1:
                    result = _a.sent();
                    if (result.code == 200) {
                        total.value = result.data.total;
                        skuArr.value = result.data.records;
                    }
                    return [2 /*return*/];
            }
        });
    });
};
//分页器下拉菜单发生变化触发
var handler = function (pageSizes) {
    getHasSku();
};
//商品的上架与下架的操作
var updateSale = function (row) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(row.isSale == 1)) return [3 /*break*/, 2];
                return [4 /*yield*/, reqCancelSale(row.id)];
            case 1:
                result = _a.sent();
                console.log(result);
                //提示信息
                ElMessage({ type: 'success', message: '下架成功' });
                //发请求获取当前更新完毕的全部已有的SKU
                getHasSku(pageNo.value);
                return [3 /*break*/, 4];
            case 2: 
            //下架操作
            return [4 /*yield*/, reqSaleSku(row.id)];
            case 3:
                //下架操作
                _a.sent();
                //提示信息
                ElMessage({ type: 'success', message: '上架成功' });
                //发请求获取当前更新完毕的全部已有的SKU
                getHasSku(pageNo.value);
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
//更新已有的SKU
var updateSku = function () {
    ElMessage({ type: 'success', message: '程序员在努力的更新中....' });
};
//查看商品详情按钮的回调
var findSku = function (row) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //抽屉展示出来
                drawer.value = true;
                return [4 /*yield*/, reqSkuInfo(row.id)];
            case 1:
                result = _a.sent();
                //存储已有的SKU
                skuInfo.value = result.data;
                return [2 /*return*/];
        }
    });
}); };
//删除某一个已有的商品
var removeSku = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqRemoveSku(id)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    //提示信息
                    ElMessage({ type: 'success', message: '删除成功' });
                    //获取已有全部商品
                    getHasSku(skuArr.value.length > 1 ? pageNo.value : pageNo.value - 1);
                }
                else {
                    //删除失败
                    ElMessage({ type: 'error', message: '系统数据不能删除' });
                }
                return [2 /*return*/];
        }
    });
}); };
var __VLS_fnComponent = (await import('vue')).defineComponent({});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['el-carousel__item'];
    __VLS_styleScopedClasses['el-carousel__item'];
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.skuArr)) })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.skuArr)) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("序号"), type: ("index"), width: ("80px"), align: ("center"), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ label: ("序号"), type: ("index"), width: ("80px"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ("名称"), width: ("150px"), align: ("center"), prop: ("skuName"), showOverflowTooltip: (true), }));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{ label: ("名称"), width: ("150px"), align: ("center"), prop: ("skuName"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_19), false));
    var __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("描述"), align: ("center"), prop: ("skuDesc"), showOverflowTooltip: (true), }));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{ label: ("描述"), align: ("center"), prop: ("skuDesc"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_25), false));
    var __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ label: ("默认图片"), align: ("center"), }));
    var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([{ label: ("默认图片"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_31), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_35.slots).default;
        var _a = __VLS_getSlotParams(__VLS_thisSlot)[0], row = _a.row, $index = _a.$index;
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ((row.skuDefaultImg)) }, { style: ({}) }));
        __VLS_nonNullable(__VLS_35.slots)['' /* empty slot name completion */];
    }
    var __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    var __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("重量"), align: ("center"), prop: ("weight"), width: ("100px"), }));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([{ label: ("重量"), align: ("center"), prop: ("weight"), width: ("100px"), }], __VLS_functionalComponentArgsRest(__VLS_37), false));
    var __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("价格"), align: ("center"), prop: ("price"), width: ("100px"), }));
    var __VLS_44 = __VLS_43.apply(void 0, __spreadArray([{ label: ("价格"), align: ("center"), prop: ("price"), width: ("100px"), }], __VLS_functionalComponentArgsRest(__VLS_43), false));
    var __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ label: ("操作"), align: ("center"), }));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([{ label: ("操作"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_49), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_53.slots).default;
        var _b = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _b.row, $index = _b.$index;
        var __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ((row_1.isSale == 1 ? 'Bottom' : 'Top')) })));
        var __VLS_56 = __VLS_55.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ((row_1.isSale == 1 ? 'Bottom' : 'Top')) })], __VLS_functionalComponentArgsRest(__VLS_55), false));
        var __VLS_60 = void 0;
        var __VLS_61 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.updateSale(row_1);
            }
        };
        var __VLS_57 = void 0;
        var __VLS_58 = void 0;
        var __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
        var __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })));
        var __VLS_64 = __VLS_63.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })], __VLS_functionalComponentArgsRest(__VLS_63), false));
        var __VLS_68 = void 0;
        var __VLS_69 = {
            onClick: (__VLS_ctx.updateSku)
        };
        var __VLS_65 = void 0;
        var __VLS_66 = void 0;
        var __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
        var __VLS_70 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("InfoFilled") })));
        var __VLS_72 = __VLS_71.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("InfoFilled") })], __VLS_functionalComponentArgsRest(__VLS_71), false));
        var __VLS_76 = void 0;
        var __VLS_77 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.findSku(row_1);
            }
        };
        var __VLS_73 = void 0;
        var __VLS_74 = void 0;
        var __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
        var __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElPopconfirm;
        /** @type { [typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ] } */
        // @ts-ignore
        var __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78(__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.skuName, "?"))), width: ("200px") })));
        var __VLS_80 = __VLS_79.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.skuName, "?"))), width: ("200px") })], __VLS_functionalComponentArgsRest(__VLS_79), false));
        var __VLS_84 = void 0;
        var __VLS_85 = {
            onConfirm: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.removeSku(row_1.id);
            }
        };
        var __VLS_81 = void 0;
        var __VLS_82 = void 0;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot_1 = __VLS_nonNullable(__VLS_83.slots).reference;
            var __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ type: ("primary"), size: ("small"), icon: ("Delete"), }));
            var __VLS_88 = __VLS_87.apply(void 0, __spreadArray([{ type: ("primary"), size: ("small"), icon: ("Delete"), }], __VLS_functionalComponentArgsRest(__VLS_87), false));
        }
        var __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
        __VLS_nonNullable(__VLS_53.slots)['' /* empty slot name completion */];
    }
    var __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    var __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    var __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92(__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.pageSize)), pageSizes: (([10, 20, 30, 40])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })));
    var __VLS_94 = __VLS_93.apply(void 0, __spreadArray([__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.pageSize)), pageSizes: (([10, 20, 30, 40])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })], __VLS_functionalComponentArgsRest(__VLS_93), false));
    var __VLS_98;
    var __VLS_99 = {
        onCurrentChange: (__VLS_ctx.getHasSku)
    };
    var __VLS_100 = {
        onSizeChange: (__VLS_ctx.handler)
    };
    var __VLS_95;
    var __VLS_96;
    var __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
    var __VLS_101 = __VLS_resolvedLocalAndGlobalComponents.ElDrawer;
    /** @type { [typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ] } */
    // @ts-ignore
    var __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ modelValue: ((__VLS_ctx.drawer)), }));
    var __VLS_103 = __VLS_102.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.drawer)), }], __VLS_functionalComponentArgsRest(__VLS_102), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_106.slots).header;
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_106.slots).default;
        var __VLS_107 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        var __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107(__assign({ style: ({}) })));
        var __VLS_109 = __VLS_108.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_108), false));
        var __VLS_113 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ span: ((6)), }));
        var __VLS_115 = __VLS_114.apply(void 0, __spreadArray([{ span: ((6)), }], __VLS_functionalComponentArgsRest(__VLS_114), false));
        __VLS_nonNullable(__VLS_118.slots).default;
        var __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
        var __VLS_119 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ span: ((18)), }));
        var __VLS_121 = __VLS_120.apply(void 0, __spreadArray([{ span: ((18)), }], __VLS_functionalComponentArgsRest(__VLS_120), false));
        (__VLS_ctx.skuInfo.skuName);
        __VLS_nonNullable(__VLS_124.slots).default;
        var __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121);
        __VLS_nonNullable(__VLS_112.slots).default;
        var __VLS_112 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109);
        var __VLS_125 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        var __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125(__assign({ style: ({}) })));
        var __VLS_127 = __VLS_126.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_126), false));
        var __VLS_131 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_132 = __VLS_asFunctionalComponent(__VLS_131, new __VLS_131({ span: ((6)), }));
        var __VLS_133 = __VLS_132.apply(void 0, __spreadArray([{ span: ((6)), }], __VLS_functionalComponentArgsRest(__VLS_132), false));
        __VLS_nonNullable(__VLS_136.slots).default;
        var __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133);
        var __VLS_137 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({ span: ((18)), }));
        var __VLS_139 = __VLS_138.apply(void 0, __spreadArray([{ span: ((18)), }], __VLS_functionalComponentArgsRest(__VLS_138), false));
        (__VLS_ctx.skuInfo.skuDesc);
        __VLS_nonNullable(__VLS_142.slots).default;
        var __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_137, __VLS_139);
        __VLS_nonNullable(__VLS_130.slots).default;
        var __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
        var __VLS_143 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        var __VLS_144 = __VLS_asFunctionalComponent(__VLS_143, new __VLS_143(__assign({ style: ({}) })));
        var __VLS_145 = __VLS_144.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_144), false));
        var __VLS_149 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({ span: ((6)), }));
        var __VLS_151 = __VLS_150.apply(void 0, __spreadArray([{ span: ((6)), }], __VLS_functionalComponentArgsRest(__VLS_150), false));
        __VLS_nonNullable(__VLS_154.slots).default;
        var __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151);
        var __VLS_155 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({ span: ((18)), }));
        var __VLS_157 = __VLS_156.apply(void 0, __spreadArray([{ span: ((18)), }], __VLS_functionalComponentArgsRest(__VLS_156), false));
        (__VLS_ctx.skuInfo.price);
        __VLS_nonNullable(__VLS_160.slots).default;
        var __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
        __VLS_nonNullable(__VLS_148.slots).default;
        var __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
        var __VLS_161 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        var __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161(__assign({ style: ({}) })));
        var __VLS_163 = __VLS_162.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_162), false));
        var __VLS_167 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, new __VLS_167({ span: ((6)), }));
        var __VLS_169 = __VLS_168.apply(void 0, __spreadArray([{ span: ((6)), }], __VLS_functionalComponentArgsRest(__VLS_168), false));
        __VLS_nonNullable(__VLS_172.slots).default;
        var __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_167, __VLS_169);
        var __VLS_173 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ span: ((18)), }));
        var __VLS_175 = __VLS_174.apply(void 0, __spreadArray([{ span: ((18)), }], __VLS_functionalComponentArgsRest(__VLS_174), false));
        for (var _i = 0, _c = __VLS_getVForSourceType((__VLS_ctx.skuInfo.skuAttrValueList)); _i < _c.length; _i++) {
            var item = _c[_i][0];
            var __VLS_179 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
            // @ts-ignore
            var __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, new __VLS_179(__assign({ style: ({}) }, { key: ((item.id)) })));
            var __VLS_181 = __VLS_180.apply(void 0, __spreadArray([__assign({ style: ({}) }, { key: ((item.id)) })], __VLS_functionalComponentArgsRest(__VLS_180), false));
            (item.valueName);
            __VLS_nonNullable(__VLS_184.slots).default;
            var __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181);
        }
        __VLS_nonNullable(__VLS_178.slots).default;
        var __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175);
        __VLS_nonNullable(__VLS_166.slots).default;
        var __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163);
        var __VLS_185 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        var __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185(__assign({ style: ({}) })));
        var __VLS_187 = __VLS_186.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_186), false));
        var __VLS_191 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ span: ((6)), }));
        var __VLS_193 = __VLS_192.apply(void 0, __spreadArray([{ span: ((6)), }], __VLS_functionalComponentArgsRest(__VLS_192), false));
        __VLS_nonNullable(__VLS_196.slots).default;
        var __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193);
        var __VLS_197 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_198 = __VLS_asFunctionalComponent(__VLS_197, new __VLS_197({ span: ((18)), }));
        var __VLS_199 = __VLS_198.apply(void 0, __spreadArray([{ span: ((18)), }], __VLS_functionalComponentArgsRest(__VLS_198), false));
        for (var _d = 0, _e = __VLS_getVForSourceType((__VLS_ctx.skuInfo.skuSaleAttrValueList)); _d < _e.length; _d++) {
            var item = _e[_d][0];
            var __VLS_203 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
            // @ts-ignore
            var __VLS_204 = __VLS_asFunctionalComponent(__VLS_203, new __VLS_203(__assign({ style: ({}) }, { key: ((item.id)) })));
            var __VLS_205 = __VLS_204.apply(void 0, __spreadArray([__assign({ style: ({}) }, { key: ((item.id)) })], __VLS_functionalComponentArgsRest(__VLS_204), false));
            (item.saleAttrValueName);
            __VLS_nonNullable(__VLS_208.slots).default;
            var __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205);
        }
        __VLS_nonNullable(__VLS_202.slots).default;
        var __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_197, __VLS_199);
        __VLS_nonNullable(__VLS_190.slots).default;
        var __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
        var __VLS_209 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        var __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209(__assign({ style: ({}) })));
        var __VLS_211 = __VLS_210.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_210), false));
        var __VLS_215 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_216 = __VLS_asFunctionalComponent(__VLS_215, new __VLS_215({ span: ((6)), }));
        var __VLS_217 = __VLS_216.apply(void 0, __spreadArray([{ span: ((6)), }], __VLS_functionalComponentArgsRest(__VLS_216), false));
        __VLS_nonNullable(__VLS_220.slots).default;
        var __VLS_220 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217);
        var __VLS_221 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        var __VLS_222 = __VLS_asFunctionalComponent(__VLS_221, new __VLS_221({ span: ((18)), }));
        var __VLS_223 = __VLS_222.apply(void 0, __spreadArray([{ span: ((18)), }], __VLS_functionalComponentArgsRest(__VLS_222), false));
        var __VLS_227 = __VLS_resolvedLocalAndGlobalComponents.ElCarousel;
        /** @type { [typeof __VLS_components.ElCarousel, typeof __VLS_components.elCarousel, typeof __VLS_components.ElCarousel, typeof __VLS_components.elCarousel, ] } */
        // @ts-ignore
        var __VLS_228 = __VLS_asFunctionalComponent(__VLS_227, new __VLS_227({ interval: ((4000)), type: ("card"), height: ("200px"), }));
        var __VLS_229 = __VLS_228.apply(void 0, __spreadArray([{ interval: ((4000)), type: ("card"), height: ("200px"), }], __VLS_functionalComponentArgsRest(__VLS_228), false));
        for (var _f = 0, _g = __VLS_getVForSourceType((__VLS_ctx.skuInfo.skuImageList)); _f < _g.length; _f++) {
            var item = _g[_f][0];
            var __VLS_233 = __VLS_resolvedLocalAndGlobalComponents.ElCarouselItem;
            /** @type { [typeof __VLS_components.ElCarouselItem, typeof __VLS_components.elCarouselItem, typeof __VLS_components.ElCarouselItem, typeof __VLS_components.elCarouselItem, ] } */
            // @ts-ignore
            var __VLS_234 = __VLS_asFunctionalComponent(__VLS_233, new __VLS_233({ key: ((item.id)), }));
            var __VLS_235 = __VLS_234.apply(void 0, __spreadArray([{ key: ((item.id)), }], __VLS_functionalComponentArgsRest(__VLS_234), false));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ((item.imgUrl)), alt: ("") }, { style: ({}) }));
            __VLS_nonNullable(__VLS_238.slots).default;
            var __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_233, __VLS_235);
        }
        __VLS_nonNullable(__VLS_232.slots).default;
        var __VLS_232 = __VLS_pickFunctionalComponentCtx(__VLS_227, __VLS_229);
        __VLS_nonNullable(__VLS_226.slots).default;
        var __VLS_226 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223);
        __VLS_nonNullable(__VLS_214.slots).default;
        var __VLS_214 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211);
    }
    var __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            pageNo: pageNo,
            pageSize: pageSize,
            total: total,
            skuArr: skuArr,
            drawer: drawer,
            skuInfo: skuInfo,
            getHasSku: getHasSku,
            handler: handler,
            updateSale: updateSale,
            updateSku: updateSku,
            findSku: findSku,
            removeSku: removeSku,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
