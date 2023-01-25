import { _teamworkSdk } from "../common";

/**
 * 编解码工具
 */
export interface EncodingApi {
  /**
   * base64编码
   * @param str 要编码的字符串
   */
  base64(str: string): Promise<string>;
  /**
   * base64解码
   * @param base64Str 要解码的字符串
   */
  base64Decode(base64Str: string): Promise<string>;
  /**
   * 16进制编码
   * @param str 要编码的字符串
   */
  hex(str: string): Promise<string>;
  /**
   * 16进制解码
   * @param hexStr 要解码的字符串
   */
  hexDecode(hexStr: string): Promise<string>;
  sync: {
    base64(str: string): string;
    base64Decode(base64Str: string): Promise<string>;
    hex(str: string): Promise<string>;
    hexDecode(hexStr: string): Promise<string>;
  };
}

export const encoding: EncodingApi = _teamworkSdk.encoding;
