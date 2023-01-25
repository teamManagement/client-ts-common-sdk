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
