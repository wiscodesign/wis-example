import { useImperativeHandle, useRef } from "react";
import { Modal, type ModalRef } from "example/modal"

import type { RightProps } from "../page"

function Right({ title, children, ref }: RightProps) {
  const modalRef = useRef<ModalRef>(null);

  useImperativeHandle(ref, () => {
    return {
      show() {
        modalRef.current?.open();
      },
      hide() {
        modalRef.current?.close();
      },
    }
  })

  return (
    <Modal ref={modalRef} title={title} cancel={false} confirm={false}>
      {children}
    </Modal>
  )
}

Right.displayName = "Right";

export default Right;
