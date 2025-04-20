import type { ReactNode } from "react";
interface ShortcutProps {
    mapper: (displayName: string) => string | undefined;
    children: ReactNode;
}
declare function Shortcut({ mapper, children, }: ShortcutProps): import("react/jsx-runtime").JSX.Element;
export default Shortcut;
