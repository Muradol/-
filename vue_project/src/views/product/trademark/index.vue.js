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
import { nextTick, onMounted, reactive, ref } from "vue";
import { reqAddOrUpdateTrademark, reqDeleteTrademark, reqHasTrademark } from "@/api/product/trademark";
import { ElMessage } from "element-plus";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
//当前页面
var pageNo = ref(1);
//每一页展示多少条数据
var limit = ref(3);
//存储已有品牌的数据总数
var total = ref(0);
//存储已有品牌的数据
var trademarkArr = ref([]);
//控制对话框显示与隐藏
var dialogFormVisible = ref(false);
//定义收集新增品牌数据
var trademarkParams = reactive({
    tmName: '',
    logoUrl: ''
});
//获取el-form组件实例
var formRef = ref();
//获取已有品牌的接口封装为一个函数:在任何情况下向获取数据,调用次函数即可
var getHasTrademark = function () {
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
                    pageNo.value = pager;
                    return [4 /*yield*/, reqHasTrademark(pageNo.value, limit.value)];
                case 1:
                    result = _a.sent();
                    if (result.code == 200) {
                        //已有品牌的总个数
                        total.value = result.data.total;
                        trademarkArr.value = result.data.records;
                    }
                    return [2 /*return*/];
            }
        });
    });
};
//组件挂载完毕钩子---发一次请求,获取第一页、一页三个已有品牌数据
onMounted(function () {
    getHasTrademark();
});
//当下拉菜单发生变化的时候触发次方法
//这个自定义事件,分页器组件会将下拉菜单选中数据返回
var sizeChange = function () {
    getHasTrademark();
};
var addTrademark = function () {
    dialogFormVisible.value = true;
    //清空数据
    trademarkParams.id = 0;
    trademarkParams.tmName = '';
    trademarkParams.logoUrl = '';
    //清理上一次校验结果
    //第一种写法:ts的问号语法
    // formRef.value?.clearValidate('tmName');
    // formRef.value?.clearValidate('logoUrl');
    nextTick(function () {
        formRef.value.clearValidate('tmName');
        formRef.value.clearValidate('logoUrl');
    });
};
var updateTrademark = function (row) {
    //清理上一次校验结果
    nextTick(function () {
        formRef.value.clearValidate('tmName');
        formRef.value.clearValidate('logoUrl');
    });
    dialogFormVisible.value = true;
    Object.assign(trademarkParams, row);
};
var cancel = function () {
    dialogFormVisible.value = false;
};
var confirm = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //在你发请求之前,要对于整个表单进行校验
            //调用这个方法进行全部表单相校验,如果校验全部通过，在执行后面的语法
            return [4 /*yield*/, formRef.value.validate()];
            case 1:
                //在你发请求之前,要对于整个表单进行校验
                //调用这个方法进行全部表单相校验,如果校验全部通过，在执行后面的语法
                _a.sent();
                return [4 /*yield*/, reqAddOrUpdateTrademark(trademarkParams)];
            case 2:
                result = _a.sent();
                if (result.code == 200) {
                    dialogFormVisible.value = false;
                    ElMessage({
                        type: "success",
                        message: trademarkParams.id ? '修改品牌成功' : '添加品牌成功'
                    });
                    getHasTrademark(trademarkParams.id ? pageNo.value : 1);
                }
                else {
                    ElMessage({
                        type: "error",
                        message: trademarkParams.id ? '修改品牌失败' : '添加品牌失败'
                    });
                    dialogFormVisible.value = false;
                }
                return [2 /*return*/];
        }
    });
}); };
//上传图片组件->上传图片之前触发的钩子函数
var beforeAvatarUpload = function (rawFile) {
    //钩子是在图片上传成功之前触发,上传文件之前可以约束文件类型与大小
    //要求:上传文件格式png|jpg|gif 4M
    if (rawFile.type == 'image/png' || rawFile.type == 'image/jpeg' || rawFile.type == 'image/gif') {
        if (rawFile.size / 1024 / 1024 < 4) {
            return true;
        }
        else {
            ElMessage({
                type: 'error',
                message: '上传文件大小小于4M'
            });
            return false;
        }
    }
    else {
        ElMessage({
            type: 'error',
            message: "上传文件格式务必PNG|JPG|GIF"
        });
        return false;
    }
};
//图片上传成功钩子
var handleAvatarSuccess = function (response, uploadFile) {
    //response:即为当前这次上传图片post请求服务器返回的数据
    //收集上传图片的地址,添加一个新的品牌的时候带给服务器
    trademarkParams.logoUrl = response.data;
    //图片上传成功,清除掉对应图片校验结果
    formRef.value.clearValidate('logoUrl');
};
//品牌自定义校验规则方法
var validatorTmName = function (rule, value, callBack) {
    //是当表单元素触发blur时候,会触发此方法
    //自定义校验规则
    if (value.trim().length >= 2) {
        callBack();
    }
    else {
        callBack(new Error('品牌名称位数大于等于两位'));
    }
};
//品牌LOGO图片的自定义校验规则方法
var validatorLogoUrl = function (rule, value, callBack) {
    if (value) {
        callBack();
    }
    else {
        callBack(new Error('LOGO图片务必上传'));
    }
};
//表单校验规则对象
var rules = {
    tmName: [
        //required:这个字段务必校验,表单项前面出来五角星
        //trigger:代表触发校验规则时机[blur、change]
        { required: true, trigger: 'blur', validator: validatorTmName }
    ],
    logoUrl: [
        { required: true, trigger: 'blur', validator: validatorLogoUrl }
    ]
};
//气泡确认框确定按钮的回调
var removeTradeMark = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqDeleteTrademark(id)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    ElMessage({
                        type: "success",
                        message: '删除品牌成功'
                    });
                    getHasTrademark(trademarkArr.value.length > 1 ? pageNo.value : pageNo.value - 1);
                }
                else {
                    ElMessage({
                        type: "error",
                        message: '删除品牌失败'
                    });
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
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: ("box_card") })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: ("box_card") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), icon: ("Plus") })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), icon: ("Plus") })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12;
    var __VLS_13 = {
        onClick: (__VLS_ctx.addTrademark)
    };
    var __VLS_9;
    var __VLS_10;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    var __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14(__assign({ style: ({}) }, { border: (true), data: ((__VLS_ctx.trademarkArr)) })));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([__assign({ style: ({}) }, { border: (true), data: ((__VLS_ctx.trademarkArr)) })], __VLS_functionalComponentArgsRest(__VLS_15), false));
    var __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ label: ("序号"), width: ("80px"), align: ("center"), type: ("index"), }));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{ label: ("序号"), width: ("80px"), align: ("center"), type: ("index"), }], __VLS_functionalComponentArgsRest(__VLS_21), false));
    var __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("品牌名称"), align: ("center"), }));
    var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{ label: ("品牌名称"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_27), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_31.slots).default;
        var _a = __VLS_getSlotParams(__VLS_thisSlot)[0], row = _a.row, $index = _a.$index;
        __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
        (row.tmName);
        __VLS_nonNullable(__VLS_31.slots)['' /* empty slot name completion */];
    }
    var __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    var __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ label: ("品牌LOGO"), align: ("center"), }));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{ label: ("品牌LOGO"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_33), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_37.slots).default;
        var _b = __VLS_getSlotParams(__VLS_thisSlot)[0], row = _b.row, $index = _b.$index;
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ((row.logoUrl)), alt: ("") }, { style: ({}) }));
        __VLS_nonNullable(__VLS_37.slots)['' /* empty slot name completion */];
    }
    var __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    var __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("品牌操作"), align: ("center"), }));
    var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([{ label: ("品牌操作"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_39), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_43.slots).default;
        var _c = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _c.row, $index = _c.$index;
        var __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })));
        var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })], __VLS_functionalComponentArgsRest(__VLS_45), false));
        var __VLS_50 = void 0;
        var __VLS_51 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.updateTrademark(row_1);
            }
        };
        var __VLS_47 = void 0;
        var __VLS_48 = void 0;
        var __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
        var __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElPopconfirm;
        /** @type { [typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ] } */
        // @ts-ignore
        var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ 'onConfirm': {} }, { title: (("\u60A8\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.tmName, "?"))), width: ("200px"), icon: ("Delete") })));
        var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { title: (("\u60A8\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.tmName, "?"))), width: ("200px"), icon: ("Delete") })], __VLS_functionalComponentArgsRest(__VLS_53), false));
        var __VLS_58 = void 0;
        var __VLS_59 = {
            onConfirm: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.removeTradeMark(row_1.id);
            }
        };
        var __VLS_55 = void 0;
        var __VLS_56 = void 0;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot_1 = __VLS_nonNullable(__VLS_57.slots).reference;
            var __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ type: ("primary"), size: ("small"), icon: ("Delete"), }));
            var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([{ type: ("primary"), size: ("small"), icon: ("Delete"), }], __VLS_functionalComponentArgsRest(__VLS_61), false));
        }
        var __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
        __VLS_nonNullable(__VLS_43.slots)['' /* empty slot name completion */];
    }
    var __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    var __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    var __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66(__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { pagerCount: ((9)), currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.limit)), pageSizes: (([3, 5, 7, 9])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })));
    var __VLS_68 = __VLS_67.apply(void 0, __spreadArray([__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { pagerCount: ((9)), currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.limit)), pageSizes: (([3, 5, 7, 9])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })], __VLS_functionalComponentArgsRest(__VLS_67), false));
    var __VLS_72;
    var __VLS_73 = {
        onCurrentChange: (__VLS_ctx.getHasTrademark)
    };
    var __VLS_74 = {
        onSizeChange: (__VLS_ctx.sizeChange)
    };
    var __VLS_69;
    var __VLS_70;
    var __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    var __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    var __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ modelValue: ((__VLS_ctx.dialogFormVisible)), title: ((__VLS_ctx.trademarkParams.id ? '修改品牌' : '添加品牌')), }));
    var __VLS_77 = __VLS_76.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.dialogFormVisible)), title: ((__VLS_ctx.trademarkParams.id ? '修改品牌' : '添加品牌')), }], __VLS_functionalComponentArgsRest(__VLS_76), false));
    var __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81(__assign({ style: ({}) }, { model: ((__VLS_ctx.trademarkParams)), rules: ((__VLS_ctx.rules)), ref: ("formRef") })));
    var __VLS_83 = __VLS_82.apply(void 0, __spreadArray([__assign({ style: ({}) }, { model: ((__VLS_ctx.trademarkParams)), rules: ((__VLS_ctx.rules)), ref: ("formRef") })], __VLS_functionalComponentArgsRest(__VLS_82), false));
    // @ts-ignore navigation for `const formRef = ref()`
    __VLS_ctx.formRef;
    var __VLS_87 = {};
    var __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ label: ("品牌名称"), labelWidth: ("100px"), prop: ("tmName"), }));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([{ label: ("品牌名称"), labelWidth: ("100px"), prop: ("tmName"), }], __VLS_functionalComponentArgsRest(__VLS_89), false));
    var __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ placeholder: ("请你输入品牌名称"), modelValue: ((__VLS_ctx.trademarkParams.tmName)), }));
    var __VLS_96 = __VLS_95.apply(void 0, __spreadArray([{ placeholder: ("请你输入品牌名称"), modelValue: ((__VLS_ctx.trademarkParams.tmName)), }], __VLS_functionalComponentArgsRest(__VLS_95), false));
    __VLS_nonNullable(__VLS_93.slots).default;
    var __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
    var __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ label: ("品牌LOGO"), labelWidth: ("100px"), prop: ("logoUrl"), }));
    var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([{ label: ("品牌LOGO"), labelWidth: ("100px"), prop: ("logoUrl"), }], __VLS_functionalComponentArgsRest(__VLS_101), false));
    var __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
    /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ] } */
    // @ts-ignore
    var __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106(__assign({ class: ("avatar-uploader") }, { action: ("/api/admin/product/fileUpload"), showFileList: ((false)), onSuccess: ((__VLS_ctx.handleAvatarSuccess)), beforeUpload: ((__VLS_ctx.beforeAvatarUpload)) })));
    var __VLS_108 = __VLS_107.apply(void 0, __spreadArray([__assign({ class: ("avatar-uploader") }, { action: ("/api/admin/product/fileUpload"), showFileList: ((false)), onSuccess: ((__VLS_ctx.handleAvatarSuccess)), beforeUpload: ((__VLS_ctx.beforeAvatarUpload)) })], __VLS_functionalComponentArgsRest(__VLS_107), false));
    if (__VLS_ctx.trademarkParams.logoUrl) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.trademarkParams.logoUrl)) }, { class: ("avatar") }));
    }
    else {
        var __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        var __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112(__assign({ class: ("avatar-uploader-icon") })));
        var __VLS_114 = __VLS_113.apply(void 0, __spreadArray([__assign({ class: ("avatar-uploader-icon") })], __VLS_functionalComponentArgsRest(__VLS_113), false));
        var __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.Plus;
        /** @type { [typeof __VLS_components.Plus, ] } */
        // @ts-ignore
        var __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({}));
        var __VLS_120 = __VLS_119.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_119), false));
        __VLS_nonNullable(__VLS_117.slots).default;
        var __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
    }
    __VLS_nonNullable(__VLS_111.slots).default;
    var __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
    __VLS_nonNullable(__VLS_105.slots).default;
    var __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
    __VLS_nonNullable(__VLS_86.slots).default;
    var __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_80.slots).footer;
        var __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
        var __VLS_126 = __VLS_125.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_125), false));
        var __VLS_130 = void 0;
        var __VLS_131 = {
            onClick: (__VLS_ctx.cancel)
        };
        var __VLS_127 = void 0;
        var __VLS_128 = void 0;
        __VLS_nonNullable(__VLS_129.slots).default;
        var __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126);
        var __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
        var __VLS_134 = __VLS_133.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_133), false));
        var __VLS_138 = void 0;
        var __VLS_139 = {
            onClick: (__VLS_ctx.confirm)
        };
        var __VLS_135 = void 0;
        var __VLS_136 = void 0;
        __VLS_nonNullable(__VLS_137.slots).default;
        var __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
    }
    var __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
    __VLS_styleScopedClasses['box_card'];
    __VLS_styleScopedClasses['avatar-uploader'];
    __VLS_styleScopedClasses['avatar'];
    __VLS_styleScopedClasses['avatar-uploader-icon'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {
        "formRef": __VLS_87,
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
            pageNo: pageNo,
            limit: limit,
            total: total,
            trademarkArr: trademarkArr,
            dialogFormVisible: dialogFormVisible,
            trademarkParams: trademarkParams,
            formRef: formRef,
            getHasTrademark: getHasTrademark,
            sizeChange: sizeChange,
            addTrademark: addTrademark,
            updateTrademark: updateTrademark,
            cancel: cancel,
            confirm: confirm,
            beforeAvatarUpload: beforeAvatarUpload,
            handleAvatarSuccess: handleAvatarSuccess,
            rules: rules,
            removeTradeMark: removeTradeMark,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
