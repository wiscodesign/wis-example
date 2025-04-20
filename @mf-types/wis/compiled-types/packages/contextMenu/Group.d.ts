import type { ContextMenuGroupProps } from "./contextMenu";
interface GroupProps extends ContextMenuGroupProps {
    mapper: (displayName: string) => string | undefined;
}
declare function Group({ mapper, onSelect, children }: GroupProps): import("react/jsx-runtime").JSX.Element;
export default Group;
