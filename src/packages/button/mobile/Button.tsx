import { forwardRef } from 'react';
import type { Ref } from 'react';

import type { ButtonProps } from '../button';

import styles from './Button.module.scss';

const Button = forwardRef(function Button(
  {
    text,
    icon,
    size = 'md',
    variant = 'secondary',
    onClick = () => {},
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={styles.button}
      data-variant={variant}
      data-size={size}
      data-icon={icon && !text}
      type="button"
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
