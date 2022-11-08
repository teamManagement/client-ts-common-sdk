/**
 * 存储相关
 */
export declare const store: {
    /**
     * 存储一个数据
     * @param key 要设置的key
     * @param val 要设置的Value
     */
    set(key: string, val: any): Promise<void>;
    /**
     * 从存储中根据key获取一个value, 如果value不存在则返回默认值
     * @param key 要获取的key
     * @param defaultValue 默认值
     * @returns 获取到的value
     */
    get<T>(key: string, defaultValue?: any): Promise<T>;
    /**
     * 存储中是否存在key
     * @param key key
     */
    has(key: string): Promise<boolean>;
    /**
     * 根据key删除存储中的数据
     * @param key 要删除的key
     */
    delete(key: string): Promise<void>;
    /**
     * 清空当前存储
     */
    clear(): Promise<void>;
};
/**
 * 执行子程序
 */
export declare const exec: {
    /**
     * 根据命令名称查找命令所在的绝对路径
     * @param name 要查找的命令名称
     */
    lookPath(name: string): Promise<string>;
    /**
     * 运行一个命令
     * @param cmd 要运行的命令
     * @param args 参数
     * @param options 选项
     * @returns 运行结果
     */
    run(cmd: string, args?: string[], options?: {
        env?: [key: string];
        cwd?: string;
    }): Promise<{
        exitCode: number;
        stderr?: string;
        stdout?: string;
    }>;
};
/**
 * 代理相关
 */
export declare const proxy: {
    /**
     * 查看是否启用了443端口代理转发
     * @returns 是/否
     */
    isEnabled443(): Promise<boolean>;
    /**
     * 启用443端口代理转发
     */
    enable443(): Promise<void>;
    /**
     * 禁用443端口代理转发
     */
    disable443(): Promise<void>;
};
/**
 * 缓存相关
 */
export declare const cache: {
    /**
     *
     * @param key key
     * @param value value
     * @param expire 有效期
     */
    set(key: string, value: any, expire?: number): Promise<void>;
    /**
     * 获取缓存的Value
     * @param key 缓存的KEY
     * @param defaultValue 默认值
     */
    get<T>(key: string, defaultValue?: any): Promise<T>;
    /**
     * 删除缓存
     * @param key 要删除的key
     */
    delete(key: string): Promise<void>;
    /**
     * 清空缓存
     */
    clear(): Promise<void>;
    /**
     * 是否存在对应的缓存
     * @param key 缓存Key
     * @returns 是/否存在
     */
    has(key: string): Promise<boolean>;
    /**
     * 重新设置过期时间
     * @param key 缓存Key
     * @param expire 过期时间
     * @returns 是/否成功
     */
    delay(key: string, expire?: number): Promise<void>;
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
        store(localPath: string, expire?: number): Promise<string>;
        /**
         * 删除文件缓存
         * @param cacheId 文件缓存ID
         */
        delete(cacheId: string): Promise<void>;
        /**
         * 清空文件缓存
         */
        clear(): Promise<void>;
        /**
         * 获取文件下载路径
         * @param cacheId 缓存Id
         * @returns 文件下载路径
         */
        getDownloadUrl(cacheId: string): string;
    };
};
/**
 * hosts相关
 */
export declare const hosts: {
    /**
     * 向host文件中添加行
     * @param line 要添加的行
     */
    add(...line: string[]): Promise<void>;
    /**
     * 向host文件中添加行
     * @param line 要添加的行
     */
    addToHeader(...line: string[]): Promise<void>;
    /**
     * 导出内容
     * @returns hosts内容
     */
    export(): Promise<string>;
    /**
     * 覆盖原有的hosts内容
     * @param newHostsContent 新的hosts文件内容
     */
    cover(newHostsContent: string): Promise<void>;
    /**
     * 删除包含对应名称的dns或ip所在的行
     * @param dnsOrIp 要删除的dns或ip
     */
    delete(dnsOrIp: string): Promise<void>;
};
/**
 * 应用类别
 */
export declare enum AppType {
    /**
     * 远程WEB
     */
    REMOTE_WEB = 0,
    /**
     * 本地WEB
     */
    LOCAL = 1
}
/**
 * 图标类型
 */
export declare enum IconType {
    /**
     * URL路径
     */
    URL = 0,
    /**
     * iconfont
     */
    ICON_FONT = 1
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
/**
 * 当前信息
 */
export declare const current: {
    /**
     * 当前的应用信息
     */
    appInfo: AppInfo;
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
