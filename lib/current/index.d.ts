import { AppInfo, UserInfo } from "../vos/index";
/**
 * 在线用户变更处理方法
 */
export declare type OnlineUserChangeHandler = (
/**
 * 在线状态:
 * online: 在线
 * offline: 离线
 */
status: "online" | "offline", 
/**
 * 用户ID
 */
userId: string, 
/**
 * 最新的在线用户列表
 */
onlineUserIdList: string[]) => void;
/**
 * 当前信息
 */
export interface CurrentApi {
    /**
     * 应用信息
     */
    appInfo: AppInfo;
    /**
     * 用户信息
     */
    userInfo: UserInfo;
    /**
     * 获取token信息
     */
    token(): string;
    /**
     * 在线用户ID列表
     */
    onlineUserIdList(): string[];
    /**
     * 注册用户状态变更处理器
     * @param id 处理器id
     */
    registerOnlineUserChange(id: string, handler: OnlineUserChangeHandler): void;
    /**
     * 注销用户状态变更处理器
     * @param id 处理器ID
     */
    unRegisterOnlineUserChange(id: string): void;
}
export declare const current: CurrentApi;
