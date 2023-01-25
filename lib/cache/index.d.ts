export interface CacheApi {
    /**
     * 设置缓存
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
     * 文件相关缓存api
     */
    file: {
        /**
         * 创建文件缓存
         * @param localPath 本地文件路径
         * @param expire 有效期(单位毫秒), 0: 默认10分钟， -1: 永不过期
         * @returns 缓存ID
         */
        store(localPath: string, expire?: number): Promise<string>;
    };
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
}
/**
 * 缓存相关
 */
export declare const cache: any;
