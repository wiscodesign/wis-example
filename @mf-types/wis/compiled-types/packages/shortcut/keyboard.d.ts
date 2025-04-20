export declare function isCommandKeyboard(code?: string): boolean;
/**
 * Matches the user-provided key to the system's standard key
 * The user-provided key is case-insensitive
 */
export declare function matchKeyboardByUserKey(userKey: string): string | undefined;
export declare function matchKeyboard(code: string): string | undefined;
