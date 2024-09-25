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
import { onMounted, reactive, ref } from "vue";
import { reqAddOrUpdateMenu, reqAllPermisstion, reqRemoveMenu } from "@/api/acl/menu";
import { ElMessage } from "element-plus";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
//存储菜单的数据
var PermisstionArr = ref([]);
//控制对话框的显示与隐藏
var dialogVisible = ref(false);
//携带的参数
var menuData = reactive({
    "code": "",
    "level": 0,
    "name": "",
    "pid": 0,
});
//组件挂载完毕
onMounted(function () {
    getHasPermisstion();
});
//获取菜单数据的方法
var getHasPermisstion = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqAllPermisstion()];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    PermisstionArr.value = result.data;
                }
                return [2 /*return*/];
        }
    });
}); };
//添加菜单按钮的回调
var addPermisstion = function (row) {
    //清空数据
    Object.assign(menuData, {
        id: 0,
        "code": "",
        "level": 0,
        "name": "",
        "pid": 0,
    });
    //对话框显示出来
    dialogVisible.value = true;
    //收集新增的菜单的level数值
    menuData.level = row.level + 1;
    //给谁新增子菜单
    menuData.pid = row.id;
};
//编辑已有的菜单
var updatePermisstion = function (row) {
    dialogVisible.value = true;
    //点击修改按钮:收集已有的菜单的数据进行更新
    Object.assign(menuData, row);
};
//确定按钮的回调
var save = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqAddOrUpdateMenu(menuData)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    //对话框隐藏
                    dialogVisible.value = false;
                    //提示信息
                    ElMessage({ type: 'success', message: menuData.id ? '更新成功' : '添加成功' });
                    //再次获取全部最新的菜单的数据
                    getHasPermisstion();
                }
                return [2 /*return*/];
        }
    });
}); };
//删除按钮回调
var removeMenu = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqRemoveMenu(id)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    ElMessage({ type: 'success', message: '删除成功' });
                    getHasPermisstion();
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
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ data: ((__VLS_ctx.PermisstionArr)) }, { style: ({}) }), { rowKey: ("id"), border: (true) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ data: ((__VLS_ctx.PermisstionArr)) }, { style: ({}) }), { rowKey: ("id"), border: (true) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("名称"), prop: ("name"), }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{ label: ("名称"), prop: ("name"), }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("权限值"), align: ("center"), prop: ("code"), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ label: ("权限值"), align: ("center"), prop: ("code"), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ("修改时间"), align: ("center"), prop: ("updateTime"), }));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{ label: ("修改时间"), align: ("center"), prop: ("updateTime"), }], __VLS_functionalComponentArgsRest(__VLS_19), false));
    var __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("操作"), align: ("center"), }));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{ label: ("操作"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_25), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_29.slots).default;
        var _a = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _a.row, $index = _a.$index;
        var __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), disabled: ((row_1.level == 4)) })));
        var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), disabled: ((row_1.level == 4)) })], __VLS_functionalComponentArgsRest(__VLS_31), false));
        var __VLS_36 = void 0;
        var __VLS_37 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.addPermisstion(row_1);
            }
        };
        var __VLS_33 = void 0;
        var __VLS_34 = void 0;
        (row_1.level == 3 ? '添加功能' : '添加菜单');
        __VLS_nonNullable(__VLS_35.slots).default;
        var __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        var __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), disabled: ((row_1.level == 1)) })));
        var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), disabled: ((row_1.level == 1)) })], __VLS_functionalComponentArgsRest(__VLS_39), false));
        var __VLS_44 = void 0;
        var __VLS_45 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.updatePermisstion(row_1);
            }
        };
        var __VLS_41 = void 0;
        var __VLS_42 = void 0;
        __VLS_nonNullable(__VLS_43.slots).default;
        var __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
        var __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElPopconfirm;
        /** @type { [typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ] } */
        // @ts-ignore
        var __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46(__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.name, "?"))), width: ("260px") })));
        var __VLS_48 = __VLS_47.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.name, "?"))), width: ("260px") })], __VLS_functionalComponentArgsRest(__VLS_47), false));
        var __VLS_52 = void 0;
        var __VLS_53 = {
            onConfirm: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.removeMenu(row_1.id);
            }
        };
        var __VLS_49 = void 0;
        var __VLS_50 = void 0;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot_1 = __VLS_nonNullable(__VLS_51.slots).reference;
            var __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ type: ("primary"), size: ("small"), disabled: ((row_1.level == 1 ? true : false)), }));
            var __VLS_56 = __VLS_55.apply(void 0, __spreadArray([{ type: ("primary"), size: ("small"), disabled: ((row_1.level == 1 ? true : false)), }], __VLS_functionalComponentArgsRest(__VLS_55), false));
            __VLS_nonNullable(__VLS_59.slots).default;
            var __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
        }
        var __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
        __VLS_nonNullable(__VLS_29.slots)['' /* empty slot name completion */];
    }
    var __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    var __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ modelValue: ((__VLS_ctx.dialogVisible)), title: ((__VLS_ctx.menuData.id ? '更新菜单' : '添加菜单')), }));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.dialogVisible)), title: ((__VLS_ctx.menuData.id ? '更新菜单' : '添加菜单')), }], __VLS_functionalComponentArgsRest(__VLS_61), false));
    var __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    var __VLS_68 = __VLS_67.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_67), false));
    var __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ label: ("名称"), }));
    var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{ label: ("名称"), }], __VLS_functionalComponentArgsRest(__VLS_73), false));
    var __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ placeholder: ("请您输入菜单名称"), modelValue: ((__VLS_ctx.menuData.name)), }));
    var __VLS_80 = __VLS_79.apply(void 0, __spreadArray([{ placeholder: ("请您输入菜单名称"), modelValue: ((__VLS_ctx.menuData.name)), }], __VLS_functionalComponentArgsRest(__VLS_79), false));
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    var __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ label: ("权限"), }));
    var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([{ label: ("权限"), }], __VLS_functionalComponentArgsRest(__VLS_85), false));
    var __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ placeholder: ("请您输入权限数值"), modelValue: ((__VLS_ctx.menuData.code)), }));
    var __VLS_92 = __VLS_91.apply(void 0, __spreadArray([{ placeholder: ("请您输入权限数值"), modelValue: ((__VLS_ctx.menuData.code)), }], __VLS_functionalComponentArgsRest(__VLS_91), false));
    __VLS_nonNullable(__VLS_89.slots).default;
    var __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    __VLS_nonNullable(__VLS_71.slots).default;
    var __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_65.slots).footer;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("dialog-footer") }));
        var __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(__assign({ 'onClick': {} })));
        var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_97), false));
        var __VLS_102 = void 0;
        var __VLS_103 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.dialogVisible = false;
            }
        };
        var __VLS_99 = void 0;
        var __VLS_100 = void 0;
        __VLS_nonNullable(__VLS_101.slots).default;
        var __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
        var __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104(__assign({ 'onClick': {} }, { type: ("primary") })));
        var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary") })], __VLS_functionalComponentArgsRest(__VLS_105), false));
        var __VLS_110 = void 0;
        var __VLS_111 = {
            onClick: (__VLS_ctx.save)
        };
        var __VLS_107 = void 0;
        var __VLS_108 = void 0;
        __VLS_nonNullable(__VLS_109.slots).default;
        var __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    }
    var __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    __VLS_styleScopedClasses['dialog-footer'];
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
            PermisstionArr: PermisstionArr,
            dialogVisible: dialogVisible,
            menuData: menuData,
            addPermisstion: addPermisstion,
            updatePermisstion: updatePermisstion,
            save: save,
            removeMenu: removeMenu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
