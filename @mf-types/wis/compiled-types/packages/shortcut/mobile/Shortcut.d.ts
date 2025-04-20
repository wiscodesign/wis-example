/**
 * Global shortcut keys are not supported on the mobile terminal.
 */
import type { ShortcutProps } from "../shortcut";
declare function Shortcut(_props: ShortcutProps): null;
declare namespace Shortcut {
    var displayName: string;
}
export default Shortcut;
