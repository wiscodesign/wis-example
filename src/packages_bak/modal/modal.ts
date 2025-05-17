import type { ReactNode, Ref } from "react";

export interface ModalRef {
  open: () => void;
  close: () => void;
}

export interface ModalProps {
  title: string;

  closeable?: boolean;

  confirm?: boolean;

  cancel?: boolean;

  ref?: Ref<ModalRef>;

  onCancel?: () => void;

  onConfirm?: () => void;

  children: ReactNode;
}
