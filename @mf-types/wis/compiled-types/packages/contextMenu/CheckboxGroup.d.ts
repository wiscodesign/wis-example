import type { ContextMenuCheckboxGroupProps } from "./contextMenu";
interface CheckboxGroupProps extends ContextMenuCheckboxGroupProps {
    mapper: (displayName: string) => string | undefined;
}
declare function CheckboxGroup({ mapper, name, value, defaultValue, children, onChange, }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export default CheckboxGroup;
