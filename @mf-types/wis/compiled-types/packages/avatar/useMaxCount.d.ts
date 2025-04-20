import type { RefObject } from "react";
export default function useMaxCount<T extends HTMLElement>(): {
    ref: RefObject<T>;
    max: number;
};
