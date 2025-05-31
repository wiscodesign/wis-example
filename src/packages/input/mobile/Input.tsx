import type { InputProps } from "../input";

import styles from "./Input.module.scss";

function Input(props: InputProps) {
  return <input className={styles.input} {...props} />
}

Input.displayName = "Input";

export default Input;
