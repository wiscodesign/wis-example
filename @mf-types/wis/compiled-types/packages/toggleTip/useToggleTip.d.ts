import type { ToggleTipProps } from "./toggleTip";
export default function useToggleTip({ onOpen }: ToggleTipProps): {
    open: boolean;
    change: (value: boolean) => void;
    triggerRef: import("react").RefObject<HTMLButtonElement>;
    popperRef: import("react").RefObject<HTMLDivElement>;
    onTriggerKeyDown: (event: import("react").KeyboardEvent) => void;
    onTriggerClick: () => void;
    onPopperLeave: () => void;
};
