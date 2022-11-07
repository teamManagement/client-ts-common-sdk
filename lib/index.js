var _windows = window;
//#endregion
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
        return _windows.teamworkSDK.contextmenu.build(menuItems, menuId);
    },
    /**
     * 根据菜单项目清除菜单
     * @param id 菜单ID
     */
    clear: function (id) {
        return _windows.teamworkSDK.contextmenu.clear(id);
    },
    /**
     * 清空所有的上下文菜单
     */
    clearAll: function () { },
};
