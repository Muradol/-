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
import { reqAddOrUpdateUser, reqAllRole, reqRemoveUser, reqSelectUser, reqSetUserRole, reqUserInfo } from "@/api/acl/user";
import { ElMessage } from "element-plus";
import useLayOutSettingStore from "@/store/modules/setting";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
//默认页码
var pageNo = ref(1);
//一页展示几条数据
var pageSize = ref(5);
//用户总个数
var total = ref(0);
//存储全部用户的数组
var userArr = ref([]);
//定义响应式数据控制抽屉的显示与隐藏
var drawer = ref(false);
//控制分配角色抽屉显示与隐藏
var drawer1 = ref(false);
//存储全部职位的数据
var allRole = ref([]);
//当前用户已有的职位
var userRole = ref([]);
//获取form组件实例
var formRef = ref();
//收集用户信息的响应式数据
var userParams = reactive({
    username: '',
    name: '',
    password: ''
});
//准备一个数组存储批量删除的用户的ID
var selectIdArr = ref([]);
//定义响应式数据:收集用户输入进来的关键字
var keyword = ref('');
//获取模板setting仓库
var settingStore = useLayOutSettingStore();
//组件挂载完毕
onMounted(function () {
    getHasUser();
});
//获取全部已有的用户信息
var getHasUser = function () {
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
                    //收集当前页码
                    pageNo.value = pager;
                    return [4 /*yield*/, reqUserInfo(pageNo.value, pageSize.value, keyword.value)];
                case 1:
                    result = _a.sent();
                    if (result.code == 200) {
                        total.value = result.data.total;
                        userArr.value = result.data.records;
                    }
                    return [2 /*return*/];
            }
        });
    });
};
//分页器下拉菜单的自定义事件的回调
var handler = function () {
    getHasUser();
};
//添加用户按钮的回调
var addUser = function () {
    //抽屉显示出来
    drawer.value = true;
    //清空数据
    Object.assign(userParams, {
        id: 0,
        username: '',
        name: '',
        password: ''
    });
    //清除上一次的错误的提示信息
    nextTick(function () {
        formRef.value.clearValidate('username');
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('password');
    });
};
//更新已有的用户按钮的回调
//row:即为已有用户的账号信息
var updateUser = function (row) {
    //抽屉显示出来
    drawer.value = true;
    //存储收集已有的账号信息
    Object.assign(userParams, row);
    //清除上一次的错误的提示信息
    nextTick(function () {
        formRef.value.clearValidate('username');
        formRef.value.clearValidate('name');
    });
};
//保存按钮的回调
var save = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //点击保存按钮的时候,务必需要保证表单全部复合条件在去发请求
            return [4 /*yield*/, formRef.value.validate()
                //保存按钮:添加新的用户|更新已有的用户账号信息
            ];
            case 1:
                //点击保存按钮的时候,务必需要保证表单全部复合条件在去发请求
                _a.sent();
                return [4 /*yield*/, reqAddOrUpdateUser(userParams)];
            case 2:
                result = _a.sent();
                //添加或者更新成功
                if (result.code == 200) {
                    //关闭抽屉
                    drawer.value = false;
                    //提示消息
                    ElMessage({ type: 'success', message: userParams.id ? '更新成功' : '添加成功' });
                    //获取最新的全部账号的信息
                    // getHasUser(userParams.id ? pageNo.value : 1);
                    //浏览器自动刷新一次
                    window.location.reload();
                }
                else {
                    //关闭抽屉
                    drawer.value = false;
                    //提示消息
                    ElMessage({ type: 'error', message: userParams.id ? '更新失败' : '添加失败' });
                }
                return [2 /*return*/];
        }
    });
}); };
//取消按钮的回调
var cancel = function () {
    //关闭抽屉
    drawer.value = false;
};
//校验用户名字回调函数
var validatorUsername = function (rule, value, callBack) {
    //用户名字,长度至少五位
    if (value.trim().length >= 5) {
        callBack();
    }
    else {
        callBack(new Error('用户名字至少五位'));
    }
};
//校验用户名字回调函数
var validatorname = function (rule, value, callBack) {
    //用户昵称,长度至少五位
    if (value.trim().length >= 5) {
        callBack();
    }
    else {
        callBack(new Error('用户昵称至少五位'));
    }
};
var validatorPassword = function (rule, value, callBack) {
    //用户密码,长度至少五位
    if (value.trim().length >= 6) {
        callBack();
    }
    else {
        callBack(new Error('用户密码至少六位'));
    }
};
//表单校验的规则对象
var rules = {
    //用户名字
    username: [{ required: true, trigger: 'blur', validator: validatorUsername }],
    //用户昵称
    name: [{ required: true, trigger: 'blur', validator: validatorname }],
    //用户的密码
    password: [{ required: true, trigger: 'blur', validator: validatorPassword }],
};
//分配角色按钮的回调
var setRole = function (row) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //存储已有的用户信息
                Object.assign(userParams, row);
                return [4 /*yield*/, reqAllRole(userParams.id)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    //存储全部的职位
                    allRole.value = result.data.allRolesList;
                    //存储当前用户已有的职位
                    userRole.value = result.data.assignRoles;
                    //抽屉显示出来
                    drawer1.value = true;
                }
                return [2 /*return*/];
        }
    });
}); };
//收集顶部复选框全选数据
var checkAll = ref(false);
//控制顶部全选复选框不确定的样式
var isIndeterminate = ref(true);
//顶部的全部复选框的change事件
var handleCheckAllChange = function (val) {
    //val:true(全选)|false(没有全选)
    userRole.value = val ? allRole.value : [];
    //不确定的样式(确定样式)
    isIndeterminate.value = false;
};
//顶部全部的复选框的change事件
var handleCheckedCitiesChange = function (value) {
    //顶部复选框的勾选数据
    //代表:勾选上的项目个数与全部的职位个数相等，顶部的复选框勾选上
    checkAll.value = value.length === allRole.value.length;
    //不确定的样式
    isIndeterminate.value = value.length !== allRole.value.length;
};
//确定按钮的回调(分配职位)
var confirmClick = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = {
                    userId: userParams.id,
                    roleIdList: userRole.value.map(function (item) {
                        return item.id;
                    })
                };
                return [4 /*yield*/, reqSetUserRole(data)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    //提示信息
                    ElMessage({ type: 'success', message: '分配职务成功' });
                    //关闭抽屉
                    drawer1.value = false;
                    //获取更新完毕用户的信息,更新完毕留在当前页
                    getHasUser(pageNo.value);
                }
                return [2 /*return*/];
        }
    });
}); };
//删除某一个用户
var deleteUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reqRemoveUser(userId)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    ElMessage({ type: 'success', message: '删除成功' });
                    getHasUser(userArr.value.length > 1 ? pageNo.value : pageNo.value - 1);
                }
                return [2 /*return*/];
        }
    });
}); };
//table复选框勾选的时候会触发的事件
var selectChange = function (value) {
    selectIdArr.value = value;
};
//批量删除按钮的回调
var deleteSelectUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var idsList, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idsList = selectIdArr.value.map(function (item) {
                    return item.id;
                });
                return [4 /*yield*/, reqSelectUser(idsList)];
            case 1:
                result = _a.sent();
                if (result.code == 200) {
                    ElMessage({ type: 'success', message: '删除成功' });
                    getHasUser(userArr.value.length > 1 ? pageNo.value : pageNo.value - 1);
                }
                return [2 /*return*/];
        }
    });
}); };
//搜索按钮的回调
var search = function () {
    //根据关键字获取相应的用户数据
    getHasUser();
    //清空关键字
    keyword.value = '';
};
//重置按钮
var reset = function () {
    settingStore.refsh = !settingStore.refsh;
};
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
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("用户名"), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ label: ("用户名"), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ placeholder: ("请您输入搜索用户名"), modelValue: ((__VLS_ctx.keyword)), }));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{ placeholder: ("请您输入搜索用户名"), modelValue: ((__VLS_ctx.keyword)), }], __VLS_functionalComponentArgsRest(__VLS_19), false));
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
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    var __VLS_58;
    var __VLS_59 = {
        onClick: (__VLS_ctx.addUser)
    };
    var __VLS_55;
    var __VLS_56;
    __VLS_nonNullable(__VLS_57.slots).default;
    var __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
    var __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ 'onClick': {} }, { type: ("danger"), size: ("default"), disabled: ((!__VLS_ctx.selectIdArr.length)) })));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("danger"), size: ("default"), disabled: ((!__VLS_ctx.selectIdArr.length)) })], __VLS_functionalComponentArgsRest(__VLS_61), false));
    var __VLS_66;
    var __VLS_67 = {
        onClick: (__VLS_ctx.deleteSelectUser)
    };
    var __VLS_63;
    var __VLS_64;
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    var __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68(__assign(__assign({ 'onSelectionChange': {} }, { style: ({}) }), { border: (true), data: ((__VLS_ctx.userArr)) })));
    var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([__assign(__assign({ 'onSelectionChange': {} }, { style: ({}) }), { border: (true), data: ((__VLS_ctx.userArr)) })], __VLS_functionalComponentArgsRest(__VLS_69), false));
    var __VLS_74;
    var __VLS_75 = {
        onSelectionChange: (__VLS_ctx.selectChange)
    };
    var __VLS_71;
    var __VLS_72;
    var __VLS_76 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ type: ("selection"), align: ("center"), width: ("50px"), }));
    var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([{ type: ("selection"), align: ("center"), width: ("50px"), }], __VLS_functionalComponentArgsRest(__VLS_77), false));
    var __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ label: ("#"), align: ("center"), width: ("60px"), type: ("index"), }));
    var __VLS_84 = __VLS_83.apply(void 0, __spreadArray([{ label: ("#"), align: ("center"), width: ("60px"), type: ("index"), }], __VLS_functionalComponentArgsRest(__VLS_83), false));
    var __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ label: ("id"), align: ("center"), width: ("70px"), prop: ("id"), }));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([{ label: ("id"), align: ("center"), width: ("70px"), prop: ("id"), }], __VLS_functionalComponentArgsRest(__VLS_89), false));
    var __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ label: ("用户名字"), align: ("center"), prop: ("username"), showOverflowTooltip: (true), }));
    var __VLS_96 = __VLS_95.apply(void 0, __spreadArray([{ label: ("用户名字"), align: ("center"), prop: ("username"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_95), false));
    var __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ label: ("用户名称"), align: ("center"), prop: ("name"), showOverflowTooltip: (true), }));
    var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([{ label: ("用户名称"), align: ("center"), prop: ("name"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_101), false));
    var __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ label: ("用户角色"), align: ("center"), prop: ("roleName"), showOverflowTooltip: (true), }));
    var __VLS_108 = __VLS_107.apply(void 0, __spreadArray([{ label: ("用户角色"), align: ("center"), prop: ("roleName"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_107), false));
    var __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ label: ("创建时间"), align: ("center"), prop: ("createTime"), showOverflowTooltip: (true), }));
    var __VLS_114 = __VLS_113.apply(void 0, __spreadArray([{ label: ("创建时间"), align: ("center"), prop: ("createTime"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_113), false));
    var __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ label: ("更新时间"), align: ("center"), prop: ("updateTime"), showOverflowTooltip: (true), }));
    var __VLS_120 = __VLS_119.apply(void 0, __spreadArray([{ label: ("更新时间"), align: ("center"), prop: ("updateTime"), showOverflowTooltip: (true), }], __VLS_functionalComponentArgsRest(__VLS_119), false));
    var __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    var __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ label: ("操作"), width: ("270px"), align: ("center"), }));
    var __VLS_126 = __VLS_125.apply(void 0, __spreadArray([{ label: ("操作"), width: ("270px"), align: ("center"), }], __VLS_functionalComponentArgsRest(__VLS_125), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_129.slots).default;
        var _a = __VLS_getSlotParams(__VLS_thisSlot)[0], row_1 = _a.row, $index = _a.$index;
        var __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("User") })));
        var __VLS_132 = __VLS_131.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("User") })], __VLS_functionalComponentArgsRest(__VLS_131), false));
        var __VLS_136 = void 0;
        var __VLS_137 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.setRole(row_1);
            }
        };
        var __VLS_133 = void 0;
        var __VLS_134 = void 0;
        __VLS_nonNullable(__VLS_135.slots).default;
        var __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
        var __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138(__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })));
        var __VLS_140 = __VLS_139.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary"), size: ("small"), icon: ("Edit") })], __VLS_functionalComponentArgsRest(__VLS_139), false));
        var __VLS_144 = void 0;
        var __VLS_145 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.updateUser(row_1);
            }
        };
        var __VLS_141 = void 0;
        var __VLS_142 = void 0;
        __VLS_nonNullable(__VLS_143.slots).default;
        var __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
        var __VLS_146 = __VLS_resolvedLocalAndGlobalComponents.ElPopconfirm;
        /** @type { [typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ] } */
        // @ts-ignore
        var __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146(__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.username, "?"))), width: ("260px") })));
        var __VLS_148 = __VLS_147.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { title: (("\u4F60\u786E\u5B9A\u8981\u5220\u9664".concat(row_1.username, "?"))), width: ("260px") })], __VLS_functionalComponentArgsRest(__VLS_147), false));
        var __VLS_152 = void 0;
        var __VLS_153 = {
            onConfirm: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.deleteUser(row_1.id);
            }
        };
        var __VLS_149 = void 0;
        var __VLS_150 = void 0;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot_1 = __VLS_nonNullable(__VLS_151.slots).reference;
            var __VLS_154 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ type: ("primary"), size: ("small"), icon: ("Delete"), }));
            var __VLS_156 = __VLS_155.apply(void 0, __spreadArray([{ type: ("primary"), size: ("small"), icon: ("Delete"), }], __VLS_functionalComponentArgsRest(__VLS_155), false));
            __VLS_nonNullable(__VLS_159.slots).default;
            var __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156);
        }
        var __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
        __VLS_nonNullable(__VLS_129.slots)['' /* empty slot name completion */];
    }
    var __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126);
    __VLS_nonNullable(__VLS_73.slots).default;
    var __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    var __VLS_160 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    var __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160(__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.pageSize)), pageSizes: (([5, 7, 9, 11])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })));
    var __VLS_162 = __VLS_161.apply(void 0, __spreadArray([__assign(__assign({ 'onCurrentChange': {} }, { 'onSizeChange': {} }), { currentPage: ((__VLS_ctx.pageNo)), pageSize: ((__VLS_ctx.pageSize)), pageSizes: (([5, 7, 9, 11])), background: ((true)), layout: ("prev, pager, next, jumper,->,sizes,total"), total: ((__VLS_ctx.total)) })], __VLS_functionalComponentArgsRest(__VLS_161), false));
    var __VLS_166;
    var __VLS_167 = {
        onCurrentChange: (__VLS_ctx.getHasUser)
    };
    var __VLS_168 = {
        onSizeChange: (__VLS_ctx.handler)
    };
    var __VLS_163;
    var __VLS_164;
    var __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
    __VLS_nonNullable(__VLS_51.slots).default;
    var __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    var __VLS_169 = __VLS_resolvedLocalAndGlobalComponents.ElDrawer;
    /** @type { [typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ] } */
    // @ts-ignore
    var __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({ modelValue: ((__VLS_ctx.drawer)), }));
    var __VLS_171 = __VLS_170.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.drawer)), }], __VLS_functionalComponentArgsRest(__VLS_170), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_174.slots).header;
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
        (__VLS_ctx.userParams.id ? '更新用户' : '添加用户');
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_174.slots).default;
        var __VLS_175 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
        // @ts-ignore
        var __VLS_176 = __VLS_asFunctionalComponent(__VLS_175, new __VLS_175({ model: ((__VLS_ctx.userParams)), rules: ((__VLS_ctx.rules)), ref: ("formRef"), }));
        var __VLS_177 = __VLS_176.apply(void 0, __spreadArray([{ model: ((__VLS_ctx.userParams)), rules: ((__VLS_ctx.rules)), ref: ("formRef"), }], __VLS_functionalComponentArgsRest(__VLS_176), false));
        // @ts-ignore navigation for `const formRef = ref()`
        __VLS_ctx.formRef;
        var __VLS_181 = {};
        var __VLS_182 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        var __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ label: ("用户姓名"), prop: ("username"), }));
        var __VLS_184 = __VLS_183.apply(void 0, __spreadArray([{ label: ("用户姓名"), prop: ("username"), }], __VLS_functionalComponentArgsRest(__VLS_183), false));
        var __VLS_188 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        var __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ placeholder: ("请您输入用户姓名"), modelValue: ((__VLS_ctx.userParams.username)), }));
        var __VLS_190 = __VLS_189.apply(void 0, __spreadArray([{ placeholder: ("请您输入用户姓名"), modelValue: ((__VLS_ctx.userParams.username)), }], __VLS_functionalComponentArgsRest(__VLS_189), false));
        __VLS_nonNullable(__VLS_187.slots).default;
        var __VLS_187 = __VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184);
        var __VLS_194 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        var __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ label: ("用户昵称"), prop: ("name"), }));
        var __VLS_196 = __VLS_195.apply(void 0, __spreadArray([{ label: ("用户昵称"), prop: ("name"), }], __VLS_functionalComponentArgsRest(__VLS_195), false));
        var __VLS_200 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        var __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({ placeholder: ("请您输入用户昵称"), modelValue: ((__VLS_ctx.userParams.name)), }));
        var __VLS_202 = __VLS_201.apply(void 0, __spreadArray([{ placeholder: ("请您输入用户昵称"), modelValue: ((__VLS_ctx.userParams.name)), }], __VLS_functionalComponentArgsRest(__VLS_201), false));
        __VLS_nonNullable(__VLS_199.slots).default;
        var __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196);
        if (!__VLS_ctx.userParams.id) {
            var __VLS_206 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
            /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
            // @ts-ignore
            var __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ label: ("用户密码"), prop: ("password"), }));
            var __VLS_208 = __VLS_207.apply(void 0, __spreadArray([{ label: ("用户密码"), prop: ("password"), }], __VLS_functionalComponentArgsRest(__VLS_207), false));
            var __VLS_212 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
            /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
            // @ts-ignore
            var __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({ placeholder: ("请您输入用户密码"), modelValue: ((__VLS_ctx.userParams.password)), }));
            var __VLS_214 = __VLS_213.apply(void 0, __spreadArray([{ placeholder: ("请您输入用户密码"), modelValue: ((__VLS_ctx.userParams.password)), }], __VLS_functionalComponentArgsRest(__VLS_213), false));
            __VLS_nonNullable(__VLS_211.slots).default;
            var __VLS_211 = __VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208);
        }
        __VLS_nonNullable(__VLS_180.slots).default;
        var __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_174.slots).footer;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ style: ({}) }));
        var __VLS_218 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218(__assign({ 'onClick': {} })));
        var __VLS_220 = __VLS_219.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_219), false));
        var __VLS_224 = void 0;
        var __VLS_225 = {
            onClick: (__VLS_ctx.cancel)
        };
        var __VLS_221 = void 0;
        var __VLS_222 = void 0;
        __VLS_nonNullable(__VLS_223.slots).default;
        var __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220);
        var __VLS_226 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226(__assign({ 'onClick': {} }, { type: ("primary") })));
        var __VLS_228 = __VLS_227.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary") })], __VLS_functionalComponentArgsRest(__VLS_227), false));
        var __VLS_232 = void 0;
        var __VLS_233 = {
            onClick: (__VLS_ctx.save)
        };
        var __VLS_229 = void 0;
        var __VLS_230 = void 0;
        __VLS_nonNullable(__VLS_231.slots).default;
        var __VLS_231 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228);
    }
    var __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171);
    var __VLS_234 = __VLS_resolvedLocalAndGlobalComponents.ElDrawer;
    /** @type { [typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ] } */
    // @ts-ignore
    var __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({ modelValue: ((__VLS_ctx.drawer1)), }));
    var __VLS_236 = __VLS_235.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.drawer1)), }], __VLS_functionalComponentArgsRest(__VLS_235), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_239.slots).header;
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_239.slots).default;
        var __VLS_240 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
        // @ts-ignore
        var __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({}));
        var __VLS_242 = __VLS_241.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_241), false));
        var __VLS_246 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        var __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({ label: ("用户姓名"), }));
        var __VLS_248 = __VLS_247.apply(void 0, __spreadArray([{ label: ("用户姓名"), }], __VLS_functionalComponentArgsRest(__VLS_247), false));
        var __VLS_252 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        var __VLS_253 = __VLS_asFunctionalComponent(__VLS_252, new __VLS_252({ modelValue: ((__VLS_ctx.userParams.username)), disabled: ((true)), }));
        var __VLS_254 = __VLS_253.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.userParams.username)), disabled: ((true)), }], __VLS_functionalComponentArgsRest(__VLS_253), false));
        __VLS_nonNullable(__VLS_251.slots).default;
        var __VLS_251 = __VLS_pickFunctionalComponentCtx(__VLS_246, __VLS_248);
        var __VLS_258 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        var __VLS_259 = __VLS_asFunctionalComponent(__VLS_258, new __VLS_258({ label: ("职位列表"), }));
        var __VLS_260 = __VLS_259.apply(void 0, __spreadArray([{ label: ("职位列表"), }], __VLS_functionalComponentArgsRest(__VLS_259), false));
        var __VLS_264 = __VLS_resolvedLocalAndGlobalComponents.ElCheckbox;
        /** @type { [typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, ] } */
        // @ts-ignore
        var __VLS_265 = __VLS_asFunctionalComponent(__VLS_264, new __VLS_264(__assign({ 'onChange': {} }, { modelValue: ((__VLS_ctx.checkAll)), indeterminate: ((__VLS_ctx.isIndeterminate)) })));
        var __VLS_266 = __VLS_265.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { modelValue: ((__VLS_ctx.checkAll)), indeterminate: ((__VLS_ctx.isIndeterminate)) })], __VLS_functionalComponentArgsRest(__VLS_265), false));
        var __VLS_270 = void 0;
        var __VLS_271 = {
            onChange: (__VLS_ctx.handleCheckAllChange)
        };
        var __VLS_267 = void 0;
        var __VLS_268 = void 0;
        __VLS_nonNullable(__VLS_269.slots).default;
        var __VLS_269 = __VLS_pickFunctionalComponentCtx(__VLS_264, __VLS_266);
        var __VLS_272 = __VLS_resolvedLocalAndGlobalComponents.ElCheckboxGroup;
        /** @type { [typeof __VLS_components.ElCheckboxGroup, typeof __VLS_components.elCheckboxGroup, typeof __VLS_components.ElCheckboxGroup, typeof __VLS_components.elCheckboxGroup, ] } */
        // @ts-ignore
        var __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272(__assign({ 'onChange': {} }, { modelValue: ((__VLS_ctx.userRole)) })));
        var __VLS_274 = __VLS_273.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { modelValue: ((__VLS_ctx.userRole)) })], __VLS_functionalComponentArgsRest(__VLS_273), false));
        var __VLS_278 = void 0;
        var __VLS_279 = {
            onChange: (__VLS_ctx.handleCheckedCitiesChange)
        };
        var __VLS_275 = void 0;
        var __VLS_276 = void 0;
        for (var _i = 0, _b = __VLS_getVForSourceType((__VLS_ctx.allRole)); _i < _b.length; _i++) {
            var _c = _b[_i], role = _c[0], index = _c[1];
            var __VLS_280 = __VLS_resolvedLocalAndGlobalComponents.ElCheckbox;
            /** @type { [typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, ] } */
            // @ts-ignore
            var __VLS_281 = __VLS_asFunctionalComponent(__VLS_280, new __VLS_280({ key: ((index)), label: ((role)), }));
            var __VLS_282 = __VLS_281.apply(void 0, __spreadArray([{ key: ((index)), label: ((role)), }], __VLS_functionalComponentArgsRest(__VLS_281), false));
            (role.roleName);
            __VLS_nonNullable(__VLS_285.slots).default;
            var __VLS_285 = __VLS_pickFunctionalComponentCtx(__VLS_280, __VLS_282);
        }
        __VLS_nonNullable(__VLS_277.slots).default;
        var __VLS_277 = __VLS_pickFunctionalComponentCtx(__VLS_272, __VLS_274);
        __VLS_nonNullable(__VLS_263.slots).default;
        var __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_258, __VLS_260);
        __VLS_nonNullable(__VLS_245.slots).default;
        var __VLS_245 = __VLS_pickFunctionalComponentCtx(__VLS_240, __VLS_242);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        var __VLS_thisSlot = __VLS_nonNullable(__VLS_239.slots).footer;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ style: ({}) }));
        var __VLS_286 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_287 = __VLS_asFunctionalComponent(__VLS_286, new __VLS_286(__assign({ 'onClick': {} })));
        var __VLS_288 = __VLS_287.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_287), false));
        var __VLS_292 = void 0;
        var __VLS_293 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.drawer1 = false;
            }
        };
        var __VLS_289 = void 0;
        var __VLS_290 = void 0;
        __VLS_nonNullable(__VLS_291.slots).default;
        var __VLS_291 = __VLS_pickFunctionalComponentCtx(__VLS_286, __VLS_288);
        var __VLS_294 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_295 = __VLS_asFunctionalComponent(__VLS_294, new __VLS_294(__assign({ 'onClick': {} }, { type: ("primary") })));
        var __VLS_296 = __VLS_295.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: ("primary") })], __VLS_functionalComponentArgsRest(__VLS_295), false));
        var __VLS_300 = void 0;
        var __VLS_301 = {
            onClick: (__VLS_ctx.confirmClick)
        };
        var __VLS_297 = void 0;
        var __VLS_298 = void 0;
        __VLS_nonNullable(__VLS_299.slots).default;
        var __VLS_299 = __VLS_pickFunctionalComponentCtx(__VLS_294, __VLS_296);
    }
    var __VLS_239 = __VLS_pickFunctionalComponentCtx(__VLS_234, __VLS_236);
    __VLS_styleScopedClasses['form'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {
        "formRef": __VLS_181,
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
            userArr: userArr,
            drawer: drawer,
            drawer1: drawer1,
            allRole: allRole,
            userRole: userRole,
            formRef: formRef,
            userParams: userParams,
            selectIdArr: selectIdArr,
            keyword: keyword,
            getHasUser: getHasUser,
            handler: handler,
            addUser: addUser,
            updateUser: updateUser,
            save: save,
            cancel: cancel,
            rules: rules,
            setRole: setRole,
            checkAll: checkAll,
            isIndeterminate: isIndeterminate,
            handleCheckAllChange: handleCheckAllChange,
            handleCheckedCitiesChange: handleCheckedCitiesChange,
            confirmClick: confirmClick,
            deleteUser: deleteUser,
            selectChange: selectChange,
            deleteSelectUser: deleteSelectUser,
            search: search,
            reset: reset,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
