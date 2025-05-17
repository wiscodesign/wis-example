import type { ButtonProps } from '../button';

import styles from './Button.module.scss';

function Button({
  text,
  icon,
  size = "md",
  variant = 'secondary',
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      data-variant={variant}
      data-size={size}
      type="button"
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}

Button.displayName = "Button"

export default Button;
