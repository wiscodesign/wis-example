import type { MouseEvent } from "react";

export interface ButtonProps {
  text: string;

  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
