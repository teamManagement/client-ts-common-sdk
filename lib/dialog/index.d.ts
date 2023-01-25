export declare type DialogProperties = "openFile" | "openDirectory" | "multiSelections" | "showHiddenFiles" | "createDirectory" | "promptToCreate" | "noResolveAliases" | "treatPackageAsDirectory" | "dontAddToRecent";
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
    properties?: Array<"showHiddenFiles" | "createDirectory" | "treatPackageAsDirectory" | "showOverwriteConfirmation" | "dontAddToRecent">;
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
export declare const dialog: Dialog;
