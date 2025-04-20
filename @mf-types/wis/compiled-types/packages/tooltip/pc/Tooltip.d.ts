import type { ReactNode } from "react";
import type { TooltipProps } from "../tooltip";
declare function Tooltip({ className, side, align, text, open, defaultOpen, children, onOpen, ...rest }: TooltipProps): import("react/jsx-runtime").JSX.Element;
declare namespace Tooltip {
    var displayName: string;
    var getSymbiote: (children: ReactNode) => string | number | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | import("react").ReactPortal;
}
export default Tooltip;
