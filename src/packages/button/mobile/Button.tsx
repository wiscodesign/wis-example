import type { ButtonProps } from "../button";

import styles from "./Button.module.scss";

function Button({ text, onClick = () => {} }: ButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
