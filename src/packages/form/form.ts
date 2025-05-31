import type { ReactNode } from 'react';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type PlainObject = Record<string, any>;

export interface FormRef {
  submit: () => void;
}

export interface FormProps<D extends PlainObject = PlainObject> {
  children: ReactNode;
  onSubmit?: (values: D) => void;
}

export interface ItemProps {
  label: string;
  name: string;
  children: ReactNode;
}
