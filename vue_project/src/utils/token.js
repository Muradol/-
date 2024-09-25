//封装本地存储数据与读取数据方法
//存储数据
export var SET_TOKEN = function (token) {
    localStorage.setItem("TOKEN", token);
};
//本地存储获取数据
export var GET_TOKEN = function () {
    return localStorage.getItem('TOKEN');
};
//本地存储删除获取数据
export var REMOVE_TOKEN = function () {
    localStorage.removeItem('TOKEN');
};
