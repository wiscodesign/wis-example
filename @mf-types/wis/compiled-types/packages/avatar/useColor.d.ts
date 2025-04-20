type Color = "auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green";
export declare function useColor(color: Color): "auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green";
export declare function useGroupColor(color: Color): (index: number) => Color;
export {};
