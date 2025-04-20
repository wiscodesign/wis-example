import type { KeyboardEvent } from "react";
import type { ShortcutTask } from "./ShortcutMeta";
import { ShortcutMeta } from "./ShortcutMeta";
type ShortcutReturn = [
    (event: KeyboardEvent) => void,
    (shortcutKey?: string, task?: ShortcutTask) => ShortcutMeta | undefined
];
/**
 * Custom hook to manage keyboard shortcuts.
 *
 * @example
 * const [onKeydown, onShortcut] = useShortcut();
 *
 * onShortcut('Control+S', () => {
 *   console.log('Shortcut Control+S triggered');
 * });
 */
export default function useShortcut(): ShortcutReturn;
export {};
