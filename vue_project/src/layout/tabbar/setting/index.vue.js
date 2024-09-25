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
import useLayOutSettingStore from "@/store/modules/setting";
import useUserStore from "@/store/modules/user";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { ref } from "vue";
export default await (function () { return __awaiter(void 0, void 0, void 0, function () {
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
        var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onClick': {} }, { size: ("small"), icon: ("Refresh"), circle: (true) })));
        var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { size: ("small"), icon: ("Refresh"), circle: (true) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
        var __VLS_6;
        var __VLS_7 = {
            onClick: (__VLS_ctx.updateRefsh)
        };
        var __VLS_3;
        var __VLS_4;
        var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        var __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ 'onClick': {} }, { size: ("small"), icon: ("FullScreen"), circle: (true) })));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { size: ("small"), icon: ("FullScreen"), circle: (true) })], __VLS_functionalComponentArgsRest(__VLS_9), false));
        var __VLS_14;
        var __VLS_15 = {
            onClick: (__VLS_ctx.fullScreen)
        };
        var __VLS_11;
        var __VLS_12;
        var __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
        var __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.ElPopover;
        /** @type { [typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, ] } */
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ placement: ("bottom"), title: ("主题设置"), width: ((300)), trigger: ("hover"), }));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{ placement: ("bottom"), title: ("主题设置"), width: ((300)), trigger: ("hover"), }], __VLS_functionalComponentArgsRest(__VLS_17), false));
        var __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
        // @ts-ignore
        var __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({}));
        var __VLS_24 = __VLS_23.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_23), false));
        var __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ label: ("主题颜色"), }));
        var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([{ label: ("主题颜色"), }], __VLS_functionalComponentArgsRest(__VLS_29), false));
        var __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.ElColorPicker;
        /** @type { [typeof __VLS_components.ElColorPicker, typeof __VLS_components.elColorPicker, ] } */
        // @ts-ignore
        var __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34(__assign({ 'onChange': {} }, { modelValue: ((__VLS_ctx.color)), size: ("small"), showAlpha: (true), predefine: ((__VLS_ctx.predefineColors)) })));
        var __VLS_36 = __VLS_35.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { modelValue: ((__VLS_ctx.color)), size: ("small"), showAlpha: (true), predefine: ((__VLS_ctx.predefineColors)) })], __VLS_functionalComponentArgsRest(__VLS_35), false));
        var __VLS_40;
        var __VLS_41 = {
            onChange: (__VLS_ctx.setColor)
        };
        var __VLS_37;
        var __VLS_38;
        var __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
        __VLS_nonNullable(__VLS_33.slots).default;
        var __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
        var __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        var __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("暗黑模式"), }));
        var __VLS_44 = __VLS_43.apply(void 0, __spreadArray([{ label: ("暗黑模式"), }], __VLS_functionalComponentArgsRest(__VLS_43), false));
        var __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign(__assign(__assign(__assign({ 'onChange': {} }, { modelValue: ((__VLS_ctx.dark)) }), { class: ("mt-2") }), { style: ({}) }), { inlinePrompt: (true), activeIcon: ("MoonNight"), inactiveIcon: ("Sunny") })));
        var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign({ 'onChange': {} }, { modelValue: ((__VLS_ctx.dark)) }), { class: ("mt-2") }), { style: ({}) }), { inlinePrompt: (true), activeIcon: ("MoonNight"), inactiveIcon: ("Sunny") })], __VLS_functionalComponentArgsRest(__VLS_49), false));
        var __VLS_54;
        var __VLS_55 = {
            onChange: (__VLS_ctx.changeDark)
        };
        var __VLS_51;
        var __VLS_52;
        var __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        __VLS_nonNullable(__VLS_47.slots).default;
        var __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        __VLS_nonNullable(__VLS_27.slots).default;
        var __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot = __VLS_nonNullable(__VLS_21.slots).reference;
            var __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ size: ("small"), icon: ("Setting"), circle: (true), }));
            var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([{ size: ("small"), icon: ("Setting"), circle: (true), }], __VLS_functionalComponentArgsRest(__VLS_57), false));
        }
        var __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.userStore.avatar)) }, { style: ({}) }));
        var __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
        /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ] } */
        // @ts-ignore
        var __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({}));
        var __VLS_64 = __VLS_63.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_63), false));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("el-dropdown-link") }));
        (__VLS_ctx.userStore.username);
        var __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68(__assign({ class: ("el-icon--right") })));
        var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([__assign({ class: ("el-icon--right") })], __VLS_functionalComponentArgsRest(__VLS_69), false));
        var __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ArrowDown;
        /** @type { [typeof __VLS_components.ArrowDown, typeof __VLS_components.arrowDown, ] } */
        // @ts-ignore
        var __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
        var __VLS_76 = __VLS_75.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_75), false));
        __VLS_nonNullable(__VLS_73.slots).default;
        var __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            var __VLS_thisSlot = __VLS_nonNullable(__VLS_67.slots).dropdown;
            var __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
            /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ] } */
            // @ts-ignore
            var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({}));
            var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_81), false));
            var __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
            // @ts-ignore
            var __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86(__assign({ 'onClick': {} })));
            var __VLS_88 = __VLS_87.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_87), false));
            var __VLS_92 = void 0;
            var __VLS_93 = {
                onClick: (__VLS_ctx.logout)
            };
            var __VLS_89 = void 0;
            var __VLS_90 = void 0;
            __VLS_nonNullable(__VLS_91.slots).default;
            var __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
            __VLS_nonNullable(__VLS_85.slots).default;
            var __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
        }
        var __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['el-dropdown-link'];
        __VLS_styleScopedClasses['el-icon--right'];
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
    var _a, defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, layOutSettingStore, userStore, $router, dark, updateRefsh, fullScreen, logout, color, predefineColors, changeDark, setColor, __VLS_fnComponent, __VLS_functionalComponentProps, __VLS_self;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, import('vue')];
            case 1:
                _a = _b.sent(), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
                layOutSettingStore = useLayOutSettingStore();
                userStore = useUserStore();
                $router = useRouter();
                dark = ref(false);
                updateRefsh = function () {
                    layOutSettingStore.refsh = !layOutSettingStore.refsh;
                };
                fullScreen = function () {
                    //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
                    var full = document.fullscreenElement;
                    //切换为全屏模式
                    if (!full) {
                        //文档根节点的方法requestFullscreen,实现全屏模式
                        document.documentElement.requestFullscreen();
                    }
                    else {
                        //变为不是全屏模式->退出全屏模式
                        document.exitFullscreen();
                    }
                };
                logout = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, userStore.userLogout()];
                            case 1:
                                _a.sent();
                                $router.push({ path: '/login' });
                                ElNotification({
                                    type: 'success',
                                    message: '退出登录成功',
                                });
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                ElNotification({
                                    type: 'error',
                                    message: '退出登录失败'
                                });
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                color = ref('');
                predefineColors = ref([
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577',
                ]);
                changeDark = function () {
                    //获取HTML根节点
                    var html = document.documentElement;
                    //判断HTML标签是否有类名dark
                    dark.value ? html.className = 'dark' : html.className = '';
                };
                setColor = function () {
                    //通知js修改根节点的样式对象的属性与属性值
                    var html = document.documentElement;
                    html.style.setProperty('--el-color-primary', color.value);
                };
                return [4 /*yield*/, import('vue')];
            case 2:
                __VLS_fnComponent = (_b.sent()).defineComponent({});
                ;
                ;
                return [4 /*yield*/, import('vue')];
            case 3:
                __VLS_self = (_b.sent()).defineComponent({
                    setup: function () {
                        return {
                            userStore: userStore,
                            dark: dark,
                            updateRefsh: updateRefsh,
                            fullScreen: fullScreen,
                            logout: logout,
                            color: color,
                            predefineColors: predefineColors,
                            changeDark: changeDark,
                            setColor: setColor,
                        };
                    },
                    name: "Setting"
                });
                return [4 /*yield*/, import('vue')];
            case 4: return [2 /*return*/, (_b.sent()).defineComponent({
                    setup: function () {
                        return {};
                    },
                    name: "Setting"
                })];
        }
    });
}); })();
