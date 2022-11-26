var _windows = window;
var _teamworkSdk = _windows.teamworkSDK;
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
    /**
     * 存储中是否存在key
     * @param key key
     */
    has: function (key) {
        return _storeSdk.has(key);
    },
    /**
     * 根据key删除存储中的数据
     * @param key 要删除的key
     */
    delete: function (key) {
        return _storeSdk.delete(key);
    },
    /**
     * 清空当前存储
     */
    clear: function () {
        return _storeSdk.clear();
    },
};
var _execSdk = _teamworkSdk.exec;
/**
 * 执行子程序
 */
export var exec = {
    /**
     * 根据命令名称查找命令所在的绝对路径
     * @param name 要查找的命令名称
     */
    lookPath: function (name) {
        return _execSdk.lookPath(name);
    },
    /**
     * 运行一个命令
     * @param cmd 要运行的命令
     * @param args 参数
     * @param options 选项
     * @returns 运行结果
     */
    run: function (cmd, args, options) {
        return _execSdk.run(cmd, args, options);
    },
};
var _proxySdk = _teamworkSdk.proxy;
/**
 * 代理相关
 */
export var proxy = {
    /**
     * 查看是否启用了443端口代理转发
     * @returns 是/否
     */
    isEnabled443: function () {
        return _proxySdk.isEnabled443();
    },
    /**
     * 启用443端口代理转发
     */
    enable443: function () {
        return _proxySdk.enable443();
    },
    /**
     * 禁用443端口代理转发
     */
    disable443: function () {
        return _proxySdk.disable443();
    },
};
var _cacheSdk = _teamworkSdk.cache;
var _cacheFileSdk = _cacheSdk.file;
/**
 * 缓存相关
 */
export var cache = {
    /**
     *
     * @param key key
     * @param value value
     * @param expire 有效期
     */
    set: function (key, value, expire) {
        return _cacheSdk.set(key, value, expire);
    },
    /**
     * 获取缓存的Value
     * @param key 缓存的KEY
     * @param defaultValue 默认值
     */
    get: function (key, defaultValue) {
        return _cacheSdk.get(key, defaultValue);
    },
    /**
     * 删除缓存
     * @param key 要删除的key
     */
    delete: function (key) {
        return _cacheSdk.delete(key);
    },
    /**
     * 清空缓存
     */
    clear: function () {
        return _cacheSdk.clear();
    },
    /**
     * 是否存在对应的缓存
     * @param key 缓存Key
     * @returns 是/否存在
     */
    has: function (key) {
        return _cacheSdk.has(key);
    },
    /**
     * 重新设置过期时间
     * @param key 缓存Key
     * @param expire 过期时间
     * @returns 是/否成功
     */
    delay: function (key, expire) {
        return _cacheSdk.delay(key, expire);
    },
    /**
     * 文件相关存储
     */
    file: {
        /**
         * 创建文件缓存
         * @param localPath 本地文件路径
         * @param expire 有效期(单位毫秒), 0: 默认10分钟， -1: 永不过期
         * @returns 缓存ID
         */
        store: function (localPath, expire) {
            return _cacheFileSdk.store(localPath, expire);
        },
        /**
         * 删除文件缓存
         * @param cacheId 文件缓存ID
         */
        delete: function (cacheId) {
            return _cacheFileSdk.delete(cacheId);
        },
        /**
         * 清空文件缓存
         */
        clear: function () {
            return _cacheFileSdk.clear();
        },
        /**
         * 获取文件下载路径
         * @param cacheId 缓存Id
         * @returns 文件下载路径
         */
        getDownloadUrl: function (cacheId) {
            return _cacheFileSdk.getDownloadUrl(cacheId);
        },
    },
};
var _hostsSdk = _teamworkSdk.hosts;
/**
 * hosts相关
 */
export var hosts = {
    /**
     * 向host文件中添加行
     * @param line 要添加的行
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
    /**
     * 删除包含对应名称的dns或ip所在的行
     * @param dnsOrIp 要删除的dns或ip
     */
    delete: function (dnsOrIp) {
        return _hostsSdk.delete(dnsOrIp);
    },
};
/**
 * 应用类别
 */
export var AppType;
(function (AppType) {
    /**
     * 远程WEB
     */
    AppType[AppType["REMOTE_WEB"] = 0] = "REMOTE_WEB";
    /**
     * 本地WEB
     */
    AppType[AppType["LOCAL"] = 1] = "LOCAL";
})(AppType || (AppType = {}));
/**
 * 图标类型
 */
export var IconType;
(function (IconType) {
    /**
     * URL路径
     */
    IconType[IconType["URL"] = 0] = "URL";
    /**
     * iconfont
     */
    IconType[IconType["ICON_FONT"] = 1] = "ICON_FONT";
})(IconType || (IconType = {}));
var _currentSdk = _teamworkSdk.current;
/**
 * 当前信息
 */
export var current = {
    /**
     * 当前的应用信息
     */
    appInfo: _currentSdk.appInfo,
    /**
     * 当前登录的用户
     */
    userInfo: _currentSdk.userInfo,
};
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
/**
 * 性别
 */
export var Sex;
(function (Sex) {
    /**
     * 男
     */
    Sex[Sex["MAN"] = 1] = "MAN";
    /**
     * 女
     */
    Sex[Sex["WOMAN"] = 2] = "WOMAN";
})(Sex || (Sex = {}));
