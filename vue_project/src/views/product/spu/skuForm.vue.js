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
import { reqAttr } from "@/api/product/attr";
import { reqAddSku, reqSpuHasSaleAttr, reqSpuImageList } from "@/api/product/spu";
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var $emit = defineEmits(['changeScene']);
//平台属性
var attrArr = ref([]);
//销售属性
var saleArr = ref([]);
//照片的数据
var imgArr = ref([]);
//获取table组件实例
var table = ref();
//收集SKU的参数
var skuParams = reactive({
    //父组件传递过来的数据
    "category3Id": "", //三级分类的ID
    "spuId": "", //已有的SPU的ID
    "tmId": "", //SPU品牌的ID
    //v-model收集
    "skuName": "", //sku名字
    "price": "", //sku价格
    "weight": "", //sku重量
    "skuDesc": "", //sku的描述
    "skuAttrValueList": [ //平台属性的收集
    ],
    "skuSaleAttrValueList": [ //销售属性
    ],
    "skuDefaultImg": "", //sku图片地址
});
//取消按钮的回调
var cancel = function () {
    $emit('changeScene', { flag: 0, params: '' });
};
//当前子组件的方法对外暴露
var initSkuData = function (c1Id, c2Id, spu) { return __awaiter(void 0, void 0, void 0, function () {
    var result, result1, result2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //收集数据
                skuParams.category3Id = spu.category3Id;
                skuParams.spuId = spu.id;
                skuParams.tmId = spu.tmId;
                return [4 /*yield*/, reqAttr(c1Id, c2Id, spu.category3Id)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, reqSpuHasSaleAttr(spu.id)];
            case 2:
                result1 = _a.sent();
                return [4 /*yield*/, reqSpuImageList(spu.id)];
            case 3:
                result2 = _a.sent();
                //平台属性
                attrArr.value = result.data;
                //销售属性
                saleArr.value = result1.data;
                //图片
                imgArr.value = result2.data;
                return [2 /*return*/];
        }
    });
}); };
//对外暴露方法
var __VLS_exposed = {
    initSkuData: initSkuData
};
defineExpose({
    initSkuData: initSkuData
});
//设置默认图片的方法回调
var handler = function (row) {
    //点击的时候,全部图片的的复选框不勾选
    imgArr.value.forEach(function (item) {
        table.value.toggleRowSelection(item, false);
    });
    //选中的图片才勾选
    table.value.toggleRowSelection(row, true);
    //收集图片地址
    skuParams.skuDefaultImg = row.imgUrl;
};
//保存按钮的方法
var save = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //整理参数
                //平台属性
                skuParams.skuAttrValueList = attrArr.value.reduce(function (prev, next) {
                    if (next.attrIdAndValueId) {
                        var _a = next.attrIdAndValueId.split(':'), attrId = _a[0], valueId = _a[1];
                        prev.push({
                            attrId: attrId,
                            valueId: valueId
                        });
                    }
                    return prev;
                }, []);
                //销售属性
                skuParams.skuSaleAttrValueList = saleArr.value.reduce(function (prev, next) {
                    if (next.saleIdAndValueId) {
                        var _a = next.saleIdAndValueId.split(':'), saleAttrId = _a[0], saleAttrValueId = _a[1];
                        prev.push({
                            saleAttrId: saleAttrId,
                            saleAttrValueId: saleAttrValueId
                        });
                    }
                    return prev;
                }, []);
                return [4 /*yield*/, reqAddSku(skuParams)];
            case 1:
                result = _a.sent();
                console.log(result);
                console.log('Sent data:', skuParams);
                if (result.code == 200) {
                    ElMessage({
                        type: 'success',
                        message: '添加SKU成功'
                    });
                    //通知父组件切换场景为零
                    $emit('changeScene', { flag: 0, params: '' });
                }
                else {
                    ElMessage({
                        type: 'error',
                        message: '添加SKU失败'
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
var __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ labelWidth: ("100px"), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ labelWidth: ("100px"), }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("Sku名称"), }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{ label: ("Sku名称"), }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ placeholder: ("Sku名称"), modelValue: ((__VLS_ctx.skuParams.skuName)), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ placeholder: ("Sku名称"), modelValue: ((__VLS_ctx.skuParams.skuName)), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ("价格(元)"), }));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{ label: ("价格(元)"), }], __VLS_functionalComponentArgsRest(__VLS_19), false));
    var __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ placeholder: ("价格(元)"), type: ("number"), modelValue: ((__VLS_ctx.skuParams.price)), }));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{ placeholder: ("价格(元)"), type: ("number"), modelValue: ((__VLS_ctx.skuParams.price)), }], __VLS_functionalComponentArgsRest(__VLS_25), false));
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    var __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ label: ("重量(克)"), }));
    var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([{ label: ("重量(克)"), }], __VLS_functionalComponentArgsRest(__VLS_31), false));
    var __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ placeholder: ("重量(克)"), type: ("number"), modelValue: ((__VLS_ctx.skuParams.weight)), }));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([{ placeholder: ("重量(克)"), type: ("number"), modelValue: ((__VLS_ctx.skuParams.weight)), }], __VLS_functionalComponentArgsRest(__VLS_37), false));
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    var __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("Sku描述"), }));
    var __VLS_44 = __VLS_43.apply(void 0, __spreadArray([{ label: ("Sku描述"), }], __VLS_functionalComponentArgsRest(__VLS_43), false));
    var __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ placeholder: ("Sku描述"), type: ("textarea"), modelValue: ((__VLS_ctx.skuParams.skuDesc)), }));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([{ placeholder: ("Sku描述"), type: ("textarea"), modelValue: ((__VLS_ctx.skuParams.skuDesc)), }], __VLS_functionalComponentArgsRest(__VLS_49), false));
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    var __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ label: ("平台属性"), }));
    var __VLS_56 = __VLS_55.apply(void 0, __spreadArray([{ label: ("平台属性"), }], __VLS_functionalComponentArgsRest(__VLS_55), false));
    var __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ inline: ((true)), }));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([{ inline: ((true)), }], __VLS_functionalComponentArgsRest(__VLS_61), false));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.attrArr)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        var __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        var __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ key: ((item.id)), label: ((item.attrName)), }));
        var __VLS_68 = __VLS_67.apply(void 0, __spreadArray([{ key: ((item.id)), label: ((item.attrName)), }], __VLS_functionalComponentArgsRest(__VLS_67), false));
        var __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
        /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
        // @ts-ignore
        var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72(__assign({ style: ({}) }, { modelValue: ((item.attrIdAndValueId)) })));
        var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([__assign({ style: ({}) }, { modelValue: ((item.attrIdAndValueId)) })], __VLS_functionalComponentArgsRest(__VLS_73), false));
        for (var _c = 0, _d = __VLS_getVForSourceType((item.attrValueList)); _c < _d.length; _c++) {
            var _e = _d[_c], attrValue = _e[0], index_1 = _e[1];
            var __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
            /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
            // @ts-ignore
            var __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ value: (("".concat(item.id, ":").concat(attrValue.id))), key: ((attrValue.id)), label: ((attrValue.valueName)), }));
            var __VLS_80 = __VLS_79.apply(void 0, __spreadArray([{ value: (("".concat(item.id, ":").concat(attrValue.id))), key: ((attrValue.id)), label: ((attrValue.valueName)), }], __VLS_functionalComponentArgsRest(__VLS_79), false));
        }
        __VLS_nonNullable(__VLS_77.slots).default;
        var __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
        __VLS_nonNullable(__VLS_71.slots).default;
        var __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    }
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    var __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ label: ("销售属性"), }));
    var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([{ label: ("销售属性"), }], __VLS_functionalComponentArgsRest(__VLS_85), false));
    var __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ inline: ((true)), }));
    var __VLS_92 = __VLS_91.apply(void 0, __spreadArray([{ inline: ((true)), }], __VLS_functionalComponentArgsRest(__VLS_91), false));
    for (var _f = 0, _g = __VLS_getVForSourceType((__VLS_ctx.saleArr)); _f < _g.length; _f++) {
        var _h = _g[_f], item = _h[0], index = _h[1];
        var __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ label: ((item.saleAttrName)), key: ((item.id)), }));
        var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([{ label: ((item.saleAttrName)), key: ((item.id)), }], __VLS_functionalComponentArgsRest(__VLS_97), false));
        var __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
        /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
        // @ts-ignore
        var __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102(__assign({ style: ({}) }, { modelValue: ((item.saleIdAndValueId)) })));
        var __VLS_104 = __VLS_103.apply(void 0, __spreadArray([__assign({ style: ({}) }, { modelValue: ((item.saleIdAndValueId)) })], __VLS_functionalComponentArgsRest(__VLS_103), false));
        for (var _j = 0, _k = __VLS_getVForSourceType((item.spuSaleAttrValueList)); _j < _k.length; _j++) {
            var _l = _k[_j], saleAttrValue = _l[0], index_2 = _l[1];
            var __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
            /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
            // @ts-ignore
            var __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ value: (("".concat(item.id, ":").concat(saleAttrValue.id))), key: ((saleAttrValue.id)), label: ((saleAttrValue.saleAttrValueName)), }));
            var __VLS_110 = __VLS_109.apply(void 0, __spreadArray([{ value: (("".concat(item.id, ":").concat(saleAttrValue.id))), key: ((saleAttrValue.id)), label: ((saleAttrValue.saleAttrValueName)), }], __VLS_functionalComponentArgsRest(__VLS_109), false));
        }
        __VLS_nonNullable(__VLS_107.slots).default;
        var __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
        __VLS_nonNullable(__VLS_101.slots).default;
        var __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    }
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
    __VLS_nonNullable(__VLS_89.slots).default;
    var __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    var __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ label: ("图片名称"), }));
    var __VLS_116 = __VLS_115.apply(void 0, __spreadArray([{ label: ("图片名称"), }], __VLS_functionalComponentArgsRest(__VLS_115), false));
    var __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ border: (true), data: ((__VLS_ctx.imgArr)), ref: ("table"), }));
    var __VLS_122 = __VLS_121.apply(void 0, __spreadArray([{ border: (true), data: ((__VLS_ctx.imgArr)), ref: ("table"), }], __VLS_functionalComponentArgsRest(__VLS_121), false));
    // @ts-ignore navigation for `const table = ref()`
    __VLS_ctx.table;
    var __VLS_126 = {};
    var __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ type: ("selection"), align: ("center"), width: ("80px"), }));
    var __VLS_129 = __VLS_128.apply(void 0, __spreadArray([{ type: ("selection"), align: ("center"), width: ("80px"), }], __VLS_functionalComponentArgsRest(__VLS_128), false));
    var __VLS_133 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ label: ("图片"), align: ("center"), }));
    var __VLS_135 = __VLS_134.apply(void 0, __spreadArray([{ label: ("图片"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_134), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_138.slots).default;
        var _m = __VLS_getSlotParams(__VLS_thisSlot)[0], row = _m.row, $index = _m.$index;
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ((row.imgUrl)) }, { style: ({}) }));
        __VLS_nonNullable(__VLS_138.slots)['' /* empty slot name completion */];
    }
    var __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
    var __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({ label: ("名称"), align: ("center"), prop: ("imgName"), }));
    var __VLS_141 = __VLS_140.apply(void 0, __spreadArray([{ label: ("名称"), align: ("center"), prop: ("imgName"), }], __VLS_functionalComponentArgsRest(__VLS_140), false));
    var __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ label: ("操作"), align: ("center"), }));
    var __VLS_147 = __VLS_146.apply(void 0, __spreadArray([{ label: ("操作"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_146), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_150.slots).default;
        var _o = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _o.row, $index = _o.$index;
        var __VLS_151 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small") })));
        var __VLS_153 = __VLS_152.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small") })], __VLS_functionalComponentArgsRest(__VLS_152), false));
        var __VLS_157 = void 0;
        var __VLS_158 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.handler(row_1);
            }
        };
        var __VLS_154 = void 0;
        var __VLS_155 = void 0;
        __VLS_nonNullable(__VLS_156.slots).default;
        var __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153);
        __VLS_nonNullable(__VLS_150.slots)['' /* empty slot name completion */];
    }
    var __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147);
    __VLS_nonNullable(__VLS_125.slots).default;
    var __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
    __VLS_nonNullable(__VLS_119.slots).default;
    var __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
    var __VLS_159 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({}));
    var __VLS_161 = __VLS_160.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_160), false));
    var __VLS_165 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
    var __VLS_167 = __VLS_166.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_166), false));
    var __VLS_171;
    var __VLS_172 = {
        onClick: (__VLS_ctx.save)
    };
    var __VLS_168;
    var __VLS_169;
    __VLS_nonNullable(__VLS_170.slots).default;
    var __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
    var __VLS_173 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
    var __VLS_175 = __VLS_174.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_174), false));
    var __VLS_179;
    var __VLS_180 = {
        onClick: (__VLS_ctx.cancel)
    };
    var __VLS_176;
    var __VLS_177;
    __VLS_nonNullable(__VLS_178.slots).default;
    var __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175);
    __VLS_nonNullable(__VLS_164.slots).default;
    var __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161);
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {
        "table": __VLS_126,
    };
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
            attrArr: attrArr,
            saleArr: saleArr,
            imgArr: imgArr,
            table: table,
            skuParams: skuParams,
            cancel: cancel,
            handler: handler,
            save: save,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return __assign({}, __VLS_exposed);
    },
    emits: {},
});
;
