import type { ReactNode } from "react";
import type { ContextMenuProps } from "../contextMenu";
declare function ContextMenu({ children, disabled }: ContextMenuProps): import("react/jsx-runtime").JSX.Element;
declare namespace ContextMenu {
    var displayName: string;
    var getSymbiote: (children: ReactNode) => ReactNode;
}
export default ContextMenu;
