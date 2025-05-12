declare const MountElementContext: import("react").Context<HTMLElement | null>;
export declare function useSetMountElement(): {
    ref: import("react").RefObject<HTMLElement>;
    mountElement: HTMLElement | null;
};
export declare function useGetMountElement(): HTMLElement;
export default MountElementContext;
