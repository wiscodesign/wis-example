import type { HTMLAttributes } from "react";
export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
export interface ResponsiveSize {
    base?: Size;
    sm?: Size;
    md?: Size;
    lg?: Size;
    xl?: Size;
    xxl?: Size;
}
export declare function isSize(size: unknown): size is Size;
export declare function isResponsiveSize(size: unknown): size is ResponsiveSize;
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    gutter?: boolean;
    responsive?: boolean;
}
export interface ColProps extends HTMLAttributes<HTMLDivElement> {
    size?: Size | ResponsiveSize;
    offset?: Size | ResponsiveSize;
}
