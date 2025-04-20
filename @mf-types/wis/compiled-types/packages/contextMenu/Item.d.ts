import type { ContextMenuItemProps } from "./contextMenu";
interface ItemProps extends ContextMenuItemProps {
    mapper: (displayName: string) => string | undefined;
}
declare function Item({ mapper, disabled, role, checked, shortcutKey, children, onCheckedChange, }: ItemProps): import("react/jsx-runtime").JSX.Element | null;
export default Item;
