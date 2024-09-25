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
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var charts = ref();
//组件挂载完毕初始化图形图标
onMounted(function () {
    var mychart = echarts.init(charts.value);
    //设置配置项
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            right: 30,
            top: 40,
            orient: 'vertical', //图例组件方向的设置
            textStyle: {
                color: 'white',
                fontSize: 14
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: 'white'
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '20岁~30岁' },
                    { value: 735, name: '16岁~20岁' },
                    { value: 580, name: '30岁~35岁' },
                    { value: 484, name: '35岁~45岁' },
                    { value: 300, name: '45岁以上' }
                ]
            }
        ],
        //调整图形图标的位置
        grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    };
    mychart.setOption(option);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("box2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../../images/dataScreen-title.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("charts") }, { ref: ("charts") }));
    // @ts-ignore navigation for `const charts = ref()`
    __VLS_ctx.charts;
    __VLS_styleScopedClasses['box2'];
    __VLS_styleScopedClasses['title'];
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
