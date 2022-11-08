var _windows = window;
var _teamworkSdk = _windows.teamworkSDK;
//#endregion
var _contextmenuSdk = _teamworkSdk.contextmenu;
/**
 * 右键菜单
 */
export var contextmenu = {
    /**
     * 根据菜单项构建菜单对象
     * @param menuItems 菜单项
     * @param menuId 菜单ID
     * @returns 菜单对象
     */
    build: function (menuItems, menuId) {
        return _contextmenuSdk.build(menuItems, menuId);
    },
    /**
     * 根据菜单项目清除菜单
     * @param id 菜单ID
     */
    clear: function (id) {
        return _contextmenuSdk.clear(id);
    },
    /**
     * 清空所有的上下文菜单
     */
    clearAll: function () {
        return _contextmenuSdk.clearAll();
    },
};
var _storeSdk = _teamworkSdk.store;
/**
 * 存储相关
 */
export var store = {
    /**
     * 存储一个数据
     * @param key 要设置的key
     * @param val 要设置的Value
     */
    set: function (key, val) {
        return _storeSdk.set(key, val);
    },
    /**
     * 从存储中根据key获取一个value, 如果value不存在则返回默认值
     * @param key 要获取的key
     * @param defaultValue 默认值
     * @returns 获取到的value
     */
    get: function (key, defaultValue) {
        return _storeSdk.get(key, defaultValue);
    },
};
/**
 * hosts相关
 */
var _hostsSdk = _teamworkSdk.hosts;
export var hosts = {
    /**
    * 向host文件中添加行
    * @param lines 要添加的行
    */
    add: function () {
        var line = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            line[_i] = arguments[_i];
        }
        return _hostsSdk.add(line);
    },
    /**
     * 向host文件中添加行
     * @param line 要添加的行
     */
    addToHeader: function () {
        var line = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            line[_i] = arguments[_i];
        }
        return _hostsSdk.addToHeader(line);
    },
    /**
     * 导出内容
     * @returns hosts内容
     */
    export: function () {
        return _hostsSdk.export();
    },
    /**
     * 覆盖原有的hosts内容
     * @param newHostsContent 新的hosts文件内容
     */
    cover: function (newHostsContent) {
        return _hostsSdk.cover(newHostsContent);
    },
    delete: function (dnsOrIp) {
        return _hostsSdk.delete(dnsOrIp);
    }
};
