import { forwardRef, useRef, useImperativeHandle, type Ref } from 'react';
import { matchElement } from 'wis/core';

import type { FormProps, FormRef } from '../form';

const Form = forwardRef(function Form<T extends object>({ children, onSubmit = () => {} }: FormProps<T>, ref: Ref<FormRef>) {
  const { elements: { FormItem: items } } = matchElement(children, ["FormItem"]);
  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      submit() {
        if (!formRef.current) {
          return false;
        }

        const formData: T = {} as T;
        const data = new FormData(formRef.current);

        onSubmit(formData);
      },
    };
  });

  return (
    <form ref={formRef}>
      {items}
    </form>
  );
});

export default Form;