import { useImperativeHandle, useState, forwardRef } from 'react';
import type { Ref } from 'react';
import { Dialog } from 'radix-ui';
import { CloseSmallIcon } from '@wisdesign/lsicon';

import type { ModalProps, ModalRef } from '../modal';

import styles from './Modal.module.scss';

function Modal(
  { title, children, onOpen = () => {} }: ModalProps,
  ref: Ref<ModalRef>,
) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      show() {
        setOpen(true);
      },
      hide() {
        setOpen(false);
      },
    };
  });

  function handleOpenChange(value: boolean) {
    setOpen(value);
    onOpen(value);
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.header}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <Dialog.Close className={styles.close}>
              <CloseSmallIcon />
            </Dialog.Close>
          </div>
          <div className={styles.container}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default forwardRef(Modal);
