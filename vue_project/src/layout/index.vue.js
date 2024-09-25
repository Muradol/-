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
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import Tabbar from './tabbar/index.vue';
import useUserStore from "@/store/modules/user";
import { useRoute } from "vue-router";
import useLayOutSettingStore from "@/store/modules/setting";
export default await (function () { return __awaiter(void 0, void 0, void 0, function () {
    function __VLS_template() {
        var __VLS_ctx = {};
        var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
        var __VLS_components;
        var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
        var __VLS_directives;
        var __VLS_styleScopedClasses;
        __VLS_styleScopedClasses['fold'];
        __VLS_styleScopedClasses['fold'];
        // CSS variable injection 
        // CSS variable injection end 
        var __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("layout_container") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("layout_slider") }, { class: (({ fold: __VLS_ctx.LayOutSettingStore.fold })) }));
        // @ts-ignore
        [Logo, Logo,];
        // @ts-ignore
        var __VLS_0 = __VLS_asFunctionalComponent(Logo, new Logo({}));
        var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
        var __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
        /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
        // @ts-ignore
        var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ class: ("scrollbar") })));
        var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ class: ("scrollbar") })], __VLS_functionalComponentArgsRest(__VLS_6), false));
        var __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
        /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
        // @ts-ignore
        var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ collapse: ((__VLS_ctx.LayOutSettingStore.fold)), defaultActive: ((__VLS_ctx.$route.path)), backgroundColor: ("#001529"), textColor: ("white"), }));
        var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{ collapse: ((__VLS_ctx.LayOutSettingStore.fold)), defaultActive: ((__VLS_ctx.$route.path)), backgroundColor: ("#001529"), textColor: ("white"), }], __VLS_functionalComponentArgsRest(__VLS_12), false));
        // @ts-ignore
        [Menu, Menu,];
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(Menu, new Menu({ menuList: ((__VLS_ctx.userStore.menuRoutes)), }));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{ menuList: ((__VLS_ctx.userStore.menuRoutes)), }], __VLS_functionalComponentArgsRest(__VLS_17), false));
        __VLS_nonNullable(__VLS_16.slots).default;
        var __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
        __VLS_nonNullable(__VLS_10.slots).default;
        var __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("layout_tabbar") }, { class: (({ fold: !!__VLS_ctx.LayOutSettingStore.fold })) }));
        // @ts-ignore
        [Tabbar, Tabbar,];
        // @ts-ignore
        var __VLS_22 = __VLS_asFunctionalComponent(Tabbar, new Tabbar({}));
        var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_22), false));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("layout_main") }, { class: (({ fold: !!__VLS_ctx.LayOutSettingStore.fold })) }));
        // @ts-ignore
        [Main, Main,];
        // @ts-ignore
        var __VLS_27 = __VLS_asFunctionalComponent(Main, new Main({}));
        var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_27), false));
        __VLS_styleScopedClasses['layout_container'];
        __VLS_styleScopedClasses['layout_slider'];
        __VLS_styleScopedClasses['fold'];
        __VLS_styleScopedClasses['scrollbar'];
        __VLS_styleScopedClasses['layout_tabbar'];
        __VLS_styleScopedClasses['fold'];
        __VLS_styleScopedClasses['layout_main'];
        __VLS_styleScopedClasses['fold'];
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
    var _a, defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, userStore, $route, LayOutSettingStore, __VLS_fnComponent, __VLS_functionalComponentProps, __VLS_self;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, import('vue')];
            case 1:
                _a = _b.sent(), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
                userStore = useUserStore();
                $route = useRoute();
                LayOutSettingStore = useLayOutSettingStore();
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
                            Logo: Logo,
                            Menu: Menu,
                            Main: Main,
                            Tabbar: Tabbar,
                            userStore: userStore,
                            $route: $route,
                            LayOutSettingStore: LayOutSettingStore,
                        };
                    },
                    name: "Layout"
                });
                return [4 /*yield*/, import('vue')];
            case 4: return [2 /*return*/, (_b.sent()).defineComponent({
                    setup: function () {
                        return {};
                    },
                    name: "Layout"
                })];
        }
    });
}); })();
