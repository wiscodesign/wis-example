import type { ReactNode } from "react";

export interface FormRef {
  submit: () => void;
}
export interface FormProps<T> {
  children: ReactNode;

  onSubmit?: (values: T) => void;
}

export interface ItemProps {
  label: string;

  name: string;

  placeholder?: string;

  children: ReactNode;

  onChange?: () => void;
}
