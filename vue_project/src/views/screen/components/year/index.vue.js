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
//获取DOM节点
var charts = ref();
//组件挂载完毕
onMounted(function () {
    //一个容器可以同时展示多种类型的图形图标
    var mychart = echarts.init(charts.value);
    //设置配置项
    mychart.setOption({
        title: {
            text: '散点图',
            left: '40%',
            textStyle: {
                color: 'white'
            }
        },
        xAxis: {
            type: 'category',
            show: true,
        },
        yAxis: {
            show: false
        },
        grid: {
            left: 20,
            top: 20,
            right: 0,
            bottom: 20
        },
        series: {
            type: 'scatter',
            data: [33, 88, 21, 9, 88, 234, 113, 1231, 674, 3, 88, 33, 21, 888, 3332, 313, 123, 5, 657, 7],
            //标记图形设置
            symbol: 'diamond',
            symbolSize: 16,
            //图文标签
            label: {
                show: true,
                position: 'top',
                color: 'red'
            },
            //散点图标记的颜色
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'blue' // 100% 处的颜色
                        }],
                    global: false // 缺省为 false
                }
            }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("box7") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../../images/dataScreen-title.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("charts") }, { ref: ("charts") }));
    // @ts-ignore navigation for `const charts = ref()`
    __VLS_ctx.charts;
    __VLS_styleScopedClasses['box7'];
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
