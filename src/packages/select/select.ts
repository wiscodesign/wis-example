export interface Option {
  label: string;
  value: string;
}

export interface SelectProps<D extends Option = Option> {
  name?: string;
  placeholder?: string;
  data?: D[];
}
