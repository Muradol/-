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
import { onMounted } from "vue";
import useCategoryStore from "@/store/modules/category";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var categoryStore = useCategoryStore();
//分类全局组件挂载完毕,通知仓库发请求获取一级分类的数据
onMounted(function () {
    getC1();
});
//通知仓库获取一级分类的方法
var getC1 = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        categoryStore.getC1();
        return [2 /*return*/];
    });
}); };
//此方法即为一级分类下拉菜单的change事件(选中值的时候会触发,保证一级分类ID有了)
var handler = function () {
    //需要将二级、三级分类的数据清空
    categoryStore.c2Id = '';
    categoryStore.c3Arr = [];
    categoryStore.c3Id = '';
    //通知仓库获取二级分类的数据
    categoryStore.getC2();
};
//此方法即为二级分类下拉菜单的change事件(选中值的时候会触发,保证二级分类ID有了)
var handler1 = function () {
    //清理三级分类的数据
    categoryStore.c3Id = '';
    categoryStore.getC3();
};
var __VLS_props = defineProps(['scene']);
var __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['scene'],
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
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ inline: ((true)), }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{ inline: ((true)), }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("一级分类"), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ label: ("一级分类"), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18(__assign(__assign(__assign({ 'onChange': {} }, { disabled: ((__VLS_ctx.scene != 0)) }), { style: ({}) }), { modelValue: ((__VLS_ctx.categoryStore.c1Id)) })));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onChange': {} }, { disabled: ((__VLS_ctx.scene != 0)) }), { style: ({}) }), { modelValue: ((__VLS_ctx.categoryStore.c1Id)) })], __VLS_functionalComponentArgsRest(__VLS_19), false));
    var __VLS_24;
    var __VLS_25 = {
        onChange: (__VLS_ctx.handler)
    };
    var __VLS_21;
    var __VLS_22;
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.categoryStore.c1Arr)); _i < _a.length; _i++) {
        var _b = _a[_i], c1 = _b[0], index = _b[1];
        var __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        var __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ key: ((c1.id)), label: ((c1.name)), value: ((c1.id)), }));
        var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{ key: ((c1.id)), label: ((c1.name)), value: ((c1.id)), }], __VLS_functionalComponentArgsRest(__VLS_27), false));
    }
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    var __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ label: ("二级分类"), }));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{ label: ("二级分类"), }], __VLS_functionalComponentArgsRest(__VLS_33), false));
    var __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    var __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38(__assign(__assign(__assign({ 'onChange': {} }, { disabled: ((__VLS_ctx.scene != 0)) }), { style: ({}) }), { modelValue: ((__VLS_ctx.categoryStore.c2Id)) })));
    var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onChange': {} }, { disabled: ((__VLS_ctx.scene != 0)) }), { style: ({}) }), { modelValue: ((__VLS_ctx.categoryStore.c2Id)) })], __VLS_functionalComponentArgsRest(__VLS_39), false));
    var __VLS_44;
    var __VLS_45 = {
        onChange: (__VLS_ctx.handler1)
    };
    var __VLS_41;
    var __VLS_42;
    for (var _c = 0, _d = __VLS_getVForSourceType((__VLS_ctx.categoryStore.c2Arr)); _c < _d.length; _c++) {
        var _e = _d[_c], c2 = _e[0], index = _e[1];
        var __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        var __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ key: ((c2.id)), label: ((c2.name)), value: ((c2.id)), }));
        var __VLS_48 = __VLS_47.apply(void 0, __spreadArray([{ key: ((c2.id)), label: ((c2.name)), value: ((c2.id)), }], __VLS_functionalComponentArgsRest(__VLS_47), false));
    }
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    var __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ label: ("三级分类"), }));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([{ label: ("三级分类"), }], __VLS_functionalComponentArgsRest(__VLS_53), false));
    var __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    var __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58(__assign(__assign({ disabled: ((__VLS_ctx.scene != 0)) }, { style: ({}) }), { modelValue: ((__VLS_ctx.categoryStore.c3Id)) })));
    var __VLS_60 = __VLS_59.apply(void 0, __spreadArray([__assign(__assign({ disabled: ((__VLS_ctx.scene != 0)) }, { style: ({}) }), { modelValue: ((__VLS_ctx.categoryStore.c3Id)) })], __VLS_functionalComponentArgsRest(__VLS_59), false));
    for (var _f = 0, _g = __VLS_getVForSourceType((__VLS_ctx.categoryStore.c3Arr)); _f < _g.length; _f++) {
        var _h = _g[_f], c3 = _h[0], index = _h[1];
        var __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ key: ((c3.id)), label: ((c3.name)), value: ((c3.id)), }));
        var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([{ key: ((c3.id)), label: ((c3.name)), value: ((c3.id)), }], __VLS_functionalComponentArgsRest(__VLS_65), false));
    }
    __VLS_nonNullable(__VLS_63.slots).default;
    var __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
    __VLS_nonNullable(__VLS_57.slots).default;
    var __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
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
            categoryStore: categoryStore,
            handler: handler,
            handler1: handler1,
        };
    },
    props: ['scene'],
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    props: ['scene'],
});
;
