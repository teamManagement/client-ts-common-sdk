/**
 * fs api
 */
export interface FsApi {
    /**
     * 读取文件到base64字符串
     * @param localPath 本地文件的路径
     */
    readFileToBase64Str(localPath: string): Promise<string>;
    /**
     * 读取文件到text
     * @param localPath 要读取的文件
     */
    readFileText(localPath: string): Promise<string>;
}
export declare const fs: FsApi;
