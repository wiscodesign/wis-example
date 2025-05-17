import type { ReactNode, MouseEvent } from 'react';

export interface ButtonProps {
  text: string;

  size?: 'sm' | 'md';

  icon?: ReactNode;

  variant?: 'primary' | 'secondary';

  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
