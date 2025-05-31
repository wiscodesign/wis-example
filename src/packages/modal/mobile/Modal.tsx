import { useImperativeHandle, useState, forwardRef, cloneElement } from 'react';
import type { Ref } from 'react';
import { Dialog, VisuallyHidden } from 'radix-ui';
import { CloseSmallIcon } from '@wisdesign/lsicon';
import { matchElement } from 'wis/core';
import { Button } from 'example/button';

import type { ModalProps, ModalRef } from '../modal';

import styles from './Modal.module.scss';

function Modal(
  { title, children, onOpen = () => {} }: ModalProps,
  ref: Ref<ModalRef>,
) {
  const [open, setOpen] = useState(false);
  const {
    elements: { Actions: actions },
    unmatched,
  } = matchElement(children, [{ type: 'Actions', maxCount: 1 }]);

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
        <Dialog.Content className={styles.modal}>
          <VisuallyHidden.Root>
            <Dialog.Description>{title}</Dialog.Description>
          </VisuallyHidden.Root>
          <div className={styles.header}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <Dialog.Close className={styles.close} asChild>
              <Button icon={<CloseSmallIcon />} size="xs" variant="ghost" />
            </Dialog.Close>
          </div>
          <div className={styles.content}>{unmatched}</div>
          {actions && (
            <div className={styles.footer}>
              {actions ? cloneElement(actions[0], { size: 'sm' }) : null}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.displayName = 'Modal';

export default forwardRef(Modal);
