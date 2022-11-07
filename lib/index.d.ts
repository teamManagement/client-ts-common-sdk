export interface MenuItem {
    role?: "undo" | "redo" | "cut" | "copy" | "paste" | "pasteAndMatchStyle" | "delete" | "selectAll" | "reload" | "forceReload" | "toggleDevTools" | "resetZoom" | "zoomIn" | "zoomOut" | "toggleSpellChecker" | "togglefullscreen" | "window" | "minimize" | "close" | "help" | "about" | "services" | "hide" | "hideOthers" | "unhide" | "quit" | "showSubstitutions" | "toggleSmartQuotes" | "toggleSmartDashes" | "toggleTextReplacement" | "startSpeaking" | "stopSpeaking" | "zoom" | "front" | "appMenu" | "fileMenu" | "editMenu" | "viewMenu" | "shareMenu" | "recentDocuments" | "toggleTabBar" | "selectNextTab" | "selectPreviousTab" | "mergeAllWindows" | "clearRecentDocuments" | "moveTabToNewWindow" | "windowMenu";
    type?: "normal" | "separator" | "submenu" | "checkbox" | "radio";
    label?: string;
    sublabel?: string;
    toolTip?: string;
    icon?: string;
    enabled?: boolean;
    acceleratorWorksWhenHidden?: boolean;
    visible?: boolean;
    checked?: boolean;
    registerAccelerator?: boolean;
    submenu?: MenuItem[];
    click?: () => void;
    before?: string[];
    after?: string[];
    beforeGroupContaining?: string[];
    afterGroupContaining?: string[];
}
/**
 * 上下文菜单类接口
 */
export interface ContextMenu {
    /**
     * 获取菜单内部的选项
     */
    items(): MenuItem[] | undefined;
    /**
     * 在当前窗体上显示菜单
     */
    popup(): Promise<void>;
    /**
     * 主动触发菜单项的click事件
     * @param itemId 菜单项ID
     */
    click(itemId: string): void;
    /**
     * 菜单对象当前的ID
     */
    id(): string;
}
/**
 * 右键菜单
 */
export declare const contextmenu: {
    /**
     * 根据菜单项构建菜单对象
     * @param menuItems 菜单项
     * @param menuId 菜单ID
     * @returns 菜单对象
     */
    build(menuItems: MenuItem[], menuId?: string): ContextMenu;
    /**
     * 根据菜单项目清除菜单
     * @param id 菜单ID
     */
    clear(id: string): void;
    /**
     * 清空所有的上下文菜单
     */
    clearAll(): void;
};
