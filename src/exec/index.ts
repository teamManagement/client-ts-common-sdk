import { _teamworkSdk } from "../common";

/**
 * 执行器API
 */
export interface ExecApi {
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
  run(
    cmd: string,
    args?: string[],
    options?: { env?: [key: string]; cwd?: string }
  ): Promise<{ exitCode: number; stderr?: string; stdout?: string }>;
}

/**
 * 执行子程序
 */
export const exec = _teamworkSdk.exec;
