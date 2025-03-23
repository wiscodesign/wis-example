import { useImperativeHandle, useState } from "react";
import * as RDXDialog from "@radix-ui/react-dialog";
import { CloseSmallIcon } from "@wisdesign/lsicon";
import { Button } from "example/button";

import type { ModalProps } from "../modal";

import styles from "./Modal.module.scss";

function Modal({
  title,
  children,
  cancel = true,
  confirm = true,
  closeable = true,
  onCancel = () => {},
  onConfirm = () => {},
  ref,
}: ModalProps) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open() {
        setOpen(true);
      },
      close() {
        setOpen(false);
      },
    };
  });

  function handleCancel() {
    setOpen(false);
    onCancel();
  }

  function handleConfirm() {
    onConfirm();
  }

  function handleOpenChange(changedOpen: boolean) {
    setOpen(changedOpen)
  }

  const isShowFooter = cancel || confirm;

  return (
    <RDXDialog.Root open={open} onOpenChange={handleOpenChange}>
      <RDXDialog.Portal>
        <RDXDialog.Overlay className={styles.overlay} />
        <RDXDialog.Content className={styles.content}>
          <div className={styles.header}>
            <div className={styles.info}>
              <RDXDialog.Title className={styles.title}>
                {title}
              </RDXDialog.Title>
              <RDXDialog.Description className={styles.description}>
                {title}
              </RDXDialog.Description>
            </div>
            {closeable && (
              <RDXDialog.Close className={styles.close}>
                <CloseSmallIcon />
              </RDXDialog.Close>
            )}
          </div>
          <div className={styles.container}>{children}</div>
          {isShowFooter && (
            <div className={styles.footer}>
              {cancel && <Button text="Cancel" onClick={handleCancel} />}
              {confirm && <Button text="Confirm" variant="primary" onClick={handleConfirm} />}
            </div>
          )}
        </RDXDialog.Content>
      </RDXDialog.Portal>
    </RDXDialog.Root>
  );
}

export default Modal;
