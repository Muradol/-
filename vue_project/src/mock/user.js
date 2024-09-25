// 用户数据
function createUserList() {
    return [
        {
            userId: 1,
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'admin',
            password: '111111',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token',
        },
        {
            userId: 2,
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'system',
            password: '111111',
            desc: '系统管理员',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token',
        },
    ];
}
export default [
    // 用户登录接口
    {
        url: '/api/user/login', // 请求地址
        method: 'post', // 请求方式
        response: function (_a) {
            var body = _a.body;
            // 获取请求体携带过来的用户名与密码
            var username = body.username, password = body.password;
            // 调用获取用户信息函数, 用于判断是否有此用户
            var checkUser = createUserList().find(function (item) { return item.username === username && item.password === password; });
            // 没有用户返回失败信息
            if (!checkUser) {
                return { code: 201, data: { message: '账号或者密码不正确' } };
            }
            // 如果有返回成功信息
            var token = checkUser.token;
            return { code: 200, data: { token: token } };
        },
    },
    // 获取用户信息
    {
        url: '/api/user/info',
        method: 'get',
        response: function (request) {
            // 获取请求头携带token
            var token = request.headers.token;
            // 查看用户信息是否包含有此 token 用户
            var checkUser = createUserList().find(function (item) { return item.token === token; });
            // 没有返回失败的信息
            if (!checkUser) {
                return { code: 201, data: { message: '获取用户信息失败' } };
            }
            // 如果有返回成功信息
            return { code: 200, data: { checkUser: checkUser } };
        },
    },
];
