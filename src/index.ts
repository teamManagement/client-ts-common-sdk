const _windows = window as any;
const _teamworkSdk = _windows.teamworkSDK;

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
  /**
   * 存储中是否存在key
   * @param key key
   */
  has(key: string): Promise<boolean> {
    return _storeSdk.has(key);
  },
  /**
   * 根据key删除存储中的数据
   * @param key 要删除的key
   */
  delete(key: string): Promise<void> {
    return _storeSdk.delete(key);
  },
  /**
   * 清空当前存储
   */
  clear(): Promise<void> {
    return _storeSdk.clear();
  },
};

const _execSdk = _teamworkSdk.exec;
/**
 * 执行子程序
 */
export const exec = {
  /**
   * 根据命令名称查找命令所在的绝对路径
   * @param name 要查找的命令名称
   */
  lookPath(name: string): Promise<string> {
    return _execSdk.lookPath(name);
  },
  /**
   * 运行一个命令
   * @param cmd 要运行的命令
   * @param args 参数
   * @param options 选项
   * @returns 运行结果
   */
  run(
    cmd: string,
    args?: string[],
    options?: { env?: [key: string]; cwd?: string }
  ): Promise<{ exitCode: number; stderr?: string; stdout?: string }> {
    return _execSdk.run(cmd, args, options);
  },
};

const _proxySdk = _teamworkSdk.proxy;
/**
 * 代理相关
 */
export const proxy = {
  /**
   * 查看是否启用了443端口代理转发
   * @returns 是/否
   */
  isEnabled443(): Promise<boolean> {
    return _proxySdk.isEnabled443();
  },
  /**
   * 启用443端口代理转发
   */
  enable443(): Promise<void> {
    return _proxySdk.enable443();
  },
  /**
   * 禁用443端口代理转发
   */
  disable443(): Promise<void> {
    return _proxySdk.disable443();
  },
};

const _cacheSdk = _teamworkSdk.proxy;
const _cacheFileSdk = _cacheSdk.file;
/**
 * 缓存相关
 */
export const cache = {
  /**
   *
   * @param key key
   * @param value value
   * @param expire 有效期
   */
  set(key: string, value: any, expire?: number): Promise<void> {
    return _cacheSdk.set(key, value, expire);
  },

  /**
   * 获取缓存的Value
   * @param key 缓存的KEY
   * @param defaultValue 默认值
   */
  get<T>(key: string, defaultValue?: any): Promise<T> {
    return _cacheSdk.get(key, defaultValue);
  },
  /**
   * 删除缓存
   * @param key 要删除的key
   */
  delete(key: string): Promise<void> {
    return _cacheSdk.delete(key);
  },
  /**
   * 清空缓存
   */
  clear(): Promise<void> {
    return _cacheSdk.clear();
  },
  /**
   * 是否存在对应的缓存
   * @param key 缓存Key
   * @returns 是/否存在
   */
  has(key: string): Promise<boolean> {
    return _cacheSdk.has(key);
  },
  /**
   * 重新设置过期时间
   * @param key 缓存Key
   * @param expire 过期时间
   * @returns 是/否成功
   */
  delay(key: string, expire?: number): Promise<void> {
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
    store(localPath: string, expire?: number): Promise<string> {
      return _cacheFileSdk.store(localPath, expire);
    },
    /**
     * 删除文件缓存
     * @param cacheId 文件缓存ID
     */
    delete(cacheId: string): Promise<void> {
      return _cacheFileSdk.delete(cacheId);
    },
    /**
     * 清空文件缓存
     */
    clear(): Promise<void> {
      return _cacheFileSdk.clear();
    },
    /**
     * 获取文件下载路径
     * @param cacheId 缓存Id
     * @returns 文件下载路径
     */
    getDownloadUrl(cacheId: string): string {
      return _cacheFileSdk.getDownloadUrl(cacheId);
    },
  },
};

const _hostsSdk = _teamworkSdk.hosts;

/**
 * hosts相关
 */
export const hosts = {
  /**
   * 向host文件中添加行
   * @param line 要添加的行
   */
  add(...line: string[]): Promise<void> {
    return _hostsSdk.add(line);
  },
  /**
   * 向host文件中添加行
   * @param line 要添加的行
   */
  addToHeader(...line: string[]): Promise<void> {
    return _hostsSdk.addToHeader(line);
  },
  /**
   * 导出内容
   * @returns hosts内容
   */
  export(): Promise<string> {
    return _hostsSdk.export();
  },
  /**
   * 覆盖原有的hosts内容
   * @param newHostsContent 新的hosts文件内容
   */
  cover(newHostsContent: string): Promise<void> {
    return _hostsSdk.cover(newHostsContent);
  },
  /**
   * 删除包含对应名称的dns或ip所在的行
   * @param dnsOrIp 要删除的dns或ip
   */
  delete(dnsOrIp: string): Promise<void> {
    return _hostsSdk.delete(dnsOrIp);
  },
};

/**
 * 应用类别
 */
export enum AppType {
  /**
   * 远程WEB
   */
  REMOTE_WEB,
  /**
   * 本地WEB
   */
  LOCAL,
}

/**
 * 图标类型
 */
export enum IconType {
  /**
   * URL路径
   */
  URL,
  /**
   * iconfont
   */
  ICON_FONT,
}

/**
 * 应用信息
 */
export interface AppInfo {
  /**
   * 应用ID
   */
  id: string;
  /**
   * 应用名称
   */
  name: string;
  /**
   * 是否为内部API应用
   */
  inside: boolean;
  /**
   * 应用类别
   */
  type: AppType;
  /**
   * 远程地址
   */
  remoteSiteUrl: string;
  /**
   * 要访问的URL
   */
  url: string;
  /**
   * 图标信息
   */
  icon: string;
  /**
   * 图标类型
   */
  iconType: IconType;
  /**
   * 长描述
   */
  desc: string;
  /**
   * 短描述
   */
  shortDesc: string;
  /**
   * 版本
   */
  version: string;
  /**
   * 是否正在加载中
   */
  loading?: boolean;
}

const _currentSdk = _teamworkSdk.current;
/**
 * 当前信息
 */
export const current = {
  /**
   * 当前的应用信息
   */
  appInfo: _currentSdk.appInfo as AppInfo,
};

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
