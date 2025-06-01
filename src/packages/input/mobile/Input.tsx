import type { InputProps } from '../input';

import styles from './Input.module.scss';

function Input({ name, placeholder = "Please input..." }: InputProps) {
  return (
    <input
      className={styles.input}
      id={name}
      name={name}
      placeholder={placeholder}
    />
  );
}

Input.displayName = 'Input';

export default Input;
