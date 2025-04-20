import type { ContextMenuRadioGroupProps } from "./contextMenu";
interface RadioGroupProps extends ContextMenuRadioGroupProps {
    mapper: (displayName: string) => string | undefined;
}
declare function RadioGroup({ mapper, name, value, defaultValue, children, onChange, }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export default RadioGroup;
