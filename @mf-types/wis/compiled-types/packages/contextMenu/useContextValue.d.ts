type Value = string | string[] | undefined;
export default function useContextValue({ name, value, defaultValue, }: {
    name: string;
    value: Value;
    defaultValue: Value;
}): [Value, (value: Value) => void];
export {};
