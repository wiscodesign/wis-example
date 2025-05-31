import {
  forwardRef,
  useRef,
  useImperativeHandle,
  type PropsWithChildren,
  type Ref,
  type ReactElement,
} from 'react';
import { matchElement } from 'wis/core';
import type { FormProps, FormRef, PlainObject } from '../form';

import styles from './Form.module.scss';

const Form = forwardRef(function Form<D extends PlainObject = PlainObject>(
  { children, onSubmit = () => {} }: FormProps<D>,
  ref: Ref<FormRef>,
) {
  const {
    elements: { FormItem: items },
  } = matchElement(children, ['FormItem']);
  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => ({
    submit() {
      if (formRef.current === null) {
        return;
      }

      const formData = new FormData(formRef.current);
      const data = {} as D;

      // @ts-ignore
      for (const [key, value] of formData.entries()) {
        data[key as keyof D] = value;
      }

      onSubmit(data);
    },
  }));

  return (
    <form ref={formRef} className={styles.form}>
      {items}
    </form>
  );
}) as FormComponent;

type FormComponent = {
  <D extends PlainObject = PlainObject>(
    props: PropsWithChildren<FormProps<D>> & { ref?: Ref<FormRef> },
  ): ReactElement;
  displayName?: string;
};

Form.displayName = 'Form';

export default Form;
