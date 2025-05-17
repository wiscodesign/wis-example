import type { ReactNode, Ref } from "react";

export interface FormRef {
  submit: () => void;
}
export interface FormProps {
  ref?: Ref<FormRef>;

  onSubmit?: (value: Record<string, string>) => void;

  children: ReactNode;
}

export interface ItemProps {
  label: string;

  name: string;

  placeholder?: string;

  node?: "input" | "textarea";
}
