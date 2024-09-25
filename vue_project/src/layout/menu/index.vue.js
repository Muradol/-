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
import { useRouter } from "vue-router";
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
        for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.menuList)); _i < _a.length; _i++) {
            var _b = _a[_i], item = _b[0], index = _b[1];
            (item.path);
            if (!item.children) {
                if (!item.meta.hidden) {
                    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
                    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
                    // @ts-ignore
                    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onClick': {} }, { index: ((item.path)) })));
                    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { index: ((item.path)) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
                    var __VLS_6 = void 0;
                    var __VLS_7 = {
                        onClick: (__VLS_ctx.goRoute)
                    };
                    var __VLS_3 = void 0;
                    var __VLS_4 = void 0;
                    var __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
                    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
                    // @ts-ignore
                    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
                    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_9), false));
                    var __VLS_14 = ((item.meta.icon));
                    // @ts-ignore
                    var __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
                    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_15), false));
                    __VLS_nonNullable(__VLS_13.slots).default;
                    var __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
                    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                    {
                        var __VLS_thisSlot = __VLS_nonNullable(__VLS_5.slots).title;
                        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                        (item.meta.title);
                    }
                    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
                }
            }
            if (item.children && item.children.length == 1) {
                if (!item.children[0].meta.hidden) {
                    var __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
                    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
                    // @ts-ignore
                    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ 'onClick': {} }, { index: ((item.children[0].path)) })));
                    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { index: ((item.children[0].path)) })], __VLS_functionalComponentArgsRest(__VLS_21), false));
                    var __VLS_26 = void 0;
                    var __VLS_27 = {
                        onClick: (__VLS_ctx.goRoute)
                    };
                    var __VLS_23 = void 0;
                    var __VLS_24 = void 0;
                    var __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
                    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
                    // @ts-ignore
                    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({}));
                    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_29), false));
                    var __VLS_34 = ((item.children[0].meta.icon));
                    // @ts-ignore
                    var __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({}));
                    var __VLS_36 = __VLS_35.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_35), false));
                    __VLS_nonNullable(__VLS_33.slots).default;
                    var __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
                    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                    {
                        var __VLS_thisSlot = __VLS_nonNullable(__VLS_25.slots).title;
                        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                        (item.children[0].meta.title);
                    }
                    var __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
            }
            if (item.children && item.children.length > 1) {
                var __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElSubMenu;
                /** @type { [typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, ] } */
                // @ts-ignore
                var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ index: ((item.path)), }));
                var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([{ index: ((item.path)), }], __VLS_functionalComponentArgsRest(__VLS_41), false));
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    var __VLS_thisSlot = __VLS_nonNullable(__VLS_45.slots).title;
                    var __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
                    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
                    // @ts-ignore
                    var __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({}));
                    var __VLS_48 = __VLS_47.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_47), false));
                    var __VLS_52 = ((item.meta.icon));
                    // @ts-ignore
                    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({}));
                    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_53), false));
                    __VLS_nonNullable(__VLS_51.slots).default;
                    var __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                    (item.meta.title);
                }
                var __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.Menu;
                /** @type { [typeof __VLS_components.Menu, typeof __VLS_components.Menu, ] } */
                // @ts-ignore
                var __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ menuList: ((item.children)), }));
                var __VLS_60 = __VLS_59.apply(void 0, __spreadArray([{ menuList: ((item.children)), }], __VLS_functionalComponentArgsRest(__VLS_59), false));
                var __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
            }
        }
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
    var _a, defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, __VLS_props, $router, goRoute, __VLS_fnComponent, __VLS_functionalComponentProps, __VLS_self;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, import('vue')];
            case 1:
                _a = _b.sent(), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
                __VLS_props = defineProps(['menuList']);
                $router = useRouter();
                goRoute = function (vc) {
                    //路由跳转
                    $router.push(vc.index);
                };
                return [4 /*yield*/, import('vue')];
            case 2:
                __VLS_fnComponent = (_b.sent()).defineComponent({
                    props: ['menuList'],
                });
                ;
                ;
                return [4 /*yield*/, import('vue')];
            case 3:
                __VLS_self = (_b.sent()).defineComponent({
                    setup: function () {
                        return {
                            goRoute: goRoute,
                        };
                    },
                    props: ['menuList'],
                    name: 'Menu'
                });
                return [4 /*yield*/, import('vue')];
            case 4: return [2 /*return*/, (_b.sent()).defineComponent({
                    setup: function () {
                        return {};
                    },
                    props: ['menuList'],
                    name: 'Menu'
                })];
        }
    });
}); })();
