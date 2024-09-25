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
import { reqAddOrUpdateRole, reqAllMenuList, reqAllRoleList, reqRemoveRole, reqSetPermisstion } from "@/api/acl/role";
import useLayOutSettingStore from "@/store/modules/setting";
import { ElMessage } from "element-plus";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
//当前页码
var pageNo = ref(1);
//一页展示几条数据
var pageSize = ref(10);
//职位总个数
var total = ref(0);
//搜索职位关键字
var keyword = ref('');
//存储全部已有的职位
var allRole = ref([]);
var settingStore = useLayOutSettingStore();
//控制对话框的显示与隐藏
var dialogVisite = ref(false);
//收集新增岗位数据
var RoleParams = reactive({
    roleName: ''
});
//获取form组件实例
var form = ref();
//控制抽屉显示与隐藏
var drawer = ref(false);
//准备一个数组:数组用于存储勾选的节点的ID(四级的)
var selectArr = ref([]);
//定义数组存储用户权限的数据
var menuArr = ref([]);
//获取tree组件实例
var tree = ref();
//组件挂载完毕
onMounted(function () {
    //获取职位请求
    getHasRole();
});
//获取全部用户信息的方法|分页器当前页码发生变化的回调
var getHasRole = function () {
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
                    return [4 /*yield*/, reqAllRoleList(pageNo.value, pageSize.value, keyword.value)];
                case 1:
                    result = _a.sent();
                    if (result.code == 200) {
                        total.value = result.data.total;
                        allRole.value = result.data.records;
                    }
                    return [2 /*return*/];
            }
        });
    });
};
//下拉菜单的回调
var sizeChange = function () {
    getHasRole();
};
//搜索按钮的回调
var search = function () {
    //再次发请求根据关键字
    getHasRole();
    keyword.value = '';
};
//重置按钮的回调
var reset = function () {
    settingStore.refsh = !settingStore.refsh;
};
//添加职位按钮的回调
var addRole = function () {
    //对话框显示出来
    dialogVisite.value = true;
    //清空数据
    Object.assign(RoleParams, {
        roleName: '',
        id: 0
    });
    //清空上一次表单校验错误结果
    nextTick(function () {
        form.value.clearValidate('roleName');
    });
};
//更新已有的职位按钮的回调
var updateRole = function (row) {
    //显示出对话框
    dialogVisite.value = true;
    //存储已有的职位----带有ID的
    Object.assign(RoleParams, row);
    //清空上一次表单校验错误结果
    nextTick(function () {
        form.value.clearValidate('roleName');
    });
};
//自定义校验规则的回调
var validatorRoleName = function (rule, value, callBack) {
    if (value.trim().length >= 2) {
        callBack();
    }
    else {
        callBack(new Error('职位名称至少两位'));
    }
};
//职位校验规则
var rules = {
    roleName: [
        { required: true, trigger: 'blur', validator: validatorRoleName }
    ]
};
//确定按钮的回调
var save = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //表单校验结果,结果通过在发请求、结果没有通过不应该在发生请求
            return [4 /*yield*/, form.value.validate()];
            case 1:
                //表单校验结果,结果通过在发请求、结果没有通过不应该在发生请求
                _a.sent();
                return [4 /*yield*/, reqAddOrUpdateRole(RoleParams)];
            case 2:
                result = _a.sent();
                if (result.code == 200) {
                    //提示文字
                    ElMessage({ type: 'success', message: RoleParams.id ? '更新成功' : '添加成功' });
                    //对话框显示
                    dialogVisite.value = false;
                    //再次获取全部的已有的职位
                    getHasRole(RoleParams.id ? pageNo.value : 1);
                }
                return [2 /*return*/];
        }
    });
}); };
//分配权限按钮的回调
//已有的职位的数据
var setPermisstion = function (row) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //抽屉显示出来
                drawer.value = true;
                //收集当前要分类权限的职位的数据
                Object.assign(RoleParams, row);
                return [4 /*yield*/, reqAllMenuList(RoleParams.id)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    menuArr.value = result.data;
                    selectArr.value = filterSelectArr(menuArr.value, []);
                }
                return [2 /*return*/];
        }
    });
}); };
//树形控件的测试数据
var defaultProps = {
    children: 'children',
    label: 'name',
};
var filterSelectArr = function (allData, initArr) {
    allData.forEach(function (item) {
        if (item.select && item.level == 4) {
            initArr.push(item.id);
        }
        if (item.children && item.children.length > 0) {
            filterSelectArr(item.children, initArr);
        }
    });
    return initArr;
};
//抽屉确定按钮的回调
var handler = function () { return __awaiter(void 0, void 0, void 0, function () {
    var roleId, arr, arr1, permissionId, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                roleId = RoleParams.id;
                arr = tree.value.getCheckedKeys();
                arr1 = tree.value.getHalfCheckedKeys();
                permissionId = arr.concat(arr1);
                return [4 /*yield*/, reqSetPermisstion(roleId, permissionId)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    //抽屉关闭
                    drawer.value = false;
                    //提示信息
                    ElMessage({ type: 'success', message: '分配权限成功' });
                    //页面刷新
                    window.location.reload();
                }
                return [2 /*return*/];
        }
    });
}); };
//删除已有的职位
var removeRole = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqRemoveRole(id)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    //提示信息
                    ElMessage({ type: 'success', message: '删除成功' });
                    getHasRole(allRole.value.length > 1 ? pageNo.value : pageNo.value - 1);
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
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ style: ({}) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ inline: ((true)) }, { class: ("form") })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ inline: ((true)) }, { class: ("form") })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("职位搜索"), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ label: ("职位搜索"), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ placeholder: ("请您输入搜索职位关键词"), modelValue: ((__VLS_ctx.keyword)), }));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{ placeholder: ("请您输入搜索职位关键词"), modelValue: ((__VLS_ctx.keyword)), }], __VLS_functionalComponentArgsRest(__VLS_19), false));
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    var __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_25), false));
    var __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), disabled: ((!__VLS_ctx.keyword)) })));
    var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), disabled: ((!__VLS_ctx.keyword)) })], __VLS_functionalComponentArgsRest(__VLS_31), false));
    var __VLS_36;
    var __VLS_37 = {
        onClick: (__VLS_ctx.search)
    };
    var __VLS_33;
    var __VLS_34;
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    var __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
    var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_39), false));
    var __VLS_44;
    var __VLS_45 = {
        onClick: (__VLS_ctx.reset)
    };
    var __VLS_41;
    var __VLS_42;
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    var __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    var __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46(__assign({ style: ({}) })));
    var __VLS_48 = __VLS_47.apply(void 0, __spreadArray([__assign({ style: ({}) })], __VLS_functionalComponentArgsRest(__VLS_47), false));
    var __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), icon: ("Plus") })));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default"), icon: ("Plus") })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    var __VLS_58;
    var __VLS_59 = {
        onClick: (__VLS_ctx.addRole)
    };
    var __VLS_55;
    var __VLS_56;
    __VLS_nonNullable(__VLS_57.slots).default;
    var __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
    var __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.allRole)) })));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign(__assign({ border: (true) }, { style: ({}) }), { data: ((__VLS_ctx.allRole)) })], __VLS_functionalComponentArgsRest(__VLS_61), false));
    var __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ type: ("index"), align: ("center"), label: ("#"), }));
    var __VLS_68 = __VLS_67.apply(void 0, __spreadArray([{ type: ("index"), align: ("center"), label: ("#"), }], __VLS_functionalComponentArgsRest(__VLS_67), false));
    var __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ align: ("center"), label: ("id"), width: ("70px"), prop: ("id"), }));
    var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{ align: ("center"), label: ("id"), width: ("70px"), prop: ("id"), }], __VLS_functionalComponentArgsRest(__VLS_73), false));
    var __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ align: ("center"), label: ("角色名称"), prop: ("roleName"), showOverflowTooltip: (true), }));
    var __VLS_80 = __VLS_79.apply(void 0, __spreadArray([{ align: ("center"), label: ("角色名称"), prop: ("roleName"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_79), false));
    var __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ align: ("center"), label: ("创建时间"), prop: ("createTime"), showOverflowTooltip: (true), }));
    var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([{ align: ("center"), label: ("创建时间"), prop: ("createTime"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_85), false));
    var __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ align: ("center"), label: ("更新时间"), prop: ("updateTime"), showOverflowTooltip: (true), }));
    var __VLS_92 = __VLS_91.apply(void 0, __spreadArray([{ align: ("center"), label: ("更新时间"), prop: ("updateTime"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_91), false));
    var __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ align: ("center"), width: ("270px"), label: ("操作"), }));
    var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([{ align: ("center"), width: ("270px"), label: ("操作"), }], __VLS_functionalComponentArgsRest(__VLS_97), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_101.slots).default;
        var _a = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _a.row, $index = _a.$index;
        var __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("User") })));
        var __VLS_104 = __VLS_103.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("User") })], __VLS_functionalComponentArgsRest(__VLS_103), false));
        var __VLS_108 = void 0;
        var __VLS_109 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.setPermisstion(row_1);
            }
        };
        var __VLS_105 = void 0;
        var __VLS_106 = void 0;
        __VLS_nonNullable(__VLS_107.slots).default;
        var __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
        var __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })));
        var __VLS_112 = __VLS_111.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })], __VLS_functionalComponentArgsRest(__VLS_111), false));
        var __VLS_116 = void 0;
        var __VLS_117 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.updateRole(row_1);
            }
        };
        var __VLS_113 = void 0;
        var __VLS_114 = void 0;
        __VLS_nonNullable(__VLS_115.slots).default;
        var __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
        var __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElPopconfirm;
        /** @type { [typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ] } */
        // @ts-ignore
        var __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118(__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.roleName, "?"))), width: ("260px") })));
        var __VLS_120 = __VLS_119.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.roleName, "?"))), width: ("260px") })], __VLS_functionalComponentArgsRest(__VLS_119), false));
        var __VLS_124 = void 0;
        var __VLS_125 = {
            onConfirm: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.removeRole(row_1.id);
            }
        };
        var __VLS_121 = void 0;
        var __VLS_122 = void 0;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot_1 = __VLS_nonNullable(__VLS_123.slots).reference;
            var __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ type: ("primary"), size: ("small"), icon: ("Delete"), }));
            var __VLS_128 = __VLS_127.apply(void 0, __spreadArray([{ type: ("primary"), size: ("small"), icon: ("Delete"), }], __VLS_functionalComponentArgsRest(__VLS_127), false));
            __VLS_nonNullable(__VLS_131.slots).default;
            var __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
        }
        var __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
        __VLS_nonNullable(__VLS_101.slots)['' /* empty slot name completion */];
    }
    var __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    var __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    var __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132(__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.pageSize)), pageSizes: (([10, 20, 30, 40])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })));
    var __VLS_134 = __VLS_133.apply(void 0, __spreadArray([__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.pageSize)), pageSizes: (([10, 20, 30, 40])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })], __VLS_functionalComponentArgsRest(__VLS_133), false));
    var __VLS_138;
    var __VLS_139 = {
        onCurrentChange: (__VLS_ctx.getHasRole)
    };
    var __VLS_140 = {
        onSizeChange: (__VLS_ctx.sizeChange)
    };
    var __VLS_135;
    var __VLS_136;
    var __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
    __VLS_nonNullable(__VLS_51.slots).default;
    var __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    var __VLS_141 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    var __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ modelValue: ((__VLS_ctx.dialogVisite)), title: ((__VLS_ctx.RoleParams.id ? '更新职位' : '添加职位')), }));
    var __VLS_143 = __VLS_142.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.dialogVisite)), title: ((__VLS_ctx.RoleParams.id ? '更新职位' : '添加职位')), }], __VLS_functionalComponentArgsRest(__VLS_142), false));
    var __VLS_147 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({ model: ((__VLS_ctx.RoleParams)), rules: ((__VLS_ctx.rules)), ref: ("form"), }));
    var __VLS_149 = __VLS_148.apply(void 0, __spreadArray([{ model: ((__VLS_ctx.RoleParams)), rules: ((__VLS_ctx.rules)), ref: ("form"), }], __VLS_functionalComponentArgsRest(__VLS_148), false));
    // @ts-ignore navigation for `const form = ref()`
    __VLS_ctx.form;
    var __VLS_153 = {};
    var __VLS_154 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ label: ("职位名称"), prop: ("roleName"), }));
    var __VLS_156 = __VLS_155.apply(void 0, __spreadArray([{ label: ("职位名称"), prop: ("roleName"), }], __VLS_functionalComponentArgsRest(__VLS_155), false));
    var __VLS_160 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ placeholder: ("请您输入职位名称"), modelValue: ((__VLS_ctx.RoleParams.roleName)), }));
    var __VLS_162 = __VLS_161.apply(void 0, __spreadArray([{ placeholder: ("请您输入职位名称"), modelValue: ((__VLS_ctx.RoleParams.roleName)), }], __VLS_functionalComponentArgsRest(__VLS_161), false));
    __VLS_nonNullable(__VLS_159.slots).default;
    var __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156);
    __VLS_nonNullable(__VLS_152.slots).default;
    var __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_146.slots).footer;
        var __VLS_166 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
        var __VLS_168 = __VLS_167.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_167), false));
        var __VLS_172 = void 0;
        var __VLS_173 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.dialogVisite = false;
            }
        };
        var __VLS_169 = void 0;
        var __VLS_170 = void 0;
        __VLS_nonNullable(__VLS_171.slots).default;
        var __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168);
        var __VLS_174 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
        var __VLS_176 = __VLS_175.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_175), false));
        var __VLS_180 = void 0;
        var __VLS_181 = {
            onClick: (__VLS_ctx.save)
        };
        var __VLS_177 = void 0;
        var __VLS_178 = void 0;
        __VLS_nonNullable(__VLS_179.slots).default;
        var __VLS_179 = __VLS_pickFunctionalComponentCtx(__VLS_174, __VLS_176);
    }
    var __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
    var __VLS_182 = __VLS_resolvedLocalAndGlobalComponents.ElDrawer;
    /** @type { [typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ] } */
    // @ts-ignore
    var __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ modelValue: ((__VLS_ctx.drawer)), }));
    var __VLS_184 = __VLS_183.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.drawer)), }], __VLS_functionalComponentArgsRest(__VLS_183), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_187.slots).header;
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_187.slots).default;
        var __VLS_188 = __VLS_resolvedLocalAndGlobalComponents.ElTree;
        /** @type { [typeof __VLS_components.ElTree, typeof __VLS_components.elTree, ] } */
        // @ts-ignore
        var __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ ref: ("tree"), data: ((__VLS_ctx.menuArr)), showCheckbox: (true), nodeKey: ("id"), defaultExpandAll: (true), defaultCheckedKeys: ((__VLS_ctx.selectArr)), props: ((__VLS_ctx.defaultProps)), }));
        var __VLS_190 = __VLS_189.apply(void 0, __spreadArray([{ ref: ("tree"), data: ((__VLS_ctx.menuArr)), showCheckbox: (true), nodeKey: ("id"), defaultExpandAll: (true), defaultCheckedKeys: ((__VLS_ctx.selectArr)), props: ((__VLS_ctx.defaultProps)), }], __VLS_functionalComponentArgsRest(__VLS_189), false));
        // @ts-ignore navigation for `const tree = ref()`
        __VLS_ctx.tree;
        var __VLS_194 = {};
        var __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_187.slots).footer;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ style: ({}) }));
        var __VLS_195 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_196 = __VLS_asFunctionalComponent(__VLS_195, new __VLS_195(__assign({ 'onClick': {} })));
        var __VLS_197 = __VLS_196.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_196), false));
        var __VLS_201 = void 0;
        var __VLS_202 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.drawer = false;
            }
        };
        var __VLS_198 = void 0;
        var __VLS_199 = void 0;
        __VLS_nonNullable(__VLS_200.slots).default;
        var __VLS_200 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197);
        var __VLS_203 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_204 = __VLS_asFunctionalComponent(__VLS_203, new __VLS_203(__assign({ 'onClick': {} }, { type: ("primary") })));
        var __VLS_205 = __VLS_204.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary") })], __VLS_functionalComponentArgsRest(__VLS_204), false));
        var __VLS_209 = void 0;
        var __VLS_210 = {
            onClick: (__VLS_ctx.handler)
        };
        var __VLS_206 = void 0;
        var __VLS_207 = void 0;
        __VLS_nonNullable(__VLS_208.slots).default;
        var __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205);
    }
    var __VLS_187 = __VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184);
    __VLS_styleScopedClasses['form'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {
        "form": __VLS_153,
        "tree": __VLS_194,
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
            pageSize: pageSize,
            total: total,
            keyword: keyword,
            allRole: allRole,
            dialogVisite: dialogVisite,
            RoleParams: RoleParams,
            form: form,
            drawer: drawer,
            selectArr: selectArr,
            menuArr: menuArr,
            tree: tree,
            getHasRole: getHasRole,
            sizeChange: sizeChange,
            search: search,
            reset: reset,
            addRole: addRole,
            updateRole: updateRole,
            rules: rules,
            save: save,
            setPermisstion: setPermisstion,
            defaultProps: defaultProps,
            handler: handler,
            removeRole: removeRole,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
