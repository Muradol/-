export var constantRoute = [
    {
        path: '/login',
        component: function () { return import('@/views/login/index.vue'); },
        name: 'login',
        meta: {
            title: '登录',
            hidden: true,
            icon: 'Promotion',
        },
    },
    {
        path: '/',
        component: function () { return import('@/layout/index.vue'); },
        name: 'layout',
        meta: {
            title: '',
            hidden: false,
            icon: '',
        },
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: function () { return import('@/views/home/index.vue'); },
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'HomeFilled',
                },
            },
        ],
    },
    {
        path: '/404',
        component: function () { return import('@/views/404/index.vue'); },
        name: '404',
        meta: {
            title: '404',
            hidden: true,
            icon: 'DocumentDelete',
        },
    },
    {
        path: '/screen',
        component: function () { return import('@/views/screen/index.vue'); },
        name: 'Screen',
        meta: {
            hidden: false,
            title: '数据大屏',
            icon: 'Platform',
        },
    },
];
export var asnycRoute = [
    {
        path: '/acl',
        component: function () { return import('@/layout/index.vue'); },
        name: 'Acl',
        meta: {
            title: '权限管理',
            icon: 'Lock',
        },
        redirect: '/acl/user',
        children: [
            {
                path: '/acl/user',
                component: function () { return import('@/views/acl/user/index.vue'); },
                name: 'User',
                meta: {
                    title: '用户管理',
                    icon: 'User',
                },
            },
            {
                path: '/acl/role',
                component: function () { return import('@/views/acl/role/index.vue'); },
                name: 'Role',
                meta: {
                    title: '角色管理',
                    icon: 'UserFilled',
                },
            },
            {
                path: '/acl/permission',
                component: function () { return import('@/views/acl/permission/index.vue'); },
                name: 'Permission',
                meta: {
                    title: '菜单管理',
                    icon: 'Monitor',
                },
            },
        ],
    },
    {
        path: '/product',
        component: function () { return import('@/layout/index.vue'); },
        name: 'Product',
        meta: {
            title: '商品管理',
            icon: 'Goods',
        },
        redirect: '/product/trademark',
        children: [
            {
                path: '/product/trademark',
                component: function () { return import('@/views/product/trademark/index.vue'); },
                name: 'Trademark',
                meta: {
                    title: '品牌管理',
                    icon: 'ShoppingCartFull',
                },
            },
            {
                path: '/product/attr',
                component: function () { return import('@/views/product/attr/index.vue'); },
                name: 'Attr',
                meta: {
                    title: '属性管理',
                    icon: 'ChromeFilled',
                },
            },
            {
                path: '/product/spu',
                component: function () { return import('@/views/product/spu/index.vue'); },
                name: 'Spu',
                meta: {
                    title: 'SPU管理',
                    icon: 'Calendar',
                },
            },
            {
                path: '/product/sku',
                component: function () { return import('@/views/product/sku/index.vue'); },
                name: 'Sku',
                meta: {
                    title: 'SKU管理',
                    icon: 'Orange',
                },
            },
        ],
    },
];
// 任意路由
export var anyRoute = {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
        title: '任意路由',
        hidden: true,
        icon: 'DataLine',
    },
};
