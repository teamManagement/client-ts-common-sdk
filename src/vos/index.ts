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
  /**
   * 岗位列表
   */
  postList?: PostInfo[];
  /**
   * 职位列表
   */
  jobList?: JobInfo[];
  /**
   * 创建时间
   */
  createAt: string;
  /**
   * 最后更新时间
   */
  updateAt: string;
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
  birthday?: string;
  /**
   * 备注
   */
  comments?: string;

  /**
   *当前登录机器ip
   */
  loginIp: string;

  /**
   * 是否为初始化管理员
   */
  isInitManger?: boolean;
  /**
   * 头像
   */
  icon?: string;
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
  isAppStoreManager?: boolean;
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
