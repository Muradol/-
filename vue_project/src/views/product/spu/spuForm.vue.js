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
import { reqAddOrUpdateSpu, reqAllSaleAttr, reqAllTradeMark, reqSpuHasSaleAttr, reqSpuImageList } from "@/api/product/spu";
import { computed, ref } from "vue";
import { ElMessage } from "element-plus";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var $emit = defineEmits(['changeScene']);
//存储已有的SPU这些数据
var AllTradeMark = ref([]);
//商品图片
var imgList = ref([]);
//已有的SPU销售属性
var saleAttr = ref([]);
//全部销售属性
var allSaleAttr = ref([]);
//控制对话框的显示与隐藏
var dialogVisible = ref(false);
//存储预览图片地址
var dialogImageUrl = ref('');
//将来收集还未选择的销售属性的ID与属性值的名字
var saleAttrIdAndValueName = ref('');
//存储已有的SPU对象
var SpuParams = ref({
    category3Id: "", //收集三级分类的ID
    spuName: "", //SPU的名字
    description: "", //SPU的描述
    tmId: '', //品牌的ID
    spuImageList: [],
    spuSaleAttrList: [],
});
//点击取消按钮:通知父组件切换场景为1,展示有的SPU的数据
var cancel = function () {
    $emit('changeScene', { flag: 0, params: 'update' });
};
//子组件书写一个方法
var initHasSpuData = function (spu) { return __awaiter(void 0, void 0, void 0, function () {
    var result, result1, result2, result3, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                SpuParams.value = spu;
                return [4 /*yield*/, reqAllTradeMark()];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, reqSpuImageList(spu.id)];
            case 2:
                result1 = _a.sent();
                return [4 /*yield*/, reqSpuHasSaleAttr(spu.id)];
            case 3:
                result2 = _a.sent();
                return [4 /*yield*/, reqAllSaleAttr()];
            case 4:
                result3 = _a.sent();
                AllTradeMark.value = result.data || [];
                imgList.value = (result1.data || []).map(function (item) { return ({
                    name: item.imgName,
                    url: item.imgUrl
                }); });
                saleAttr.value = result2.data || [];
                allSaleAttr.value = result3.data || [];
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.error("Error initializing SPU data:", error_1);
                ElMessage.error("初始化数据时出错，请重试");
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
//照片墙点击预览按钮的时候触发的钩子
var handlePictureCardPreview = function (file) {
    dialogImageUrl.value = file.url;
    //对话框弹出来
    dialogVisible.value = true;
};
//照片墙删除文件钩子
var handleRemove = function () {
};
//照片钱上传成功之前的钩子约束文件的大小与类型
var handlerUpload = function (file) {
    if (file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/gif') {
        if (file.size / 1024 / 1024 < 3) {
            return true;
        }
        else {
            ElMessage({
                type: 'error',
                message: '上传文件务必小于3M'
            });
            return false;
        }
    }
    else {
        ElMessage({
            type: 'error',
            message: '上传文件务必PNG|JPG|GIF'
        });
        return false;
    }
};
//计算出当前SPU还未拥有的销售属性
var unSelectSaleAttr = computed(function () {
    //全部销售属性:颜色、版本、尺码
    //已有的销售属性:颜色、版本
    var unSelectArr = allSaleAttr.value.filter(function (item) {
        return saleAttr.value.every(function (item1) {
            return item.name != item1.saleAttrName;
        });
    });
    return unSelectArr;
});
//添加销售属性的方法
var addSaleAttr = function () {
    /*
    "baseSaleAttrId": number,
    "saleAttrName": string,
    "spuSaleAttrValueList": SpuSaleAttrValueList
    */
    var _a = saleAttrIdAndValueName.value.split(':'), baseSaleAttrId = _a[0], saleAttrName = _a[1];
    //准备一个新的销售属性对象:将来带给服务器即可
    var newSaleAttr = {
        baseSaleAttrId: baseSaleAttrId,
        saleAttrName: saleAttrName,
        spuSaleAttrValueList: []
    };
    //追加到数组当中
    saleAttr.value.push(newSaleAttr);
    //清空收集的数据
    saleAttrIdAndValueName.value = '';
};
//属性值按钮的点击事件
var toEdit = function (row) {
    //点击按钮的时候,input组件不就不出来->编辑模式
    row.flag = true;
    row.saleAttrValue = '';
};
//表单元素失却焦点的事件回调
var toLook = function (row) {
    //整理收集的属性的ID与属性值的名字
    var baseSaleAttrId = row.baseSaleAttrId, saleAttrValue = row.saleAttrValue;
    //整理成服务器需要的属性值形式
    var newSaleAttrValue = {
        baseSaleAttrId: baseSaleAttrId,
        saleAttrValueName: saleAttrValue
    };
    //非法情况判断
    if (saleAttrValue.trim() == '') {
        ElMessage({
            type: 'error',
            message: '属性值不能为空的'
        });
        return;
    }
    //判断属性值是否在数组当中存在
    var repeat = row.spuSaleAttrValueList.find(function (item) {
        return item.saleAttrValueName == saleAttrValue;
    });
    if (repeat) {
        ElMessage({
            type: 'error',
            message: '属性值重复'
        });
        return;
    }
    //追加新的属性值对象
    row.spuSaleAttrValueList.push(newSaleAttrValue);
    //切换为查看模式
    row.flag = false;
};
//保存按钮的回调
var save = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //整理参数
                //发请求:添加SPU|更新已有的SPU
                //成功
                //失败
                //1:照片墙的数据
                SpuParams.value.spuImageList = imgList.value.map(function (item) {
                    return {
                        imgName: item.name, //图片的名字
                        imgUrl: (item.response && item.response.data) || item.url
                    };
                });
                //2:整理销售属性的数据
                SpuParams.value.spuSaleAttrList = saleAttr.value;
                return [4 /*yield*/, reqAddOrUpdateSpu(SpuParams.value)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    ElMessage({
                        type: 'success',
                        message: SpuParams.value.id ? '更新成功' : '添加成功'
                    });
                    //通知父组件切换场景为0
                    $emit('changeScene', { flag: 0, params: SpuParams.value.id ? 'update' : 'add' });
                }
                else {
                    ElMessage({
                        type: 'success',
                        message: SpuParams.value.id ? '更新成功' : '添加成功'
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
//添加一个新的SPU初始化请求方法
var initAddSpu = function (c3Id) { return __awaiter(void 0, void 0, void 0, function () {
    var result, result1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //清空数据
                Object.assign(SpuParams.value, {
                    category3Id: "", //收集三级分类的ID
                    spuName: "", //SPU的名字
                    description: "", //SPU的描述
                    tmId: '', //品牌的ID
                    spuImageList: [],
                    spuSaleAttrList: [],
                });
                //清空照片
                imgList.value = [];
                //清空销售属性
                saleAttr.value = [];
                saleAttrIdAndValueName.value = '';
                //存储三级分类的ID
                SpuParams.value.category3Id = c3Id;
                return [4 /*yield*/, reqAllTradeMark()];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, reqAllSaleAttr()];
            case 2:
                result1 = _a.sent();
                //存储数据
                AllTradeMark.value = result.data;
                allSaleAttr.value = result1.data;
                return [2 /*return*/];
        }
    });
}); };
//对外暴露
var __VLS_exposed = { initHasSpuData: initHasSpuData, initAddSpu: initAddSpu };
defineExpose({ initHasSpuData: initHasSpuData, initAddSpu: initAddSpu });
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
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("SPU名称"), }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{ label: ("SPU名称"), }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ placeholder: ("请您输入SPU名称"), modelValue: ((__VLS_ctx.SpuParams.spuName)), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ placeholder: ("请您输入SPU名称"), modelValue: ((__VLS_ctx.SpuParams.spuName)), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ("SPU品牌"), }));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{ label: ("SPU品牌"), }], __VLS_functionalComponentArgsRest(__VLS_19), false));
    var __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ style: ({}) }, { placeholder: ("请您选择品牌"), modelValue: ((__VLS_ctx.SpuParams.tmId)) })));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ style: ({}) }, { placeholder: ("请您选择品牌"), modelValue: ((__VLS_ctx.SpuParams.tmId)) })], __VLS_functionalComponentArgsRest(__VLS_25), false));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.AllTradeMark)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        var __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        var __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ key: ((item.id)), label: ((item.tmName)), value: ((item.id)), }));
        var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([{ key: ((item.id)), label: ((item.tmName)), value: ((item.id)), }], __VLS_functionalComponentArgsRest(__VLS_31), false));
    }
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    var __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("SPU描述"), }));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([{ label: ("SPU描述"), }], __VLS_functionalComponentArgsRest(__VLS_37), false));
    var __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ type: ("textarea"), placeholder: ("请您输入SPU描述"), modelValue: ((__VLS_ctx.SpuParams.description)), }));
    var __VLS_44 = __VLS_43.apply(void 0, __spreadArray([{ type: ("textarea"), placeholder: ("请您输入SPU描述"), modelValue: ((__VLS_ctx.SpuParams.description)), }], __VLS_functionalComponentArgsRest(__VLS_43), false));
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    var __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ label: ("SPU照片"), }));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([{ label: ("SPU照片"), }], __VLS_functionalComponentArgsRest(__VLS_49), false));
    var __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
    /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ] } */
    // @ts-ignore
    var __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ fileList: ((__VLS_ctx.imgList)), action: ("/api/admin/product/fileUpload"), listType: ("picture-card"), onPreview: ((__VLS_ctx.handlePictureCardPreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeUpload: ((__VLS_ctx.handlerUpload)), }));
    var __VLS_56 = __VLS_55.apply(void 0, __spreadArray([{ fileList: ((__VLS_ctx.imgList)), action: ("/api/admin/product/fileUpload"), listType: ("picture-card"), onPreview: ((__VLS_ctx.handlePictureCardPreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeUpload: ((__VLS_ctx.handlerUpload)), }], __VLS_functionalComponentArgsRest(__VLS_55), false));
    var __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_61), false));
    var __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.Plus;
    /** @type { [typeof __VLS_components.Plus, ] } */
    // @ts-ignore
    var __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    var __VLS_68 = __VLS_67.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_67), false));
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    var __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ modelValue: ((__VLS_ctx.dialogVisible)), }));
    var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.dialogVisible)), }], __VLS_functionalComponentArgsRest(__VLS_73), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ "w-full": (true), src: ((__VLS_ctx.dialogImageUrl)), alt: ("Preview Image") }, { style: ({}) }));
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    var __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ label: ("SPU销售属性"), }));
    var __VLS_80 = __VLS_79.apply(void 0, __spreadArray([{ label: ("SPU销售属性"), }], __VLS_functionalComponentArgsRest(__VLS_79), false));
    var __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84(__assign(__assign({ modelValue: ((__VLS_ctx.saleAttrIdAndValueName)) }, { style: ({}) }), { placeholder: ((__VLS_ctx.unSelectSaleAttr.length ? "\u8FD8\u672A\u9009\u62E9".concat(__VLS_ctx.unSelectSaleAttr.length, "\u4E2A") : '无')) })));
    var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([__assign(__assign({ modelValue: ((__VLS_ctx.saleAttrIdAndValueName)) }, { style: ({}) }), { placeholder: ((__VLS_ctx.unSelectSaleAttr.length ? "\u8FD8\u672A\u9009\u62E9".concat(__VLS_ctx.unSelectSaleAttr.length, "\u4E2A") : '无')) })], __VLS_functionalComponentArgsRest(__VLS_85), false));
    for (var _c = 0, _d = __VLS_getVForSourceType((__VLS_ctx.unSelectSaleAttr)); _c < _d.length; _c++) {
        var _e = _d[_c], item = _e[0], index = _e[1];
        var __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        var __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ value: (("".concat(item.id, ":").concat(item.name))), key: ((item.id)), label: ((item.name)), }));
        var __VLS_92 = __VLS_91.apply(void 0, __spreadArray([{ value: (("".concat(item.id, ":").concat(item.name))), key: ((item.id)), label: ((item.name)), }], __VLS_functionalComponentArgsRest(__VLS_91), false));
    }
    __VLS_nonNullable(__VLS_89.slots).default;
    var __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    var __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(__assign(__assign(__assign({ 'onClick': {} }, { disabled: ((__VLS_ctx.saleAttrIdAndValueName ? false : true)) }), { style: ({}) }), { type: ("primary"), size: ("default"), icon: ("Plus") })));
    var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { disabled: ((__VLS_ctx.saleAttrIdAndValueName ? false : true)) }), { style: ({}) }), { type: ("primary"), size: ("default"), icon: ("Plus") })], __VLS_functionalComponentArgsRest(__VLS_97), false));
    var __VLS_102;
    var __VLS_103 = {
        onClick: (__VLS_ctx.addSaleAttr)
    };
    var __VLS_99;
    var __VLS_100;
    __VLS_nonNullable(__VLS_101.slots).default;
    var __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    var __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104(__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.saleAttr)) })));
    var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.saleAttr)) })], __VLS_functionalComponentArgsRest(__VLS_105), false));
    var __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ label: ("序号"), type: ("index"), align: ("center"), width: ("80px"), }));
    var __VLS_112 = __VLS_111.apply(void 0, __spreadArray([{ label: ("序号"), type: ("index"), align: ("center"), width: ("80px"), }], __VLS_functionalComponentArgsRest(__VLS_111), false));
    var __VLS_116 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ label: ("销售属性名字"), width: ("120px"), prop: ("saleAttrName"), }));
    var __VLS_118 = __VLS_117.apply(void 0, __spreadArray([{ label: ("销售属性名字"), width: ("120px"), prop: ("saleAttrName"), }], __VLS_functionalComponentArgsRest(__VLS_117), false));
    var __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ label: ("销售属性值"), }));
    var __VLS_124 = __VLS_123.apply(void 0, __spreadArray([{ label: ("销售属性值"), }], __VLS_functionalComponentArgsRest(__VLS_123), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_127.slots).default;
        var _f = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _f.row, $index = _f.$index;
        var _loop_1 = function (item, index) {
            var __VLS_128 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
            // @ts-ignore
            var __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128(__assign(__assign(__assign(__assign({ 'onClose': {} }, { style: ({}) }), { key: ((row_1.id)) }), { class: ("mx-1") }), { closable: (true) })));
            var __VLS_130 = __VLS_129.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign({ 'onClose': {} }, { style: ({}) }), { key: ((row_1.id)) }), { class: ("mx-1") }), { closable: (true) })], __VLS_functionalComponentArgsRest(__VLS_129), false));
            var __VLS_134 = void 0;
            var __VLS_135 = {
                onClose: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    row_1.spuSaleAttrValueList.splice(index, 1);
                }
            };
            var __VLS_131 = void 0;
            var __VLS_132 = void 0;
            (item.saleAttrValueName);
            __VLS_nonNullable(__VLS_133.slots).default;
            var __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
        };
        for (var _g = 0, _h = __VLS_getVForSourceType((row_1.spuSaleAttrValueList)); _g < _h.length; _g++) {
            var _j = _h[_g], item = _j[0], index = _j[1];
            _loop_1(item, index);
        }
        if (row_1.flag == true) {
            var __VLS_136 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
            /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
            // @ts-ignore
            var __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136(__assign(__assign({ 'onBlur': {} }, { modelValue: ((row_1.saleAttrValue)), placeholder: ("请你输入属性值"), size: ("small") }), { style: ({}) })));
            var __VLS_138 = __VLS_137.apply(void 0, __spreadArray([__assign(__assign({ 'onBlur': {} }, { modelValue: ((row_1.saleAttrValue)), placeholder: ("请你输入属性值"), size: ("small") }), { style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_137), false));
            var __VLS_142 = void 0;
            var __VLS_143 = {
                onBlur: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((row_1.flag == true)))
                        return;
                    __VLS_ctx.toLook(row_1);
                }
            };
            var __VLS_139 = void 0;
            var __VLS_140 = void 0;
            var __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
        }
        else {
            var __VLS_144 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Plus") })));
            var __VLS_146 = __VLS_145.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Plus") })], __VLS_functionalComponentArgsRest(__VLS_145), false));
            var __VLS_150 = void 0;
            var __VLS_151 = {
                onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(!((row_1.flag == true))))
                        return;
                    __VLS_ctx.toEdit(row_1);
                }
            };
            var __VLS_147 = void 0;
            var __VLS_148 = void 0;
            var __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
        }
        __VLS_nonNullable(__VLS_127.slots)['' /* empty slot name completion */];
    }
    var __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
    var __VLS_152 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ label: ("操作"), width: ("120px"), }));
    var __VLS_154 = __VLS_153.apply(void 0, __spreadArray([{ label: ("操作"), width: ("120px"), }], __VLS_functionalComponentArgsRest(__VLS_153), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_157.slots).default;
        var _k = __VLS_getSlotParams(__VLS_thisSlot)[0], row = _k.row, $index_1 = _k.$index;
        var __VLS_158 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Delete") })));
        var __VLS_160 = __VLS_159.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Delete") })], __VLS_functionalComponentArgsRest(__VLS_159), false));
        var __VLS_164 = void 0;
        var __VLS_165 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.saleAttr.splice($index_1, 1);
            }
        };
        var __VLS_161 = void 0;
        var __VLS_162 = void 0;
        var __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160);
        __VLS_nonNullable(__VLS_157.slots)['' /* empty slot name completion */];
    }
    var __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154);
    __VLS_nonNullable(__VLS_109.slots).default;
    var __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    __VLS_nonNullable(__VLS_83.slots).default;
    var __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    var __VLS_166 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({}));
    var __VLS_168 = __VLS_167.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_167), false));
    var __VLS_172 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172(__assign({ 'onClick': {} }, { disabled: ((__VLS_ctx.saleAttr.length <= 0)), type: ("primary"), size: ("default") })));
    var __VLS_174 = __VLS_173.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { disabled: ((__VLS_ctx.saleAttr.length <= 0)), type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_173), false));
    var __VLS_178;
    var __VLS_179 = {
        onClick: (__VLS_ctx.save)
    };
    var __VLS_175;
    var __VLS_176;
    __VLS_nonNullable(__VLS_177.slots).default;
    var __VLS_177 = __VLS_pickFunctionalComponentCtx(__VLS_172, __VLS_174);
    var __VLS_180 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
    var __VLS_182 = __VLS_181.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_181), false));
    var __VLS_186;
    var __VLS_187 = {
        onClick: (__VLS_ctx.cancel)
    };
    var __VLS_183;
    var __VLS_184;
    __VLS_nonNullable(__VLS_185.slots).default;
    var __VLS_185 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182);
    __VLS_nonNullable(__VLS_171.slots).default;
    var __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168);
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['mx-1'];
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
            AllTradeMark: AllTradeMark,
            AllTradeMark: AllTradeMark,
            imgList: imgList,
            saleAttr: saleAttr,
            dialogVisible: dialogVisible,
            dialogImageUrl: dialogImageUrl,
            saleAttrIdAndValueName: saleAttrIdAndValueName,
            SpuParams: SpuParams,
            cancel: cancel,
            handlePictureCardPreview: handlePictureCardPreview,
            handleRemove: handleRemove,
            handlerUpload: handlerUpload,
            unSelectSaleAttr: unSelectSaleAttr,
            addSaleAttr: addSaleAttr,
            toEdit: toEdit,
            toLook: toLook,
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
