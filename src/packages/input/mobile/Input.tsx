import type { InputProps } from "../input";

import styles from "./Input.module.scss";

function Input({ placeholder }: InputProps) {
  return <input className={styles.input} placeholder={placeholder} />
}

Input.displayName = "Input";

export default Input;
