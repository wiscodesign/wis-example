import type { ToggleTipProps } from "./toggleTip";
export default function useToggleTip({ open, defaultOpen, onOpen, }: ToggleTipProps): {
    open: boolean | undefined;
    setOpen: (value: boolean, emitChange?: boolean) => void;
    triggerRef: import("react").RefObject<HTMLButtonElement>;
    popperRef: import("react").RefObject<HTMLDivElement>;
    onTriggerKeyDown: (event: import("react").KeyboardEvent) => void;
    onTriggerClick: () => void;
    onFocusEnded: () => void;
};
