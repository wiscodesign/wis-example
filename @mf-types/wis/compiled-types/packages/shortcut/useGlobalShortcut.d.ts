import type { ShortcutTask } from "./ShortcutMeta";
import { ShortcutMeta } from "./ShortcutMeta";
type useGlobalShortcutReturn = [
    ShortcutMeta | undefined,
    (callback: ShortcutTask) => ShortcutMeta | undefined
];
/**
 * Register global shortcut function
 *
 * @example
 *
 * const onGlobalShortcut = useGlobalShortcut('Control+T')
 * const shortcut = onGlobalShortcut((shortcut) => {
 *  console.log('trigger Control+T shortcut', shortcut)
 * })
 */
export default function useGlobalShortcut(shortcutKey?: string, readonly?: boolean): useGlobalShortcutReturn;
export {};
