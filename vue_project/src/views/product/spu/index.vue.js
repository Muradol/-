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
import { onBeforeUnmount, ref, watch } from "vue";
import SpuForm from "@/views/product/spu/spuForm.vue";
import SkuForm from "@/views/product/spu/skuForm.vue";
import useCategoryStore from "@/store/modules/category";
import { reqHasSpu, reqRemoveSpu, reqSkuList } from "@/api/product/spu";
import { ElMessage } from "element-plus";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var categoryStore = useCategoryStore();
//场景的数据
var scene = ref(0); //0:显示已有SPU  1:添加或者修改已有SPU 2:添加SKU的结构
//分页器默认页码
var pageNo = ref(1);
//每一页展示几条数据
var pageSize = ref(3);
//存储已有的SPU的数据
var records = ref([]);
//存储已有SPU总个数
var total = ref(0);
//获取子组件实例SpuForm
var spu = ref();
//获取子组件实例SkuForm
var sku = ref();
//存储全部的SKU数据
var skuArr = ref([]);
var show = ref(false);
//监听三级分类ID变化
watch(function () { return categoryStore.c3Id; }, function () {
    //当三级分类发生变化的时候清空对应的数据
    records.value = [];
    //务必保证有三级分类ID
    if (!categoryStore.c3Id)
        return;
    getHasSpu();
});
//此方法执行:可以获取某一个三级分类下全部的已有的SPU
var getHasSpu = function () {
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
                    //修改当前页码
                    pageNo.value = pager;
                    return [4 /*yield*/, reqHasSpu(pageNo.value, pageSize.value, categoryStore.c3Id)];
                case 1:
                    result = _a.sent();
                    if (result.code == 200) {
                        records.value = result.data.records;
                        total.value = result.data.total;
                    }
                    return [2 /*return*/];
            }
        });
    });
};
//分页器下拉菜单发生变化的时候触发
var changeSize = function () {
    getHasSpu();
};
//添加新的SPU按钮的回调
var addSpu = function () {
    //切换为场景1:添加与修改已有SPU结构->SpuForm
    scene.value = 1;
    //点击添加SPU按钮,调用子组件的方法初始化数据
    spu.value.initAddSpu(categoryStore.c3Id);
};
//修改已有的SPU的按钮的回调
var updateSpu = function (row) {
    //切换为场景1:添加与修改已有SPU结构->SpuForm
    scene.value = 1;
    //调用子组件实例方法获取完整已有的SPU的数据
    spu.value.initHasSpuData(row);
};
//子组件SpuForm绑定自定义事件:目前是让子组件通知父组件切换场景为0
var changeScene = function (obj) {
    //子组件Spuform点击取消变为场景0:展示已有的SPU
    scene.value = obj.flag;
    if (obj.params == 'update') {
        //更新留在当前页
        getHasSpu(pageNo.value);
    }
    else {
        //添加留在第一页
        getHasSpu();
    }
};
//添加SKU按钮的回调
var addSku = function (row) {
    //点击添加SKU按钮切换场景为2
    scene.value = 2;
    //调用子组件的方法初始化添加SKU的数据
    sku.value.initSkuData(categoryStore.c1Id, categoryStore.c2Id, row);
};
//查看SKU列表的数据
var findSku = function (row) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqSkuList(row.id)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    skuArr.value = result.data;
                    //对话框显示出来
                    show.value = true;
                }
                return [2 /*return*/];
        }
    });
}); };
//删除已有的SPU按钮的回调
var deleteSpu = function (row) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqRemoveSpu(row.id)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    ElMessage({
                        type: 'success',
                        message: '删除成功'
                    });
                    //获取剩余SPU数据
                    getHasSpu(records.value.length > 1 ? pageNo.value : pageNo.value - 1);
                }
                else {
                    ElMessage({
                        type: 'error',
                        message: '删除失败'
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
//路由组件销毁前，情况仓库关于分类的数据
onBeforeUnmount(function () {
    categoryStore.$reset();
});
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
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Category;
    /** @type { [typeof __VLS_components.Category, typeof __VLS_components.Category, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ scene: ((__VLS_ctx.scene)), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ scene: ((__VLS_ctx.scene)), }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ style: ({}) })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.scene == 0) }), null, null);
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), icon: ("Plus"), disabled: ((!__VLS_ctx.categoryStore.c3Id)) })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), icon: ("Plus"), disabled: ((!__VLS_ctx.categoryStore.c3Id)) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_18;
    var __VLS_19 = {
        onClick: (__VLS_ctx.addSpu)
    };
    var __VLS_15;
    var __VLS_16;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    var __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ style: ({}) }, { border: (true), data: ((__VLS_ctx.records)) })));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ style: ({}) }, { border: (true), data: ((__VLS_ctx.records)) })], __VLS_functionalComponentArgsRest(__VLS_21), false));
    var __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("序号"), type: ("index"), width: ("80px"), align: ("center"), }));
    var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{ label: ("序号"), type: ("index"), width: ("80px"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_27), false));
    var __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ label: ("SPU名称"), align: ("center"), prop: ("spuName"), }));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{ label: ("SPU名称"), align: ("center"), prop: ("spuName"), }], __VLS_functionalComponentArgsRest(__VLS_33), false));
    var __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("SPU描述"), align: ("center"), prop: ("description"), showOverflowTooltip: (true), }));
    var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([{ label: ("SPU描述"), align: ("center"), prop: ("description"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_39), false));
    var __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ label: ("操作"), align: ("center"), }));
    var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([{ label: ("操作"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_45), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_49.slots).default;
        var _a = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _a.row, $index = _a.$index;
        var __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Plus"), title: ("添加SKU") })));
        var __VLS_52 = __VLS_51.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Plus"), title: ("添加SKU") })], __VLS_functionalComponentArgsRest(__VLS_51), false));
        var __VLS_56 = void 0;
        var __VLS_57 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.addSku(row_1);
            }
        };
        var __VLS_53 = void 0;
        var __VLS_54 = void 0;
        var __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
        var __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit"), title: ("修改SPU") })));
        var __VLS_60 = __VLS_59.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit"), title: ("修改SPU") })], __VLS_functionalComponentArgsRest(__VLS_59), false));
        var __VLS_64 = void 0;
        var __VLS_65 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.updateSpu(row_1);
            }
        };
        var __VLS_61 = void 0;
        var __VLS_62 = void 0;
        var __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
        var __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("View"), title: ("查看SPU列表") })));
        var __VLS_68 = __VLS_67.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("View"), title: ("查看SPU列表") })], __VLS_functionalComponentArgsRest(__VLS_67), false));
        var __VLS_72 = void 0;
        var __VLS_73 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.findSku(row_1);
            }
        };
        var __VLS_69 = void 0;
        var __VLS_70 = void 0;
        var __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
        var __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElPopconfirm;
        /** @type { [typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ] } */
        // @ts-ignore
        var __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74(__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u5220\u9664".concat(row_1.spuName, "?"))), width: ("200px") })));
        var __VLS_76 = __VLS_75.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u5220\u9664".concat(row_1.spuName, "?"))), width: ("200px") })], __VLS_functionalComponentArgsRest(__VLS_75), false));
        var __VLS_80 = void 0;
        var __VLS_81 = {
            onConfirm: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.deleteSpu(row_1);
            }
        };
        var __VLS_77 = void 0;
        var __VLS_78 = void 0;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot_1 = __VLS_nonNullable(__VLS_79.slots).reference;
            var __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ type: ("primary"), size: ("small"), icon: ("Delete"), title: ("删除SPU"), }));
            var __VLS_84 = __VLS_83.apply(void 0, __spreadArray([{ type: ("primary"), size: ("small"), icon: ("Delete"), title: ("删除SPU"), }], __VLS_functionalComponentArgsRest(__VLS_83), false));
        }
        var __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
        __VLS_nonNullable(__VLS_49.slots)['' /* empty slot name completion */];
    }
    var __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    var __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88(__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.pageSize)), pageSizes: (([3, 5, 7, 9])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.pageSize)), pageSizes: (([3, 5, 7, 9])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })], __VLS_functionalComponentArgsRest(__VLS_89), false));
    var __VLS_94;
    var __VLS_95 = {
        onCurrentChange: (__VLS_ctx.getHasSpu)
    };
    var __VLS_96 = {
        onSizeChange: (__VLS_ctx.changeSize)
    };
    var __VLS_91;
    var __VLS_92;
    var __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
    // @ts-ignore
    [SpuForm, SpuForm,];
    // @ts-ignore
    var __VLS_97 = __VLS_asFunctionalComponent(SpuForm, new SpuForm(__assign({ 'onChangeScene': {} }, { ref: ("spu") })));
    var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign({ 'onChangeScene': {} }, { ref: ("spu") })], __VLS_functionalComponentArgsRest(__VLS_97), false));
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.scene == 1) }), null, null);
    // @ts-ignore navigation for `const spu = ref()`
    __VLS_ctx.spu;
    var __VLS_102 = {};
    var __VLS_103;
    var __VLS_104 = {
        onChangeScene: (__VLS_ctx.changeScene)
    };
    var __VLS_99;
    var __VLS_100;
    var __VLS_101 = __VLS_pickFunctionalComponentCtx(SpuForm, __VLS_98);
    // @ts-ignore
    [SkuForm, SkuForm,];
    // @ts-ignore
    var __VLS_105 = __VLS_asFunctionalComponent(SkuForm, new SkuForm(__assign({ 'onChangeScene': {} }, { ref: ("sku") })));
    var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([__assign({ 'onChangeScene': {} }, { ref: ("sku") })], __VLS_functionalComponentArgsRest(__VLS_105), false));
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.scene == 2) }), null, null);
    // @ts-ignore navigation for `const sku = ref()`
    __VLS_ctx.sku;
    var __VLS_110 = {};
    var __VLS_111;
    var __VLS_112 = {
        onChangeScene: (__VLS_ctx.changeScene)
    };
    var __VLS_107;
    var __VLS_108;
    var __VLS_109 = __VLS_pickFunctionalComponentCtx(SkuForm, __VLS_106);
    var __VLS_113 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    var __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ modelValue: ((__VLS_ctx.show)), title: ("SKU列表"), }));
    var __VLS_115 = __VLS_114.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.show)), title: ("SKU列表"), }], __VLS_functionalComponentArgsRest(__VLS_114), false));
    var __VLS_119 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ border: (true), data: ((__VLS_ctx.skuArr)), }));
    var __VLS_121 = __VLS_120.apply(void 0, __spreadArray([{ border: (true), data: ((__VLS_ctx.skuArr)), }], __VLS_functionalComponentArgsRest(__VLS_120), false));
    var __VLS_125 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({ label: ("SKU名字"), prop: ("skuName"), }));
    var __VLS_127 = __VLS_126.apply(void 0, __spreadArray([{ label: ("SKU名字"), prop: ("skuName"), }], __VLS_functionalComponentArgsRest(__VLS_126), false));
    var __VLS_131 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_132 = __VLS_asFunctionalComponent(__VLS_131, new __VLS_131({ label: ("SKU价格"), prop: ("price"), }));
    var __VLS_133 = __VLS_132.apply(void 0, __spreadArray([{ label: ("SKU价格"), prop: ("price"), }], __VLS_functionalComponentArgsRest(__VLS_132), false));
    var __VLS_137 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({ label: ("SKU重量"), prop: ("weight"), }));
    var __VLS_139 = __VLS_138.apply(void 0, __spreadArray([{ label: ("SKU重量"), prop: ("weight"), }], __VLS_functionalComponentArgsRest(__VLS_138), false));
    var __VLS_143 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_144 = __VLS_asFunctionalComponent(__VLS_143, new __VLS_143({ label: ("SKU图片"), }));
    var __VLS_145 = __VLS_144.apply(void 0, __spreadArray([{ label: ("SKU图片"), }], __VLS_functionalComponentArgsRest(__VLS_144), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_148.slots).default;
        var _b = __VLS_getSlotParams(__VLS_thisSlot)[0], row = _b.row, $index = _b.$index;
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ((row.skuDefaultImg)) }, { style: ({}) }));
        __VLS_nonNullable(__VLS_148.slots)['' /* empty slot name completion */];
    }
    var __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
    __VLS_nonNullable(__VLS_124.slots).default;
    var __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121);
    __VLS_nonNullable(__VLS_118.slots).default;
    var __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {
        "spu": __VLS_102,
        "sku": __VLS_110,
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
            SpuForm: SpuForm,
            SkuForm: SkuForm,
            categoryStore: categoryStore,
            scene: scene,
            pageNo: pageNo,
            pageSize: pageSize,
            records: records,
            total: total,
            spu: spu,
            sku: sku,
            skuArr: skuArr,
            show: show,
            getHasSpu: getHasSpu,
            changeSize: changeSize,
            addSpu: addSpu,
            updateSpu: updateSpu,
            changeScene: changeScene,
            addSku: addSku,
            findSku: findSku,
            deleteSpu: deleteSpu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
