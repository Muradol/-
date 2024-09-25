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
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import useUserStore from "@/store/modules/user";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { getTime } from "@/utils/time";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
//获取路由器
var $router = useRouter();
//获取表单元素
var loginForms = ref();
//引入用户相关的小仓库
var useStore = useUserStore();
//收集账号与密码数据
var loginForm = reactive({ username: 'admin', password: '111111' });
//登录按钮的回调
var login = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //保证全部表单校验通过再发请求
            return [4 /*yield*/, loginForms.value.validate()];
            case 1:
                //保证全部表单校验通过再发请求
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, useStore.userLogin(loginForm)];
            case 3:
                _a.sent();
                $router.push('/');
                ElNotification({
                    type: 'success',
                    message: '欢迎回来',
                    title: "Hi,".concat(getTime(), "\u597D\uFF01")
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                ElNotification({
                    type: 'error',
                    message: error_1.message
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
//自定义校验规则函数
var validatorUserName = function (rule, value, callback) {
    //rule:即为校验规则对象
    //value:即为表单元素文本内容
    //函数:如果符合条件callBack放行通过即为
    //如果不符合条件callBack方法,注入错误提示信息
    if (value.length >= 5) {
        callback();
    }
    else {
        callback(new Error('账号长度至少五位'));
    }
};
var validatorPassword = function (rule, value, callback) {
    //rule:即为校验规则对象
    //value:即为表单元素文本内容
    //函数:如果符合条件callBack放行通过即为
    //如果不符合条件callBack方法,注入错误提示信息
    if (value.length >= 6) {
        callback();
    }
    else {
        callback(new Error('密码长度至少六位'));
    }
};
//定义表单校验需要配置对象
var rules = {
    //规则对象属性:
    //required,代表这个字段务必要校验的
    //min:文本长度至少多少位
    //max:文本长度最多多少位
    //message:错误的提示信息
    //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
    username: [
        { trigger: 'change', validator: validatorUserName }
    ],
    password: [
        { trigger: 'change', validator: validatorPassword }
    ]
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("login_container") }));
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((13)), xs: ((0)), }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{ span: ((13)), xs: ((0)), }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ span: ((11)), xs: ((24)), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ span: ((11)), xs: ((24)), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18(__assign({ class: ("login_form") }, { model: ((__VLS_ctx.loginForm)), rules: ((__VLS_ctx.rules)), ref: ("loginForms") })));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([__assign({ class: ("login_form") }, { model: ((__VLS_ctx.loginForm)), rules: ((__VLS_ctx.rules)), ref: ("loginForms") })], __VLS_functionalComponentArgsRest(__VLS_19), false));
    // @ts-ignore navigation for `const loginForms = ref()`
    __VLS_ctx.loginForms;
    var __VLS_24 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("login_input") }));
    var __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ prop: ("username"), }));
    var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([{ prop: ("username"), }], __VLS_functionalComponentArgsRest(__VLS_26), false));
    var __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ prefixIcon: ((__VLS_ctx.User)), modelValue: ((__VLS_ctx.loginForm.username)), }));
    var __VLS_33 = __VLS_32.apply(void 0, __spreadArray([{ prefixIcon: ((__VLS_ctx.User)), modelValue: ((__VLS_ctx.loginForm.username)), }], __VLS_functionalComponentArgsRest(__VLS_32), false));
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
    var __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ prop: ("password"), }));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{ prop: ("password"), }], __VLS_functionalComponentArgsRest(__VLS_38), false));
    var __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    var __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ type: ("password"), prefixIcon: ((__VLS_ctx.Lock)), modelValue: ((__VLS_ctx.loginForm.password)), showPassword: (true), }));
    var __VLS_45 = __VLS_44.apply(void 0, __spreadArray([{ type: ("password"), prefixIcon: ((__VLS_ctx.Lock)), modelValue: ((__VLS_ctx.loginForm.password)), showPassword: (true), }], __VLS_functionalComponentArgsRest(__VLS_44), false));
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
    var __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({}));
    var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_50), false));
    var __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    var __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55(__assign(__assign({ 'onClick': {} }, { class: ("login_button") }), { type: ("primary"), size: ("default") })));
    var __VLS_57 = __VLS_56.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { class: ("login_button") }), { type: ("primary"), size: ("default") })], __VLS_functionalComponentArgsRest(__VLS_56), false));
    var __VLS_61;
    var __VLS_62 = {
        onClick: (__VLS_ctx.login)
    };
    var __VLS_58;
    var __VLS_59;
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
    __VLS_nonNullable(__VLS_54.slots).default;
    var __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['login_container'];
    __VLS_styleScopedClasses['login_form'];
    __VLS_styleScopedClasses['login_input'];
    __VLS_styleScopedClasses['login_button'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {
        "loginForms": __VLS_24,
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
            User: User,
            Lock: Lock,
            loginForms: loginForms,
            loginForm: loginForm,
            login: login,
            rules: rules,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
