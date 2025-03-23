import type { MouseEvent } from "react";

export interface ButtonProps {
  text: string;

  variant?: "primary" | "secondary";

  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
