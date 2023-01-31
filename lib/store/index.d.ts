/**
 * 存储相关api
 */
export interface StoreApi {
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
}
/**
 * 存储相关
 */
export declare const store: StoreApi;
