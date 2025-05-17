import { useRef, useImperativeHandle, forwardRef, type Ref } from 'react';

import { matchElement } from '../../../utils/matchElement';
import type { FormProps, FormRef } from '../form';

const Form = forwardRef(function Form(
  { children, onSubmit = () => {} }: FormProps,
  ref: Ref<FormRef>,
) {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    elements: { Item: item },
  } = matchElement(children, ['Item']);

  useImperativeHandle(ref, () => {
    return {
      submit() {
        if (!formRef.current) {
          return false;
        }

        const formData: Record<string, string> = {};
        const data = new FormData(formRef.current);
        // biome-ignore lint/complexity/noForEach: <explanation>
        data.forEach((value, key) => {
          formData[key] = value as string;
        });

        onSubmit(formData);
      },
    };
  });

  return <form ref={formRef}>{item}</form>;
});

Form.displayName = 'Form';

export default Form;
