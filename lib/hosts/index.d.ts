/**
 * hosts文件操作相关api
 */
export interface HostsApi {
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
}
/**
 * hosts相关
 */
export declare const hosts: HostsApi;
