import type { KeyboardEvent } from "react";
export type ShortcutTask = (event: KeyboardEvent, shortcutMeta: ShortcutMeta) => void;
export declare class ShortcutMeta {
    ctrl: boolean;
    shift: boolean;
    alt: boolean;
    meta: boolean;
    key?: string;
    task?: ShortcutTask;
    constructor(data?: string | KeyboardEvent);
    get shortcutKey(): string | undefined;
    private createByShortcutKey;
    private createByKeyboardEvent;
    bind(task: ShortcutTask): void;
    /**
     * Checks if the shortcut is a combination key
     */
    isCombination(): boolean;
    /**
     * A shortcut is considered valid only in the following scenarios:
     *
     * 1. When the non-functional key is not empty, it could be a combination shortcut or a single key shortcut.
     * 2. When the non-functional key is empty, it is valid if only one functional key is pressed, treating it as a single key shortcut scenario.
     */
    isValid(): boolean;
}
