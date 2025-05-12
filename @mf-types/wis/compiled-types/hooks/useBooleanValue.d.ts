interface Option {
    value?: boolean;
    defaultValue?: boolean;
    onChange?: (value: boolean) => void;
}
export default function useBooleanValue({ value, defaultValue, onChange, }: Option): [
    undefined | boolean,
    (value: boolean, emitChange?: boolean) => void
];
export {};
