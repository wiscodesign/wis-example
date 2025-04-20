export declare function isBoolean(value: unknown): value is boolean;
export declare function isNumber(value: unknown): value is number;
export declare function isString(value: unknown): value is string;
export declare function isUndefined(value: unknown): value is undefined;
type Function = (...args: unknown[]) => unknown;
export declare function isFunction(value: unknown): value is Function;
export declare function isObject(value: unknown): value is object;
export declare function isComponent<T>(component: unknown, displayName: string): component is T;
export {};
