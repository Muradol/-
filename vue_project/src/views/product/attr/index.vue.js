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
import useCategoryStore from "@/store/modules/category";
import { nextTick, onBeforeUnmount, reactive, ref, watch } from "vue";
import { reqAddOrUpdateAttr, reqAttr, reqRemoveAttr, } from "@/api/product/attr";
import { ElMessage } from "element-plus";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var categoryStore = useCategoryStore();
var attrArr = ref([]);
var scene = ref(0);
var attrParams = reactive({
    attrName: "",
    attrValueList: [],
    categoryId: "",
    categoryLevel: 3,
});
//监听三级分类ID变化
watch(function () { return categoryStore.c3Id; }, function () {
    attrArr.value = [];
    if (!categoryStore.c3Id)
        return;
    getAttr();
});
//获取属性及其属性值
var getAttr = function () { return __awaiter(void 0, void 0, void 0, function () {
    var c1Id, c2Id, c3Id, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                c1Id = categoryStore.c1Id, c2Id = categoryStore.c2Id, c3Id = categoryStore.c3Id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, reqAttr(c1Id, c2Id, c3Id)];
            case 2:
                result = _a.sent();
                if (result.code == 200) {
                    attrArr.value = result.data;
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                ElMessage({
                    type: "error",
                    message: "获取属性失败，请重试",
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var addAttr = function () {
    Object.assign(attrParams, {
        attrName: "",
        attrValueList: [],
        categoryId: categoryStore.c3Id,
        categoryLevel: 3,
    });
    scene.value = 1;
};
var updateAttr = function (row) {
    scene.value = 1;
    Object.assign(attrParams, JSON.parse(JSON.stringify(row)));
};
var cancel = function () {
    scene.value = 0;
};
var addAttrValue = function () {
    attrParams.attrValueList.push({
        valueName: "",
        flag: true,
    });
    nextTick(function () {
        var _a;
        // 聚焦到最新的输入框
        (_a = document.querySelectorAll('input')[attrParams.attrValueList.length - 1]) === null || _a === void 0 ? void 0 : _a.focus();
    });
};
var save = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, reqAddOrUpdateAttr(attrParams)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    scene.value = 0;
                    ElMessage({
                        type: "success",
                        message: attrParams.id ? "修改成功" : "添加成功",
                    });
                    getAttr();
                }
                else {
                    throw new Error();
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                ElMessage({
                    type: "error",
                    message: attrParams.id ? "修改失败" : "添加失败",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var toLook = function (row, $index) {
    if (row.valueName.trim() === "") {
        attrParams.attrValueList.splice($index, 1);
        ElMessage({
            type: "error",
            message: "属性值不能为空",
        });
        return;
    }
    var repeat = attrParams.attrValueList.find(function (item) { return item !== row && item.valueName === row.valueName; });
    if (repeat) {
        attrParams.attrValueList.splice($index, 1);
        ElMessage({
            type: "error",
            message: "属性值不能重复",
        });
        return;
    }
    row.flag = false;
};
var toEdit = function (row, $index) {
    row.flag = true;
    nextTick(function () {
        var _a;
        (_a = document.querySelectorAll('input')[$index]) === null || _a === void 0 ? void 0 : _a.focus();
    });
};
var deleteAttr = function (attrId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, reqRemoveAttr(attrId)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    ElMessage({
                        type: "success",
                        message: "删除成功",
                    });
                    getAttr();
                }
                else {
                    throw new Error();
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                ElMessage({
                    type: "error",
                    message: "删除失败",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteAttrValue = function (attrValueId) {
    attrParams.attrValueList = attrParams.attrValueList.filter(function (item) { return item.id !== attrValueId; });
};
// 组件销毁时清空数据
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
    /** @type { [typeof __VLS_components.Category, ] } */
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
        onClick: (__VLS_ctx.addAttr)
    };
    var __VLS_15;
    var __VLS_16;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    var __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.attrArr)) })));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.attrArr)) })], __VLS_functionalComponentArgsRest(__VLS_21), false));
    var __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("序号"), type: ("index"), align: ("center"), width: ("80px"), }));
    var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{ label: ("序号"), type: ("index"), align: ("center"), width: ("80px"), }], __VLS_functionalComponentArgsRest(__VLS_27), false));
    var __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ label: ("属性名称"), align: ("center"), width: ("120px"), prop: ("attrName"), }));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{ label: ("属性名称"), align: ("center"), width: ("120px"), prop: ("attrName"), }], __VLS_functionalComponentArgsRest(__VLS_33), false));
    var __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("属性值名称"), align: ("center"), }));
    var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([{ label: ("属性值名称"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_39), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_43.slots).default;
        var _a = __VLS_getSlotParams(__VLS_thisSlot)[0], row = _a.row, $index = _a.$index;
        for (var _i = 0, _b = __VLS_getVForSourceType((row.attrValueList)); _i < _b.length; _i++) {
            var _c = _b[_i], item = _c[0], index = _c[1];
            var __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
            // @ts-ignore
            var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ style: ({}) }, { key: ((item.id)) })));
            var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ style: ({}) }, { key: ((item.id)) })], __VLS_functionalComponentArgsRest(__VLS_45), false));
            (item.valueName);
            __VLS_nonNullable(__VLS_49.slots).default;
            var __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
        }
        __VLS_nonNullable(__VLS_43.slots)['' /* empty slot name completion */];
    }
    var __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    var __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ label: ("操作"), align: ("center"), width: ("120px"), }));
    var __VLS_52 = __VLS_51.apply(void 0, __spreadArray([{ label: ("操作"), align: ("center"), width: ("120px"), }], __VLS_functionalComponentArgsRest(__VLS_51), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_55.slots).default;
        var _d = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _d.row, $index = _d.$index;
        var __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })));
        var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })], __VLS_functionalComponentArgsRest(__VLS_57), false));
        var __VLS_62 = void 0;
        var __VLS_63 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.updateAttr(row_1);
            }
        };
        var __VLS_59 = void 0;
        var __VLS_60 = void 0;
        var __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
        var __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElPopconfirm;
        /** @type { [typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ] } */
        // @ts-ignore
        var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u5220\u9664".concat(row_1.attrName, "?"))), width: ("200px") })));
        var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u5220\u9664".concat(row_1.attrName, "?"))), width: ("200px") })], __VLS_functionalComponentArgsRest(__VLS_65), false));
        var __VLS_70 = void 0;
        var __VLS_71 = {
            onConfirm: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.deleteAttr(row_1.id);
            }
        };
        var __VLS_67 = void 0;
        var __VLS_68 = void 0;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot_1 = __VLS_nonNullable(__VLS_69.slots).reference;
            var __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ type: ("primary"), size: ("small"), icon: ("Delete"), }));
            var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{ type: ("primary"), size: ("small"), icon: ("Delete"), }], __VLS_functionalComponentArgsRest(__VLS_73), false));
        }
        var __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
        __VLS_nonNullable(__VLS_55.slots)['' /* empty slot name completion */];
    }
    var __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.scene == 1) }), null, null);
    var __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ inline: ((true)), }));
    var __VLS_80 = __VLS_79.apply(void 0, __spreadArray([{ inline: ((true)), }], __VLS_functionalComponentArgsRest(__VLS_79), false));
    var __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ label: ("属性名称"), }));
    var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([{ label: ("属性名称"), }], __VLS_functionalComponentArgsRest(__VLS_85), false));
    var __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ placeholder: ("请您输入属性名称"), modelValue: ((__VLS_ctx.attrParams.attrName)), }));
    var __VLS_92 = __VLS_91.apply(void 0, __spreadArray([{ placeholder: ("请您输入属性名称"), modelValue: ((__VLS_ctx.attrParams.attrName)), }], __VLS_functionalComponentArgsRest(__VLS_91), false));
    __VLS_nonNullable(__VLS_89.slots).default;
    var __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    __VLS_nonNullable(__VLS_83.slots).default;
    var __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    var __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(__assign({ 'onClick': {} }, { disabled: ((!__VLS_ctx.attrParams.attrName)), type: ("primary"), size: ("default"), icon: ("Plus") })));
    var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { disabled: ((!__VLS_ctx.attrParams.attrName)), type: ("primary"), size: ("default"), icon: ("Plus") })], __VLS_functionalComponentArgsRest(__VLS_97), false));
    var __VLS_102;
    var __VLS_103 = {
        onClick: (__VLS_ctx.addAttrValue)
    };
    var __VLS_99;
    var __VLS_100;
    __VLS_nonNullable(__VLS_101.slots).default;
    var __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    var __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
    var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_105), false));
    var __VLS_110;
    var __VLS_111 = {
        onClick: (__VLS_ctx.cancel)
    };
    var __VLS_107;
    var __VLS_108;
    __VLS_nonNullable(__VLS_109.slots).default;
    var __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    var __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112(__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.attrParams.attrValueList)) })));
    var __VLS_114 = __VLS_113.apply(void 0, __spreadArray([__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.attrParams.attrValueList)) })], __VLS_functionalComponentArgsRest(__VLS_113), false));
    var __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ label: ("序号"), width: ("80px"), type: ("index"), align: ("center"), }));
    var __VLS_120 = __VLS_119.apply(void 0, __spreadArray([{ label: ("序号"), width: ("80px"), type: ("index"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_119), false));
    var __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ label: ("属性值名称"), align: ("center"), }));
    var __VLS_126 = __VLS_125.apply(void 0, __spreadArray([{ label: ("属性值名称"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_125), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_129.slots).default;
        var _e = __VLS_getSlotParams(__VLS_thisSlot)[0], row_2 = _e.row, $index_1 = _e.$index;
        if (row_2.flag) {
            var __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
            /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
            // @ts-ignore
            var __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130(__assign({ 'onBlur': {} }, { size: ("small"), placeholder: ("请您输入属性值名称"), modelValue: ((row_2.valueName)) })));
            var __VLS_132 = __VLS_131.apply(void 0, __spreadArray([__assign({ 'onBlur': {} }, { size: ("small"), placeholder: ("请您输入属性值名称"), modelValue: ((row_2.valueName)) })], __VLS_functionalComponentArgsRest(__VLS_131), false));
            var __VLS_136 = void 0;
            var __VLS_137 = {
                onBlur: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((row_2.flag)))
                        return;
                    __VLS_ctx.toLook(row_2, $index_1);
                }
            };
            var __VLS_133 = void 0;
            var __VLS_134 = void 0;
            var __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(!((row_2.flag))))
                        return;
                    __VLS_ctx.toEdit(row_2, $index_1);
                } }));
            (row_2.valueName);
        }
        __VLS_nonNullable(__VLS_129.slots)['' /* empty slot name completion */];
    }
    var __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126);
    var __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ label: ("属性值操作"), align: ("center"), }));
    var __VLS_140 = __VLS_139.apply(void 0, __spreadArray([{ label: ("属性值操作"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_139), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_143.slots).default;
        var _f = __VLS_getSlotParams(__VLS_thisSlot)[0], row_3 = _f.row, index = _f.index;
        var __VLS_144 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Delete") })));
        var __VLS_146 = __VLS_145.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Delete") })], __VLS_functionalComponentArgsRest(__VLS_145), false));
        var __VLS_150 = void 0;
        var __VLS_151 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.deleteAttrValue(row_3.id);
            }
        };
        var __VLS_147 = void 0;
        var __VLS_148 = void 0;
        var __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
        __VLS_nonNullable(__VLS_143.slots)['' /* empty slot name completion */];
    }
    var __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
    __VLS_nonNullable(__VLS_117.slots).default;
    var __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
    var __VLS_152 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), disabled: ((__VLS_ctx.attrParams.attrValueList.length <= 0)) })));
    var __VLS_154 = __VLS_153.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), disabled: ((__VLS_ctx.attrParams.attrValueList.length <= 0)) })], __VLS_functionalComponentArgsRest(__VLS_153), false));
    var __VLS_158;
    var __VLS_159 = {
        onClick: (__VLS_ctx.save)
    };
    var __VLS_155;
    var __VLS_156;
    __VLS_nonNullable(__VLS_157.slots).default;
    var __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154);
    var __VLS_160 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
    var __VLS_162 = __VLS_161.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_161), false));
    var __VLS_166;
    var __VLS_167 = {
        onClick: (__VLS_ctx.cancel)
    };
    var __VLS_163;
    var __VLS_164;
    __VLS_nonNullable(__VLS_165.slots).default;
    var __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
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
            categoryStore: categoryStore,
            attrArr: attrArr,
            scene: scene,
            attrParams: attrParams,
            addAttr: addAttr,
            updateAttr: updateAttr,
            cancel: cancel,
            addAttrValue: addAttrValue,
            save: save,
            toLook: toLook,
            toEdit: toEdit,
            deleteAttr: deleteAttr,
            deleteAttrValue: deleteAttrValue,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
