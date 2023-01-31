export interface ProxyApi {
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
}
/**
 * 代理相关
 */
export declare const proxy: ProxyApi;
