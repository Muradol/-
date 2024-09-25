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
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var __VLS_props = defineProps({
    //xlink:href属性值前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    //提供使用的图标名字
    name: String,
    //接受父组件传递颜色
    color: {
        type: String,
        default: ''
    },
    //接受父组件传递过来的图标的高宽度
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
});
var __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        //xlink:href属性值前缀
        prefix: {
            type: String,
            default: '#icon-'
        },
        //提供使用的图标名字
        name: String,
        //接受父组件传递颜色
        color: {
            type: String,
            default: ''
        },
        //接受父组件传递过来的图标的高宽度
        width: {
            type: String,
            default: '16px'
        },
        height: {
            type: String,
            default: '16px'
        }
    },
});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(__assign({ style: (({ width: __VLS_ctx.width, height: __VLS_ctx.height })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.use, __VLS_intrinsicElements.use)({ "xlink:href": ((__VLS_ctx.prefix + __VLS_ctx.name)), fill: ((__VLS_ctx.color)), });
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
;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    props: {
        //xlink:href属性值前缀
        prefix: {
            type: String,
            default: '#icon-'
        },
        //提供使用的图标名字
        name: String,
        //接受父组件传递颜色
        color: {
            type: String,
            default: ''
        },
        //接受父组件传递过来的图标的高宽度
        width: {
            type: String,
            default: '16px'
        },
        height: {
            type: String,
            default: '16px'
        }
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    props: {
        //xlink:href属性值前缀
        prefix: {
            type: String,
            default: '#icon-'
        },
        //提供使用的图标名字
        name: String,
        //接受父组件传递颜色
        color: {
            type: String,
            default: ''
        },
        //接受父组件传递过来的图标的高宽度
        width: {
            type: String,
            default: '16px'
        },
        height: {
            type: String,
            default: '16px'
        }
    },
});
;
