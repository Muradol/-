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
        //标题组件
        title: {
            //主标题
            text: '品牌排行',
            link: 'http://www.baidu.com',
            //标题的位置
            left: '50%',
            //主标题文字样式
            textStyle: {
                color: 'white',
                fontSize: 25
            },
            //子标题
            subtext: "各大品牌排行",
            //子标题的样式
            subtextStyle: {
                color: 'white',
                fontSize: 16
            }
        },
        //x|y轴组件
        xAxis: {
            type: 'category', //图形图标在x轴均匀分布展示
            data: ['巴黎世家', 'Lancôme', 'Chanel', 'Prada', '索尼', '苹果'] // X轴标签
        },
        yAxis: {},
        //布局组件
        grid: {
            left: 20,
            bottom: 20,
            right: 20
        },
        //系列:决定显示图形图标是哪一种的
        series: [
            {
                type: 'bar',
                data: [10, 20, 30, 40, 50, 60, 90],
                //柱状图的:图形上的文本标签，
                label: {
                    show: true,
                    //文字的位置
                    position: 'insideTop',
                    //文字颜色
                    color: 'white'
                },
                backgroundStyle: {
                    //底部背景的颜色
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        global: false // 缺省为 false
                    }
                },
                //柱条的样式
                itemStyle: {
                    borderRadius: [10, 10, 0, 0],
                    //柱条颜色
                    color: function (data) {
                        //给每一个柱条这是背景颜色
                        var arr = ['red', 'orange', 'yellowgreen', 'green', 'purple', 'hotpink', 'skyblue'];
                        return arr[data.dataIndex];
                    }
                }
            },
            {
                type: 'line',
                data: [10, 20, 30, 40, 50, 60, 90],
                smooth: true, //平滑曲线
            },
            {
                type: 'bar',
                data: [10, 20, 30, 40, 50, 60, 70],
                //柱状图的:图形上的文本标签，
                label: {
                    show: true,
                    //文字的位置
                    position: 'insideTop',
                    //文字颜色
                    color: 'yellowgreen'
                },
                //是否显示背景颜色
                backgroundStyle: {
                    //底部背景的颜色
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        global: false // 缺省为 false
                    }
                },
                //柱条的样式
                itemStyle: {
                    borderRadius: [10, 10, 0, 0],
                    //柱条颜色
                    color: function (data) {
                        //给每一个柱条这是背景颜色
                        var arr = ['red', 'orange', 'yellowgreen', 'green', 'purple', 'hotpink', 'skyblue'];
                        return arr[data.dataIndex];
                    }
                }
            },
        ],
        tooltip: {
            backgroundColor: 'rgba(50,50,50,0.7)'
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("box6") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../../images/dataScreen-title.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("charts") }, { ref: ('charts') }));
    // @ts-ignore navigation for `const charts = ref()`
    __VLS_ctx.charts;
    __VLS_styleScopedClasses['box6'];
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
