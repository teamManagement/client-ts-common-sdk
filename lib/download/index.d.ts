/**
 * 下载操作处理器
 */
export interface DownloadOperationHandler {
    readonly id: string;
    waitDone: Promise<void>;
}
/**
 * 下载选项
 */
export interface DownloadOptions {
    /**
     * 进度更新
     * @param percentage 进度
     * @param receivedBytes 已经下载的字节数
     * @param totalBytes 总字节数
     */
    updateCallBack?(percentage: number, receivedBytes: number, totalBytes: number): void;
    /**
     * 保存路径
     */
    savePath: string;
}
export interface DownloadApi {
    /**
     * 下载http文件
     * @param url 要下载的路径
     * @param options 选项
     */
    httpFile(url: string, options?: DownloadOptions): DownloadOperationHandler;
}
export declare const download: DownloadApi;
