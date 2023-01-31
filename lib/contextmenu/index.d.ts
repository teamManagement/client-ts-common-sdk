/**
 * 菜单项
 */
export interface MenuItem {
    /**
     * 单击事件
     */
    click?: () => void;
    /**
     * 菜单类型
     */
    type?: "normal" | "separator" | "submenu";
    /**
     * 标题
     */
    label?: string;
    /**
     * 子标题
     */
    sublabel?: string;
    /**
     * 提示
     */
    toolTip?: string;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 是否启用
     */
    enabled?: boolean;
    /**
     * 是否可见
     */
    visible?: boolean;
    /**
     * 子菜单项
     */
    submenu?: MenuItem[];
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
export interface ContextmenuApi {
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
}
/**
 * 右键菜单
 */
export declare const contextmenu: ContextmenuApi;
