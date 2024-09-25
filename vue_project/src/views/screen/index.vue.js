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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ref, onMounted } from "vue";
//引入顶部的子组件
import Top from './components/top/index.vue';
//引入左侧三个子组件
import Tourist from './components/tourist/index.vue';
import Sex from './components/sex/index.vue';
import Age from './components/age/index.vue';
//引入中间两个子组件
import Map from './components/map/index.vue';
import Line from './components/line/index.vue';
//引入右侧三个子组件
import Rank from './components/rank/index.vue';
import Year from './components/year/index.vue';
import Counter from './components/couter/index.vue';
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
//获取数据大屏展示内容盒子的DOM元素
var screen = ref();
onMounted(function () {
    screen.value.style.transform = "scale(".concat(getScale(), ") translate(-50%,-50%)");
});
//定义大屏缩放比例
function getScale(w, h) {
    if (w === void 0) { w = 1920; }
    if (h === void 0) { h = 1080; }
    var ww = window.innerWidth / w;
    var wh = window.innerHeight / h;
    return ww < wh ? ww : wh;
}
//监听视口变化
window.onresize = function () {
    screen.value.style.transform = "scale(".concat(getScale(), ") translate(-50%,-50%)");
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("screen") }, { ref: ("screen") }));
    // @ts-ignore navigation for `const screen = ref()`
    __VLS_ctx.screen;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("top") }));
    // @ts-ignore
    [Top,];
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(Top, new Top({}));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bottom") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("left") }));
    // @ts-ignore
    [Tourist, Tourist,];
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(Tourist, new Tourist(__assign({ class: ("tourist") })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: ("tourist") })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    // @ts-ignore
    [Sex, Sex,];
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(Sex, new Sex(__assign({ class: ("sex") })));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ class: ("sex") })], __VLS_functionalComponentArgsRest(__VLS_10), false));
    // @ts-ignore
    [Age, Age,];
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent(Age, new Age(__assign({ class: ("age") })));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([__assign({ class: ("age") })], __VLS_functionalComponentArgsRest(__VLS_15), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("center") }));
    // @ts-ignore
    [Map, Map,];
    // @ts-ignore
    var __VLS_20 = __VLS_asFunctionalComponent(Map, new Map(__assign({ class: ("map") })));
    var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([__assign({ class: ("map") })], __VLS_functionalComponentArgsRest(__VLS_20), false));
    // @ts-ignore
    [Line, Line,];
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(Line, new Line(__assign({ class: ("line") })));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ class: ("line") })], __VLS_functionalComponentArgsRest(__VLS_25), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("right") }));
    // @ts-ignore
    [Rank, Rank,];
    // @ts-ignore
    var __VLS_30 = __VLS_asFunctionalComponent(Rank, new Rank(__assign({ class: ("rank") })));
    var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([__assign({ class: ("rank") })], __VLS_functionalComponentArgsRest(__VLS_30), false));
    // @ts-ignore
    [Year, Year,];
    // @ts-ignore
    var __VLS_35 = __VLS_asFunctionalComponent(Year, new Year(__assign({ class: ("year") })));
    var __VLS_36 = __VLS_35.apply(void 0, __spreadArray([__assign({ class: ("year") })], __VLS_functionalComponentArgsRest(__VLS_35), false));
    // @ts-ignore
    [Counter, Counter,];
    // @ts-ignore
    var __VLS_40 = __VLS_asFunctionalComponent(Counter, new Counter(__assign({ class: ("count") })));
    var __VLS_41 = __VLS_40.apply(void 0, __spreadArray([__assign({ class: ("count") })], __VLS_functionalComponentArgsRest(__VLS_40), false));
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['screen'];
    __VLS_styleScopedClasses['top'];
    __VLS_styleScopedClasses['bottom'];
    __VLS_styleScopedClasses['left'];
    __VLS_styleScopedClasses['tourist'];
    __VLS_styleScopedClasses['sex'];
    __VLS_styleScopedClasses['age'];
    __VLS_styleScopedClasses['center'];
    __VLS_styleScopedClasses['map'];
    __VLS_styleScopedClasses['line'];
    __VLS_styleScopedClasses['right'];
    __VLS_styleScopedClasses['rank'];
    __VLS_styleScopedClasses['year'];
    __VLS_styleScopedClasses['count'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {
        "screen": __VLS_nativeElements['div'],
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
            Top: Top,
            Tourist: Tourist,
            Sex: Sex,
            Age: Age,
            Map: Map,
            Line: Line,
            Rank: Rank,
            Year: Year,
            Counter: Counter,
            screen: screen,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
