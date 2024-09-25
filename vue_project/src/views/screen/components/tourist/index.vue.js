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
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
import 'echarts-liquidfill';
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var people = ref('215908人');
//水球图拓展插件
//获取节点
var charts = ref();
onMounted(function () {
    //获取echarts类的实例
    var mycharts = echarts.init(charts.value);
    //设置实例的配置项
    mycharts.setOption({
        //标题组件
        title: {
            text: '水球图'
        },
        //x|y轴组件
        xAxis: {},
        yAxis: {},
        //系列:决定你展示什么样的图形图标
        series: {
            type: 'liquidFill', //系列
            data: [0.6, 0.4, 0.2], //展示的数据
            waveAnimation: true, //动画
            animationDuration: 3,
            animationDurationUpdate: 0,
            radius: '70%', //半径
            outline: {
                show: true,
                borderDistance: 8,
                itemStyle: {
                    color: 'skyblue',
                    borderColor: '#294D99',
                    borderWidth: 8,
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.25)'
                }
            },
        },
        //布局组件
        grid: {
            left: -1,
            right: 0,
            top: 0,
            bottom: 0
        }
    });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("box") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("top") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("bg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("right") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("number") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.people)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((index)), });
        (item);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("charts") }, { ref: ("charts") }));
    // @ts-ignore navigation for `const charts = ref()`
    __VLS_ctx.charts;
    __VLS_styleScopedClasses['box'];
    __VLS_styleScopedClasses['top'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['bg'];
    __VLS_styleScopedClasses['right'];
    __VLS_styleScopedClasses['number'];
    __VLS_styleScopedClasses['charts'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {
        "charts": __VLS_nativeElements['div'],
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
            people: people,
            charts: charts,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
