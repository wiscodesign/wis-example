import type { ReactElement, ReactNode } from "react";
interface TypeDefinition {
    type: string;
    maxCount?: number;
}
type UserTypeDefinition = string | TypeDefinition;
export declare function getSymbioteElement(node: ReactNode): string | number | boolean | ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined;
/**
 * Checks if the component matches the specified type. If the component node is a symbiotic component,
 * it continues to check if the symbiotic component matches the specified type.
 */
export declare function isElement(node: ReactNode, type: string): boolean;
interface MathElementResult {
    /**
     * Stores nodes that are not in the matching type list
     */
    unmatched: ReactNode[];
    /**
     * Stores nodes that match the matching type list
     */
    matched: ReactElement<any>[];
    /**
     * Stores the list of matched nodes categorized by type
     */
    elements: {
        [type: string]: ReactElement<any>[];
    };
}
export declare function matchElement(children: ReactNode, typeDefinitions?: UserTypeDefinition[], strict?: boolean): MathElementResult;
export {};
