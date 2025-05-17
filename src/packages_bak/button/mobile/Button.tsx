import type { ButtonProps } from "../button";

import styles from "./Button.module.scss";

function Button({ text, variant = "secondary", onClick = () => {} }: ButtonProps) {
  return (
    <button className={styles.button} data-variant={variant} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
