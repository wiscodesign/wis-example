import type { HTMLAttributes } from "react";
export interface PageProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The title text will show in the page header.
     */
    title: string;
    /**
     * The description text will show in the page header.
     */
    description?: string;
}
