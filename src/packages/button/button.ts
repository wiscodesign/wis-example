import type { ReactNode, MouseEvent } from 'react';

export interface ButtonProps {
  text?: string;

  size?: 'xs' | 'sm' | 'md';

  icon?: ReactNode;

  variant?: 'primary' | 'secondary' | 'ghost';

  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
