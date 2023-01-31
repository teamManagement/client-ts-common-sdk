import { _teamworkSdk } from "../common";

/**
 * id相关api
 */
export interface IdApi {
  /**
   * 自增序列
   */
  seq(): Promise<number>;
  /**
   * uuid
   */
  uuid(): string;
  /**
   * 唯一ID
   */
  unique(): Promise<string>;
}

/**
 * id相关api
 */
export const id: IdApi = _teamworkSdk.id;
