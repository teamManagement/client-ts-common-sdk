const _windows = window as any;
const _teamworkSdk = _windows.teamworkSDK;



//#region electronApi代理
export interface MenuItem {
  role?:
    | "undo"
    | "redo"
    | "cut"
    | "copy"
    | "paste"
    | "pasteAndMatchStyle"
    | "delete"
    | "selectAll"
    | "reload"
    | "forceReload"
    | "toggleDevTools"
    | "resetZoom"
    | "zoomIn"
    | "zoomOut"
    | "toggleSpellChecker"
    | "togglefullscreen"
    | "window"
    | "minimize"
    | "close"
    | "help"
    | "about"
    | "services"
    | "hide"
    | "hideOthers"
    | "unhide"
    | "quit"
    | "showSubstitutions"
    | "toggleSmartQuotes"
    | "toggleSmartDashes"
    | "toggleTextReplacement"
    | "startSpeaking"
    | "stopSpeaking"
    | "zoom"
    | "front"
    | "appMenu"
    | "fileMenu"
    | "editMenu"
    | "viewMenu"
    | "shareMenu"
    | "recentDocuments"
    | "toggleTabBar"
    | "selectNextTab"
    | "selectPreviousTab"
    | "mergeAllWindows"
    | "clearRecentDocuments"
    | "moveTabToNewWindow"
    | "windowMenu";
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

//#endregion

const _contextmenuSdk = _teamworkSdk.contextmenu;
/**
 * 右键菜单
 */
export const contextmenu = {
  /**
   * 根据菜单项构建菜单对象
   * @param menuItems 菜单项
   * @param menuId 菜单ID
   * @returns 菜单对象
   */
  build(menuItems: MenuItem[], menuId?: string): ContextMenu {
    return _contextmenuSdk.build(menuItems, menuId);
  },
  /**
   * 根据菜单项目清除菜单
   * @param id 菜单ID
   */
  clear(id: string): void {
    return _contextmenuSdk.clear(id);
  },
  /**
   * 清空所有的上下文菜单
   */
  clearAll(): void {
    return _contextmenuSdk.clearAll();
  },
};

const _storeSdk = _teamworkSdk.store;
/**
 * 存储相关
 */
export const store = {
  /**
   * 存储一个数据
   * @param key 要设置的key
   * @param val 要设置的Value
   */
  set(key: string, val: any): Promise<void> {
    return _storeSdk.set(key, val);
  },
  /**
   * 从存储中根据key获取一个value, 如果value不存在则返回默认值
   * @param key 要获取的key
   * @param defaultValue 默认值
   * @returns 获取到的value
   */
  get<T>(key: string, defaultValue?: any): Promise<T> {
    return _storeSdk.get(key, defaultValue);
  },
};


/**
 * hosts相关
 */

const _hostsSdk = _teamworkSdk.hosts;

export const hosts={
   /**
   * 向host文件中添加行
   * @param lines 要添加的行
   */
   add(...line: string[]): Promise<void> {
    return _hostsSdk.add(line)
  },
  /**
   * 向host文件中添加行
   * @param line 要添加的行
   */
  addToHeader(...line: string[]): Promise<void> {
    return _hostsSdk.addToHeader(line)
  },
  /**
   * 导出内容
   * @returns hosts内容
   */
  export(): Promise<string> {
    return _hostsSdk.export()
  },
  /**
   * 覆盖原有的hosts内容
   * @param newHostsContent 新的hosts文件内容
   */
  cover(newHostsContent: string): Promise<void> {
    return  _hostsSdk.cover(newHostsContent)
  },
  delete(dnsOrIp: string): Promise<void> {
    return _hostsSdk.delete(dnsOrIp)
  }
}
