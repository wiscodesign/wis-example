import type { ReactNode } from 'react';

export interface ModalRef {
  show: () => void;
  hide: () => void;
}

export interface ModalProps {
  title: string;
  width?: number;
  height?: number;
  children: ReactNode;
  onOpen?: (open: boolean) => void;
}
