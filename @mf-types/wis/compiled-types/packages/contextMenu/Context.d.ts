type Value = string | string[] | undefined;
interface ContextValue {
    contextValue: {
        [key: string]: Value;
    };
    setContextValue: (value: {
        [key: string]: Value;
    }) => void;
    contextType?: "DropdownButton";
}
declare const _default: import("react").Context<ContextValue>;
export default _default;
