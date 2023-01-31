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
    $type?: "null" | "boolean" | "number" | "string" | "array" | "object" | undefined;
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
    [field: string]: DbIndexSelector | DbIndexSelector[] | DbConditionOperators | any;
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
    sort?: Array<string | {
        [propName: string]: "asc" | "desc";
    }> | undefined;
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
    put<T extends {
        _id: string;
        _rev?: string;
    }>(data: T): DbResponse;
    /**
     * 添加数据自动生成数据ID
     * @param data 要添加的数据
     */
    post<T extends {}>(data: T): DbResponse;
    /**
     * 通过Id获取数据
     * @param id 要获取的ID
     */
    get<T>(id: string): T & {
        _id: string;
        _rev: string;
    };
    /**
     * 根据ID移除数据
     * @param id 要移除的Id
     */
    remove(id: string): DbResponse;
    /**
     * 批量添加数据, 如果没有id则自动生成
     * @param data 要保存的数据
     */
    bulkDocs<T extends {
        _id?: string;
        _rev?: string;
    }>(data: T[]): DbResponse[];
    /**
     * 根据key获取文档列表, 使用ID进行排序
     * @param key 数组贼为准确key, 字符串则为前匹配
     */
    allDocs<T>(key: string | string[]): T & {
        _id: string;
        _rev: string;
    };
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
    putAttachmentByLocalFilepath(id: string, localPath: string, type?: string): void;
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
        create(indexOptions: DbIndexOptions): {
            result: string;
        };
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
            docs: (T & {
                _id: string;
                _rev: string;
            })[];
            warning?: string;
        };
    };
}
/**
 * 数据库异步接口
 */
export interface DbPromiseApi {
    /**
     * 添加数据
     * @param data 要保存的数据
     */
    put<T extends {
        _id: string;
        _rev?: string;
    }>(data: T): Promise<DbResponse>;
    /**
     * 添加数据自动生成数据ID
     * @param data 要添加的数据
     */
    post<T extends {}>(data: T): Promise<DbResponse>;
    /**
     * 通过Id获取数据
     * @param id 要获取的ID
     */
    get<T>(id: string): Promise<T & {
        _id: string;
        _rev: string;
    }>;
    /**
     * 根据ID移除数据
     * @param id 要移除的Id
     */
    remove(id: string): Promise<DbResponse>;
    /**
     * 批量添加数据, 如果没有id则自动生成
     * @param data 要保存的数据
     */
    bulkDocs<T extends {
        _id?: string;
        _rev?: string;
    }>(data: T[]): Promise<DbResponse[]>;
    /**
     * 根据key获取文档列表, 使用ID进行排序
     * @param key 数组贼为准确key, 字符串则为前匹配
     */
    allDocs<T>(key: string | string[]): Promise<T & {
        _id: string;
        _rev: string;
    }>;
    /**
     * 保存二进制或base64为附件
     * @param id id
     * @param data 二进制或base64格式数据
     * @param type mime type
     */
    putAttachment(id: string, data: Uint8Array | string, type: string): Promise<void>;
    /**
     * 保存本地路径文件为一个附件
     * @param id id
     * @param localPath 本地文件路径
     * @param type mime type如果不存在则根据文件内容进行推断
     */
    putAttachmentByLocalFilepath(id: string, localPath: string, type?: string): Promise<void>;
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
        create(indexOptions: DbIndexOptions): Promise<{
            result: string;
        }>;
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
            docs: (T & {
                _id: string;
                _rev: string;
            })[];
            warning?: string;
        }>;
    };
}
export interface DbApi extends DbPromiseApi {
    sync: DbSyncInterface;
}
export declare const db: DbApi;
