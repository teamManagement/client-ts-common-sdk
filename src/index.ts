const _windows = window as any;
const _teamworkSdk = _windows.teamworkSDK;

const _idSdk = _teamworkSdk.id;
/**
 * id相关api
 */
export const id = {
  /**
   * 全局自增序列号
   * @returns 序列号
   */
  seq(): number {
    return _idSdk.seq();
  },
  /**
   * 创建一个uuid
   * @returns uuid
   */
  uuid(): string {
    return _idSdk.uuid();
  },
  unique(): Promise<string> {
    return _idSdk.unique();
  },
};

const _storeSdk = _teamworkSdk.store;
/**
 * 存储相关
 */
export const store = {
  /**
   * 存储一个数据
   * @param key 要设置的key
   * @param val 要设置的Value
   */
  set(key: string, val: any): Promise<void> {
    return _storeSdk.set(key, val);
  },
  /**
   * 从存储中根据key获取一个value, 如果value不存在则返回默认值
   * @param key 要获取的key
   * @param defaultValue 默认值
   * @returns 获取到的value
   */
  get<T>(key: string, defaultValue?: any): Promise<T> {
    return _storeSdk.get(key, defaultValue);
  },
  /**
   * 存储中是否存在key
   * @param key key
   */
  has(key: string): Promise<boolean> {
    return _storeSdk.has(key);
  },
  /**
   * 根据key删除存储中的数据
   * @param key 要删除的key
   */
  delete(key: string): Promise<void> {
    return _storeSdk.delete(key);
  },
  /**
   * 清空当前存储
   */
  clear(): Promise<void> {
    return _storeSdk.clear();
  },
};

const _execSdk = _teamworkSdk.exec;
/**
 * 执行子程序
 */
export const exec = {
  /**
   * 根据命令名称查找命令所在的绝对路径
   * @param name 要查找的命令名称
   */
  lookPath(name: string): Promise<string> {
    return _execSdk.lookPath(name);
  },
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
  ): Promise<{ exitCode: number; stderr?: string; stdout?: string }> {
    return _execSdk.run(cmd, args, options);
  },
};

const _proxySdk = _teamworkSdk.proxy;
/**
 * 代理相关
 */
export const proxy = {
  /**
   * 查看是否启用了443端口代理转发
   * @returns 是/否
   */
  isEnabled443(): Promise<boolean> {
    return _proxySdk.isEnabled443();
  },
  /**
   * 启用443端口代理转发
   */
  enable443(): Promise<void> {
    return _proxySdk.enable443();
  },
  /**
   * 禁用443端口代理转发
   */
  disable443(): Promise<void> {
    return _proxySdk.disable443();
  },
};

const _cacheSdk = _teamworkSdk.cache;
const _cacheFileSdk = _cacheSdk.file;
/**
 * 缓存相关
 */
export const cache = {
  /**
   *
   * @param key key
   * @param value value
   * @param expire 有效期
   */
  set(key: string, value: any, expire?: number): Promise<void> {
    return _cacheSdk.set(key, value, expire);
  },

  /**
   * 获取缓存的Value
   * @param key 缓存的KEY
   * @param defaultValue 默认值
   */
  get<T>(key: string, defaultValue?: any): Promise<T> {
    return _cacheSdk.get(key, defaultValue);
  },
  /**
   * 删除缓存
   * @param key 要删除的key
   */
  delete(key: string): Promise<void> {
    return _cacheSdk.delete(key);
  },
  /**
   * 清空缓存
   */
  clear(): Promise<void> {
    return _cacheSdk.clear();
  },
  /**
   * 是否存在对应的缓存
   * @param key 缓存Key
   * @returns 是/否存在
   */
  has(key: string): Promise<boolean> {
    return _cacheSdk.has(key);
  },
  /**
   * 重新设置过期时间
   * @param key 缓存Key
   * @param expire 过期时间
   * @returns 是/否成功
   */
  delay(key: string, expire?: number): Promise<void> {
    return _cacheSdk.delay(key, expire);
  },
  /**
   * 文件相关存储
   */
  file: {
    /**
     * 创建文件缓存
     * @param localPath 本地文件路径
     * @param expire 有效期(单位毫秒), 0: 默认10分钟， -1: 永不过期
     * @returns 缓存ID
     */
    store(localPath: string, expire?: number): Promise<string> {
      return _cacheFileSdk.store(localPath, expire);
    },
    /**
     * 删除文件缓存
     * @param cacheId 文件缓存ID
     */
    delete(cacheId: string): Promise<void> {
      return _cacheFileSdk.delete(cacheId);
    },
    /**
     * 清空文件缓存
     */
    clear(): Promise<void> {
      return _cacheFileSdk.clear();
    },
    /**
     * 获取文件下载路径
     * @param cacheId 缓存Id
     * @returns 文件下载路径
     */
    getDownloadUrl(cacheId: string): string {
      return _cacheFileSdk.getDownloadUrl(cacheId);
    },
  },
};

const _hostsSdk = _teamworkSdk.hosts;

/**
 * hosts相关
 */
export const hosts = {
  /**
   * 向host文件中添加行
   * @param line 要添加的行
   */
  add(...line: string[]): Promise<void> {
    return _hostsSdk.add(line);
  },
  /**
   * 向host文件中添加行
   * @param line 要添加的行
   */
  addToHeader(...line: string[]): Promise<void> {
    return _hostsSdk.addToHeader(line);
  },
  /**
   * 导出内容
   * @returns hosts内容
   */
  export(): Promise<string> {
    return _hostsSdk.export();
  },
  /**
   * 覆盖原有的hosts内容
   * @param newHostsContent 新的hosts文件内容
   */
  cover(newHostsContent: string): Promise<void> {
    return _hostsSdk.cover(newHostsContent);
  },
  /**
   * 删除包含对应名称的dns或ip所在的行
   * @param dnsOrIp 要删除的dns或ip
   */
  delete(dnsOrIp: string): Promise<void> {
    return _hostsSdk.delete(dnsOrIp);
  },
};

/**
 * 应用类别
 */
export enum AppType {
  /**
   * 远程WEB
   */
  REMOTE_WEB,
  /**
   * 本地WEB
   */
  LOCAL,
}

/**
 * 图标类型
 */
export enum IconType {
  /**
   * URL路径
   */
  URL,
  /**
   * iconfont
   */
  ICON_FONT,
}

/**
 * 轮播图类别
 */
export interface SlideInfo {
  /**
   * image信息
   */
  value: string;
}

/**
 * 应用信息
 */
export interface AppInfo {
  /**
   * 应用ID
   */
  id: string;
  /**
   * 应用名称
   */
  name: string;
  /**
   * 作者ID
   */
  authId: string;
  /**
   * 作者信息
   */
  authorInfo?: UserInfo;
  /**
   * 贡献者列表
   */
  contributorsList?: UserInfo[];
  /**
   * 是否为内部API应用
   */
  inside: boolean;
  /**
   * 应用类别
   */
  type?: AppType;
  /**
   * 远程地址
   */
  remoteSiteUrl: string;
  /**
   * 要访问的URL
   */
  url: string;
  /**
   * 图标信息
   */
  icon: string;
  /**
   * 图标类型
   */
  iconType: IconType;
  /**
   * 长描述
   */
  desc: string;
  /**
   * 短描述
   */
  shortDesc: string;
  /**
   * 版本
   */
  version: string;
  /**
   *轮播图
   */
  slideshow?: SlideInfo[];
  /**
   * 是否正在加载中
   */
  loading?: boolean;
  /**
   * 是否正在处于debug
   */
  debugging?: boolean;
}

/**
 * 在线用户变更处理方法
 */
export type OnlineUserChangeHandler = (
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
  onlineUserIdList: string[]
) => void;

/**
 * 当前信息
 */
export interface Current {
  /**
   * 应用信息
   */
  appInfo: AppInfo;
  /**
   * 用户信息
   */
  userInfo: UserInfo;
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

export const current = _teamworkSdk.current as Current;
/**
 * 当前信息
 */
// export const current = {
//   /**
//    * 当前的应用信息
//    */
//   appInfo: _currentSdk.appInfo as AppInfo,
//   /**
//    * 当前登录的用户
//    */
//   userInfo: _currentSdk.userInfo as UserInfo,
// };

/**
 * 菜单项
 */
export interface MenuItem {
  /**
   * 单击事件
   */
  click?: () => void;
  /**
   * 菜单类型
   */
  type?: "normal" | "separator" | "submenu";
  /**
   * 标题
   */
  label?: string;
  /**
   * 子标题
   */
  sublabel?: string;
  /**
   * 提示
   */
  toolTip?: string;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 是否启用
   */
  enabled?: boolean;
  /**
   * 是否可见
   */
  visible?: boolean;
  /**
   * 子菜单项
   */
  submenu?: MenuItem[];
}

/**
 * 上下文菜单类接口
 */
export interface ContextMenu {
  /**
   * 获取菜单内部的选项
   */
  items(): MenuItem[] | undefined;
  /**
   * 在当前窗体上显示菜单
   */
  popup(): Promise<void>;
  /**
   * 主动触发菜单项的click事件
   * @param itemId 菜单项ID
   */
  click(itemId: string): void;
  /**
   * 菜单对象当前的ID
   */
  id(): string;
}

const _contextmenuSdk = _teamworkSdk.contextmenu;
/**
 * 右键菜单
 */
export const contextmenu = {
  /**
   * 根据菜单项构建菜单对象
   * @param menuItems 菜单项
   * @param menuId 菜单ID
   * @returns 菜单对象
   */
  build(menuItems: MenuItem[], menuId?: string): ContextMenu {
    return _contextmenuSdk.build(menuItems, menuId);
  },
  /**
   * 根据菜单项目清除菜单
   * @param id 菜单ID
   */
  clear(id: string): void {
    return _contextmenuSdk.clear(id);
  },
  /**
   * 清空所有的上下文菜单
   */
  clearAll(): void {
    return _contextmenuSdk.clearAll();
  },
};

/**
 * 机构信息
 */
export interface OrgInfo {
  /**
   * 机构ID
   */
  id: string;
  /**
   * 机构名称
   */
  name: string;
  /**
   * 上级机构ID
   */
  pid: string;
  /**
   * 机构图标
   */
  icon?: string;
  /**
   * 机构描述
   */
  desc?: string;
  /**
   * 创建者ID
   */
  createUserId: string;
  /**
   * 子级机构
   */
  children?: OrgInfo[];
  /**
   * 子级ID列表
   */
  childrenIdList?: string[];
  /**
   * 上级机构信息
   */
  parent?: OrgInfo;
  /**
   * 上级ID列表
   */
  parentIdList?: string[];
}

/**
 * 岗位信息
 */
export interface PostInfo {
  /**
   * 岗位ID
   */
  id: string;
  /**
   * 岗位名称
   */
  name: string;
}

/**
 * 职位信息
 */
export interface JobInfo {
  /**
   * 职位ID
   */
  id: string;
  /**
   * 职位名称
   */
  name: string;
}

/**
 * 用户机构信息
 */
export interface UserOrgInfo {
  /**
   * 机构信息
   */
  org: OrgInfo;
  /**
   * 岗位信息
   */
  post: PostInfo;
  /**
   * 职位信息
   */
  job: JobInfo;
  /**
   * 是否为主管
   */
  isMain: boolean;
}

/**
 * 性别
 */
export enum Sex {
  /**
   * 男
   */
  MAN = 1,
  /**
   * 女
   */
  WOMAN,
}

/**
 * 用户信息
 */
export interface UserInfo {
  /**
   * 用户ID
   */
  id: string;
  /**
   * 用户真实姓名
   */
  name: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 性别
   */
  sex: Sex;
  /**
   * 身份识别号
   */
  idCode: string;
  /**
   * 手机号
   */
  phone: string;
  /**
   * 邮箱
   */
  email: string;
  /**
   * 生日
   */
  birthday: string;
  /**
   * 备注
   */
  comments?: string;
  /**
   * 是否为初始化管理员
   */
  isInitManger?: boolean;
  /**
   * 头像
   */
  icon: string;
  /**
   * 机构信息
   */
  orgList?: UserOrgInfo[];
  /**
   * 当前机构信息
   */
  nowOrgInfo?: UserOrgInfo[];
  /**
   * 是否为应用商店的管理员
   */
  isAppStoreManager: boolean;
}

/**
 * 数据库操作基础响应
 */
export interface DbBasicResponse {
  /** `true` if the operation was successful; `false` otherwise */
  ok: boolean;
}

/**
 * 数据库响应
 */
export interface DbResponse extends DbBasicResponse {
  /** id of the targeted document */
  id: string;
  /** resulting revision of the targeted document */
  rev: string;
}

export interface DbConditionOperators {
  /** Match fields "less than" this one. */
  $lt?: any;

  /** Match fields "greater than" this one. */
  $gt?: any;

  /** Match fields "less than or equal to" this one. */
  $lte?: any;

  /** Match fields "greater than or equal to" this one. */
  $gte?: any;

  /** Match fields equal to this one. */
  $eq?: any;

  /** Match fields not equal to this one. */
  $ne?: any;

  /** True if the field should exist, false otherwise. */
  $exists?: boolean | undefined;

  /** One of: "null", "boolean", "number", "string", "array", or "object". */
  $type?:
    | "null"
    | "boolean"
    | "number"
    | "string"
    | "array"
    | "object"
    | undefined;

  /** The document field must exist in the list provided. */
  $in?: any[] | undefined;

  /** The document field must not exist in the list provided. */
  $nin?: any[] | undefined;

  /** Special condition to match the length of an array field in a document. Non-array fields cannot match this condition. */
  $size?: number | undefined;

  /**
   * Divisor and Remainder are both positive or negative integers.
   * Non-integer values result in a 404 status.
   * Matches documents where (field % Divisor == Remainder) is true, and only when the document field is an integer.
   * [divisor, remainder]
   */
  $mod?: [number, number] | undefined;

  /** A regular expression pattern to match against the document field. Only matches when the field is a string value and matches the supplied regular expression. */
  $regex?: string | undefined;

  /** Matches an array value if it contains all the elements of the argument array. */
  $all?: any[] | undefined;

  $elemMatch?: DbConditionOperators | undefined;
}

export interface DbCombinationOperators {
  /** Matches if all the selectors in the array match. */
  $and?: DbIndexSelector[] | undefined;

  /** Matches if any of the selectors in the array match. All selectors must use the same index. */
  $or?: DbIndexSelector[] | undefined;

  /** Matches if the given selector does not match. */
  $not?: DbIndexSelector | undefined;

  /** Matches if none of the selectors in the array match. */
  $nor?: DbIndexSelector[] | undefined;
}

export interface DbIndexSelector extends DbCombinationOperators {
  [field: string]:
    | DbIndexSelector
    | DbIndexSelector[]
    | DbConditionOperators
    | any;

  _id?: string | DbConditionOperators | undefined;
}

export interface DbIndexOptions {
  fields: string[];
  name?: string;
  ddoc?: string;
  type?: string;
  partial_filter_selector?: DbIndexSelector;
}

export interface DbIndex {
  /** Name of the index, auto-generated if you don't include it */
  name: string;

  /** Design document name (i.e. the part after '_design/', auto-generated if you don't include it */
  ddoc: string | null;

  /** Only supports 'json' */
  type: string;

  def: {
    fields: Array<{
      [fieldName: string]: string;
    }>;
  };
}

export interface DbDeleteIndexOptions {
  /** Name of the index */
  name: string;

  /** Design document name */
  ddoc: string;

  /** Default 'json' */
  type?: string | undefined;
}

export interface DbFindRequest {
  /** Defines a selector to filter the results. Required */
  selector: DbIndexSelector;

  /** Defines a list of fields that you want to receive. If omitted, you get the full documents. */
  fields?: string[] | undefined;

  /** Defines a list of fields defining how you want to sort. Note that sorted fields also have to be selected in the selector. */
  sort?: Array<string | { [propName: string]: "asc" | "desc" }> | undefined;

  /** Maximum number of documents to return. */
  limit?: number | undefined;

  /** Number of docs to skip before returning. */
  skip?: number | undefined;

  /** Set which index to use for the query. It can be “design-doc-name” or “[‘design-doc-name’, ‘name’]”. */
  use_index?: string | [string, string] | undefined;
}

export interface DbSyncInterface {
  /**
   * 添加数据
   * @param data 要保存的数据
   */
  put<T extends { _id: string; _rev?: string }>(data: T): DbResponse;
  /**
   * 添加数据自动生成数据ID
   * @param data 要添加的数据
   */
  post<T extends {}>(data: T): DbResponse;
  /**
   * 通过Id获取数据
   * @param id 要获取的ID
   */
  get<T>(id: string): T & { _id: string; _rev: string };
  /**
   * 根据ID移除数据
   * @param id 要移除的Id
   */
  remove(id: string): DbResponse;
  /**
   * 批量添加数据, 如果没有id则自动生成
   * @param data 要保存的数据
   */
  bulkDocs<T extends { _id?: string; _rev?: string }>(data: T[]): DbResponse[];

  /**
   * 根据key获取文档列表, 使用ID进行排序
   * @param key 数组贼为准确key, 字符串则为前匹配
   */
  allDocs<T>(key: string | string[]): T & { _id: string; _rev: string };

  /**
   * 保存二进制或base64为附件
   * @param id id
   * @param data 二进制或base64格式数据
   * @param type mime type
   */
  putAttachment(id: string, data: Uint8Array | string, type: string): void;

  /**
   * 保存本地路径文件为一个附件
   * @param id id
   * @param localPath 本地文件路径
   * @param type mime type如果不存在则根据文件内容进行推断
   */
  putAttachmentByLocalFilepath(
    id: string,
    localPath: string,
    type?: string
  ): void;

  /**
   * 根据ID获取一个二进制附件
   * @param id id
   */
  getAttachment(id: string): Uint8Array;

  /**
   * 根据id获取一个blob格式的附件
   * @param id id
   */
  getAttachmentToBlob(id: string): Blob;

  /**
   * 根据id获取一个blob url格式的附件
   * @param id id
   */
  getAttachmentToBlobUrl(id: string): Blob;

  /**
   * 根据ID获取附件类型
   * @param id id
   */
  getAttachmentType(id: string): String;

  /**
   * 删除附件
   * @param id 要删除的ID
   */
  removeAttachment(id: string): void;

  /**
   * 索引相关接口
   */
  index: {
    /**
     * 创建查询索引
     * @param indexOptions 索引信息
     */
    create(indexOptions: DbIndexOptions): { result: string };
    /**
     * 列出当前索引列表
     */
    list(): DbIndex[];
    /**
     * 删除索引
     * @param indexOptions 索引信息
     */
    delete(indexOptions: DbDeleteIndexOptions): void;
    /**
     * 根据选项查找内容
     * @param options 选项
     */
    find<T>(options: DbFindRequest): {
      docs: (T & { _id: string; _rev: string })[];
      warning?: string;
    };
  };
}

/**
 * 数据库异步接口
 */
export interface DbPromiseInterface {
  /**
   * 添加数据
   * @param data 要保存的数据
   */
  put<T extends { _id: string; _rev?: string }>(data: T): Promise<DbResponse>;
  /**
   * 添加数据自动生成数据ID
   * @param data 要添加的数据
   */
  post<T extends {}>(data: T): Promise<DbResponse>;
  /**
   * 通过Id获取数据
   * @param id 要获取的ID
   */
  get<T>(id: string): Promise<T & { _id: string; _rev: string }>;
  /**
   * 根据ID移除数据
   * @param id 要移除的Id
   */
  remove(id: string): Promise<DbResponse>;
  /**
   * 批量添加数据, 如果没有id则自动生成
   * @param data 要保存的数据
   */
  bulkDocs<T extends { _id?: string; _rev?: string }>(
    data: T[]
  ): Promise<DbResponse[]>;

  /**
   * 根据key获取文档列表, 使用ID进行排序
   * @param key 数组贼为准确key, 字符串则为前匹配
   */
  allDocs<T>(
    key: string | string[]
  ): Promise<T & { _id: string; _rev: string }>;

  /**
   * 保存二进制或base64为附件
   * @param id id
   * @param data 二进制或base64格式数据
   * @param type mime type
   */
  putAttachment(
    id: string,
    data: Uint8Array | string,
    type: string
  ): Promise<void>;

  /**
   * 保存本地路径文件为一个附件
   * @param id id
   * @param localPath 本地文件路径
   * @param type mime type如果不存在则根据文件内容进行推断
   */
  putAttachmentByLocalFilepath(
    id: string,
    localPath: string,
    type?: string
  ): Promise<void>;

  /**
   * 根据ID获取一个二进制附件
   * @param id id
   */
  getAttachment(id: string): Promise<Uint8Array>;

  /**
   * 根据id获取一个blob格式的附件
   * @param id id
   */
  getAttachmentToBlob(id: string): Promise<Blob>;

  /**
   * 根据id获取一个blob url格式的附件
   * @param id id
   */
  getAttachmentToBlobUrl(id: string): Promise<Blob>;

  /**
   * 根据ID获取附件类型
   * @param id id
   */
  getAttachmentType(id: string): Promise<String>;

  /**
   * 删除附件
   * @param id 要删除的ID
   */
  removeAttachment(id: string): Promise<void>;

  /**
   * 索引相关接口
   */
  index: {
    /**
     * 创建查询索引
     * @param indexOptions 索引信息
     */
    create(indexOptions: DbIndexOptions): Promise<{ result: string }>;
    /**
     * 列出当前索引列表
     */
    list(): Promise<DbIndex[]>;
    /**
     * 删除索引
     * @param indexOptions 索引信息
     */
    delete(indexOptions: DbDeleteIndexOptions): Promise<void>;
    /**
     * 根据选项查找内容
     * @param options 选项
     */
    find<T>(options: DbFindRequest): Promise<{
      docs: (T & { _id: string; _rev: string })[];
      warning?: string;
    }>;
  };
}

export interface DbInterface extends DbPromiseInterface {
  sync: DbSyncInterface;
}

export const db = _teamworkSdk.db as DbInterface;

export type DialogProperties =
  | "openFile"
  | "openDirectory"
  | "multiSelections"
  | "showHiddenFiles"
  | "createDirectory"
  | "promptToCreate"
  | "noResolveAliases"
  | "treatPackageAsDirectory"
  | "dontAddToRecent";

/**
 * 对话框过滤器
 */
export interface DialogFileFilter {
  /**
   * 名称
   */
  name: string;
  /**
   * 扩展名
   */
  extensions: string[];
}

/**
 * 打开文件对话框的同步选项
 */
export interface OpenDialogSyncOption {
  /**
   * 对话框窗口的标题.
   */
  title?: string;
  /**
   * 对话框的默认展示路径
   */
  defaultPath?: string;
  /**
   * 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。
   */
  buttonLabel?: string;
  /**
   *
   */
  filters: DialogFileFilter[];
  /**
   * 包含对话框相关属性。 支持以下属性值:
   * openFile - 允许选择文件
   * openDirectory - 允许选择文件夹
   * multiSelections-允许多选。
   * showHiddenFiles-显示对话框中的隐藏文件。
   * createDirectory macOS -允许你通过对话框的形式创建新的目录。
   * promptToCreate Windows-如果输入的文件路径在对话框中不存在, 则提示创建。 这并不是真的在路径上创建一个文件，而是允许返回一些不存在的地址交由应用程序去创建。
   * noResolveAliases macOS-禁用自动的别名路径(符号链接) 解析。 所选别名现在将会返回别名路径而非其目标路径。
   * treatPackageAsDirectory macOS -将包 (如 .app 文件夹) 视为目录而不是文件。
   * dontAddToRecent Windows - 不要将正在打开的项目添加到最近的文档列表中。
   */
  properties?: DialogProperties[];

  /**
   * macOS -显示在输入框上方的消息。
   */
  message?: string;
  /**
   * macOS mas - 在打包提交到Mac App Store时创建 security scoped bookmarks
   */
  securityScopedBookmarks?: boolean;
}

export interface SaveDialogOptions {
  /**
   * 对话框标题。 无法在一些 Linux 桌面环境中显示。
   */
  title?: string;
  /**
   * 默认情况下使用的绝对目录路径、绝对文件路径或文件名。
   */
  defaultPath?: string;
  /**
   * 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。
   */
  buttonLabel?: string;
  /**
   * 过滤器
   */
  filters?: DialogFileFilter[];
  /**
   * macOS -显示在对话框上的消息。
   *
   * @platform darwin
   */
  message?: string;
  /**
   * macOS - 文件名输入框对应的自定义标签名。
   *
   * @platform darwin
   */
  nameFieldLabel?: string;
  /**
   * macOS -显示标记输入框, 默认为 true。
   *
   * @platform darwin
   */
  showsTagField?: boolean;
  /**
   * showHiddenFiles-显示对话框中的隐藏文件。
   * createDirectory macOS -允许你通过对话框的形式创建新的目录。
   * treatPackageAsDirectory macOS -将包 (如 .app 文件夹) 视为目录而不是文件。
   * showOverwriteConfirmation Linux - 设置如果用户输入了已存在的文件名，是否会向用户显示确认对话框。
   * dontAddToRecent Windows - 不要将正在保存的项目添加到最近的文档列表中。
   */
  properties?: Array<
    | "showHiddenFiles"
    | "createDirectory"
    | "treatPackageAsDirectory"
    | "showOverwriteConfirmation"
    | "dontAddToRecent"
  >;
  /**
   * macOS mas - 在打包提交到Mac App Store时创建 security scoped bookmarks 当该选项被启用且文件尚不存在时，那么在选定的路径下将创建一个空文件。
   *
   * @platform darwin,mas
   */
  securityScopedBookmarks?: boolean;
}

/**
 * 对话框api
 */
export interface Dialog {
  /**
   * 打开对话框
   * @param options 选项
   * @returns 用户选择的文件路径，如果对话框被取消了 ，则返回undefined。
   */
  showOpenDialog(options?: OpenDialogSyncOption): string[] | undefined;
  /**
   * 文件保存对话框
   * @param options 选项
   * @returns 用户选择的文件路径，如果对话框被取消了 ，则返回undefined。
   */
  showSaveDialog(options?: SaveDialogOptions): string | undefined;
}

export const dialog = _teamworkSdk.dialog as Dialog;

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
  updateCallBack?(
    percentage: number,
    receivedBytes: number,
    totalBytes: number
  ): void;
  /**
   * 保存路径
   */
  savePath: string;
}

export interface Download {
  /**
   * 下载http文件
   * @param url 要下载的路径
   * @param options 选项
   */
  httpFile(url: string, options?: DownloadOptions): DownloadOperationHandler;
}

export const download = _teamworkSdk.download as Download;
